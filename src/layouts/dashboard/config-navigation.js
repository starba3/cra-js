import { lazy, useMemo, crea } from 'react';
// routes
import { paths } from 'src/routes/paths';
// locales
import { useLocales } from 'src/locales';
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
  
  const role = useMemo(() => {
    const roleItem = localStorage.getItem("role");
    return roleItem ? JSON.parse(roleItem).value : "operation";
  }, []);
  
  console.log(AdminMenu)
  // Initialize an array to hold items for the Reports section

  const data = useMemo( 
    () =>  {
      const items =[]
      if(role.toLowerCase() === 'operation') {
        items.push({
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
              { title: t('create'), path: paths.dashboard.invoice.new },
              { title: t('needToAction'), path: paths.invoices.needToAction },
              { title: t('rejectedBySales'), path: paths.invoices.rejectedBySales },
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
          // Reports
          {
              title: t('reports'),
              path: paths.reports.root,
              icon: ICONS.user,
              children: [
              { 
                  title: t('deliveryDate'),
                  path: paths.reports.deliveryDate,
              },
              { 
                  title: t('acknowledgment'),
                  path: paths.reports.acknowledgment,
              }
      
            ],
          },
        ],
      }) 
      }

      
      
      if (role.tpLowerCase === "OM") {
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
            title: t('rejectedBySales'),
            icon: ICONS.file,
            path: paths.rejectBySales.list,
          }
        );

        items[0].items[6].children?.push({ 
          title: t('deliveryDate'),
          path: paths.reports.deliveryDate,
        },)
      }

      if (role.toLowerCase() === "sales") {
        items[0].items.push(
          { 
            title: t('acknowleded'),
            icon: ICONS.file,
            path: paths.acknowledgment.acknowleded,
          },
          { 
            title: t('notAcknowledged'),
            icon: ICONS.file,
            path: paths.acknowledgment.notAcknowleded,
          },
          { 
            title: t('needToAction'),
            icon: ICONS.file,
            path: paths.needToAction.list,
          },
          { 
            title: t('invoiceAcceptence'),
            icon: ICONS.file,
            path: paths.invoiceAcceptence.list,
          }
        );
      }

      return items
    }
    ,
    [t, role]
  );

  return data;
}
