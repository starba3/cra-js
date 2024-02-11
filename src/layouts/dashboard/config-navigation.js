import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// locales
import { useLocales } from 'src/locales';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

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
  
  const role = useMemo(() => {
    const roleItem = localStorage.getItem("role");
    return roleItem ? JSON.parse(roleItem).value : "OM";
  }, []);
  
  // Initialize an array to hold items for the Reports section

  const data = useMemo(
    () =>  {
      const items =[
        // MANAGEMENT
        // ----------------------------------------------------------------------
        {
          subheader: t('dashboard'),
          items: [
            // DASHBOARD
            {
              title: t('app'),
              path: paths.dashboard.root,
              icon: ICONS.dashboard,
            },
            // INVOICE
            {
              title: t('invoices'),
              path: paths.dashboard.invoice.root,
              icon: ICONS.invoice,
              children: [
                { title: t('list'), path: paths.dashboard.invoice.root },
                // {
                //   title: t('details'),
                //   path: paths.dashboard.invoice.demo.details,
                // },
                { title: t('create'), path: paths.dashboard.invoice.new },
                // { title: t('edit'), path: paths.dashboard.invoice.demo.edit },
              ],
            },
            // Customer
            {
              title: t('customers'),
              path: paths.customers.list,
              icon: ICONS.user,
              children: [
                { 
                  title: t('list'),
                  path: paths.customers.list,
  
                },
                { 
                  title: t('create'),
                  path: paths.customers.create,
  
                },
              ],
            },
            // USER
            {
              title: t('user'),
              path: paths.users.list,
              icon: ICONS.user,
              children: [
                // { title: t('profile'), path: paths.dashboard.user.root },
                // { title: t('cards'), path: paths.dashboard.user.cards },
                { title: t('list'), path: paths.users.list },
                // { title: t('create'), path: paths.dashboard.user.new },
                // { title: t('edit'), path: paths.dashboard.user.demo.edit },
                // { title: t('account'), path: paths.dashboard.user.account },
              ],
            },
            // Product
            {
              title: t('products'),
              path: paths.products.list,
              icon: ICONS.user,
              children: [
                { 
                  title: t('list'),
                  path: paths.products.list,
  
                },
                { 
                  title: t('create'),
                  path: paths.products.create,
  
                },
              ],
            },
            // USER
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
              path: paths.reports.root,
              icon: ICONS.user,
              children: [
                { 
                  title: t('agingReport'),
                  path: paths.reports.aging,
  
                },
                { 
                  title: t('invoicesForCustomer'),
                  path: paths.reports.invoiceForCustomers,
  
                },
                { 
                  title: t('gmReport'),
                  path: paths.reports.gmReport,
  
                },
                { 
                  title: t('gmReasonReport'),
                  path: paths.reports.gmReasoneReport,
  
                },
                { 
                  title: t('invoiceByUser'),
                  path: paths.reports.invoiceByUsers,
                },
  
              ],
              
            },
          ],
        },
      ]
      
      if (role === "OM") {
        items[0].items.push(
          
          { 
            title: t('acknowledgment'),
            icon: ICONS.file,
            path: paths.acknowledgment.list,
          },
          { 
            title: t('needToAction'),
            icon: ICONS.file,
            path: paths.needToAction.list,
          }, 
          { 
            title: t('rejectBySales'),
            icon: ICONS.file,
            path: paths.rejectBySales.list,
          }
        );

        items[0].items[6].children?.push({ 
          title: t('deliveryDate'),
          path: paths.reports.deliveryDate,
        },)
      }

      return items
    }
    ,
    [t, role]
  );

  return data;
}
