<template>
  
    <div>

      <!-- search input -->
      <div class="custom-search d-flex justify-content-between">
        <b-form-group>
          <div class="d-flex align-items-center">
            <!-- <label class="mr-1">Search</label> -->

            <b-input-group>
              <b-input-group-prepend>
                <b-button variant="outline-primary" @click="page=1, getEmployees()">
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
              
            </b-input-group>


          </div>
        </b-form-group>

        <b-form-group v-if="$ability.can('add/copy', 'purchase_order')">
          <div class="d-flex align-items-center">

            <b-input-group>

              <b-input-group-prepend>

                <div id="my-container">
                  
                    <b-button
                      id="popover-reactive-1"
                      ref="button"
                      title="Export"
                      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                      variant="outline-primary"
                    >
                      <feather-icon icon="DownloadIcon" />
                    </b-button>
                  
                  <b-popover
                    ref="popover"
                    target="popover-reactive-1"
                    triggers="click"
                    :show.sync="popoverShow"
                    placement="auto"
                    container="my-container"
                  >
                    <template #title>
                      <div class="d-flex justify-content-between align-items-center">
                        <span>Export Table</span>
                      </div>
                    </template>

                    <div>
                      <b-form-group
                        label="Search Filter"
                      >
                        <b-form-input
                          v-model="searchTerm"
                          placeholder=""
                          size="sm"
                        />
                      </b-form-group>

                      <b-form-group
                        label="Records Limit"
                      >
                        <b-form-input
                          v-model="exportLimit"
                          type="text"
                          placeholder=""
                          size="sm"
                        />
                      </b-form-group>

                      <!-- button -->
                      <b-row>
                        <b-col cols="6">
                          <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            size="sm"
                            variant="danger"
                            class="mr-1"
                            @click="onClose"
                          >
                            <feather-icon icon="XIcon" />
                          </b-button>
                        </b-col>

                        <b-col cols="6">
                          <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            size="sm"
                            variant="primary"
                            :href="'/api/purchaseCsv?searchTerm='+ searchTerm+' &amp;limit='+exportLimit"
                            target = '_blank'
                          >
                            <feather-icon icon="DownloadIcon" />
                          </b-button>
                        </b-col>
                    </b-row>
                    </div>
                  </b-popover>


                </div>

                
              </b-input-group-prepend>


              <b-input-group-prepend>

                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="primary"

                  :to="{ name: 'save-purchase'}"
                  
                  title="Create Purchase Order"

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
                    v-if="$ability.can('edit', 'purchase_order')"
                    :to="{ name: 'edit-purchase', params: { id: row.item.id }}"
                    v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                    variant="flat-success"
                    class="btn-icon rounded-circle"
                  >
                    <feather-icon icon="EditIcon" />
                </b-button>

                <b-button
                    v-if="$ability.can('delete', 'purchase_order')"
                    v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                    variant="flat-danger"
                    class="btn-icon rounded-circle"
                    @click="deletePurchase(row.item.id)"
                  >
                    <feather-icon icon="Trash2Icon" />
                </b-button>
              </div>
          </div>
        </template>

        <!-- full detail on click -->
        <template #row-details="row">
          <b-card no-body>
            <div>
              <b-table
                :items="row.item.resourceItems"
                striped
                responsive
                class="mb-0"
                :busy="isBusy"
                show-empty
              >
                <template #empty="scope">
                  <h4>{{ scope.emptyText }}</h4>
                </template>

                <template #cell(rate)="data">

                  {{ Number( data.value).toLocaleString() }}
                </template>

                <template #cell(total)="data">

                  {{ Number( data.value).toLocaleString() }}
                </template>
            </b-table>
            </div>
          </b-card>
        </template>

        <!-- <template #cell(iqama)="data">
          <b-avatar :src="data.value" />
        </template> -->

        <template #cell(purchaseOrder)="data">

          
          <b-button   v-if="data.value != '' "
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-modal="'myModal' + data.item.id"
          variant="outline-primary">
            <a  :href="data.value" target="_blank">View file</a>
          </b-button>

          <!-- <b-modal
            :id="'myModal' + data.item.id"
            title="PDF View"
            
            
            size="lg"
            cancel-variant="outline-secondary"
          > -->
            <!-- <vue-pdf-app :pdf="data.value"></vue-pdf-app> -->
            <!-- <pdf :src="data.value"></pdf> -->
         <!--  </b-modal> -->
          
        </template>

        <template #cell(subtotal)="data">

          {{ Number( data.value).toLocaleString() }}
        </template>

        <template #cell(vat)="data">

          {{ Number( data.value).toLocaleString() }}
        </template>

        <template #cell(net_total)="data">

          {{ Number( data.value).toLocaleString() }}
        </template>

        <template #cell(date)="data">

          {{ data.value | moment("DD/MM/YYYY") }}
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
  BTable, BFormCheckbox, BButton, BCard, BRow, BCol, BAvatar, BBadge, BImg, BTabs, BTab, BCardText, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdown, BDropdownItem, BInputGroup, BInputGroupAppend, BInputGroupPrepend, BFormDatepicker, BFormFile,BFormTextarea,BFormRadio,BForm,BFormCheckboxGroup,BFormRating,BListGroupItem ,BListGroup, BModal,BPopover,BSpinner,
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
    BPopover,
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
      popoverShow:false,
      exportLimit:'',
      isBusy : true,
      fields: [{ key: 'Options', thClass: 'customHead' }, {key:'display_id',label:'Order ID',sortable: true,thClass: 'customHead'}, {key:'purchaseOrder',label:'Attachment',sortable: true,thClass: 'customHead'}, {key:'purchaseType',sortable: true,thClass: 'customHead'}, {key:'subtotal',label:'Sub Total',sortable: true,thClass: 'customHead'}, {key:'vat',label:'VAT',sortable: true,thClass: 'customHead'}, {key:'net_total',label:'Total',sortable: true,thClass: 'customHead'}, {key:'date',sortable: true,thClass: 'customHead'},],
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

      this.getEmployees();

  },
   methods: {

      onClose() {
        this.popoverShow = false
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
          

            axios.get('/deletePurchase', {
                params: {
                  id: id,
                },
              }).then((response) => {

                if(response.data.hasOwnProperty('success'))
                {
                  if(response.data.success === true)
                  {
                    
                    
                    this.getEmployees();
                    this.$toast({
                        component: ToastificationContent,
                        position: 'top-right',
                        props: {
                          title: 'Purchase Deleted',
                          icon: 'EditIcon',
                          variant: 'success',
                        },
                      })
                    console.log('Purchase deleted');
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

      getEmployees(){

        this.isBusy= true;
        axios.get('/getPurchaseList', {
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
        this.getEmployees();
      },

      searchTimeOut() {
        let timeout = null;
        clearTimeout(timeout);
        // Make a new timeout set to go off in 800ms
        timeout = setTimeout(() => {
          this.page = 1;
          this.getEmployees();
          
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
