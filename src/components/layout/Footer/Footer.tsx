import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Pill } from '@/components/ui';
import { getProductsBySlugs } from '@/data/products';
import { company, footerNav, footerProductSlugs, legalNav, routes, socialLinks } from '@/data/site';
import { Logo } from '../Logo/Logo';
import styles from './Footer.module.css';

const footerProducts = getProductsBySlugs(footerProductSlugs);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo tone="dark" />
            <p className={styles.tagline}>{company.tagline}</p>
            <div className={styles.certs}>
              {company.certifications.map((cert) => (
                <Pill key={cert} tone="outlineDark" dot="static">
                  {cert}
                </Pill>
              ))}
            </div>
          </div>

          <FooterColumn title="Navigation">
            <ul className={styles.links}>
              {footerNav.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Product Lines">
            <ul className={styles.links}>
              {footerProducts.map((product) => (
                <li key={product.slug}>
                  <Link to={routes.product(product.slug)} className={styles.link}>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Corporate Hub">
            <address className={styles.contact}>
              <div className={styles.contactRow}>
                <Icon name="location_on" size={18} className={styles.contactIcon} />
                <span>{company.address}</span>
              </div>
              <div className={styles.contactRow}>
                <Icon name="call" size={18} className={styles.contactIcon} />
                <a href={company.phoneHref} className={styles.link}>
                  {company.phone}
                </a>
              </div>
              <div className={styles.contactRow}>
                <Icon name="mail" size={18} className={styles.contactIcon} />
                <a href={`mailto:${company.email}`} className={styles.link}>
                  {company.email}
                </a>
              </div>
              <div className={styles.promises}>
                {company.promises.map((promise) => (
                  <div key={promise.label} className={styles.promise}>
                    <Icon name={promise.icon} size={18} className={styles.contactIcon} />
                    <span>{promise.label}</span>
                  </div>
                ))}
              </div>
            </address>
          </FooterColumn>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <nav className={styles.legal} aria-label="Legal">
            {legalNav.map((link) => (
              <Link key={link.to} to={link.to} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className={styles.social}>
            {socialLinks.map((social) => (
              <a key={social.icon} href={social.href} className={styles.socialLink} aria-label={social.label}>
                <Icon name={social.icon} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className={styles.columnTitle}>{title}</h3>
      {children}
    </div>
  );
}
