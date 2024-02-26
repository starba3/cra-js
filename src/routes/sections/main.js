import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
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
const IndexPage = lazy(() => import('src/screens/Index'));
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

// Invoices
const AcknowledgmentViewMain = lazy(() => import('src/screens/acknowledgment/all/acknowledgmentView'));
const InvoiceAcceptenceViewMain = lazy(() => import('src/screens/invoiceAcceptence/invoiceAcceptenceView'));
const NeedToActionViewMain = lazy(() => import('src/screens/invoice/needToAction/needToActionView'));
const RejectedBySalesViewMain = lazy(() => import('src/screens/invoice/rejectedBySales/rejectedBySalesView'));
const InvoiceEditPage = lazy(() => import('src/screens/invoice/edit/InvoiceEditPage'));
const InvoiceListViewByDepartment = lazy(() => import ("src/screens/invoice/departments/InvoiceListViewByDepartment"))
// Reports
const AgingViewMain = lazy(() => import('src/screens/reports/aging'));
const InvoiceForCustomersViewMain = lazy(() => import('src/screens/reports/invoiceForCustomers'));
const GmReportView = lazy(() => import('src/screens/reports/gmReportView'));
const GmReasonReportView = lazy(() => import('src/screens/reports/GmReasonReportView'));
const InvoiceByUsersViewMain = lazy(() => import('src/screens/reports/invoiceByUsers'));
const ForDeliveryDataViewMain = lazy(() => import('src/screens/reports/forDeliveryData'))
// Products
const ProductListViewMain = lazy(() => import('src/screens/products/all/ProductListView'));
const ProductCreateViewMain = lazy(() => import('src/screens/products/create/ProductCreateView'));
// Users
const UserListViewMain = lazy(() => import('src/screens/user/all/UserListView'));
// Customers
const CustomerListViewMain = lazy(() => import('src/screens/customer/all/CustomerListView'));
const CustomerCreateViewMain = lazy(() => import('src/screens/customer/create/CustomerCreateView'));
// BLOG
const PostListPage = lazy(() => import('src/pages/post/list'));
const PostDetailsPage = lazy(() => import('src/pages/post/details'));





// ----------------------------------------------------------------------




export const mainRoutes = [
  { path: 'cra-js', element: <Navigate to="/dashboard" /> },
  { path: '', element: <Navigate to="/dashboard" /> },
  {
    path: 'dashboard',
    element: (
      <MainLayout>
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      { Element: <IndexPage />, index: true},
      { path: 'about-us', element: <AboutPage /> },
      { path: 'contact-us', element: <ContactPage /> },
      { path: 'faqs', element: <FaqsPage /> },
      // {
      //   path: 'product',
      //   children: [
      //     { element: <ProductListPage />, index: true },
      //     { path: 'list', element: <ProductListPage /> },
      //     { path: ':id', element: <ProductDetailsPage /> },
      //     { path: 'checkout', element: <ProductCheckoutPage /> },
      //   ],
      // },
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
      // Invoice Edit
      { path: paths.invoices.editUrl,  element: <InvoiceEditPage /> },
      { path: paths.departments.operation.list,  element: <InvoiceListViewByDepartment id={-1} /> },
      { path: paths.departments.sales.list, element: <InvoiceListViewByDepartment id={2} />  },
      { path: paths.departments.installation.list, element: <InvoiceListViewByDepartment id={1} />  },
      { path: paths.departments.collection.list, element: <InvoiceListViewByDepartment id={3} />  },
      { path: paths.departments.tenderAndConract.list, element: <InvoiceListViewByDepartment id={4} />  },
      { path: paths.departments.sales.confirm_invoices, element: <InvoiceListViewByDepartment salesStatus={0}  />  },
      { path: paths.departments.installation.assign_engineer, element: <InvoiceListViewByDepartment salesStatus={1}  />  },
      { path: paths.departments.collection.assign_collector, element: <InvoiceListViewByDepartment salesStatus={3}  />  },
      // { path: paths.reports.aging, element: <AgingViewMain />  },
      // { path: paths.reports.invoiceForCustomers, element: <InvoiceForCustomersViewMain />  },
      // { path: paths.reports.gmReport, element: <GmReportView />  },
      // { path: paths.reports.gmReasoneReport, element: <GmReasonReportView />  },
      // { path: paths.reports.deliveryDate, element: <ForDeliveryDataViewMain />  },
      // { path: paths.customers.list, element: <CustomerListViewMain />  },
      // { path: paths.customers.create, element: <CustomerCreateViewMain />  },
      // { path: paths.customers.editUrl, element: <CustomerCreateViewMain />  },
      // { path: paths.products.list, element: <ProductListViewMain />  },
      // { path: paths.products.create, element: <ProductCreateViewMain />  },
      // { path: paths.products.editUrl, element: <ProductCreateViewMain />  },
      { path: paths.users.list, element: <UserListViewMain />  },
      { path: paths.reports.invoiceByUsers, element: <InvoiceByUsersViewMain />  },
      { path: paths.needToAction.list, element: <NeedToActionViewMain />  },
      { path: paths.rejectBySales.list, element: <RejectedBySalesViewMain />  },
      { path: paths.invoices.needToAction, element: <NeedToActionViewMain />  },
      { path: paths.invoices.rejectedBySales, element: <RejectedBySalesViewMain />  },
      { path: paths.invoiceAcceptence.list, element: <InvoiceAcceptenceViewMain />  },
      // { path: paths.reports.acknowledgment, element: <AcknowledgmentViewMain title ="acknowledgment"/>  },
      // { path: paths.acknowledgment.acknowleded, element: <AcknowledgmentViewMain title ="acknowleded"/>  },
      // { path: paths.acknowledgment.notAcknowleded, element: <AcknowledgmentViewMain title ="notAcknowledged"/>  },
      
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