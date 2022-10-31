export default [
  /*{
    header: 'Apps & Pages',
  },*/
  {
    title: 'Dashboard',
    route: 'dashboard-ecommerce',
    icon: 'HomeIcon',
    action: 'view',
    resource: 'navbar',
  },
  {
    title: 'Companies',
    route: 'view-companies',
    icon: 'ListIcon',
    action: 'view',
    resource: 'superAdmin',
  },
  {
    title: 'HR',
    icon: 'FileTextIcon',
    action: 'view',
    resource: 'navbar',
    children: [
      {
        title: 'Employees',
        route: 'Employee-sheet',
        action: 'view',
        resource: 'employees',
      },
    ],
  },
  {
    title: 'Resource Center',
    icon: 'ToolIcon',
    action: 'view',
    resource: 'navbar',
    children: [
      {
        title: 'New Resource',
        route: 'allocate-resource',
        action: 'add/copy',
        resource: 'resource',
      },
      {
        title: 'List Resources',
        route: 'allocated-resources',
        action: 'view',
        resource: 'resource',
      },
      
      
    ],
  },

  {
    title: 'Operations',
    icon: 'SettingsIcon',
    action: 'view',
    resource: 'navbar',
    children: [
      {
        title: 'Accommodation',
        route: 'accommodation-table',
        action: 'view',
        resource: 'accommodation',
      },
      {
        title: 'View Rent Payments',
        route: 'view-general-accommodation-payments',
        action: 'view',
        resource: 'rent_payment',
      },
      {
        title: 'New Rent Payment',
        route: 'create-accommodation-payment',
        action: 'add/copy',
        resource: 'rent_payment',
      },
      {
        title: 'View Bill Payment',
        route: 'view-general-bill-payments',
        action: 'view',
        resource: 'bill_payment',
      },
      {
        title: 'New Bill Payment',
        route: 'create-bill-payment',
        action: 'add/copy',
        resource: 'bill_payment',
      },
    ],
  },

  {
    title: 'Sales',
    icon: 'BarChartIcon',
    action: 'view',
    resource: 'navbar',
    children: [
      {
        title: 'Clients',
        route: 'list-clients',
        action: 'view',
        resource: 'client',
      },
    ],
  },

  {
    title: 'Accounts',
    icon: 'BookIcon',
    action: 'view',
    resource: 'navbar',
    children: [
      {
        title: 'Invoices',
        route: 'list-invoices',
        action: 'view',
        resource: 'invoice',
      },
    ],
  },

  {
    title: 'Purchasing',
    icon: 'ShoppingCartIcon',
    action: 'view',
    resource: 'navbar',
    children: [
      {
        title: 'Create PO',
        route: 'save-purchase',
        action: 'add/copy',
        resource: 'purchase_order',
      },
      {
        title: 'Purchase Orders',
        route: 'purchase-list',
        action: 'view',
        resource: 'purchase_order',
      },
      {
        title: 'Vendors',
        route: 'vendors-list',
        action: 'view',
        resource: 'vendor',
      },
    ],
  },

  {
    title: 'Reports',
    icon: 'FileTextIcon',
    action: 'view',
    resource: 'navbar',
    children: [
      {
        title: '-',
        route: 'N/A',
      },
    ],
  },

  {
    title: 'Settings',
    icon: 'SlidersIcon',
    action: 'view',
    resource: 'navbar',
    children: [
      {
        title: 'Global Settings',
        route: 'global-terms',
        action: 'view',
        resource: 'user_level',
      },
      {
        title: 'Users',
        route: 'system-users',
        action: 'view',
        resource: 'user',
      },
      {
        title: 'User Levels',
        route: 'roles',
        action: 'view',
        resource: 'user_level',
      },
      
      {
        title: 'Audit Trail',
        route: 'audit-trail',
        action: 'view',
        resource: 'user',
      },
      
      {
        title: 'Resource  Settings',
        children: [
          {
            title: 'Employee',
            route: 'employee-items',
            action: 'view',
            resource: 'resource_item',
          },
          {
            title: 'Project',
            route: 'project-items',
            action: 'view',
            resource: 'resource_item',
          },
          {
            title: 'Accommodation',
            route: 'accommodation-items',
            action: 'view',
            resource: 'resource_item',
          }
        ],
      },
      {
        title: 'Invoice  Settings',
        children: [
          {
            title: 'Services List',
            route: 'list-expence-items',
            action: 'view',
            resource: 'resource_item',
          }
        ],
      },
    ],
  },


]
