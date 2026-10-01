import { Button, Eyebrow, Section } from '@/components/ui';
import { routes } from '@/data/site';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <>
      <title>Page Not Found | MDX360</title>
      <Section tone="lowest" spacing="lg" className={styles.page}>
        <div className={styles.content}>
          <Eyebrow dot>Error 404</Eyebrow>
          <h1 className={styles.title}>We couldn&apos;t find that page.</h1>
          <p className={styles.lead}>
            The page you are looking for may have moved or no longer exists. Explore our clinical systems or get in touch
            with our team.
          </p>
          <div className={styles.actions}>
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
