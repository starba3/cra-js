import { lazy, useMemo, crea } from 'react';
// routes
import { paths } from 'src/routes/paths';
// locales
import { useLocales } from 'src/locales';
import { getUserRole } from 'src/helpers/roleHelper'
import { UserRoles } from 'src/helpers/constantsHelper';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

import { AdminMenu } from 'src/screens/components/layout/menus/financialManager'

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

export function useNavData() {
  const { t } = useLocales()
  
  const role = getUserRole();
  
  // console.log(AdminMenu)
  // Initialize an array to hold items for the Reports section

  const data = useMemo( 
    () =>  {
        const items =[{
                subheader: t('dashboard'),
                items: [
                // DASHBOARD
                {
                    title: t('app'),
                    path: paths.dashboard.root,
                    icon: ICONS.dashboard,
                }
            ]
        }]
      

        if(role === UserRoles.operation) {
            items[0].items.push(
                {
                    title: t('invoices'),
                    path: paths.dashboard.invoice.root,
                    icon: ICONS.invoice,
                    children: [
                        { title: t('list'), path: paths.dashboard.invoice.list },
                        { title: t('create'), path: paths.dashboard.invoice.new },
                        { title: t('needToAction'), path: paths.dashboard.invoice.needToAction },
                        { title: t('rejectedBySales'), path: paths.dashboard.invoice.rejectedBySales },
                    ],
                },
                // Customer
                {
                    title: t('customers'),
                    path: paths.dashboard.customers.root,
                    icon: ICONS.user,
                    children: [
                        { title: t('list'), path: paths.dashboard.customers.list },
                        { title: t('create'), path: paths.dashboard.customers.create },
                    ],
                },
                // Product
                {
                    title: t('products'),
                    path: paths.dashboard.products.root,
                    icon: ICONS.user,
                    children: [
                        { title: t('list'), path: paths.dashboard.products.list },
                        { title: t('create'), path: paths.dashboard.products.create }
                    ],
                },
            // Reports
            {
                title: t('reports'),
                path: paths.dashboard.reports.root,
                icon: ICONS.user,
                children: [
                    { title: t('deliveryDate'), path: paths.dashboard.reports.deliveryDate },
                    { title: t('acknowledgment'), path: paths.dashboard.reports.acknowledgment }
                ],
            },
            ) 
        }

        if(role === UserRoles.admin) {
            items[0].items.push(
                {
                    title: t('invoices'),
                    path: paths.dashboard.invoice.root,
                    icon: ICONS.invoice,
                    // children: [
                    //     { title: t('list'), path: paths.dashboard.invoice.root },
                    //     { title: t('create'), path: paths.dashboard.invoice.new },
                    // ],
                },
                // Customer
                {
                    title: t('customers'),
                    path: paths.dashboard.customers.root,
                    icon: ICONS.user,
                    // children: [
                    //     { title: t('list'), path: paths.dashboard.customers.list },
                    //     { title: t('create'), path: paths.customers.create }
                    // ],
                },
                // Product
                {
                    title: t('products'),
                    path: paths.dashboard.products.list,
                    icon: ICONS.product,
                    // children: [
                    //     { title: t('list'), path: paths.dashboard.products.list },
                    //     { title: t('create'), path: paths.dashboard.products.create }
                    // ],
                },
                // Departments
                {
                    title: t('departments'),
                    path: paths.departments.operation.list,
                    icon: ICONS.user,
                    children: [
                        { 
                            title: t('operation'),
                            path: paths.departments.operation.list,
                            children: [
                                { title: t('list'), path: paths.departments.operation.list },
                            ]
                        },
                        { 
                            title: t('sales'), 
                            path: paths.departments.sales.list,
                            children: [
                            { title: t('confirm_invoices'), path: paths.departments.sales.confirm_invoices },
                            { title: t('list'), path: paths.departments.sales.list }, 
                            ]
                        },
                        { 
                            title: t('installation'), 
                            path: paths.departments.installation.list,
                            children: [
                                { title: t('assign_engineer'), path: paths.departments.installation.assign_engineer },
                                { title: t('list'), path: paths.departments.installation.list }, 
                            ]
                        },
                        { 
                            title: t('collection'), 
                            path: paths.departments.collection.list,
                            children: [
                                { title: t('assign_collector'), path: paths.departments.collection.assign_collector },
                                { title: t('list'), path: paths.departments.collection.list }, 
                            ]
                        },
                        { 
                            title: t('tender_and_contract'), 
                            path: paths.departments.tenderAndConract.list,
                            children: [
                                { title: t('list'), path: paths.departments.tenderAndConract.list }, 
                            ]
                        },
                    ],
                },
                // Reports
                {
                    title: t('reports'),
                    path: paths.dashboard.reports.root,
                    icon: ICONS.user,
                    children: [
                        { title: t('agingReport'), path: paths.dashboard.reports.aging },
                        { title: t('invoicesForCustomer'), path: paths.dashboard.reports.invoiceForCustomers },
                        { title: t('gmReport'), path: paths.dashboard.reports.GmReport },
                        { title: t('gmReasonReport'), path: paths.dashboard.reports.gmReasonReport },
                        { title: t('invoiceByUser'), path: paths.dashboard.reports.invoiceByUsers },
                    ], 
                },
                // USER
                {
                    title: t('user'),
                    path: paths.dashboard.users.list,
                    icon: ICONS.user,
                    // children: [
                    //     { title: t('list'), path: paths.users.list },
                    // ],
                },
            ) 
        }

        if(role === UserRoles.sales) {
            items[0].items.push(
                { title: t('invoices'), path: paths.dashboard.invoice.root, icon: ICONS.file },
                { title: t('needToAction'), path: paths.invoices.needToAction, icon: ICONS.file },
                { title: t('invoiceAcceptence'), path: paths.invoiceAcceptence.list, icon: ICONS.file },     
            ) 
        }

        if(role === UserRoles.headOfEngineer) {
            items[0].items.push(
                // Invoice
                {
                    title: t('invoices'),
                    path: paths.dashboard.invoice.root,
                    icon: ICONS.invoice,
                    children: [
                        { title: t('list'), path: paths.dashboard.invoice.list },
                        { title: t('needToAction'), path: paths.dashboard.invoice.needToAction },
                        { title: t('needToAssign'), path: paths.dashboard.invoice.needToAssign },
                    ],
                },
                // Reports
                {
                    title: t('reports'),
                    path: paths.dashboard.reports.root,
                    icon: ICONS.user,
                    children: [
                        { title: t('performance'), path: paths.dashboard.reports.performance },
                        { title: t('invoiceByEngineer'), path: paths.dashboard.reports.invoiceByEngineer }
                    ],
                },
                // 
                { title: t('engineersList'), path: paths.dashboard.engineers.list, icon: ICONS.user },
            ) 
        }

        if(role === UserRoles.engineer) {
            items[0].items.push(
                // Invoice
                {
                    title: t('invoices'),
                    path: paths.dashboard.invoice.list,
                    icon: ICONS.invoice,
                },
                {
                    title: t('needToAction'),
                    path: paths.dashboard.invoice.needToAction,
                    icon: ICONS.invoice,
                },
                
            ) 
        }

        if(role === UserRoles.headOfCollector) {
            items[0].items.push(
                // Invoice
                {
                    title: t('invoices'),
                    path: paths.dashboard.invoice.root,
                    icon: ICONS.invoice,
                    children: [
                        { title: t('list'), path: paths.dashboard.invoice.list },
                        { title: t('needToAction'), path: paths.dashboard.invoice.needToAction },
                        { title: t('needToAssign'), path: paths.dashboard.invoice.needToAssign },
                    ],
                },
                // Reports
                {
                    title: t('reports'),
                    path: paths.dashboard.reports.root,
                    icon: ICONS.user,
                    children: [
                        { title: t('performance'), path: paths.dashboard.reports.collectorPerformance },
                        { title: t('invoiceByCollector'), path: paths.dashboard.reports.invoiceByCollector }
                    ],
                },
                // 
                { title: t('collectorsList'), path: paths.dashboard.collectors.list, icon: ICONS.user },
            ) 
        }

        if(role === UserRoles.collector) {
            items[0].items.push(
                // Invoice
                {
                    title: t('invoices'),
                    path: paths.dashboard.invoice.root,
                    icon: ICONS.invoice,
                    children: [
                        { title: t('list'), path: paths.dashboard.invoice.list },
                        { title: t('needToAction'), path: paths.dashboard.invoice.needToAction },
                    ],
                }

            ) 
        }

        if(role === UserRoles.headOfSales) {
            items[0].items.push(
                // Invoice
                {
                    title: t('invoices'),
                    path: paths.dashboard.invoice.root,
                    icon: ICONS.invoice,
                    children: [
                        { title: t('list'), path: paths.dashboard.invoice.list },
                        { title: t('needToAction'), path: paths.dashboard.invoice.needToAction },
                    ],
                },
                // Reports
                {
                    title: t('reports'),
                    path: paths.dashboard.reports.root,
                    icon: ICONS.user,
                    children: [
                        { title: t('performance'), path: paths.dashboard.reports.salesPerformance },
                        { title: t('invoiceBySalesTaker'), path: paths.dashboard.reports.invoiceBySalesTaker }
                    ],
                },
                // 
                { title: t('salesTakersList'), path: paths.dashboard.salesTakers.list, icon: ICONS.user },
            ) 
        }

        return items
    }
    ,
    [t, role]
  );

  return data;
}
