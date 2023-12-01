import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// layouts
import MainLayout from 'src/layouts/main';
import SimpleLayout from 'src/layouts/simple';
import CompactLayout from 'src/layouts/compact';
// components
import { SplashScreen } from 'src/components/loading-screen';
import DashboardLayout from 'src/layouts/dashboard/layout';
import SystemsSelection from 'src/screens/components/SystemsSelection/SystemsSelection';
// route
import { paths } from '../paths';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
const Page500 = lazy(() => import('src/pages/500'));
const Page403 = lazy(() => import('src/pages/403'));
const Page404 = lazy(() => import('src/pages/404'));
const FaqsPage = lazy(() => import('src/pages/faqs'));
const AboutPage = lazy(() => import('src/pages/about-us'));
const ContactPage = lazy(() => import('src/pages/contact-us'));
const PricingPage = lazy(() => import('src/pages/pricing'));
const PaymentPage = lazy(() => import('src/pages/payment'));
const ComingSoonPage = lazy(() => import('src/pages/coming-soon'));
const MaintenancePage = lazy(() => import('src/pages/maintenance'));
// PRODUCT
const ProductListPage = lazy(() => import('src/pages/product/list'));
const ProductDetailsPage = lazy(() => import('src/pages/product/details'));
const ProductCheckoutPage = lazy(() => import('src/pages/product/checkout'));
// Reports
const AgingViewMain = lazy(() => import('src/screens/reports/aging'));
const InvoiceForCustomersViewMain = lazy(() => import('src/screens/reports/invoiceForCustomers'));
const GmReportView = lazy(() => import('src/screens/reports/gmReportView'));
const GmReasonReportView = lazy(() => import('src/screens/reports/GmReasonReportView'));
// BLOG
const PostListPage = lazy(() => import('src/pages/post/list'));
const PostDetailsPage = lazy(() => import('src/pages/post/details'));




const InvoiceListViewByDepartment = lazy(() => import ("src/screens/invoice/departments/InvoiceListViewByDepartment"))
// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    element: (
      <MainLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      { path: 'about-us', element: <AboutPage /> },
      { path: 'contact-us', element: <ContactPage /> },
      { path: 'faqs', element: <FaqsPage /> },
      {
        path: 'product',
        children: [
          { element: <ProductListPage />, index: true },
          { path: 'list', element: <ProductListPage /> },
          { path: ':id', element: <ProductDetailsPage /> },
          { path: 'checkout', element: <ProductCheckoutPage /> },
        ],
      },
      {
        path: 'post',
        children: [
          { element: <PostListPage />, index: true },
          { path: 'list', element: <PostListPage /> },
          { path: ':title', element: <PostDetailsPage /> },
        ],
      },
    ],
  },
  {
    element: (
      <SimpleLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </SimpleLayout>
    ),
    children: [
      { path: 'pricing', element: <PricingPage /> },
      { path: 'payment', element: <PaymentPage /> },
    ],
  },
  {
    element: (
      <CompactLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </CompactLayout>
    ),
    children: [
      { path: 'coming-soon', element: <ComingSoonPage /> },
      { path: 'maintenance', element: <MaintenancePage /> },
      { path: '500', element: <Page500 /> },
      { path: '404', element: <Page404 /> },
      { path: '403', element: <Page403 /> },
    ],
  },
  
  {
    element: (
      <DashboardLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { 
        path: paths.departments.operation.list, 
        element: <InvoiceListViewByDepartment id={-1} /> 
      },
      { 
        path: paths.departments.sales.list,
        element: <InvoiceListViewByDepartment id={2} />  
      },
      { 
        path: paths.departments.installation.list,
        element: <InvoiceListViewByDepartment id={1} />  
      },
      { 
        path: paths.departments.collection.list,
        element: <InvoiceListViewByDepartment id={3} />  
      },
      { 
        path: paths.departments.tenderAndConract.list,
        element: <InvoiceListViewByDepartment id={4} />  
      },
      { 
        path: paths.departments.sales.confirm_invoices,
        element: <InvoiceListViewByDepartment salesStatus={0}  />  
      },
      { 
        path: paths.departments.installation.assign_engineer,
        element: <InvoiceListViewByDepartment salesStatus={1}  />  
      },
      { 
        path: paths.departments.collection.assign_collector,
        element: <InvoiceListViewByDepartment salesStatus={3}  />  
      },
      { 
        path: paths.reports.aging,
        element: <AgingViewMain />  
      },
      { 
        path: paths.reports.invoiceForCustomers,
        element: <InvoiceForCustomersViewMain />  
      },
      { 
        path: paths.reports.gmReport,
        element: <GmReportView />  
      },
      { 
        path: paths.reports.gmReasoneReport,
        element: <GmReasonReportView />  
      },
      
    ]
  },
  {
    element: (
      <CompactLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </CompactLayout>
    ),
    children: [
      { path: 'systems', element: <SystemsSelection /> },
    ]
  },
];
