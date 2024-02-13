import PropTypes from 'prop-types'
import { paths } from 'src/routes/paths';
import { useLocales } from 'src/locales';

export default function AdminMenu({ iconsList }) {
    const { t } = useLocales()

    return [
        // MANAGEMENT
        // ----------------------------------------------------------------------
        {
            subheader: t('dashboard'),
            items: [
            // DASHBOARD
            {
                title: t('app'),
                path: paths.dashboard.root,
                icon: iconsList.dashboard,
            },
            // INVOICE
            {
                title: t('invoices'),
                path: paths.dashboard.invoice.root,
                icon: iconsList.invoice,
                children: [
                { title: t('list'), path: paths.dashboard.invoice.root },
                { title: t('create'), path: paths.dashboard.invoice.new },
                { title: t('needToAction'), path: paths.dashboard.invoice.new },
                { title: t('rejectedBySales'), path: paths.dashboard.invoice.new },

                ],
            },
            // Customer
            {
                title: t('customers'),
                path: paths.customers.list,
                icon: iconsList.user,
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
                icon: iconsList.user,
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
                icon: iconsList.user,
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
                icon: iconsList.user,
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
                icon: iconsList.user,
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
}

AdminMenu.propTypes = {
    iconsList: PropTypes.array.isRequired
}