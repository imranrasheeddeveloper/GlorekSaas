export default [

  {
    path: '/userLevel',
    name: 'roles',
    component: () => import('@/views/table/bs-table/userLevel.vue'),
    meta: {
      pageTitle: 'User Levels',
      breadcrumb: [
        {
          text: 'Table',
        },
        {
          text: 'User roles',
          active: true,
        },
      ],
    },
  },
  {
    path: '/create/userLevel',
    name: 'create-userLevel',
    component: () => import('@/views/table/bs-table/userLevel/createUserLevel.vue'),
    meta: {
      pageTitle: 'User Levels',
      breadcrumb: [
        {
          text: 'Create',
        },
        {
          text: 'User Level',
          active: true,
        },
      ],
    },
  },
  {
    path: '/edit/userLevel/:id',
    name: 'edit-userLevel',
    component: () => import('@/views/table/bs-table/userLevel/editUserLevel.vue'),
    meta: {
      pageTitle: 'User Levels',
      breadcrumb: [
        {
          text: 'Edit',
        },
        {
          text: 'User Level',
          active: true,
        },
      ],
    },
  },
  {
    path: '/save_purchase',
    name: 'save-purchase',
    component: () => import('@/views/table/bs-table/purchasingCenter/createPurchase.vue'),
    meta: {
      pageTitle: 'Purchasing',
      breadcrumb: [
        {
          text: 'Purchases',
        },
        {
          text: 'create',
          active: true,
        },
      ],
    },
  },
  {
    path: '/purchase_list',
    name: 'purchase-list',
    component: () => import('@/views/table/bs-table/purchasingCenter/purchaseTable.vue'),
    meta: {
      pageTitle: 'Purchasing',
      breadcrumb: [
        {
          text: 'Purchases',
        },
        {
          text: 'List',
          active: true,
        },
      ],
    },
  },
  {
    path: '/edit/purchase/:id',
    name: 'edit-purchase',
    component: () => import('@/views/table/bs-table/purchasingCenter/purchaseEdit.vue'),
    meta: {
      pageTitle: 'Purchasing',
      breadcrumb: [
        {
          text: 'Edit',
        },
        {
          text: 'Purchase',
          active: true,
        },
      ],
    },
  },
  {
    path: '/employee/items',
    name: 'employee-items',
    component: () => import('@/views/table/bs-table/ResourceCenter/employeeItemsTable.vue'),
    meta: {
      pageTitle: 'Resource Center',
      breadcrumb: [
        {
          text: 'Employees',
        },
        {
          text: 'Items',
          active: true,
        },
      ],
    },
  },
  {
    path: '/add/employee/items',
    name: 'add-emp-items',
    component: () => import('@/views/table/bs-table/ResourceCenter/addEmployeeItems.vue'),
    meta: {
      pageTitle: 'Resource Center',
      breadcrumb: [
        {
          text: 'Employees',
        },
        {
          text: 'Item',
          active: true,
        },
      ],
    },
  },
  {
    path: '/edit/item/:id/:resourceType',
    name: 'resource-item-edit',
    component: () => import('@/views/table/bs-table/ResourceCenter/editResourceItem.vue'),
    meta: {
      pageTitle: 'Resource Center',
      breadcrumb: [
        {
          text: 'Edit',
        },
        {
          text: 'Item',
          active: true,
        },
      ],
    },
  },
  {
    path: '/project/items',
    name: 'project-items',
    component: () => import('@/views/table/bs-table/ResourceCenter/projectItemsTable.vue'),
    meta: {
      pageTitle: 'Resource Center',
      breadcrumb: [
        {
          text: 'Project',
        },
        {
          text: 'Items',
          active: true,
        },
      ],
    },
  },
  {
    path: '/add/project/items',
    name: 'add-project-items',
    component: () => import('@/views/table/bs-table/ResourceCenter/addProjectItems.vue'),
    meta: {
      pageTitle: 'Resource Center',
      breadcrumb: [
        {
          text: 'Projects',
        },
        {
          text: 'Item',
          active: true,
        },
      ],
    },
  },
  {
    path: '/accommodation/items',
    name: 'accommodation-items',
    component: () => import('@/views/table/bs-table/ResourceCenter/accommodationItemsTable.vue'),
    meta: {
      pageTitle: 'Resource Center',
      breadcrumb: [
        {
          text: 'Accommodation',
        },
        {
          text: 'Items',
          active: true,
        },
      ],
    },
  },
  {
    path: '/add/accommodation/items',
    name: 'add-accommodation-items',
    component: () => import('@/views/table/bs-table/ResourceCenter/addAccommodationItems.vue'),
    meta: {
      pageTitle: 'Resource Center',
      breadcrumb: [
        {
          text: 'Accommodation',
        },
        {
          text: 'Item',
          active: true,
        },
      ],
    },
  },
  {
    path: '/allocated_resources',
    name: 'allocated-resources',
    component: () => import('@/views/table/bs-table/ResourceCenter/allocatedResourceTable.vue'),
    meta: {
      pageTitle: 'Resource Center',
      breadcrumb: [
        {
          text: 'Allocated',
        },
        {
          text: 'Resources',
          active: true,
        },
      ],
    },
  },
  {
    path: '/allocate_resource',
    name: 'allocate-resource',
    component: () => import('@/views/table/bs-table/ResourceCenter/allocateResource.vue'),
    meta: {
      pageTitle: 'Resource Center',
      breadcrumb: [
        {
          text: 'Allocate',
        },
        {
          text: 'Resource',
          active: true,
        },
      ],
    },
  },

  {
    path: '/edit/allocated_resource/:id',
    name: 'allocated-resource-edit',
    component: () => import('@/views/table/bs-table/ResourceCenter/allocatedResourceEdit.vue'),
    meta: {
      pageTitle: 'Resource Center',
      breadcrumb: [
        {
          text: 'Edit',
        },
        {
          text: 'Resource',
          active: true,
        },
      ],
    },
  },
  {
    path: '/employee',
    name: 'Employee-sheet',
    component: () => import('@/views/table/bs-table/employeeTable.vue'),
    meta: {
      pageTitle: 'Employees',
      breadcrumb: [
        {
          text: 'Table',
        },
        {
          text: 'Employees',
          active: true,
        },
      ],
    },
  },
  {
    path: '/add/employee',
    name: 'add-employee',
    component: () => import('@/views/table/bs-table/employee/addEmployee.vue'),
    meta: {
      pageTitle: 'Employees',
      breadcrumb: [
        {
          text: 'Create',
        },
        {
          text: 'Employee',
          active: true,
        },
      ],
    },
  },
  {
    path: '/edit/employee/:empId',
    name: 'Employee-edit',
    component: () => import('@/views/table/bs-table/employee/employeeEdit.vue'),
    meta: {
      pageTitle: 'Employees',
      breadcrumb: [
        {
          text: 'Table',
        },
        {
          text: 'Employees',
          active: true,
        },
      ],
    },
  },
  {
    path: '/accommodations',
    name: 'accommodation-table',
    component: () => import('@/views/table/bs-table/accommodation/accommodationTable.vue'),
    meta: {
      pageTitle: 'Accommodations',
      breadcrumb: [
        {
          text: 'Table',
        },
        {
          text: 'View',
          active: true,
        },
      ],
    },
  },
  {
    path: '/addAccommodations',
    name: 'create-accommodation',
    component: () => import('@/views/table/bs-table/accommodation/addAccommodation.vue'),
    meta: {
      pageTitle: 'Accommodations',
      breadcrumb: [
        {
          text: 'Add',
        },
        {
          text: 'Accommodation',
          active: true,
        },
      ],
    },
  },
  {
    path: '/edit/accommodation/:id',
    name: 'edit-accommodation',
    component: () => import('@/views/table/bs-table/accommodation/accommodationEdit.vue'),
    meta: {
      pageTitle: 'Accommodations',
      breadcrumb: [
        {
          text: 'Edit',
        },
        {
          text: 'Accommodation',
          active: true,
        },
      ],
    },
  },
  {
    path: '/accommodationPayment',
    name: 'create-accommodation-payment',
    component: () => import('@/views/table/bs-table/accommodation/addAccommodationPayment.vue'),
    meta: {
      pageTitle: 'Payments',
      breadcrumb: [
        {
          text: 'Add',
        },
        {
          text: 'Payment',
          active: true,
        },
      ],
    },
  },
  {
    path: '/view/accommodation/payments/:id',
    name: 'view-accommodation-payments',
    component: () => import('@/views/table/bs-table/accommodation/rentPaymentsTable.vue'),
    meta: {
      pageTitle: 'Accommodations',
      breadcrumb: [
        {
          text: 'View',
        },
        {
          text: 'Rent Payments',
          active: true,
        },
      ],
    },
  },
  {
    path: '/view/accommodation/payments',
    name: 'view-general-accommodation-payments',
    component: () => import('@/views/table/bs-table/accommodation/rentPaymentsTable.vue'),
    meta: {
      pageTitle: 'Accommodations',
      breadcrumb: [
        {
          text: 'View',
        },
        {
          text: 'Rent Payments',
          active: true,
        },
      ],
    },
  },
  {
    path: '/edit/accommodation/payments/:id',
    name: 'edit-accommodation-payments',
    component: () => import('@/views/table/bs-table/accommodation/rentPaymentsEdit.vue'),
    meta: {
      pageTitle: 'Accommodations',
      breadcrumb: [
        {
          text: 'Edit',
        },
        {
          text: 'Rent Payments',
          active: true,
        },
      ],
    },
  },
  {
    path: '/accommodationBillPayment',
    name: 'create-bill-payment',
    component: () => import('@/views/table/bs-table/accommodation/addAccommodationBillPayment.vue'),
    meta: {
      pageTitle: 'Bills',
      breadcrumb: [
        {
          text: 'Add',
        },
        {
          text: 'Payment',
          active: true,
        },
      ],
    },
  },
  {
    path: '/view/accommodation/bills/:id',
    name: 'view-bill-payments',
    component: () => import('@/views/table/bs-table/accommodation/billPaymentsTable.vue'),
    meta: {
      pageTitle: 'Accommodations',
      breadcrumb: [
        {
          text: 'View',
        },
        {
          text: 'Bill Payments',
          active: true,
        },
      ],
    },
  },
  {
    path: '/view/accommodation/bills',
    name: 'view-general-bill-payments',
    component: () => import('@/views/table/bs-table/accommodation/billPaymentsTable.vue'),
    meta: {
      pageTitle: 'Accommodations',
      breadcrumb: [
        {
          text: 'View',
        },
        {
          text: 'Bill Payments',
          active: true,
        },
      ],
    },
  },
  {
    path: '/edit/accommodation/bills/payments/:id',
    name: 'edit-accommodation-bills-payments',
    component: () => import('@/views/table/bs-table/accommodation/billPaymentsEdit.vue'),
    meta: {
      pageTitle: 'Accommodations',
      breadcrumb: [
        {
          text: 'Edit',
        },
        {
          text: 'Bill Payments',
          active: true,
        },
      ],
    },
  },
  {
    path: '/vendors',
    name: 'vendors-list',
    component: () => import('@/views/table/bs-table/vendors/vendorTable.vue'),
    meta: {
      pageTitle: 'Vendors',
      breadcrumb: [
        {
          text: 'List',
        },
        {
          text: 'View',
          active: true,
        },
      ],
    },
  },
  {
    path: '/create/vendor',
    name: 'create-new-vendor',
    component: () => import('@/views/table/bs-table/vendors/addVendor.vue'),
    meta: {
      pageTitle: 'Vendors',
      breadcrumb: [
        {
          text: 'Create',
        },
        {
          text: 'Vendor',
          active: true,
        },
      ],
    },
  },
  {
    path: '/edit/vendor/:id',
    name: 'edit-vendor',
    component: () => import('@/views/table/bs-table/vendors/editVendor.vue'),
    meta: {
      pageTitle: 'Vendors',
      breadcrumb: [
        {
          text: 'Edit',
        },
        {
          text: 'Vendor',
          active: true,
        },
      ],
    },
  },
  {
    path: '/clients',
    name: 'list-clients',
    component: () => import('@/views/table/bs-table/client/clientTable.vue'),
    meta: {
      pageTitle: 'Clients',
      breadcrumb: [
        {
          text: 'List',
        },
        {
          text: 'View',
          active: true,
        },
      ],
    },
  },
  {
    path: '/create/client',
    name: 'create-new-client',
    component: () => import('@/views/table/bs-table/client/addClient.vue'),
    meta: {
      pageTitle: 'Clients',
      breadcrumb: [
        {
          text: 'Create',
        },
        {
          text: 'Client',
          active: true,
        },
      ],
    },
  },

  {
    path: '/edit/client/:client_code',
    name: 'edit-client',
    component: () => import('@/views/table/bs-table/client/editClient.vue'),
    meta: {
      pageTitle: 'Clients',
      breadcrumb: [
        {
          text: 'Edit',
        },
        {
          text: 'Client',
          active: true,
        },
      ],
    },
  },
  {
    path: '/invoices',
    name: 'list-invoices',
    component: () => import('@/views/table/bs-table/invoice/invoiceTable.vue'),
    meta: {
      pageTitle: 'Invoices',
      breadcrumb: [
        {
          text: 'List',
        },
        {
          text: 'View',
          active: true,
        },
      ],
    },
  },
  {
    path: '/create/invoice',
    name: 'create-new-invoice',
    component: () => import('@/views/table/bs-table/invoice/addInvoice.vue'),
    meta: {
      pageTitle: 'Invoices',
      breadcrumb: [
        {
          text: 'Create',
        },
        {
          text: 'Invoice',
          active: true,
        },
      ],
    },
  },
  {
    path: '/edit/invoice/:invoice_number',
    name: 'edit-invoice',
    component: () => import('@/views/table/bs-table/invoice/editInvoice.vue'),
    meta: {
      pageTitle: 'Invoices',
      breadcrumb: [
        {
          text: 'Edit',
        },
        {
          text: 'Invoice',
          active: true,
        },
      ],
    },
  },
  {
    path: '/expence/items',
    name: 'list-expence-items',
    component: () => import('@/views/table/bs-table/invoice/expenceItems.vue'),
    meta: {
      pageTitle: 'Expence Items',
      breadcrumb: [
        {
          text: 'List',
        },
        {
          text: 'View',
          active: true,
        },
      ],
    },
  },
  {
    path: '/expence/items/edit/:id',
    name: 'expence-item-edit',
    component: () => import('@/views/table/bs-table/invoice/editExpenceItems.vue'),
    meta: {
      pageTitle: 'Expence Items',
      breadcrumb: [
        {
          text: 'Edit',
        },
        {
          text: 'Item',
          active: true,
        },
      ],
    },
  },
  {
    path: '/expence/items/creat',
    name: 'expence-item-create',
    component: () => import('@/views/table/bs-table/invoice/addExpenceItems.vue'),
    meta: {
      pageTitle: 'Expence Items',
      breadcrumb: [
        {
          text: 'Add',
        },
        {
          text: 'Item',
          active: true,
        },
      ],
    },
  },
  {
    path: '/users',
    name: 'system-users',
    component: () => import('@/views/table/bs-table/user/userTable.vue'),
    meta: {
      pageTitle: 'Users',
      breadcrumb: [
        {
          text: 'List',
        },
        {
          text: 'View',
          active: true,
        },
      ],
    },
  },
  {
    path: '/create/user',
    name: 'create-new-user',
    component: () => import('@/views/table/bs-table/user/addUser.vue'),
    meta: {
      pageTitle: 'Users',
      breadcrumb: [
        {
          text: 'Create',
        },
        {
          text: 'User',
          active: true,
        },
      ],
    },
  },
  {
    path: '/edit/user/:id',
    name: 'edit-user',
    component: () => import('@/views/table/bs-table/user/editUser.vue'),
    meta: {
      pageTitle: 'Users',
      breadcrumb: [
        {
          text: 'Edit',
        },
        {
          text: 'User',
          active: true,
        },
      ],
    },
  },
  {
    path: '/companies',
    name: 'view-companies',
    component: () => import('@/views/table/bs-table/company/companyTable.vue'),
    meta: {
      pageTitle: 'Companies',
      breadcrumb: [
        {
          text: 'List',
        },
        {
          text: 'View',
          active: true,
        },
      ],
    },
  },
  {
    path: '/create/company',
    name: 'create-new-company',
    component: () => import('@/views/table/bs-table/company/addCompany.vue'),
    meta: {
      pageTitle: 'Companies',
      breadcrumb: [
        {
          text: 'Create',
        },
        {
          text: 'Company',
          active: true,
        },
      ],
    },
  },
  {
    path: '/edit/company/:id',
    name: 'edit-company',
    component: () => import('@/views/table/bs-table/company/editcompany.vue'),
    meta: {
      pageTitle: 'Companies',
      breadcrumb: [
        {
          text: 'Edit',
        },
        {
          text: 'Company',
          active: true,
        },
      ],
    },
  },
  {
    path: '/update/profile',
    name: 'update-profile',
    component: () => import('@/views/table/bs-table/profile/updateProfile.vue'),
    meta: {
      pageTitle: 'User',
      breadcrumb: [
        {
          text: 'Update',
        },
        {
          text: 'Profile',
          active: true,
        },
      ],
    },
  },
  {
    path: '/audit_trail',
    name: 'audit-trail',
    component: () => import('@/views/table/bs-table/audit/auditTable.vue'),
    meta: {
      pageTitle: 'Audit Trail',
      breadcrumb: [
        {
          text: 'List',
        },
        {
          text: 'Activity',
          active: true,
        },
      ],
    },
  },
  {
    path: '/set/global_terms',
    name: 'global-terms',
    component: () => import('@/views/table/bs-table/global/globalterms.vue'),
    meta: {
      pageTitle: 'Settings',
      breadcrumb: [
        {
          text: 'Update',
        },
        {
          text: 'Global Terms',
          active: true,
        },
      ],
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/error/Error404.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },
  {
    path: '/pages/miscellaneous/not-authorized',
    name: 'misc-not-authorized',
    component: () => import('@/views/pages/miscellaneous/NotAuthorized.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/login',
    name: 'auth-login',
    component: () => import('@/views/pages/authentication/Login.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
]
