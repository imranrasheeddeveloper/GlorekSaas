<template>
  <b-row class="match-height">
    <b-col lg="12">
      <edit-company-view />
    </b-col>
    
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import EditCompanyView from './editcompanyView.vue'

export default {
  components: {
    BRow,
    BCol,

    EditCompanyView,
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-autosuggest.scss';
</style>


