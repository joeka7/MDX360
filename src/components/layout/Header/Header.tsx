import { useEffect, useRef, useState, useSyncExternalStore, type KeyboardEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon } from '@/components/ui';
import { company, mainNav, routes } from '@/data/site';
import { cx } from '@/utils/cx';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.css';

const headerCta = { label: 'Enquire Now', to: routes.contact } as const;

/** Must match the desktop breakpoint in Header.module.css. */
const DESKTOP_QUERY = '(min-width: 768px)';
const FOCUSABLE = 'a[href], button:not([disabled])';
const SCROLL_THRESHOLD = 8;

function subscribeToScroll(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true });
  return () => window.removeEventListener('scroll', onChange);
}

/** True once the page has scrolled past the top; the glass bar firms up. */
function useScrolled() {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > SCROLL_THRESHOLD,
    () => false,
  );
}

const indexLabel = (index: number) => String(index + 1).padStart(2, '0');

/** Global site header: floating glass bar on desktop, full-screen menu on mobile. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const overlayRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setMenuOpen(false);

  // While the menu is open: lock page scroll, move focus into the dialog, and close if the
  // viewport grows to desktop. On close, hand focus back to the toggle.
  useEffect(() => {
    if (!menuOpen) return;

    const root = document.documentElement;
    const overlay = overlayRef.current;
    const toggle = toggleRef.current;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    closeRef.current?.focus();

    const media = window.matchMedia(DESKTOP_QUERY);
    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    media.addEventListener('change', handleMediaChange);

    return () => {
      root.style.overflow = previousOverflow;
      media.removeEventListener('change', handleMediaChange);
      if (overlay?.contains(document.activeElement)) toggle?.focus();
    };
  }, [menuOpen]);

  // Escape closes; Tab cycles within the dialog.
  const handleOverlayKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      closeMenu();
      return;
    }
    if (event.key !== 'Tab') return;

    const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <header className={cx(styles.header, scrolled && styles.scrolled)}>
      <div className={styles.bar}>
        <Logo tone="inverse" className={styles.brand} />

        <nav className={styles.nav} aria-label="Main">
          {mainNav.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === routes.home}
              className={({ isActive }) => cx(styles.navLink, isActive && styles.navLinkActive)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button
            to={headerCta.to}
            size="sm"
            variant="accentOutline"
            trailingIcon="arrow_forward"
            className={styles.cta}
          >
            {headerCta.label}
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className={cx(styles.menuButton, styles.menuToggle)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className={styles.menuButtonLabel}>Menu</span>
            <span className={styles.menuGlyph} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={overlayRef}
        className={cx(styles.overlay, menuOpen && styles.overlayOpen)}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!menuOpen}
        onKeyDown={handleOverlayKeyDown}
      >
        <div className={styles.overlayBar}>
          <Logo tone="inverse" className={styles.brand} onClick={closeMenu} />
          <button
            ref={closeRef}
            type="button"
            className={styles.menuButton}
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <span className={styles.menuButtonLabel}>Close</span>
            <Icon name="close" size={20} />
          </button>
        </div>

        <nav className={styles.mobileNav} aria-label="Mobile">
          <ol className={styles.mobileList}>
            {mainNav.map((link, index) => (
              <li key={link.to} className={styles.mobileItem}>
                <NavLink
                  to={link.to}
                  end={link.to === routes.home}
                  className={({ isActive }) => cx(styles.mobileLink, isActive && styles.mobileLinkActive)}
                  onClick={closeMenu}
                >
                  <span className={styles.mobileIndex} aria-hidden="true">
                    {indexLabel(index)}
                  </span>
                  <span className={styles.mobileLabel}>{link.label}</span>
                  <Icon name="arrow_forward" size={20} className={styles.mobileArrow} />
                </NavLink>
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.mobileFooter}>
          <Button to={headerCta.to} fullWidth trailingIcon="arrow_forward" onClick={closeMenu}>
            {headerCta.label}
          </Button>
          <p className={styles.mobileContact}>
            <span className={styles.mobileContactLabel}>Corporate Contact</span>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
      </div>
    </header>
  );
}
