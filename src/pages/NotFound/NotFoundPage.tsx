import { Button, Eyebrow, Section } from '@/components/ui';
import { routes } from '@/data/site';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <>
      <title>Page Not Found | MDX360</title>
      <Section tone="lowest" spacing="lg" className={styles.hero}>
        <div className={styles.heroText}>
          <Eyebrow dot>Error 404</Eyebrow>
          <h1 className={styles.heroTitle}>We couldn&apos;t find that page.</h1>
          <p className={styles.heroLead}>
            The page you are looking for may have moved or no longer exists. Explore our clinical systems or get in touch
            with our team.
          </p>
          <div className={styles.heroActions}>
            <Button to={routes.products} trailingIcon="arrow_forward">
              Explore Devices
            </Button>
            <Button to={routes.contact} variant="soft">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
