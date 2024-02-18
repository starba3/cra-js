// utils
import { paramCase } from 'src/utils/change-case';
import { _id, _postTitles } from 'src/_mock/assets';
import { Root } from 'yet-another-react-lightbox';

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

const MOCK_TITLE = _postTitles[2];

const ROOTS = {
  AUTH: '/auth',
  AUTH_DEMO: '/auth-demo',
  DASHBOARD: '/dashboard',
  STATUS: '/status',
  USER: '/user',
  REPORTS: '/reports',
  CUSTOMER: '/customer',
  PRODUCT: '/product',
  ACKNOWLEADGMENT: "/acknowledgment",
  INVOICEACCEPTENCE: "/invoiceAcceptence",
  DEPARTMENT: {
    main: '/department',
    operation: 'operation',
    sales: 'sales',
    installation: 'installation',
    collection: 'collection',
    tenderAndConract: 'tenderAndConract',
  },
  INVOICES: '/invoices',
};

// ----------------------------------------------------------------------

export const paths = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components',
  docs: 'https://docs.minimals.cc',
  changelog: 'https://docs.minimals.cc/changelog',
  zoneUI: 'https://mui.com/store/items/zone-landing-page/',
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  freeUI: 'https://mui.com/store/items/minimal-dashboard-free/',
  figma:
    'https://www.figma.com/file/hjxMnGUJCjY7pX8lQbS7kn/%5BPreview%5D-Minimal-Web.v5.4.0?type=design&node-id=0-1&mode=design&t=2fxnS70DuiTLGzND-0',
  product: {
    root: `/product`,
    checkout: `/product/checkout`,
    details: (id) => `/product/${id}`,
    demo: {
      details: `/product/${MOCK_ID}`,
    },
  },
  post: {
    root: `/post`,
    details: (title) => `/post/${paramCase(title)}`,
    demo: {
      details: `/post/${paramCase(MOCK_TITLE)}`,
    },
  },
  // AUTH
  auth: {
    amplify: {
      login: `${ROOTS.AUTH}/amplify/login`,
      verify: `${ROOTS.AUTH}/amplify/verify`,
      register: `${ROOTS.AUTH}/amplify/register`,
      newPassword: `${ROOTS.AUTH}/amplify/new-password`,
      forgotPassword: `${ROOTS.AUTH}/amplify/forgot-password`,
    },
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
    firebase: {
      login: `${ROOTS.AUTH}/firebase/login`,
      verify: `${ROOTS.AUTH}/firebase/verify`,
      register: `${ROOTS.AUTH}/firebase/register`,
      forgotPassword: `${ROOTS.AUTH}/firebase/forgot-password`,
    },
    auth0: {
      login: `${ROOTS.AUTH}/auth0/login`,
    },
  },
  authDemo: {
    classic: {
      login: `${ROOTS.AUTH_DEMO}/classic/login`,
      register: `${ROOTS.AUTH_DEMO}/classic/register`,
      forgotPassword: `${ROOTS.AUTH_DEMO}/classic/forgot-password`,
      newPassword: `${ROOTS.AUTH_DEMO}/classic/new-password`,
      verify: `${ROOTS.AUTH_DEMO}/classic/verify`,
    },
    modern: {
      login: `${ROOTS.AUTH_DEMO}/modern/login`,
      register: `${ROOTS.AUTH_DEMO}/modern/register`,
      forgotPassword: `${ROOTS.AUTH_DEMO}/modern/forgot-password`,
      newPassword: `${ROOTS.AUTH_DEMO}/modern/new-password`,
      verify: `${ROOTS.AUTH_DEMO}/modern/verify`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    mail: `${ROOTS.DASHBOARD}/mail`,
    chat: `${ROOTS.DASHBOARD}/chat`,
    blank: `${ROOTS.DASHBOARD}/blank`,
    kanban: `${ROOTS.DASHBOARD}/kanban`,
    calendar: `${ROOTS.DASHBOARD}/calendar`,
    fileManager: `${ROOTS.DASHBOARD}/file-manager`,
    permission: `${ROOTS.DASHBOARD}/permission`,
    general: {
      app: `${ROOTS.DASHBOARD}/app`,
      ecommerce: `${ROOTS.DASHBOARD}/ecommerce`,
      analytics: `${ROOTS.DASHBOARD}/analytics`,
      banking: `${ROOTS.DASHBOARD}/banking`,
      booking: `${ROOTS.DASHBOARD}/booking`,
      file: `${ROOTS.DASHBOARD}/file`,
    },
    user: {
      root: `${ROOTS.DASHBOARD}/user`,
      new: `${ROOTS.DASHBOARD}/user/new`,
      list: `${ROOTS.DASHBOARD}/user/list`,
      cards: `${ROOTS.DASHBOARD}/user/cards`,
      profile: `${ROOTS.DASHBOARD}/user/profile`,
      account: `${ROOTS.DASHBOARD}/user/account`,
      edit: (id) => `${ROOTS.DASHBOARD}/user/${id}/edit`,
      demo: {
        edit: `${ROOTS.DASHBOARD}/user/${MOCK_ID}/edit`,
      },
    },
    product: {
      root: `${ROOTS.DASHBOARD}/product`,
      new: `${ROOTS.DASHBOARD}/product/new`,
      details: (id) => `${ROOTS.DASHBOARD}/product/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/product/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/product/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/product/${MOCK_ID}/edit`,
      },
    },
    invoice: {
      root: `${ROOTS.DASHBOARD}/invoice`,
      new: `${ROOTS.DASHBOARD}/invoice/new`,
      details: (id) => `${ROOTS.DASHBOARD}/invoice/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/invoice/${id}/edit`,
      editOperation: (id) => `${ROOTS.DASHBOARD}/invoice/${id}/edit/operation`,
      editSales: (id) => `${ROOTS.DASHBOARD}/invoice/${id}/edit/operation`,
      editInstallation: (id) => `${ROOTS.DASHBOARD}/invoice/${id}/edit/operation`,
      editCollection: (id) => `${ROOTS.DASHBOARD}/invoice/${id}/edit/operation`,
      editTD: (id) => `${ROOTS.DASHBOARD}/invoice/${id}/edit/operation`,
      demo: {
        details: `${ROOTS.DASHBOARD}/invoice/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/invoice/${MOCK_ID}/edit`,
      },
      list: `${ROOTS.DASHBOARD}/invoice/list`,
      needToAction: `${ROOTS.DASHBOARD}/invoice/needToAction`,
      rejectedBySales: `${ROOTS.DASHBOARD}/invoice/rejectedBySales`,
      needToAssign: `${ROOTS.DASHBOARD}/invoice/needToAssign`,
      editUrl: `${ROOTS.DASHBOARD}/invoice/:id/edit`,
      // edit: (id) => `${ROOTS.DASHBOARD}/invoice/${id}/edit`,
    },
    customers: {
      root: `${ROOTS.DASHBOARD}/customer`,
      list: `${ROOTS.DASHBOARD}/customer/list`,
      create: `${ROOTS.DASHBOARD}/customer/create`,
      editUrl:`${ROOTS.DASHBOARD}/customer/:id/edit`,
      edit: (id) => `${ROOTS.DASHBOARD}/customer/${id}/edit`
    },
    products: {
      root: `${ROOTS.DASHBOARD}/product`,
      list: `${ROOTS.DASHBOARD}/product/list`,
      create: `${ROOTS.DASHBOARD}/product/create`,
      editUrl:`${ROOTS.DASHBOARD}/product/:id/edit`,
      edit: (id) => `${ROOTS.DASHBOARD}/product/${id}/edit`
    },
    reports: {
      root: `${ROOTS.DASHBOARD}/reports`,
      aging: `${ROOTS.DASHBOARD}/reports/aging`,
      gmReasonReport: `${ROOTS.DASHBOARD}/reports/gmReasonReport`,
      invoiceForCustomers:`${ROOTS.DASHBOARD}/reports/invoiceForCustomers`,
      acknowledgment: `${ROOTS.DASHBOARD}/reports/acknowledgment`,
      invoiceByUsers: `${ROOTS.DASHBOARD}/reports/invoiceByUsers`,
      GmReport:`${ROOTS.DASHBOARD}/reports/GmReport`,
      deliveryDate:`${ROOTS.DASHBOARD}/reports/deliveryDate`,
      performance:`${ROOTS.DASHBOARD}/reports/performance`,
      invoiceByEngineer:`${ROOTS.DASHBOARD}/reports/invoiceByEngineer`,
    },
    headEngineer: {
      root: `${ROOTS.DASHBOARD}/headEngineer`,
      aging: `${ROOTS.DASHBOARD}/reports/aging`,
      gmReasonReport: `${ROOTS.DASHBOARD}/reports/gmReasonReport`,
      invoiceForCustomers:`${ROOTS.DASHBOARD}/reports/invoiceForCustomers`,
      acknowledgment: `${ROOTS.DASHBOARD}/reports/acknowledgment`,
      invoiceByUsers: `${ROOTS.DASHBOARD}/reports/invoiceByUsers`,
      GmReport:`${ROOTS.DASHBOARD}/reports/GmReport`,
      deliveryDate:`${ROOTS.DASHBOARD}/reports/deliveryDate`,
    },

    engineers: {
      root: `${ROOTS.DASHBOARD}/engineers`,
      list: `${ROOTS.DASHBOARD}/engineers/list`,
      assignEngineer: `${ROOTS.DASHBOARD}/engineers/assignEngineer`,
      create: `${ROOTS.DASHBOARD}/engineers/create`,
      editUrl:`${ROOTS.DASHBOARD}/engineers/:id/edit`,
      edit: (id) => `${ROOTS.DASHBOARD}/engineers/${id}/edit`
    },
    post: {
      root: `${ROOTS.DASHBOARD}/post`,
      new: `${ROOTS.DASHBOARD}/post/new`,
      details: (title) => `${ROOTS.DASHBOARD}/post/${paramCase(title)}`,
      edit: (title) => `${ROOTS.DASHBOARD}/post/${paramCase(title)}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/post/${paramCase(MOCK_TITLE)}`,
        edit: `${ROOTS.DASHBOARD}/post/${paramCase(MOCK_TITLE)}/edit`,
      },
    },
    order: {
      root: `${ROOTS.DASHBOARD}/order`,
      details: (id) => `${ROOTS.DASHBOARD}/order/${id}`,
      demo: {
        details: `${ROOTS.DASHBOARD}/order/${MOCK_ID}`,
      },
    },
    job: {
      root: `${ROOTS.DASHBOARD}/job`,
      new: `${ROOTS.DASHBOARD}/job/new`,
      details: (id) => `${ROOTS.DASHBOARD}/job/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/job/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/job/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/job/${MOCK_ID}/edit`,
      },
    },
    tour: {
      root: `${ROOTS.DASHBOARD}/tour`,
      new: `${ROOTS.DASHBOARD}/tour/new`,
      details: (id) => `${ROOTS.DASHBOARD}/tour/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/tour/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/tour/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/tour/${MOCK_ID}/edit`,
      },
    },
  },
  // TEST 
  test: {
    root: '/test'
  },
  // STATUS 
  status: {
    root: ROOTS.STATUS,
    paid: `${ROOTS.STATUS}/paid`,
    complete: `${ROOTS.STATUS}/complete`,
    installation: `${ROOTS.STATUS}/installation`,
  },
  // DEPARTMENTS
  departments: {
    root: ROOTS.DEPARTMENT.main,
    operation: {
      root: ROOTS.DEPARTMENT.operation,
      list: `${ROOTS.DEPARTMENT.main}/${ROOTS.DEPARTMENT.operation}/list`,
    },
    sales: {
      root: ROOTS.DEPARTMENT.sales,
      list: `${ROOTS.DEPARTMENT.main}/${ROOTS.DEPARTMENT.sales}/list`,
      confirm_invoices: `${ROOTS.DEPARTMENT.main}/${ROOTS.DEPARTMENT.sales}/confirm_invoices`,
    },
    installation: {
      root: ROOTS.DEPARTMENT.installation,
      list: `${ROOTS.DEPARTMENT.main}/${ROOTS.DEPARTMENT.installation}/list`,
      assign_engineer: `${ROOTS.DEPARTMENT.main}/${ROOTS.DEPARTMENT.installation}/assign_engineer`,
    } ,
    collection: {
      root: ROOTS.DEPARTMENT.collection,
      list: `${ROOTS.DEPARTMENT.main}/${ROOTS.DEPARTMENT.collection}/list`,
      assign_collector: `${ROOTS.DEPARTMENT.main}/${ROOTS.DEPARTMENT.collection}/assign_collector`,
    } ,
    tenderAndConract: {
      root: ROOTS.DEPARTMENT.tenderAndConract,
      list: `${ROOTS.DEPARTMENT.main}/${ROOTS.DEPARTMENT.tenderAndConract}/list`,
    },
  },
  // INVOICES
  invoices: {
    list: `${ROOTS.INVOICES}/list`,
    needToAction: `${ROOTS.INVOICES}/needToAction`,
    rejectedBySales: `${ROOTS.INVOICES}/rejectedBySales`,
    editUrl: `${ROOTS.INVOICES}/:id/edit`,
    edit: (id) => `${ROOTS.INVOICES}/${id}/edit`,
  },
  // Reports
  reports: {
    root: ROOTS.REPORTS,
    aging: `${ROOTS.REPORTS}/aging`,
    gmReasoneReport: `${ROOTS.REPORTS}/gmReasonReport`,
    invoiceForCustomers: `${ROOTS.REPORTS}/invoiceForCustomers`,
    acknowledgment: `${ROOTS.REPORTS}/acknowledgment`,
    invoiceByUsers: `${ROOTS.REPORTS}/invoiceByUsers`,
    gmReport: `${ROOTS.REPORTS}/GmReport`,
    deliveryDate: `${ROOTS.REPORTS}/deliveryDate`,
  },
  // Customers
  customers: {
    root: ROOTS.CUSTOMER,
    list: `${ROOTS.CUSTOMER}/list`,
    create: `${ROOTS.CUSTOMER}/create`,
    editUrl:`${ROOTS.CUSTOMER}/:id/edit`,
    edit: (id) => `${ROOTS.CUSTOMER}/${id}/edit`
  },
  // Products
  products: {
    root: ROOTS.PRODUCT,
    list: `${ROOTS.PRODUCT}/list`,
    create: `${ROOTS.PRODUCT}/create`,
    editUrl:`${ROOTS.PRODUCT}/:id/edit`,
    edit: (id) => `${ROOTS.PRODUCT}/${id}/edit`
  },
  // Need To Action
  needToAction: {
    list: `/needToAction`
  },
  // Need To Action
  invoiceAcceptence: {
    list: `${ROOTS.INVOICEACCEPTENCE}/list`
  },
  // Reject By Sales To Action
  rejectBySales: {
    list: `/rejectBySales`
  },
  // acknowledgment
  acknowledgment: {
    list: `${ROOTS.ACKNOWLEADGMENT}/all`,
    acknowleded: `${ROOTS.ACKNOWLEADGMENT}/acknowleded`,
    notAcknowleded: `${ROOTS.ACKNOWLEADGMENT}/notAcknowleded`
  },
  // Users
  users: {
    root: ROOTS.USER,
    list: `${ROOTS.USER}/list`,
  },

};