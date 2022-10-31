export default [
  /*{
    header: 'Apps & Pages',
  },*/
  {
    title: 'لوحة القيادة',
    route: 'dashboard-ecommerce',
    icon: 'HomeIcon',
    action: 'view',
    resource: 'navbar',
  },
  {
    title: 'شركات',
    route: 'view-companies',
    icon: 'ListIcon',
    action: 'view',
    resource: 'superAdmin',
  },
  {
    title: 'الموارد البشرية',
    icon: 'FileTextIcon',
    action: 'view',
    resource: 'navbar',
    children: [
      {
        title: 'الموظفين',
        route: 'Employee-sheet',
        action: 'view',
        resource: 'employees',
      },
    ],
  },
  {
    title: 'مركز المصادر',
    icon: 'ToolIcon',
    action: 'view',
    resource: 'navbar',
    children: [
      {
        title: 'مصدر جديد',
        route: 'مصدر جديد',
        action: 'add/copy',
        resource: 'resource',
      },
      {
        title: 'ائمة المصادر',
        route: 'allocated-resources',
        action: 'view',
        resource: 'resource',
      },
      
      
    ],
  },

  {
    title: 'التشغيل',
    icon: 'SettingsIcon',
    action: 'view',
    resource: 'navbar',
    children: [
      {
        title: 'السكن',
        route: 'accommodation-table',
        action: 'view',
        resource: 'accommodation',
      },
      {
        title: 'اظهار تفاصيل الايجار',
        route: 'view-general-accommodation-payments',
        action: 'view',
        resource: 'rent_payment',
      },
      {
        title: 'دفع الإيجار الجديد',
        route: 'create-accommodation-payment',
        action: 'add/copy',
        resource: 'rent_payment',
      },
      {
        title: 'اظهار تفاصيل الفاتورة',
        route: 'view-general-bill-payments',
        action: 'view',
        resource: 'bill_payment',
      },
      {
        title: 'دفع الفواتير الجديدة',
        route: 'create-bill-payment',
        action: 'add/copy',
        resource: 'bill_payment',
      },
    ],
  },

  {
    title: 'المبيعات',
    icon: 'BarChartIcon',
    action: 'view',
    resource: 'navbar',
    children: [
      {
        title: 'العملاء',
        route: 'list-clients',
        action: 'view',
        resource: 'client',
      },
    ],
  },

  {
    title: 'حسابات',
    icon: 'BookIcon',
    action: 'view',
    resource: 'navbar',
    children: [
      {
        title: 'الفواتير',
        route: 'list-invoices',
        action: 'view',
        resource: 'invoice',
      },
    ],
  },

  {
    title: 'المشتريات',
    icon: 'ShoppingCartIcon',
    action: 'view',
    resource: 'navbar',
    children: [
      {
        title: 'انشاء أمر شراء',
        route: 'save-purchase',
        action: 'add/copy',
        resource: 'purchase_order',
      },
      {
        title: 'أمر الشراء',
        route: 'purchase-list',
        action: 'view',
        resource: 'purchase_order',
      },
      {
        title: 'الموردين',
        route: 'vendors-list',
        action: 'view',
        resource: 'vendor',
      },
    ],
  },

  {
    title: 'التقارير',
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
    title: 'إعدادات',
    icon: 'SlidersIcon',
    action: 'view',
    resource: 'navbar',
    children: [
      {
        title: 'الاعدادات العامة',
        route: 'global-terms',
        action: 'view',
        resource: 'user_level',
      },
      {
        title: 'المستخدمون',
        route: 'system-users',
        action: 'view',
        resource: 'user',
      },
      {
        title: 'مستويات المستخدم',
        route: 'roles',
        action: 'view',
        resource: 'user_level',
      },
      
      {
        title: 'سجل تدقيق',
        route: 'audit-trail',
        action: 'view',
        resource: 'user',
      },
      
      {
        title: 'إعدادات الموارد',
        children: [
          {
            title: 'موظف',
            route: 'employee-items',
            action: 'view',
            resource: 'resource_item',
          },
          {
            title: 'المشروع',
            route: 'project-items',
            action: 'view',
            resource: 'resource_item',
          },
          {
            title: 'إقامة',
            route: 'accommodation-items',
            action: 'view',
            resource: 'resource_item',
          }
        ],
      },
      {
        title: 'إعدادات الفاتورة',
        children: [
          {
            title: 'قائمة الخدمات',
            route: 'list-expence-items',
            action: 'view',
            resource: 'resource_item',
          }
        ],
      },
    ],
  },


]
