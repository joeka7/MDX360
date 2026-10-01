import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Icon } from '@/components/ui';
import { mainNav, routes } from '@/data/site';
import { cx } from '@/utils/cx';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) => cx(styles.navLink, isActive && styles.active);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <div className={styles.brand}>
          <Logo />
          <span className={styles.systemTag}>
            <span className={styles.systemDot} aria-hidden="true" />
            Clinical Systems
          </span>
        </div>

        <nav className={styles.nav} aria-label="Main">
          {mainNav.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === routes.home} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button to={routes.contact} size="sm" className={styles.enquire}>
            Enquire Now
          </Button>
          <span className={styles.avatar} aria-hidden="true">
            <Icon name="person" size={18} />
          </span>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className={cx(styles.mobileNav, menuOpen && styles.mobileNavOpen)} aria-label="Mobile">
        {mainNav.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === routes.home}
            className={({ isActive }) => cx(styles.mobileLink, isActive && styles.mobileLinkActive)}
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}
        <Button to={routes.contact} fullWidth onClick={closeMenu}>
          Enquire Now
        </Button>
      </nav>
    </header>
  );
}
