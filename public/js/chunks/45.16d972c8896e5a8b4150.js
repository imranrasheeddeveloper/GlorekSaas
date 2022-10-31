(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./frontend/src/views/table/bs-table/code.js":
/*!***************************************************!*\
  !*** ./frontend/src/views/table/bs-table/code.js ***!
  \***************************************************/
/*! exports provided: codeBasic, codeStyleOption, codeRowColStyle, codeResponsive, codeFormatterCallback, codeDataRendering, codeSticky, codeRowDetailsSupport, codeRowSelectSupport, codeKitchenSink, codeLight, codeSimple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeStyleOption", function() { return codeStyleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeRowColStyle", function() { return codeRowColStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeResponsive", function() { return codeResponsive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeFormatterCallback", function() { return codeFormatterCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeDataRendering", function() { return codeDataRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSticky", function() { return codeSticky; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeRowDetailsSupport", function() { return codeRowDetailsSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeRowSelectSupport", function() { return codeRowSelectSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeKitchenSink", function() { return codeKitchenSink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeLight", function() { return codeLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSimple", function() { return codeSimple; });
var codeBasic = "\n<template>\n  <b-table responsive=\"sm\" :items=\"items\"/>\n</template>\n\n<script>\nimport { BTable } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n  },\n  data() {\n    return {\n      items: [\n        {\n          age: 40, first_name: 'Dickerson', last_name: 'Macdonald', Occupation: 'Job',\n        },\n        {\n          age: 21, first_name: 'Larsen', last_name: 'Shaw', Occupation: 'Job',\n        },\n        {\n          age: 89, first_name: 'Geneva', last_name: 'Wilson', Occupation: 'Bussiness',\n        },\n        {\n          age: 38, first_name: 'Jami', last_name: 'Carney', Occupation: 'Bussiness',\n        },\n        {\n          age: 40, first_name: 'James', last_name: 'Thomson', Occupation: 'Job',\n        },\n      ],\n    }\n  },\n}\n</script>\n";
var codeStyleOption = "\n<template>\n  <div>\n    <!-- checkbox -->\n    <b-form-group>\n      <label class=\"mb-0\">Table Options</label>\n      <div class=\"demo-inline-spacing\">\n        <b-form-checkbox\n          v-model=\"striped\"\n        >\n          Striped\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"bordered\"\n        >\n          Bordered\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"borderless\"\n        >\n          Borderless\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"outlined\"\n        >\n          Outlined\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"small\"\n        >\n          Small\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"hover\"\n        >\n          Hover\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"dark\"\n        >\n          Dark\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"fixed\"\n        >\n          Fixed\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"footClone\"\n        >\n          Foot Clone\n        </b-form-checkbox>\n        <b-form-checkbox\n          v-model=\"noCollapse\"\n        >\n          No border collapse\n        </b-form-checkbox>\n      </div>\n    </b-form-group>\n\n    <!-- radio -->\n    <b-form-group\n      label=\"Head Variant\"\n      label-cols-lg=\"2\"\n    >\n      <b-form-radio-group\n        v-model=\"headVariant\"\n      >\n        <b-form-radio\n          :value=\"null\"\n        >\n          None\n        </b-form-radio>\n        <b-form-radio\n          value=\"light\"\n        >\n          Light\n        </b-form-radio>\n        <b-form-radio\n          value=\"dark\"\n        >\n          Dark\n        </b-form-radio>\n      </b-form-radio-group>\n    </b-form-group>\n\n    <!-- variant select -->\n    <b-form-group\n      label=\"Table Variant\"\n      label-for=\"table-style-variant\"\n      label-cols-lg=\"2\"\n      class=\"mb-0\"\n    >\n      <v-select\n        v-model=\"tableVariant\"\n        :dir=\"$store.state.appConfig.isRTL ? 'rtl' : 'ltr'\"\n        label=\"tableVariants\"\n        :options=\"tableVariants\"\n      />\n    </b-form-group>\n\n    <!-- table -->\n    <b-table\n      :striped=\"striped\"\n      :bordered=\"bordered\"\n      :borderless=\"borderless\"\n      :outlined=\"outlined\"\n      :small=\"small\"\n      :hover=\"hover\"\n      :dark=\"dark\"\n      :fixed=\"fixed\"\n      :foot-clone=\"footClone\"\n      :no-border-collapse=\"noCollapse\"\n      :items=\"items\"\n      :fields=\"fields\"\n      :head-variant=\"headVariant\"\n      :table-variant=\"tableVariant\"\n    />\n  </div>\n</template>\n\n<script>\nimport {\n  BTable, BFormGroup, BFormRadio, BFormCheckbox, BFormRadioGroup, BCardBody,\n} from 'bootstrap-vue'\nimport vSelect from 'vue-select'\n\nexport default {\n  components: {\n    BTable,\n    BFormGroup,\n    BCardBody,\n    vSelect,\n    BFormRadio,\n    BFormCheckbox,\n    BFormRadioGroup,\n  },\n  data() {\n    return {\n      fields: ['first_name', 'last_name', 'age'],\n      items: [\n        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },\n        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },\n        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },\n        { age: 89, first_name: 'Olenka', last_name: 'Brawley' },\n        { age: 89, first_name: 'Vernon', last_name: 'Perford' },\n      ],\n      tableVariants: [\n        'none',\n        'primary',\n        'secondary',\n        'info',\n        'danger',\n        'warning',\n        'success',\n        'light',\n        'dark',\n      ],\n      striped: false,\n      bordered: false,\n      borderless: false,\n      outlined: false,\n      small: false,\n      hover: false,\n      dark: false,\n      fixed: false,\n      footClone: false,\n      headVariant: null,\n      tableVariant: 'none',\n      noCollapse: false,\n    }\n  },\n}\n</script>\n\n<style lang=\"scss\">\n@import '@core/scss/vue/libs/vue-select.scss';\n</style>\n";
var codeRowColStyle = "\n<template>\n  <b-table\n    :items=\"items\"\n    :fields=\"fields\"\n    :tbody-tr-class=\"rowClass\"\n    class=\"rounded-bottom\"\n  />\n</template>\n\n<script>\nimport { BTable } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n  },\n  data() {\n    return {\n      fields: ['first_name', 'last_name', { key: 'age', variant: 'success' }],\n      items: [\n        {\n          age: 40, first_name: 'Dickerson', last_name: 'Macdonald', status: 'awesome',\n        },\n        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },\n        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },\n        { age: 89, first_name: 'Olenka', last_name: 'Brawley' },\n        { age: 89, first_name: 'Vernon', last_name: 'Perford' },\n      ],\n    }\n  },\n  methods: {\n    rowClass(item, type) {\n      const colorClass = 'table-success'\n      if (!item || type !== 'row') { return }\n\n      // eslint-disable-next-line consistent-return\n      if (item.status === 'awesome') { return colorClass }\n    },\n  },\n}\n</script>\n";
var codeResponsive = "\n<template>\n   <b-table\n    responsive\n    :items=\"items\"\n    :fields=\"fields\"\n    class=\"mb-0\"\n  >\n    <template #cell(Phone)=\"data\">\n      <span class=\"text-nowrap\">\n        {{ data.value }}\n      </span>\n    </template>\n\n    <!-- Optional default data cell scoped slot -->\n    <template #cell()=\"data\">\n      {{ data.value }}\n    </template>\n  </b-table>\n</template>\n\n<script>\nimport { BTable } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n  },\n  data() {\n    return {\n      fields: [\n        'id',\n        'first_name',\n        'email',\n        'gender',\n        'ip_address',\n        {\n          key: 'Phone', label: 'Phone',\n        },\n        'Country',\n      ],\n      items: [\n        {\n          id: '1',\n          first_name: 'Marybelle',\n          last_name: 'Della Scala',\n          email: 'mdellascala0@opensource.org',\n          gender: 'Female',\n          ip_address: '85.254.7.181',\n          Phone: '+86 350 673 7985',\n          Country: 'China',\n\n        },\n        {\n          id: '2',\n          first_name: 'Octavia',\n          last_name: 'Tohill',\n          email: 'otohill1@google.co.jp',\n          gender: 'Female',\n          ip_address: '93.70.144.212',\n          Phone: '+63 938 283 0018',\n          Country: 'Philippines',\n        },\n        {\n          id: '3',\n          first_name: 'Jennie',\n          last_name: 'Geroldi',\n          email: 'jgeroldi2@slideshare.net',\n          gender: 'Female',\n          ip_address: '76.145.147.212',\n          Phone: '+81 235 674 0110',\n          Country: 'Japan',\n        },\n        {\n          id: '4',\n          first_name: 'Vanya',\n          last_name: 'Wharby',\n          email: 'vwharby3@mozilla.org',\n          gender: 'Male',\n          ip_address: '139.234.247.155',\n          Phone: '+30 349 556 7375',\n          Country: 'Greece',\n        },\n        {\n          id: '5',\n          first_name: 'Olenka',\n          last_name: 'Brawley',\n          email: 'obrawleyc@adobe.com',\n          gender: 'Female',\n          ip_address: '166.183.163.155',\n          Phone: '+62 841 824 0990',\n          Country: 'Indonesia',\n        },\n      ],\n    }\n  },\n}\n</script>\n";
var codeFormatterCallback = "\n<template>\n   <b-table\n    :fields=\"fields\"\n    :items=\"items\"\n  >\n    <template #cell(name)=\"data\">\n      <a :href=\"`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`\">{{ data.value }}</a>\n    </template>\n  </b-table>\n</template>\n\n<script>\nimport { BTable } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n  },\n  data() {\n    return {\n      fields: [\n        {\n          key: 'name',\n          label: 'Full Name',\n          formatter: value => `${value.first} ${value.last}`,\n        },\n        // A regular column\n        'age',\n        {\n          // A regular column with custom formatter\n          key: 'sex',\n          formatter: value => value.charAt(0).toUpperCase(),\n        },\n        {\n          // A virtual column with custom formatter\n          key: 'birthYear',\n          label: 'Birth Year',\n          formatter: (value, key, item) => new Date().getFullYear() - item.age,\n        },\n      ],\n      items: [\n        { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },\n        { name: { first: 'Clemens', last: 'Doe' }, sex: 'Female', age: 36 },\n        { name: { first: 'Rubin', last: 'Kincade' }, sex: 'male', age: 73 },\n        { name: { first: 'Shirley', last: 'Partridge' }, sex: 'female', age: 62 },\n        { name: { first: 'Olenka', last: 'Brawley' }, sex: 'female', age: 26 },\n      ],\n    }\n  },\n}\n</script>\n";
var codeDataRendering = "\n<template>\n  <div>\n    <b-table\n      small\n      :fields=\"fields\"\n      :items=\"items\"\n      responsive=\"sm\"\n    >\n      <!-- A virtual column -->\n      <template #cell(index)=\"data\">\n        {{ data.index + 1 }}\n      </template>\n\n      <!-- A custom formatted column -->\n      <template #cell(name)=\"data\">\n        {{ data.value.first+' - '+ data.value.last }}\n      </template>\n\n      <!-- A custom formatted column -->\n      <template #cell(Popularity)=\"data\">\n        <b-progress\n          :value=\"data.value.value\"\n          max=\"100\"\n          :variant=\"data.value.variant\"\n          striped\n        />\n      </template>\n\n      <template #cell(order_status)=\"data\">\n        <b-badge\n          pill\n          :variant=\"data.value.variant\"\n        >\n          {{ data.value.status }}\n        </b-badge>\n      </template>\n\n      <!-- A virtual composite column -->\n      <template #cell(price)=\"data\">\n        {{ '$'+data.value }}\n      </template>\n\n      <!-- Optional default data cell scoped slot -->\n      <template #cell()=\"data\">\n        {{ data.value }}\n      </template>\n    </b-table>\n  </div>\n</template>\n\n<script>\nimport { BTable, BProgress, BBadge } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n    BProgress,\n    BBadge,\n  },\n  data() {\n    return {\n      fields: [\n        // A virtual column that doesn't exist in items\n        'index',\n        // A column that needs custom formatting\n        { key: 'name', label: 'Name' },\n        'Category',\n        // A regular column\n        { key: 'Popularity', label: 'Popularity' },\n        // A regular column\n        { key: 'order_status', label: 'Order Status' },\n        // A virtual column made up from two fields\n        { key: 'price', label: 'Price' },\n      ],\n      items: [\n        {\n          name: { first: 'Fitbit', last: 'Activity Tracker' },\n          Category: 'Fitness',\n          order_status: { status: 'Delivered', variant: 'success' },\n          Popularity: { value: 50, variant: 'success' },\n          price: 99.99,\n        },\n        {\n          name: { first: 'Fitbit ', last: 'Flex Wireless Activity' },\n          Category: 'Fitness',\n          order_status: { status: 'Pending', variant: 'primary' },\n          Popularity: { value: 36, variant: 'primary' },\n          price: 89.85,\n        },\n        {\n          name: { first: 'Fitbit', last: 'Sleep Tracker Wristband' },\n          Category: 'Fitness',\n          order_status: { status: 'Delivered', variant: 'success' },\n          Popularity: { value: 76, variant: 'success' },\n          price: 65.25,\n        },\n        {\n          name: { first: 'Fitbit', last: 'Sleep Wristband' },\n          Category: 'Fitness',\n          order_status: { status: 'On Hold', variant: 'warning' },\n          Popularity: { value: 55, variant: 'warning' },\n          price: 75.55,\n        },\n        {\n          name: { first: 'Fitbit', last: 'Clip for Zip Wireless Activity Trackers' },\n          Category: 'Fitness',\n          order_status: { status: 'Canceled', variant: 'danger' },\n          Popularity: { value: 75, variant: 'danger' },\n          price: 105.55,\n        },\n      ],\n    }\n  },\n}\n</script>\n";
var codeSticky = "\n<template>\n  <div>\n    <div class=\"d-flex mb-2\">\n      <b-form-checkbox\n        v-model=\"stickyHeader\"\n        class=\"vs-checkbox-con mr-1\"\n        plain\n      >\n        <span class=\"vs-checkbox\">\n          <span class=\"vs-checkbox--check\">\n            <i class=\"vs-icon feather icon-check\" />\n          </span>\n        </span>\n        <span class=\"vs-label\">Sticky header</span>\n      </b-form-checkbox>\n      <b-form-checkbox\n        v-model=\"noCollapse\"\n        class=\"vs-checkbox-con\"\n        plain\n      >\n        <span class=\"vs-checkbox\">\n          <span class=\"vs-checkbox--check\">\n            <i class=\"vs-icon feather icon-check\" />\n          </span>\n        </span>\n        <span class=\"vs-label\">No border collapse</span>\n      </b-form-checkbox>\n    </div>\n    <b-table\n      :sticky-header=\"stickyHeader\"\n      :no-border-collapse=\"noCollapse\"\n\n      responsive\n      :items=\"items\"\n      :fields=\"fields\"\n    >\n      <template #head(id)>\n        <div class=\"text-nowrap\">\n          Row ID\n        </div>\n      </template>\n\n      <template #head()=\"scope\">\n        <div class=\"text-nowrap\">\n          {{ scope.label }}\n        </div>\n      </template>\n\n      <template #cell(avatar)=\"data\">\n        <b-avatar\n          class=\"mr-1\"\n          :src=\"data.value\"\n        />\n      </template>\n\n      <template #cell(status)=\"data\">\n        <b-badge :variant=\"status[1][data.value]\">\n          {{ status[0][data.value] }}\n        </b-badge>\n      </template>\n\n      <template #cell()=\"data\">\n        <span class=\"text-nowrap\">{{ data.value }}</span>\n      </template>\n    </b-table>\n  </div>\n</template>\n\n<script>\nimport {\n  BTable, BFormCheckbox, BAvatar, BBadge,\n} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n    BFormCheckbox,\n    BAvatar,\n    BBadge,\n  },\n  data() {\n    return {\n      stickyHeader: true,\n      noCollapse: false,\n      fields: [\n        {\n          key: 'id', stickyColumn: true, isRowHeader: true, variant: 'primary',\n        },\n        {\n          key: 'avatar', label: 'Avatar',\n        },\n        'full_name',\n        { key: 'post', stickyColumn: true, variant: 'info' },\n        'email',\n        'city',\n        'start_date',\n        'salary',\n        'age',\n        'experience',\n        { key: 'status', label: 'Status' },\n      ],\n      items: [\n        {\n          id: 1,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/10-small.png'),\n          full_name: \"Korrie O'Crevy\",\n          post: 'Nuclear Power Engineer',\n          email: 'kocrevy0@thetimes.co.uk',\n          city: 'Krasnosilka',\n          start_date: '09/23/2016',\n          salary: '$23896.35',\n          age: '61',\n          experience: '1 Year',\n          status: 2,\n        },\n        {\n          id: 2,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/1-small.png'),\n          full_name: 'Bailie Coulman',\n          post: 'VP Quality Control',\n          email: 'bcoulman1@yolasite.com',\n          city: 'Hinigaran',\n          start_date: '05/20/2018',\n          salary: '$13633.69',\n          age: '63',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 3,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Stella Ganderton',\n          post: 'Operator',\n          email: 'sganderton2@tuttocitta.it',\n          city: 'Golcowa',\n          start_date: '03/24/2018',\n          salary: '$13076.28',\n          age: '66',\n          experience: '6 Years',\n          status: 5,\n        },\n        {\n          id: 4,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/3-small.png'),\n          full_name: 'Dorolice Crossman',\n          post: 'Cost Accountant',\n          email: 'dcrossman3@google.co.jp',\n          city: 'Paquera',\n          start_date: '12/03/2017',\n          salary: '$12336.17',\n          age: '22',\n          experience: '2 Years',\n          status: 2,\n        },\n        {\n          id: 5,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/4-small.png'),\n          full_name: 'Harmonia Nisius',\n          post: 'Senior Cost Accountant',\n          email: 'hnisius4@gnu.org',\n          city: 'Lucan',\n          start_date: '08/25/2017',\n          salary: '$10909.52',\n          age: '33',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 6,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/5-small.png'),\n          full_name: 'Genevra Honeywood',\n          post: 'Geologist',\n          email: 'ghoneywood5@narod.ru',\n          city: 'Maofan',\n          start_date: '06/01/2017',\n          salary: '$17803.80',\n          age: '61',\n          experience: '1 Year',\n          status: 1,\n        },\n        {\n          id: 7,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/7-small.png'),\n          full_name: 'Eileen Diehn',\n          post: 'Environmental Specialist',\n          email: 'ediehn6@163.com',\n          city: 'Lampuyang',\n          start_date: '10/15/2017',\n          salary: '$18991.67',\n          age: '59',\n          experience: '9 Years',\n          status: 3,\n        },\n        {\n          id: 8,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Richardo Aldren',\n          post: 'Senior Sales Associate',\n          email: 'raldren7@mtv.com',\n          city: 'Skoghall',\n          start_date: '11/05/2016',\n          salary: '$19230.13',\n          age: '55',\n          experience: '5 Years',\n          status: 3,\n        },\n        {\n          id: 9,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/2-small.png'),\n          full_name: 'Allyson Moakler',\n          post: 'Safety Technician',\n          email: 'amoakler8@shareasale.com',\n          city: 'Mogilany',\n          start_date: '12/29/2018',\n          salary: '$11677.32',\n          age: '39',\n          experience: '9 Years',\n          status: 5,\n        },\n        {\n          id: 10,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/6-small.png'),\n          full_name: 'Merline Penhalewick',\n          post: 'Junior Executive',\n          email: 'mpenhalewick9@php.net',\n          city: 'Kanuma',\n          start_date: '04/19/2019',\n          salary: '$15939.52',\n          age: '23',\n          experience: '3 Years',\n          status: 2,\n        },\n      ],\n      status: [{\n        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',\n      },\n      {\n        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',\n      }],\n    }\n  },\n}\n</script>\n";
var codeRowDetailsSupport = "\n<template>\n  <div>\n    <b-table\n      :items=\"items\"\n      :fields=\"fields\"\n      striped\n      responsive\n    >\n      <template #cell(show_details)=\"row\">\n        <b-form-checkbox\n          v-model=\"row.detailsShowing\"\n          plain\n          class=\"vs-checkbox-con\"\n          @change=\"row.toggleDetails\"\n        >\n          <span class=\"vs-checkbox\">\n            <span class=\"vs-checkbox--check\">\n              <i class=\"vs-icon feather icon-check\" />\n            </span>\n          </span>\n          <span class=\"vs-label\">{{ row.detailsShowing ? 'Hide' : 'Show' }}</span>\n        </b-form-checkbox>\n      </template>\n\n      <template #row-details=\"row\">\n        <b-card>\n          <b-row class=\"mb-2\">\n            <b-col\n              md=\"4\"\n              class=\"mb-1\"\n            >\n              <strong>Full Name : </strong>{{ row.item.full_name }}\n            </b-col>\n            <b-col\n              md=\"4\"\n              class=\"mb-1\"\n            >\n              <strong>Post : </strong>{{ row.item.post }}\n            </b-col>\n            <b-col\n              md=\"4\"\n              class=\"mb-1\"\n            >\n              <strong>Email : </strong>{{ row.item.email }}\n            </b-col>\n            <b-col\n              md=\"4\"\n              class=\"mb-1\"\n            >\n              <strong>City : </strong>{{ row.item.city }}\n            </b-col>\n            <b-col\n              md=\"4\"\n              class=\"mb-1\"\n            >\n              <strong>Salary : </strong>{{ row.item.salary }}\n            </b-col>\n            <b-col\n              md=\"4\"\n              class=\"mb-1\"\n            >\n              <strong>Age : </strong>{{ row.item.age }}\n            </b-col>\n          </b-row>\n\n          <b-button\n            size=\"sm\"\n            variant=\"outline-secondary\"\n            @click=\"row.toggleDetails\"\n          >\n            Hide Details\n          </b-button>\n        </b-card>\n      </template>\n\n      <template #cell(avatar)=\"data\">\n        <b-avatar :src=\"data.value\" />\n      </template>\n\n       <template #cell(status)=\"data\">\n        <b-badge :variant=\"status[1][data.value]\">\n          {{ status[0][data.value] }}\n        </b-badge>\n      </template>\n    </b-table>\n  </div>\n</template>\n\n<script>\nimport {\n  BTable, BFormCheckbox, BButton, BCard, BRow, BCol, BAvatar, BBadge,\n} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n    BButton,\n    BFormCheckbox,\n    BCard,\n    BRow,\n    BCol,\n    BBadge,\n    BAvatar,\n  },\n  data() {\n    return {\n      fields: ['show_details', 'id', { key: 'avatar', label: 'Avatar' }, 'full_name', 'post', 'email', 'city', 'start_date', 'salary', 'age', 'experience', { key: 'status', label: 'Status' }],\n      items: [\n        {\n          id: 1,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/10-small.png'),\n          full_name: \"Korrie O'Crevy\",\n          post: 'Nuclear Power Engineer',\n          email: 'kocrevy0@thetimes.co.uk',\n          city: 'Krasnosilka',\n          start_date: '09/23/2016',\n          salary: '$23896.35',\n          age: '61',\n          experience: '1 Year',\n          status: 2,\n        },\n        {\n          id: 2,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/1-small.png'),\n          full_name: 'Bailie Coulman',\n          post: 'VP Quality Control',\n          email: 'bcoulman1@yolasite.com',\n          city: 'Hinigaran',\n          start_date: '05/20/2018',\n          salary: '$13633.69',\n          age: '63',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 3,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Stella Ganderton',\n          post: 'Operator',\n          email: 'sganderton2@tuttocitta.it',\n          city: 'Golcowa',\n          start_date: '03/24/2018',\n          salary: '$13076.28',\n          age: '66',\n          experience: '6 Years',\n          status: 5,\n        },\n        {\n          id: 4,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/3-small.png'),\n          full_name: 'Dorolice Crossman',\n          post: 'Cost Accountant',\n          email: 'dcrossman3@google.co.jp',\n          city: 'Paquera',\n          start_date: '12/03/2017',\n          salary: '$12336.17',\n          age: '22',\n          experience: '2 Years',\n          status: 2,\n        },\n        {\n          id: 5,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/4-small.png'),\n          full_name: 'Harmonia Nisius',\n          post: 'Senior Cost Accountant',\n          email: 'hnisius4@gnu.org',\n          city: 'Lucan',\n          start_date: '08/25/2017',\n          salary: '$10909.52',\n          age: '33',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 6,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/5-small.png'),\n          full_name: 'Genevra Honeywood',\n          post: 'Geologist',\n          email: 'ghoneywood5@narod.ru',\n          city: 'Maofan',\n          start_date: '06/01/2017',\n          salary: '$17803.80',\n          age: '61',\n          experience: '1 Year',\n          status: 1,\n        },\n        {\n          id: 7,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/7-small.png'),\n          full_name: 'Eileen Diehn',\n          post: 'Environmental Specialist',\n          email: 'ediehn6@163.com',\n          city: 'Lampuyang',\n          start_date: '10/15/2017',\n          salary: '$18991.67',\n          age: '59',\n          experience: '9 Years',\n          status: 3,\n        },\n        {\n          id: 8,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Richardo Aldren',\n          post: 'Senior Sales Associate',\n          email: 'raldren7@mtv.com',\n          city: 'Skoghall',\n          start_date: '11/05/2016',\n          salary: '$19230.13',\n          age: '55',\n          experience: '5 Years',\n          status: 3,\n        },\n        {\n          id: 9,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/2-small.png'),\n          full_name: 'Allyson Moakler',\n          post: 'Safety Technician',\n          email: 'amoakler8@shareasale.com',\n          city: 'Mogilany',\n          start_date: '12/29/2018',\n          salary: '$11677.32',\n          age: '39',\n          experience: '9 Years',\n          status: 5,\n        },\n        {\n          id: 10,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/6-small.png'),\n          full_name: 'Merline Penhalewick',\n          post: 'Junior Executive',\n          email: 'mpenhalewick9@php.net',\n          city: 'Kanuma',\n          start_date: '04/19/2019',\n          salary: '$15939.52',\n          age: '23',\n          experience: '3 Years',\n          status: 2,\n        },\n      ],\n      status: [{\n        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',\n      },\n      {\n        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',\n      }],\n    }\n  },\n}\n</script>\n";
var codeRowSelectSupport = "\n<template>\n  <div>\n    <b-form-group\n      label=\"Selection mode:\"\n      label-cols-md=\"4\"\n    >\n      <!-- <b-form-select\n        v-model=\"selectMode\"\n        :options=\"modes\"\n      /> -->\n      <v-select\n        v-model=\"selectMode\"\n        label=\"title\"\n        :options=\"modes\"\n      />\n    </b-form-group>\n\n    <b-table\n      ref=\"selectableTable\"\n      selectable\n      :select-mode=\"selectMode\"\n      :items=\"items\"\n      :fields=\"fields\"\n      responsive=\"sm\"\n      @row-selected=\"onRowSelected\"\n    >\n      <!-- Example scoped slot for select state illustrative purposes -->\n      <template #cell(selected)=\"{ rowSelected }\">\n        <template v-if=\"rowSelected\">\n          <i class=\"feather icon-disc primary\" />\n        </template>\n\n        <template v-else>\n          <i class=\"feather icon-circle\" />\n        </template>\n      </template>\n\n      <template #cell(avatar)=\"data\">\n        <b-avatar :src=\"data.value\" />\n      </template>\n\n       <template #cell(status)=\"data\">\n        <b-badge :variant=\"status[1][data.value]\">\n          {{ status[0][data.value] }}\n        </b-badge>\n      </template>\n    </b-table>\n\n    <b-button\n      size=\"sm\"\n      class=\"mr-1\"\n      variant=\"primary\"\n      @click=\"selectAllRows\"\n    >\n      Select all\n    </b-button>\n    <b-button\n      size=\"sm\"\n      class=\"mr-1\"\n      variant=\"primary\"\n      @click=\"clearSelected\"\n    >\n      Clear selected\n    </b-button>\n    <b-button\n      size=\"sm\"\n      variant=\"primary\"\n      class=\"mr-1\"\n      @click=\"selectThirdRow\"\n    >\n      Select 3rd row\n    </b-button>\n    <b-button\n      variant=\"primary\"\n      size=\"sm\"\n      class=\"mr-1\"\n      @click=\"unselectThirdRow\"\n    >\n      Unselect 3rd row\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {\n  BTable, BButton, BFormGroup, BAvatar, BBadge,\n} from 'bootstrap-vue'\nimport vSelect from 'vue-select'\n\nexport default {\n  components: {\n    BTable,\n    BButton,\n    BFormGroup,\n    BAvatar,\n    BBadge,\n    vSelect,\n  },\n  data() {\n    return {\n      // selectedCheck: false,\n      modes: ['multi', 'single', 'range'],\n      fields: ['selected', 'id', { key: 'avatar', label: 'Avatar' }, 'full_name', 'post', 'email', 'city', 'start_date', 'salary', 'age', 'experience', { key: 'status', label: 'Status' }],\n      items: [\n        {\n          id: 1,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/10-small.png'),\n          full_name: \"Korrie O'Crevy\",\n          post: 'Nuclear Power Engineer',\n          email: 'kocrevy0@thetimes.co.uk',\n          city: 'Krasnosilka',\n          start_date: '09/23/2016',\n          salary: '$23896.35',\n          age: '61',\n          experience: '1 Year',\n          status: 2,\n        },\n        {\n          id: 2,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/1-small.png'),\n          full_name: 'Bailie Coulman',\n          post: 'VP Quality Control',\n          email: 'bcoulman1@yolasite.com',\n          city: 'Hinigaran',\n          start_date: '05/20/2018',\n          salary: '$13633.69',\n          age: '63',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 3,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Stella Ganderton',\n          post: 'Operator',\n          email: 'sganderton2@tuttocitta.it',\n          city: 'Golcowa',\n          start_date: '03/24/2018',\n          salary: '$13076.28',\n          age: '66',\n          experience: '6 Years',\n          status: 5,\n        },\n        {\n          id: 4,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/3-small.png'),\n          full_name: 'Dorolice Crossman',\n          post: 'Cost Accountant',\n          email: 'dcrossman3@google.co.jp',\n          city: 'Paquera',\n          start_date: '12/03/2017',\n          salary: '$12336.17',\n          age: '22',\n          experience: '2 Years',\n          status: 2,\n        },\n        {\n          id: 5,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/4-small.png'),\n          full_name: 'Harmonia Nisius',\n          post: 'Senior Cost Accountant',\n          email: 'hnisius4@gnu.org',\n          city: 'Lucan',\n          start_date: '08/25/2017',\n          salary: '$10909.52',\n          age: '33',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 6,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/5-small.png'),\n          full_name: 'Genevra Honeywood',\n          post: 'Geologist',\n          email: 'ghoneywood5@narod.ru',\n          city: 'Maofan',\n          start_date: '06/01/2017',\n          salary: '$17803.80',\n          status: [{\n        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',\n      },\n      {\n        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',\n      }],age: '61',\n          experience: '1 Year',\n          status: 1,\n        },\n        {\n          id: 7,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/7-small.png'),\n          full_name: 'Eileen Diehn',\n          post: 'Environmental Specialist',\n          email: 'ediehn6@163.com',\n          city: 'Lampuyang',\n          start_date: '10/15/2017',\n          salary: '$18991.67',\n          age: '59',\n          experience: '9 Years',\n          status: 3,\n        },\n        {\n          id: 8,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Richardo Aldren',\n          post: 'Senior Sales Associate',\n          email: 'raldren7@mtv.com',\n          city: 'Skoghall',\n          start_date: '11/05/2016',\n          salary: '$19230.13',\n          age: '55',\n          experience: '5 Years',\n          status: 3,\n        },\n        {\n          id: 9,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/2-small.png'),\n          full_name: 'Allyson Moakler',\n          post: 'Safety Technician',\n          email: 'amoakler8@shareasale.com',\n          city: 'Mogilany',\n          start_date: '12/29/2018',\n          salary: '$11677.32',\n          age: '39',\n          experience: '9 Years',\n          status: 5,\n        },\n        {\n          id: 10,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/6-small.png'),\n          full_name: 'Merline Penhalewick',\n          post: 'Junior Executive',\n          email: 'mpenhalewick9@php.net',\n          city: 'Kanuma',\n          start_date: '04/19/2019',\n          salary: '$15939.52',\n          age: '23',\n          experience: '3 Years',\n          status: 2,\n        },\n      ],\n      status: [{\n        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',\n      },\n      {\n        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',\n      }],\n      selectMode: 'multi',\n      selected: [],\n    }\n  },\n  methods: {\n    onRowSelected(items) {\n      this.selected = items\n    },\n    selectAllRows() {\n      this.$refs.selectableTable.selectAllRows()\n    },\n    clearSelected() {\n      this.$refs.selectableTable.clearSelected()\n    },\n    selectThirdRow() {\n      // Rows are indexed from 0, so the third row is index 2\n      this.$refs.selectableTable.selectRow(2)\n    },\n    unselectThirdRow() {\n      // Rows are indexed from 0, so the third row is index 2\n      this.$refs.selectableTable.unselectRow(2)\n    },\n  },\n}\n</script>\n\n<style lang=\"scss\">\n.b-table-selectable{\n  .feather{\n    font-size: 1.3rem;\n  }\n}\n\n</style>\n";
var codeKitchenSink = "\n<template>\n  <b-row>\n    <b-col\n      md=\"2\"\n      sm=\"4\"\n      class=\"my-1\"\n    >\n      <b-form-group\n        class=\"mb-0\"\n      >\n        <label class=\"d-inline-block text-sm-left mr-50\">Per page</label>\n        <b-form-select\n          id=\"perPageSelect\"\n          v-model=\"perPage\"\n          size=\"sm\"\n          :options=\"pageOptions\"\n          class=\"w-50\"\n        />\n      </b-form-group>\n    </b-col>\n    <b-col\n      md=\"4\"\n      sm=\"8\"\n      class=\"my-1\"\n    >\n      <b-form-group\n        label=\"Sort\"\n        label-cols-sm=\"3\"\n        label-align-sm=\"right\"\n        label-size=\"sm\"\n        label-for=\"sortBySelect\"\n        class=\"mb-0\"\n      >\n        <b-input-group size=\"sm\">\n          <b-form-select\n            id=\"sortBySelect\"\n            v-model=\"sortBy\"\n            :options=\"sortOptions\"\n            class=\"w-75\"\n          >\n            <template v-slot:first>\n              <option value=\"\">\n                -- none --\n              </option>\n            </template>\n          </b-form-select>\n          <b-form-select\n            v-model=\"sortDesc\"\n            size=\"sm\"\n            :disabled=\"!sortBy\"\n            class=\"w-25\"\n          >\n            <option :value=\"false\">\n              Asc\n            </option>\n            <option :value=\"true\">\n              Desc\n            </option>\n          </b-form-select>\n        </b-input-group>\n      </b-form-group>\n    </b-col>\n    <b-col\n      md=\"6\"\n      class=\"my-1\"\n    >\n      <b-form-group\n        label=\"Filter\"\n        label-cols-sm=\"3\"\n        label-align-sm=\"right\"\n        label-size=\"sm\"\n        label-for=\"filterInput\"\n        class=\"mb-0\"\n      >\n        <b-input-group size=\"sm\">\n          <b-form-input\n            id=\"filterInput\"\n            v-model=\"filter\"\n            type=\"search\"\n            placeholder=\"Type to Search\"\n          />\n          <b-input-group-append>\n            <b-button\n              :disabled=\"!filter\"\n              @click=\"filter = ''\"\n            >\n              Clear\n            </b-button>\n          </b-input-group-append>\n        </b-input-group>\n      </b-form-group>\n    </b-col>\n\n    <b-col cols=\"12\">\n      <b-table\n        striped\n        hover\n        responsive\n        :per-page=\"perPage\"\n        :current-page=\"currentPage\"\n        :items=\"items\"\n        :fields=\"fields\"\n        :sort-by.sync=\"sortBy\"\n        :sort-desc.sync=\"sortDesc\"\n        :sort-direction=\"sortDirection\"\n        :filter=\"filter\"\n        :filter-included-fields=\"filterOn\"\n        @filtered=\"onFiltered\"\n      >\n        <template #cell(avatar)=\"data\">\n          <b-avatar :src=\"data.value\" />\n        </template>\n\n        <template #cell(status)=\"data\">\n          <b-badge :variant=\"status[1][data.value]\">\n            {{ status[0][data.value] }}\n          </b-badge>\n        </template>\n      </b-table>\n    </b-col>\n\n    <b-col\n      cols=\"12\"\n    >\n      <b-pagination\n        v-model=\"currentPage\"\n        :total-rows=\"totalRows\"\n        :per-page=\"perPage\"\n        align=\"center\"\n        size=\"sm\"\n        class=\"my-0\"\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {\n  BTable, BAvatar, BBadge, BRow, BCol, BFormGroup, BFormSelect, BPagination, BInputGroup, BFormInput, BInputGroupAppend, BButton,\n} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BTable,\n    BAvatar,\n    BBadge,\n    BRow,\n    BCol,\n    BFormGroup,\n    BFormSelect,\n    BPagination,\n    BInputGroup,\n    BFormInput,\n    BInputGroupAppend,\n    BButton,\n  },\n  data() {\n    return {\n      perPage: 5,\n      pageOptions: [3, 5, 10],\n      totalRows: 1,\n      currentPage: 1,\n      sortBy: '',\n      sortDesc: false,\n      sortDirection: 'asc',\n      filter: null,\n      filterOn: [],\n      infoModal: {\n        id: 'info-modal',\n        title: '',\n        content: '',\n      },\n      fields: [\n        {\n          key: 'id', label: 'Id',\n        },\n        {\n          key: 'avatar', label: 'Avatar',\n        },\n        { key: 'full_name', label: 'Full Name', sortable: true },\n        { key: 'post', label: 'Post', sortable: true },\n        'email',\n        'city',\n        'start_date',\n        'salary',\n        'age',\n        'experience',\n        { key: 'status', label: 'Status', sortable: true },\n      ],\n      items: [\n        {\n          id: 1,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/10-small.png'),\n          full_name: \"Korrie O'Crevy\",\n          post: 'Nuclear Power Engineer',\n          email: 'kocrevy0@thetimes.co.uk',\n          city: 'Krasnosilka',\n          start_date: '09/23/2016',\n          salary: '$23896.35',\n          age: '61',\n          experience: '1 Year',\n          status: 2,\n        },\n        {\n          id: 2,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/1-small.png'),\n          full_name: 'Bailie Coulman',\n          post: 'VP Quality Control',\n          email: 'bcoulman1@yolasite.com',\n          city: 'Hinigaran',\n          start_date: '05/20/2018',\n          salary: '$13633.69',\n          age: '63',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 3,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Stella Ganderton',\n          post: 'Operator',\n          email: 'sganderton2@tuttocitta.it',\n          city: 'Golcowa',\n          start_date: '03/24/2018',\n          salary: '$13076.28',\n          age: '66',\n          experience: '6 Years',\n          status: 5,\n        },\n        {\n          id: 4,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/3-small.png'),\n          full_name: 'Dorolice Crossman',\n          post: 'Cost Accountant',\n          email: 'dcrossman3@google.co.jp',\n          city: 'Paquera',\n          start_date: '12/03/2017',\n          salary: '$12336.17',\n          age: '22',\n          experience: '2 Years',\n          status: 2,\n        },\n        {\n          id: 5,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/4-small.png'),\n          full_name: 'Harmonia Nisius',\n          post: 'Senior Cost Accountant',\n          email: 'hnisius4@gnu.org',\n          city: 'Lucan',\n          start_date: '08/25/2017',\n          salary: '$10909.52',\n          age: '33',\n          experience: '3 Years',\n          status: 2,\n        },\n        {\n          id: 6,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/5-small.png'),\n          full_name: 'Genevra Honeywood',\n          post: 'Geologist',\n          email: 'ghoneywood5@narod.ru',\n          city: 'Maofan',\n          start_date: '06/01/2017',\n          salary: '$17803.80',\n          age: '61',\n          experience: '1 Year',\n          status: 1,\n        },\n        {\n          id: 7,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/7-small.png'),\n          full_name: 'Eileen Diehn',\n          post: 'Environmental Specialist',\n          email: 'ediehn6@163.com',\n          city: 'Lampuyang',\n          start_date: '10/15/2017',\n          salary: '$18991.67',\n          age: '59',\n          experience: '9 Years',\n          status: 3,\n        },\n        {\n          id: 8,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/9-small.png'),\n          full_name: 'Richardo Aldren',\n          post: 'Senior Sales Associate',\n          email: 'raldren7@mtv.com',\n          city: 'Skoghall',\n          start_date: '11/05/2016',\n          salary: '$19230.13',\n          age: '55',\n          experience: '5 Years',\n          status: 3,\n        },\n        {\n          id: 9,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/2-small.png'),\n          full_name: 'Allyson Moakler',\n          post: 'Safety Technician',\n          email: 'amoakler8@shareasale.com',\n          city: 'Mogilany',\n          start_date: '12/29/2018',\n          salary: '$11677.32',\n          age: '39',\n          experience: '9 Years',\n          status: 5,\n        },\n        {\n          id: 10,\n          // eslint-disable-next-line global-require\n          avatar: require('@/assets/images/avatars/6-small.png'),\n          full_name: 'Merline Penhalewick',\n          post: 'Junior Executive',\n          email: 'mpenhalewick9@php.net',\n          city: 'Kanuma',\n          start_date: '04/19/2019',\n          salary: '$15939.52',\n          age: '23',\n          experience: '3 Years',\n          status: 2,\n        },\n      ],\n      status: [{\n        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',\n      },\n      {\n        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',\n      }],\n    }\n  },\n  computed: {\n    sortOptions() {\n      // Create an options list from our fields\n      return this.fields\n        .filter(f => f.sortable)\n        .map(f => ({ text: f.label, value: f.key }))\n    },\n  },\n  mounted() {\n    // Set the initial number of items\n    this.totalRows = this.items.length\n  },\n  methods: {\n    info(item, index, button) {\n      this.infoModal.title = `Row index: ${index}`\n      this.infoModal.content = JSON.stringify(item, null, 2)\n      this.$root.$emit('bv::show::modal', this.infoModal.id, button)\n    },\n    resetInfoModal() {\n      this.infoModal.title = ''\n      this.infoModal.content = ''\n    },\n    onFiltered(filteredItems) {\n      // Trigger pagination to update the number of buttons/pages due to filtering\n      this.totalRows = filteredItems.length\n      this.currentPage = 1\n    },\n  },\n}\n</script>\n";
var codeLight = "\n<template>\n  <b-table-lite\n    hover\n    :items=\"items\"\n  />\n</template>\n\n<script>\nimport BCardCode from '@core/components/b-card-code/BCardCode.vue'\nimport { BTableLite } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BTableLite,\n  },\n  data() {\n    return {\n      items: [\n        {\n          age: 40, first_name: 'Dickerson', last_name: 'Macdonald', Occupation: 'Job',\n        },\n        {\n          age: 21, first_name: 'Larsen', last_name: 'Shaw', Occupation: 'Job',\n        },\n        {\n          age: 89, first_name: 'Geneva', last_name: 'Wilson', Occupation: 'Bussiness',\n        },\n        {\n          age: 38, first_name: 'Jami', last_name: 'Carney', Occupation: 'Bussiness',\n        },\n        {\n          age: 40, first_name: 'James', last_name: 'Thomson', Occupation: 'Job',\n        },\n      ],\n    }\n  },\n}\n</script>\n";
var codeSimple = "\n<template>\n  <div>\n    <b-table-simple\n      hover\n      small\n      caption-top\n      responsive\n    >\n      <caption>Items sold in August, grouped by Country and City:</caption>\n      <colgroup><col><col></colgroup>\n      <colgroup><col><col><col></colgroup>\n      <colgroup><col><col></colgroup>\n      <b-thead head-variant=\"light\">\n        <b-tr>\n          <b-th colspan=\"2\">\n            Region\n          </b-th>\n          <b-th colspan=\"3\">\n            Clothes\n          </b-th>\n          <b-th colspan=\"2\">\n            Accessories\n          </b-th>\n        </b-tr>\n        <b-tr>\n          <b-th>Country</b-th>\n          <b-th>City</b-th>\n          <b-th>Trousers</b-th>\n          <b-th>Skirts</b-th>\n          <b-th>Dresses</b-th>\n          <b-th>Bracelets</b-th>\n          <b-th>Rings</b-th>\n        </b-tr>\n      </b-thead>\n      <b-tbody>\n        <b-tr>\n          <b-th rowspan=\"3\">\n            Belgium\n          </b-th>\n          <b-th class=\"text-right\">\n            Antwerp\n          </b-th>\n          <b-td>56</b-td>\n          <b-td>22</b-td>\n          <b-td>43</b-td>\n          <b-td variant=\"success\">\n            72\n          </b-td>\n          <b-td>23</b-td>\n        </b-tr>\n        <b-tr>\n          <b-th class=\"text-right\">\n            Gent\n          </b-th>\n          <b-td>46</b-td>\n          <b-td variant=\"warning\">\n            18\n          </b-td>\n          <b-td>50</b-td>\n          <b-td>61</b-td>\n          <b-td variant=\"danger\">\n            15\n          </b-td>\n        </b-tr>\n        <b-tr>\n          <b-th class=\"text-right\">\n            Brussels\n          </b-th>\n          <b-td>51</b-td>\n          <b-td>27</b-td>\n          <b-td>38</b-td>\n          <b-td>69</b-td>\n          <b-td>28</b-td>\n        </b-tr>\n        <b-tr>\n          <b-th rowspan=\"2\">\n            The Netherlands\n          </b-th>\n          <b-th class=\"text-right\">\n            Amsterdam\n          </b-th>\n          <b-td variant=\"success\">\n            89\n          </b-td>\n          <b-td>34</b-td>\n          <b-td>69</b-td>\n          <b-td>85</b-td>\n          <b-td>38</b-td>\n        </b-tr>\n        <b-tr>\n          <b-th class=\"text-right\">\n            Utrecht\n          </b-th>\n          <b-td>80</b-td>\n          <b-td variant=\"danger\">\n            12\n          </b-td>\n          <b-td>43</b-td>\n          <b-td>36</b-td>\n          <b-td variant=\"warning\">\n            19\n          </b-td>\n        </b-tr>\n      </b-tbody>\n      <b-tfoot>\n        <b-tr>\n          <b-td\n            colspan=\"7\"\n            variant=\"secondary\"\n            class=\"text-right\"\n          >\n            Total Rows: <b>5</b>\n          </b-td>\n        </b-tr>\n      </b-tfoot>\n    </b-table-simple>\n  </div>\n</template>\n";

/***/ }),

/***/ "./frontend/src/views/table/bs-table/userLevel.vue":
/*!*********************************************************!*\
  !*** ./frontend/src/views/table/bs-table/userLevel.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userLevel_vue_vue_type_template_id_250ea7e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userLevel.vue?vue&type=template&id=250ea7e8& */ "./frontend/src/views/table/bs-table/userLevel.vue?vue&type=template&id=250ea7e8&");
/* harmony import */ var _userLevel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userLevel.vue?vue&type=script&lang=js& */ "./frontend/src/views/table/bs-table/userLevel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _userLevel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userLevel.vue?vue&type=style&index=0&lang=scss& */ "./frontend/src/views/table/bs-table/userLevel.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _userLevel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _userLevel_vue_vue_type_template_id_250ea7e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _userLevel_vue_vue_type_template_id_250ea7e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/table/bs-table/userLevel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/table/bs-table/userLevel.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./frontend/src/views/table/bs-table/userLevel.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userLevel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./userLevel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/table/bs-table/userLevel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userLevel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/table/bs-table/userLevel.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./frontend/src/views/table/bs-table/userLevel.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userLevel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./userLevel.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/table/bs-table/userLevel.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userLevel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userLevel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userLevel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userLevel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/table/bs-table/userLevel.vue?vue&type=template&id=250ea7e8&":
/*!****************************************************************************************!*\
  !*** ./frontend/src/views/table/bs-table/userLevel.vue?vue&type=template&id=250ea7e8& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userLevel_vue_vue_type_template_id_250ea7e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./userLevel.vue?vue&type=template&id=250ea7e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/table/bs-table/userLevel.vue?vue&type=template&id=250ea7e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userLevel_vue_vue_type_template_id_250ea7e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userLevel_vue_vue_type_template_id_250ea7e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/table/bs-table/userLevelTable.vue":
/*!**************************************************************!*\
  !*** ./frontend/src/views/table/bs-table/userLevelTable.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userLevelTable_vue_vue_type_template_id_0bd15814___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userLevelTable.vue?vue&type=template&id=0bd15814& */ "./frontend/src/views/table/bs-table/userLevelTable.vue?vue&type=template&id=0bd15814&");
/* harmony import */ var _userLevelTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userLevelTable.vue?vue&type=script&lang=js& */ "./frontend/src/views/table/bs-table/userLevelTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _userLevelTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _userLevelTable_vue_vue_type_template_id_0bd15814___WEBPACK_IMPORTED_MODULE_0__["render"],
  _userLevelTable_vue_vue_type_template_id_0bd15814___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/table/bs-table/userLevelTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/table/bs-table/userLevelTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./frontend/src/views/table/bs-table/userLevelTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userLevelTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./userLevelTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/table/bs-table/userLevelTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userLevelTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/table/bs-table/userLevelTable.vue?vue&type=template&id=0bd15814&":
/*!*********************************************************************************************!*\
  !*** ./frontend/src/views/table/bs-table/userLevelTable.vue?vue&type=template&id=0bd15814& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userLevelTable_vue_vue_type_template_id_0bd15814___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./userLevelTable.vue?vue&type=template&id=0bd15814& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/table/bs-table/userLevelTable.vue?vue&type=template&id=0bd15814&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userLevelTable_vue_vue_type_template_id_0bd15814___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userLevelTable_vue_vue_type_template_id_0bd15814___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/table/bs-table/userLevel.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/table/bs-table/userLevel.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _userLevelTable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userLevelTable.vue */ "./frontend/src/views/table/bs-table/userLevelTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*import TableBasic from './TableBasic.vue'
import TableStyleOptions from './TableStyleOptions.vue'
import TableRowColStyle from './TableRowColStyle.vue'
import TableResponsive from './TableResponsive.vue'
import TableFormatterCallback from './TableFormatterCallback.vue'
import TableCustomRender from './TableCustomRender.vue'
import TableStickyColumnsHeaders from './TableStickyColumnsHeaders.vue'*/


/*
import TableRowSelectSupport from './TableRowSelectSupport.vue'
import TableLightWeight from './TableLightWeight.vue'
import TableSimple from './TableSimple.vue'
import TableKitchenSink from './TableKitchenSink.vue'*/

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],

    /*TableBasic,
    TableStyleOptions,
    TableRowColStyle,
    TableResponsive,
    TableFormatterCallback,
    TableCustomRender,
    TableStickyColumnsHeaders,*/
    TableRowdetailsSupport: _userLevelTable_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    /*TableRowSelectSupport,
    TableLightWeight,
    TableSimple,
    TableKitchenSink,*/

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/table/bs-table/userLevelTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/table/bs-table/userLevelTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./frontend/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./frontend/src/views/table/bs-table/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTable"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAvatar"]
  },
  data: function data() {
    return {
      fields: ['show_details', 'id', {
        key: 'avatar',
        label: 'Avatar'
      }, 'full_name', 'post', 'email', 'city', 'start_date', 'salary', 'age', 'experience', {
        key: 'status',
        label: 'Status'
      }],

      /* eslint-disable global-require */
      items: [{
        id: 1,
        avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./frontend/src/assets/images/avatars/10-small.png"),
        full_name: "Korrie O'Crevy",
        post: 'Nuclear Power Engineer',
        email: 'kocrevy0@thetimes.co.uk',
        city: 'Krasnosilka',
        start_date: '09/23/2016',
        salary: '$23896.35',
        age: '61',
        experience: '1 Year',
        status: 2
      }, {
        id: 2,
        avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./frontend/src/assets/images/avatars/1-small.png"),
        full_name: 'Bailie Coulman',
        post: 'VP Quality Control',
        email: 'bcoulman1@yolasite.com',
        city: 'Hinigaran',
        start_date: '05/20/2018',
        salary: '$13633.69',
        age: '63',
        experience: '3 Years',
        status: 2
      }, {
        id: 3,
        avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./frontend/src/assets/images/avatars/9-small.png"),
        full_name: 'Stella Ganderton',
        post: 'Operator',
        email: 'sganderton2@tuttocitta.it',
        city: 'Golcowa',
        start_date: '03/24/2018',
        salary: '$13076.28',
        age: '66',
        experience: '6 Years',
        status: 5
      }, {
        id: 4,
        avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./frontend/src/assets/images/avatars/3-small.png"),
        full_name: 'Dorolice Crossman',
        post: 'Cost Accountant',
        email: 'dcrossman3@google.co.jp',
        city: 'Paquera',
        start_date: '12/03/2017',
        salary: '$12336.17',
        age: '22',
        experience: '2 Years',
        status: 2
      }, {
        id: 5,
        avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./frontend/src/assets/images/avatars/4-small.png"),
        full_name: 'Harmonia Nisius',
        post: 'Senior Cost Accountant',
        email: 'hnisius4@gnu.org',
        city: 'Lucan',
        start_date: '08/25/2017',
        salary: '$10909.52',
        age: '33',
        experience: '3 Years',
        status: 2
      }, {
        id: 6,
        avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./frontend/src/assets/images/avatars/5-small.png"),
        full_name: 'Genevra Honeywood',
        post: 'Geologist',
        email: 'ghoneywood5@narod.ru',
        city: 'Maofan',
        start_date: '06/01/2017',
        salary: '$17803.80',
        age: '61',
        experience: '1 Year',
        status: 1
      }, {
        id: 7,
        avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./frontend/src/assets/images/avatars/7-small.png"),
        full_name: 'Eileen Diehn',
        post: 'Environmental Specialist',
        email: 'ediehn6@163.com',
        city: 'Lampuyang',
        start_date: '10/15/2017',
        salary: '$18991.67',
        age: '59',
        experience: '9 Years',
        status: 3
      }, {
        id: 8,
        avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./frontend/src/assets/images/avatars/9-small.png"),
        full_name: 'Richardo Aldren',
        post: 'Senior Sales Associate',
        email: 'raldren7@mtv.com',
        city: 'Skoghall',
        start_date: '11/05/2016',
        salary: '$19230.13',
        age: '55',
        experience: '5 Years',
        status: 3
      }, {
        id: 9,
        avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./frontend/src/assets/images/avatars/2-small.png"),
        full_name: 'Allyson Moakler',
        post: 'Safety Technician',
        email: 'amoakler8@shareasale.com',
        city: 'Mogilany',
        start_date: '12/29/2018',
        salary: '$11677.32',
        age: '39',
        experience: '9 Years',
        status: 5
      }, {
        id: 10,
        avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./frontend/src/assets/images/avatars/6-small.png"),
        full_name: 'Merline Penhalewick',
        post: 'Junior Executive',
        email: 'mpenhalewick9@php.net',
        city: 'Kanuma',
        start_date: '04/19/2019',
        salary: '$15939.52',
        age: '23',
        experience: '3 Years',
        status: 2
      }],

      /* eslint-disable global-require */
      status: [{
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied'
      }, {
        1: 'light-primary',
        2: 'light-success',
        3: 'light-danger',
        4: 'light-warning',
        5: 'light-info'
      }],
      codeRowDetailsSupport: _code__WEBPACK_IMPORTED_MODULE_2__["codeRowDetailsSupport"]
    };
  },
  mounted: function mounted() {
    this.getUserLevels();
  },
  methods: {
    getUserLevels: function getUserLevels() {
      axios.get('/getUserLevel').then(function (response) {
        console.log('response', response.data.data); // TODO
      })["catch"](function (error) {
        console.error(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/table/bs-table/userLevel.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/table/bs-table/userLevel.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  -webkit-transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n[dir] .vs__fade-enter-active, [dir] .vs__fade-leave-active {\n  -webkit-transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  -webkit-transform: scale(1);\n  transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  -webkit-transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855), -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  -webkit-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n          -webkit-transform: scale(1);\n                  transform: scale(1);\n  -webkit-transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n          -webkit-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n                  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  -webkit-transform: rotate(180deg) scale(1);\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  -webkit-transform: rotate(-180deg) scale(1);\n          transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  -webkit-box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n          -webkit-box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n                  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n}\n[dir] .vs__dropdown-option:hover {\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #06608f !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(6, 96, 143, 0.12);\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n}\n[dir] .vs__dropdown-option--disabled:hover {\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #06608f;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  -webkit-box-shadow: none;\n  width: 0;\n  max-width: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::-webkit-input-placeholder {\n  color: #6e6b7b;\n}\n.vs__search::-moz-placeholder {\n  color: #6e6b7b;\n}\n.vs__search:-ms-input-placeholder {\n  color: #6e6b7b;\n}\n.vs__search::-ms-input-placeholder {\n  color: #6e6b7b;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search:hover {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  -ms-flex-item-align: center;\n      align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  -webkit-transform: translateZ(0);\n  -webkit-transition: opacity 0.1s;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n          -webkit-transform: translateZ(0);\n                  transform: translateZ(0);\n  -webkit-transition: opacity 0.1s;\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  -webkit-animation:  vSelectSpinner-ltr 1.1s infinite linear;\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  -webkit-animation:  vSelectSpinner-rtl 1.1s infinite linear;\n          animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n  -webkit-transition: all 0.25s ease-in-out;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #06608f !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #06608f;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #06608f !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: -webkit-transform 0.2s ease;\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n  -webkit-transition: -webkit-transform 0.2s ease;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  -webkit-transform: translateX(5px);\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  -webkit-transform: translateX(-5px);\n          transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  -webkit-transform: scale(0.8);\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n          -webkit-transform: scale(0.8);\n                  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n.vs--open .vs__dropdown-toggle {\n  -webkit-box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #06608f;\n  border-bottom-color: #06608f;\n          -webkit-box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n                  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  -webkit-transform: scale(1) !important;\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n          -webkit-transform: scale(1) !important;\n                  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::-webkit-input-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input::-moz-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input:-ms-input-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input::-ms-input-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #06608f;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(6, 96, 143, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/table/bs-table/userLevel.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/table/bs-table/userLevel.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./userLevel.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/table/bs-table/userLevel.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/table/bs-table/userLevel.vue?vue&type=template&id=250ea7e8&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/table/bs-table/userLevel.vue?vue&type=template&id=250ea7e8& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-row",
    [
      _c(
        "b-col",
        { attrs: { cols: "12" } },
        [_c("table-rowdetails-support")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/table/bs-table/userLevelTable.vue?vue&type=template&id=0bd15814&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/table/bs-table/userLevelTable.vue?vue&type=template&id=0bd15814& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card-code",
    {
      attrs: { title: "Row details support", "no-body": "" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function() {
            return [
              _vm._v("\n    " + _vm._s(_vm.codeRowDetailsSupport) + "\n  ")
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _c(
        "div",
        [
          _c("b-table", {
            staticClass: "mb-0",
            attrs: {
              items: _vm.items,
              fields: _vm.fields,
              striped: "",
              responsive: ""
            },
            scopedSlots: _vm._u([
              {
                key: "cell(show_details)",
                fn: function(row) {
                  return [
                    _c(
                      "b-form-checkbox",
                      {
                        on: { change: row.toggleDetails },
                        model: {
                          value: row.detailsShowing,
                          callback: function($$v) {
                            _vm.$set(row, "detailsShowing", $$v)
                          },
                          expression: "row.detailsShowing"
                        }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(row.detailsShowing ? "Hide" : "Show") +
                            "\n        "
                        )
                      ]
                    )
                  ]
                }
              },
              {
                key: "row-details",
                fn: function(row) {
                  return [
                    _c(
                      "b-card",
                      [
                        _c(
                          "b-row",
                          { staticClass: "mb-2" },
                          [
                            _c(
                              "b-col",
                              { staticClass: "mb-1", attrs: { md: "4" } },
                              [
                                _c("strong", [_vm._v("Full Name : ")]),
                                _vm._v(
                                  _vm._s(row.item.full_name) + "\n            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { staticClass: "mb-1", attrs: { md: "4" } },
                              [
                                _c("strong", [_vm._v("Post : ")]),
                                _vm._v(_vm._s(row.item.post) + "\n            ")
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { staticClass: "mb-1", attrs: { md: "4" } },
                              [
                                _c("strong", [_vm._v("Email : ")]),
                                _vm._v(
                                  _vm._s(row.item.email) + "\n            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { staticClass: "mb-1", attrs: { md: "4" } },
                              [
                                _c("strong", [_vm._v("City : ")]),
                                _vm._v(_vm._s(row.item.city) + "\n            ")
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { staticClass: "mb-1", attrs: { md: "4" } },
                              [
                                _c("strong", [_vm._v("Salary : ")]),
                                _vm._v(
                                  _vm._s(row.item.salary) + "\n            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { staticClass: "mb-1", attrs: { md: "4" } },
                              [
                                _c("strong", [_vm._v("Age : ")]),
                                _vm._v(_vm._s(row.item.age) + "\n            ")
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            attrs: { size: "sm", variant: "outline-secondary" },
                            on: { click: row.toggleDetails }
                          },
                          [_vm._v("\n            Hide Details\n          ")]
                        )
                      ],
                      1
                    )
                  ]
                }
              },
              {
                key: "cell(avatar)",
                fn: function(data) {
                  return [_c("b-avatar", { attrs: { src: data.value } })]
                }
              },
              {
                key: "cell(status)",
                fn: function(data) {
                  return [
                    _c(
                      "b-badge",
                      { attrs: { variant: _vm.status[1][data.value] } },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.status[0][data.value]) +
                            "\n        "
                        )
                      ]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);