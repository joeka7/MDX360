import type { IconType } from 'react-icons';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Container, Icon } from '@/components/ui';
import { getProductsBySlugs, productCategories } from '@/data/products';
import { company, footerNav, footerProductSlugs, routes, socialLinks } from '@/data/site';
import type { NavLink, SocialPlatform } from '@/types/site';
import { Logo } from '../Logo/Logo';
import styles from './Footer.module.css';

interface FooterLinkGroup {
  title: string;
  links: NavLink[];
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
      { label: 'View All Devices', to: routes.products },
    ],
  },
  { title: 'Company', links: footerNav },
];

const socialIcons: Record<SocialPlatform, IconType> = {
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  x: FaXTwitter,
};

/** Profiles without a configured URL are left out rather than linked to a placeholder. */
const activeSocialLinks = socialLinks.filter((social) => social.href);

/** Global site footer: brand block and link columns, then copyright and certifications. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo tone="inverse" className={styles.logo} />
            <p className={styles.tagline}>{company.tagline}</p>

            <ul className={styles.promises}>
              {company.promises.map((promise) => (
                <li key={promise.label} className={styles.promise}>
                  <Icon name={promise.icon} size={18} className={styles.promiseIcon} />
                  {promise.label}
                </li>
              ))}
            </ul>

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

          <nav className={styles.columns} aria-label="Footer">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h2 className={styles.groupTitle}>{group.title}</h2>
                <ul className={styles.links}>
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className={styles.groupTitle}>Get in Touch</h2>
              <address className={styles.links}>
                <a href={`mailto:${company.email}`} className={styles.link}>
                  {company.email}
                </a>
                <a href={company.phoneHref} className={styles.link}>
                  {company.phone}
                </a>
                <span>{company.address}</span>
                <span className={styles.hours}>{company.supportHours}</span>
              </address>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>
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
      </Container>
    </footer>
  );
}
