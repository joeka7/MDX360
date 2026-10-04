import { useEffect, useRef, useState, useSyncExternalStore, type KeyboardEvent, type ReactNode } from 'react';
import { Link, NavLink, useMatch } from 'react-router-dom';
import { ButtonWithIcon, Icon } from '@/components/ui';
import { company, homeNav, mainNav, routes } from '@/data/site';
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

interface MenuLinkProps {
  to: string;
  className: string;
  activeClassName: string;
  onClick?: () => void;
  children: ReactNode;
}

/** Nav link marked as current on its route. In-page anchors (`/#…`) are never marked current. */
function MenuLink({ to, className, activeClassName, onClick, children }: MenuLinkProps) {
  if (to.includes('#')) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <NavLink
      to={to}
      end={to === routes.home}
      className={({ isActive }) => cx(className, isActive && activeClassName)}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}

/**
 * Global site header: floating glass bar on desktop, full-screen menu on mobile.
 * On the home page it renders as a plain white bar with an outlined Enquire button.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const isHome = useMatch(routes.home) !== null;
  const navLinks = isHome ? homeNav : mainNav;
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
    <header className={cx(styles.header, isHome && styles.light, scrolled && styles.scrolled)}>
      <div className={styles.bar}>
        <Logo tone={isHome ? 'ink' : 'inverse'} className={styles.logo} />

        <nav className={styles.nav} aria-label="Main">
          {navLinks.map((link) => (
            <MenuLink key={link.to} to={link.to} className={styles.navLink} activeClassName={styles.navLinkActive}>
              {link.label}
            </MenuLink>
          ))}
        </nav>

        <div className={styles.actions}>
          {isHome ? (
            <Link to={headerCta.to} className={cx(styles.cta, styles.outlineCta)}>
              Enquire
            </Link>
          ) : (
            <ButtonWithIcon to={headerCta.to} size="sm" className={styles.cta}>
              {headerCta.label}
            </ButtonWithIcon>
          )}
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
          <Logo tone="inverse" className={styles.logo} onClick={closeMenu} />
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
            {navLinks.map((link, index) => (
              <li key={link.to} className={styles.mobileItem}>
                <MenuLink
                  to={link.to}
                  className={styles.mobileLink}
                  activeClassName={styles.mobileLinkActive}
                  onClick={closeMenu}
                >
                  <span className={styles.mobileIndex} aria-hidden="true">
                    {indexLabel(index)}
                  </span>
                  <span className={styles.mobileLabel}>{link.label}</span>
                  <Icon name="arrow_forward" size={20} className={styles.mobileArrow} />
                </MenuLink>
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.mobileFooter}>
          <ButtonWithIcon to={headerCta.to} size="md" fullWidth onClick={closeMenu}>
            {headerCta.label}
          </ButtonWithIcon>
          <p className={styles.mobileContact}>
            <span className={styles.mobileContactLabel}>Corporate Contact</span>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
      </div>
    </header>
  );
}
