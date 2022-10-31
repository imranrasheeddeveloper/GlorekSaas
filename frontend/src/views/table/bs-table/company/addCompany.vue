<template>
  <b-row class="match-height">
    <b-col lg="12">
      <create-company-view />
    </b-col>
    
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import CreateCompanyView from './addCompanyView.vue'

export default {
  components: {
    BRow,
    BCol,

    CreateCompanyView,
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-autosuggest.scss';
</style>


