<template>
  
    <div>

      <!-- search input -->
      <div class="custom-search d-flex justify-content-between">
        <b-form-group>
          <div class="d-flex align-items-center">
            <!-- <label class="mr-1">Search</label> -->

            <b-input-group>
              <b-input-group-prepend>
                <b-button variant="outline-primary" @click="page=1, getCompanies()">
                  <feather-icon icon="SearchIcon" />
                </b-button>
              </b-input-group-prepend>
              <b-form-input
                v-model="searchTerm"
                placeholder="Search"
                type="text"
                class=" d-inline-block"
                @keyup="searchTimeOut()"
              />
              
              <!-- <b-input-group-append>
                <b-button 
                :to="{ name: 'create-new-invoice'}"
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                variant="outline-primary">
                  ADD +
                </b-button>
              </b-input-group-append> -->
            </b-input-group>


          </div>
        </b-form-group>

        <b-form-group v-if="$ability.can('view', 'superAdmin')">
          <div class="d-flex align-items-center">

            <b-input-group>
              <b-input-group-prepend>

                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="primary"

                  :to="{ name: 'create-new-company'}"
                  
                  title="Add Company"

                >
                ADD+
                </b-button>
              </b-input-group-prepend>

            </b-input-group>

          </div>
        </b-form-group>
      </div>

      

      <b-table
        :items="items"
        :fields="fields"
        striped
        responsive
        class="mb-0"
        :busy="isBusy"
      >
        <template #cell(Options)="row">
          <div >
              <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
              <b-form-checkbox
                v-model="row.detailsShowing"
                @change="row.toggleDetails"
              >
                {{ row.detailsShowing ? 'Hide' : 'View Details' }}
              </b-form-checkbox>
              <div class="d-flex justify-content-start">
                <b-button
                    v-if="$ability.can('view', 'superAdmin')"
                    :to="{ name: 'edit-company', params: { id: row.item.id }}"
                    v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                    variant="flat-success"
                    class="btn-icon rounded-circle"
                  >
                    <feather-icon icon="EditIcon" />
                </b-button>

                <!-- <b-button
                    v-if="$ability.can('delete', 'user')"
                    v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                    variant="flat-danger"
                    class="btn-icon rounded-circle"
                    @click="deletePurchase(row.item.id)"
                  >
                    <feather-icon icon="Trash2Icon" />
                </b-button> -->
              </div>
          </div>
        </template>

        <!-- full detail on click -->
        <template #row-details="row">
          <b-card no-body class="px-1 py-1">
            <b-row >
                <b-col cols="12">

                    
                        <b-card-text>
                        <b-row class="border-bottom ">
                          <b-col cols="2">
                            <strong>ID</strong>
                          </b-col>
                          <b-col cols="10">
                              {{row.item.id}}
                          </b-col>
                        </b-row>
                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Name</strong>
                          </b-col>
                          <b-col cols="10">
                              {{row.item.name}}
                          </b-col>
                        </b-row>
                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Name AR</strong>
                          </b-col>
                          <b-col cols="10">
                              {{row.item.name_arabic}}
                          </b-col>
                        </b-row>
                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Email</strong>
                          </b-col>
                          <b-col cols="10">
                              {{row.item.email}}
                          </b-col>
                        </b-row>
                        
                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Contact Number</strong>
                          </b-col>
                          <b-col cols="10">
                              {{row.item.contact_number}}
                          </b-col>
                        </b-row>

                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Owner</strong>
                          </b-col>
                          <b-col cols="10">
                              {{row.item.owner}}
                          </b-col>
                        </b-row>

                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>VAT#</strong>
                          </b-col>
                          <b-col cols="10">
                              {{row.item.vat_number}}
                          </b-col>
                        </b-row>
                        
                        

                        
                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>CR#</strong>
                          </b-col>
                          <b-col cols="10">
                              {{row.item.cr_number}}
                          </b-col>
                        </b-row>
                        
                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>LOGO</strong>
                          </b-col>
                          <b-col cols="10">
                              <a class="btn btn-primary" v-if="isPdf(row.item.logo)" :href="row.item.logo" target="_blank">View file</a>
 

                              <enlargeable-image v-else :src="row.item.logo" :src_large="row.item.logo" animation_duration="600">
                                <b-img v-if="row.item.logo != ''" style="max-height: 80px;" thumbnail  :src="row.item.logo" />
                              </enlargeable-image>
                          </b-col>
                        </b-row>
                        
                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Letter Head</strong>
                          </b-col>
                          <b-col cols="10">
                              <a class="btn btn-primary" v-if="isPdf(row.item.letter_head)" :href="row.item.letter_head" target="_blank">View file</a>
 

                              <enlargeable-image v-else :src="row.item.letter_head" :src_large="row.item.letter_head" animation_duration="600">
                                <b-img v-if="row.item.letter_head != ''" style="max-height: 80px;" thumbnail  :src="row.item.letter_head" />
                              </enlargeable-image>
                          </b-col>
                        </b-row>
                      </b-card-text>
                    
                </b-col>
            </b-row>
          </b-card>
        </template>

        <!-- <template #cell(iqama)="data">
          <b-avatar :src="data.value" />
        </template> -->

        <template #cell(invoice_date)="data">
            {{ data.value | moment("DD/MM/YYYY") }}
        </template>

        <template #cell(period)="data">
            {{ data.value | moment("MMMM, YYYY") }}
        </template>

        

        <template #cell(status)="data">
          <b-badge
            pill
            variant="success"
            v-if="data.value == '2'"
          >
             Paid
          </b-badge>

          <b-badge
            pill
            variant="danger"
            v-if="data.value == '1'"
          >
             Unpaid
          </b-badge>

          <b-badge
                                pill
                                variant="warning"
                                v-if="data.value == '3'"
                              >
                                 Partially Paid
                              </b-badge>
        </template>

        

        

       <template #table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>

        <!-- <template #cell(status)="data">
          <b-badge :variant="status[1][data.value]">
            {{ status[0][data.value] }}
          </b-badge>
        </template> -->
      </b-table>

      <div class="d-flex justify-content-end">
        <b-pagination
          v-model="page"
          :total-rows="count"
          :per-page="pageSize"
          pills
          @change="handlePageChange"
        ></b-pagination>
      </div>
    </div>

    
 
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import axios from '@axios'
import vSelect from 'vue-select'
import {
  BTable, BFormCheckbox, BButton, BCard, BRow, BCol, BAvatar, BBadge, BImg, BTabs, BTab, BCardText, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdown, BDropdownItem, BInputGroup, BInputGroupAppend, BInputGroupPrepend, BFormDatepicker, BFormFile,BFormTextarea,BFormRadio,BForm,BFormCheckboxGroup,BFormRating,BListGroupItem ,BListGroup, BModal,BSpinner,
} from 'bootstrap-vue'


import Ripple from 'vue-ripple-directive'
import EnlargeableImage from '@diracleo/vue-enlargeable-image';
import pdf from 'vue-pdf'

import VuePdfApp from "vue-pdf-app";

import "vue-pdf-app/dist/icons/main.css";

import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BCardCode,
    BTable,
    BButton,
    BFormCheckbox,
    BCard,
    BRow,
    BCol,
    BBadge,
    BAvatar,
    BImg,
    EnlargeableImage,
    BTabs,
    BTab,
    BCardText,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BDropdown,
    BDropdownItem,
    BInputGroup,
    BInputGroupAppend,
    BInputGroupPrepend,
    BFormDatepicker, 
    BFormFile,
    BFormTextarea,
    BFormRadio,
    BForm,
    vSelect,
    BFormCheckboxGroup,
    BFormRating,
    BListGroup,
    BListGroupItem ,
    BModal,
    pdf,
    VuePdfApp,
    BSpinner,
  },
  directives: {
    Ripple,
  },

  errorCaptured() {
    return false
  },

  data() {
    return {
      isBusy : true,
      fields: [{ key: 'Options', thClass: 'customHead' }, {key:'id',label:'ID',sortable: true,thClass: 'customHead'},{key:'name',label:'NAME',sortable: true,thClass: 'customHead'},{key:'name_arabic',label:'NAME AR',sortable: true,thClass: 'customHead'}, {key:'email',label:'EMAIL',sortable: true,thClass: 'customHead'},{key:'vat_number',label:'Vat#',sortable: true,thClass: 'customHead'},],
      items: [
      ],
      emp_detail: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' }
        ],
      /* eslint-disable global-require */
      status: [{
        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',
      },
      {
        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',
      }],

      
      searchTerm:'',
      pageSize:10,
      page:1,
      count:0,
      


    }
  },

  mounted () {

      this.getCompanies();

  },
   methods: {


    isPdf(url){

          if(url.substr(url.lastIndexOf('.')+1) == 'pdf')
          {
              return true
          }
          else
          {
            return false
          }
        },

    

      deletePurchase(id){

        this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          confirmButton: 'btn btn-danger',
          cancelButton: 'btn btn-outline-danger ml-1',
        },
        buttonsStyling: false,
      }).then(result => {
        if (result.value) {
          

            axios.get('/deleteInvoice', {
                params: {
                  invoice_number: id,
                },
              }).then((response) => {

                if(response.data.hasOwnProperty('success'))
                {
                  if(response.data.success === true)
                  {
                    
                    
                    this.getCompanies();
                    this.$toast({
                        component: ToastificationContent,
                        position: 'top-right',
                        props: {
                          title: 'Invoice Deleted',
                          icon: 'EditIcon',
                          variant: 'success',
                        },
                      })
                    console.log('Vendor deleted');
                  }
                  else
                  {
                    this.$toast({
                        component: ToastificationContent,
                        position: 'top-right',
                        props: {
                          title: `Error`,
                          icon: 'AlertCircleIcon',
                          variant: 'danger',
                          text: `Something went wrong, try again later`,
                        },
                      })
                  }
                  
                }
                else
                {
                  this.$toast({
                        component: ToastificationContent,
                        position: 'top-right',
                        props: {
                          title: `Error`,
                          icon: 'AlertCircleIcon',
                          variant: 'danger',
                          text: `Something went wrong, try again later`,
                        },
                      })
                }

                
              }).catch((error) => {
                console.error(error);
              });

        }
      })

          
      },

      getCompanies(){
        this.isBusy= true;
        axios.get('/getCompanies', {
            params: {
              searchTerm: this.searchTerm,
              page_no:this.page,
              
            },
          })

        .then((response) => {

            console.log('response', response.data.data);
            this.items = response.data.data;
            this.count = response.data.totalRows;
            this.isBusy= false;

          // TODO
        }).catch((error) => {
          console.error(error);
        });
      },

      handlePageChange(value) {
        this.page = value;
        this.isBusy= true;
        this.getCompanies();
      },

      searchTimeOut() {
        let timeout = null;
        clearTimeout(timeout);
        // Make a new timeout set to go off in 800ms
        timeout = setTimeout(() => {
          this.page = 1;
          this.getCompanies();
          
        }, 800);
      },


   }
};
</script>

<style lang="css" >

.enlargeable-image .full  {
  z-index:9999 !important;
  
  background-color: rgba(0,0,0,0.5) !important;
}

.customHead{

  background-color: #06608f !important;
  color:#fff;
}

</style>
