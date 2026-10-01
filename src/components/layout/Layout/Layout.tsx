import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Layout.module.css';

/** App shell: fixed header, routed page content, footer. */
export function Layout() {
  return (
    <>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>
      <Header />
      <main id="main" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
