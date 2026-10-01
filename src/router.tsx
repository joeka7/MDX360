import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { AboutPage } from '@/pages/About/AboutPage';
import { ContactPage } from '@/pages/Contact/ContactPage';
import { HomePage } from '@/pages/Home/HomePage';
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage';
import { ProductPage } from '@/pages/Product/ProductPage';
import { ProductsPage } from '@/pages/Products/ProductsPage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:slug', element: <ProductPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
