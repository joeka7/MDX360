import { useLayoutEffect, useRef } from 'react';
import type { IconType } from 'react-icons';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Icon } from '@/components/ui';
import { getProductsBySlugs, productCategories } from '@/data/products';
import { company, footerNav, footerProductSlugs, routes, socialLinks } from '@/data/site';
import type { NavLink, SocialPlatform } from '@/types/site';
import { cx } from '@/utils/cx';
import { Logo } from '../Logo/Logo';
import styles from './Footer.module.css';

interface FooterLink extends NavLink {
  /** Highlighted as the column's call to action. */
  accent?: boolean;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
  /** Spans both columns on phones, with its links wrapping in one row. */
  wide?: boolean;
}

const linkGroups: FooterLinkGroup[] = [
  {
    title: 'Treatment Areas',
    links: productCategories.map((category) => ({
      label: category.label,
      to: routes.productCategory(category.id),
    })),
  },
  {
    title: 'Devices',
    links: [
      ...getProductsBySlugs(footerProductSlugs).map((product) => ({
        label: product.name,
        to: routes.product(product.slug),
      })),
      { label: 'View All Devices', to: routes.products, accent: true },
    ],
  },
  { title: 'Company', links: footerNav, wide: true },
];

const socialIcons: Record<SocialPlatform, IconType> = {
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  x: FaXTwitter,
};

/** Profiles without a configured URL are left out rather than linked to a placeholder. */
const activeSocialLinks = socialLinks.filter((social) => social.href);

/** Phrases of the tagline set in bold; the wording itself is never changed. */
const taglineEmphasis = ['advanced medical technologies', 'non-invasive aesthetic devices'];
const taglineParts = company.tagline.split(new RegExp(`(${taglineEmphasis.join('|')})`));

/** Decorative closing wordmark: "MDX" and "360" take different tones. */
const wordmark = ['M', 'D', 'X', '3', '6', '0'];

function ArrowIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" focusable="false">
      <path d="M1 6h15M11 1l5 5-5 5" />
    </svg>
  );
}

/**
 * Global site footer: brand statement beside oversized contact links, the two promises,
 * logo and link columns, and certifications, closed by a cropped MDX360 wordmark.
 */
export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const year = new Date().getFullYear();

  // One-shot reveal. The hidden state only applies once `data-motion="ready"` is set here, so the
  // footer stays visible without JS, without IntersectionObserver, or with reduced motion.
  useLayoutEffect(() => {
    const footer = footerRef.current;
    if (!footer || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    footer.dataset.motion = 'ready';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.dataset.revealed = 'true';
          observer.disconnect();
        }
      },
      // Trigger on the footer's top edge rather than a visibility ratio: the footer is taller than
      // most viewports, so a ratio would leave an empty band on screen before the reveal starts.
      { rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(footer);

    return () => {
      observer.disconnect();
      delete footer.dataset.motion;
    };
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.statement}>
          <div className={styles.brand}>
            <p className={styles.tagline}>
              {taglineParts.map((part, index) =>
                taglineEmphasis.includes(part) ? <strong key={index}>{part}</strong> : part,
              )}
            </p>

            {activeSocialLinks.length > 0 && (
              <ul className={styles.social} aria-label={`${company.name} on social media`}>
                {activeSocialLinks.map((social) => {
                  const SocialIcon = socialIcons[social.platform];
                  return (
                    <li key={social.platform}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={`${company.name} on ${social.label}`}
                      >
                        <SocialIcon aria-hidden="true" focusable="false" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <address className={styles.contact}>
            <h2 className={styles.contactLabel}>Get in Touch</h2>
            <a href={`mailto:${company.email}`} className={styles.bigLink}>
              {company.email}
              <span className={styles.bigLinkIcon} aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
            <a href={company.phoneHref} className={styles.bigLink}>
              {company.phone}
              <span className={styles.bigLinkIcon} aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
            <div className={styles.contactMeta}>
              <span>{company.address}</span>
              <span>{company.supportHours}</span>
            </div>
          </address>
        </div>

        <ul className={styles.promises}>
          {company.promises.map((promise) => (
            <li key={promise.label} className={styles.promise}>
              <Icon name={promise.icon} size={18} className={styles.promiseIcon} />
              {promise.label}
            </li>
          ))}
        </ul>

        <nav className={styles.nav} aria-label="Footer">
          <Logo tone="inverse" className={styles.logo} />
          {linkGroups.map((group) => (
            <div key={group.title} className={cx(group.wide && styles.groupWide)}>
              <h2 className={styles.groupTitle}>{group.title}</h2>
              <ul className={styles.links}>
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className={cx(styles.link, link.accent && styles.linkAccent)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <ul className={styles.certs} aria-label="Certifications">
            {company.certifications.map((cert) => (
              <li key={cert} className={styles.cert}>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">
        {wordmark.map((char, index) => (
          <span key={index} className={index < 3 ? styles.markA : styles.markB}>
            {char}
          </span>
        ))}
      </div>
    </footer>
  );
}
