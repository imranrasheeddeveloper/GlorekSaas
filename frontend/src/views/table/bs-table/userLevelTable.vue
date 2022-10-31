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
              <!-- <b-input-group-append>
                <b-button 
                :to="{ name: 'create-userLevel'}"
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                variant="outline-primary">
                  ADD +
                </b-button>
              </b-input-group-append> -->
              <!--  -->
            </b-input-group>


          </div>
        </b-form-group>

        <b-form-group v-if="$ability.can('add/copy', 'user_level')">
          <div class="d-flex align-items-center">

            <b-input-group>
              <b-input-group-prepend>

                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="primary"

                  :to="{ name: 'create-userLevel'}"
                  
                  title="Add User Level"

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
                    v-if="$ability.can('edit', 'user_level')"
                    :to="{ name: 'edit-userLevel', params: { id: row.item.id }}"
                    v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                    variant="flat-success"
                    class="btn-icon rounded-circle"
                  >
                    <feather-icon icon="EditIcon" />
                </b-button>

                <b-button
                    v-if="$ability.can('delete', 'user_level')"
                    v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                    variant="flat-danger"
                    class="btn-icon rounded-circle"
                    @click="deleteEmployee(row.item.client_code)"
                  >
                    <feather-icon icon="Trash2Icon" />
                </b-button>
              </div>
          </div>
        </template>

        <!-- full detail on click -->
        <template #row-details="row">
          <b-card no-body class="px-1 py-1">
            <b-row >
              <b-col cols="12">
                
                      <b-card-text>
                        
                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Employees</strong>
                          </b-col>
                          <b-col cols="10">
                              <b-list-group horizontal>
                                <b-list-group-item v-for="oneSkill in row.item.employees" :key="oneSkill">{{oneSkill}}</b-list-group-item>
                                
                              </b-list-group>
                          </b-col>
                        </b-row>

                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Resources</strong>
                          </b-col>
                          <b-col cols="10">
                              <b-list-group horizontal>
                                <b-list-group-item v-for="oneSkill in row.item.resource" :key="oneSkill">{{oneSkill}}</b-list-group-item>
                                
                              </b-list-group>
                          </b-col>
                        </b-row>

                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Resource Items</strong>
                          </b-col>
                          <b-col cols="10">
                              <b-list-group horizontal>
                                <b-list-group-item v-for="oneSkill in row.item.resource_item" :key="oneSkill">{{oneSkill}}</b-list-group-item>
                                
                              </b-list-group>
                          </b-col>
                        </b-row>

                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Accommodation</strong>
                          </b-col>
                          <b-col cols="10">
                              <b-list-group horizontal>
                                <b-list-group-item v-for="oneSkill in row.item.accommodation" :key="oneSkill">{{oneSkill}}</b-list-group-item>
                                
                              </b-list-group>
                          </b-col>
                        </b-row>

                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Rent Payments</strong>
                          </b-col>
                          <b-col cols="10">
                              <b-list-group horizontal>
                                <b-list-group-item v-for="oneSkill in row.item.rent_payment" :key="oneSkill">{{oneSkill}}</b-list-group-item>
                                
                              </b-list-group>
                          </b-col>
                        </b-row>

                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Bill Payments</strong>
                          </b-col>
                          <b-col cols="10">
                              <b-list-group horizontal>
                                <b-list-group-item v-for="oneSkill in row.item.bill_payment" :key="oneSkill">{{oneSkill}}</b-list-group-item>
                                
                              </b-list-group>
                          </b-col>
                        </b-row>

                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Clients</strong>
                          </b-col>
                          <b-col cols="10">
                              <b-list-group horizontal>
                                <b-list-group-item v-for="oneSkill in row.item.client" :key="oneSkill">{{oneSkill}}</b-list-group-item>
                                
                              </b-list-group>
                          </b-col>
                        </b-row>

                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Invoice</strong>
                          </b-col>
                          <b-col cols="10">
                              <b-list-group horizontal>
                                <b-list-group-item v-for="oneSkill in row.item.invoice" :key="oneSkill">{{oneSkill}}</b-list-group-item>
                                
                              </b-list-group>
                          </b-col>
                        </b-row>

                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Purchases</strong>
                          </b-col>
                          <b-col cols="10">
                              <b-list-group horizontal>
                                <b-list-group-item v-for="oneSkill in row.item.purchase_order" :key="oneSkill">{{oneSkill}}</b-list-group-item>
                                
                              </b-list-group>
                          </b-col>
                        </b-row>

                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Vendor</strong>
                          </b-col>
                          <b-col cols="10">
                              <b-list-group horizontal>
                                <b-list-group-item v-for="oneSkill in row.item.vendor" :key="oneSkill">{{oneSkill}}</b-list-group-item>
                                
                              </b-list-group>
                          </b-col>
                        </b-row>

                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>User Level</strong>
                          </b-col>
                          <b-col cols="10">
                              <b-list-group horizontal>
                                <b-list-group-item v-for="oneSkill in row.item.user_level" :key="oneSkill">{{oneSkill}}</b-list-group-item>
                                
                              </b-list-group>
                          </b-col>
                        </b-row>

                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Users</strong>
                          </b-col>
                          <b-col cols="10">
                              <b-list-group horizontal>
                                <b-list-group-item v-for="oneSkill in row.item.user" :key="oneSkill">{{oneSkill}}</b-list-group-item>
                                
                              </b-list-group>
                          </b-col>
                        </b-row>

                        <b-row class="border-bottom " >
                          <b-col cols="2">
                            <strong>Dashboard</strong>
                          </b-col>
                          <b-col cols="10">
                              <b-list-group horizontal>
                                {{row.item.dashboard}}
                                
                              </b-list-group>
                          </b-col>
                        </b-row>
                        
                      </b-card-text>
                    
              </b-col>
            </b-row>

            <!-- <b-button
              size="sm"
              variant="outline-secondary"
              @click="row.toggleDetails"
            >
              Hide Details
            </b-button> -->
          </b-card>
        </template>

        <!-- <template #cell(iqama)="data">
          <b-avatar :src="data.value" />
        </template> -->

        <template #cell(client_name)="data">

          {{data.item.client_name}} 
          </br>
          {{data.item.client_name_ar}}

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
  BTable, BFormCheckbox, BButton, BCard, BRow, BCol, BAvatar, BBadge, BImg, BTabs, BTab, BCardText, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdown, BDropdownItem, BInputGroup, BInputGroupAppend, BInputGroupPrepend, BFormDatepicker, BFormFile,BFormTextarea,BFormRadio,BForm,BFormCheckboxGroup,BFormRating,BListGroupItem ,BListGroup,BSpinner,
} from 'bootstrap-vue'


import Ripple from 'vue-ripple-directive'
import EnlargeableImage from '@diracleo/vue-enlargeable-image';

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
    BSpinner,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      isBusy : true,
      fields: [{ key: 'Options', thClass: 'customHead' }, {key:'id',label:'ID',sortable: true,thClass: 'customHead'},{key:'name',sortable: true,thClass: 'customHead'},{key:'userCount',label:'User Count',sortable: true,thClass: 'customHead'}],
      items: [
      ],
      serviceFields: ['name','period','rate'],
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

      empName: '',
      empId: '',
      empNationality:'',
      empReligion:'',
      empDob:'',
      empAge:'',
      empJoiningDate:'',
      empMobileNumber:'',
      empProfilePhoto:'',
      searchTerm:'',
      pageSize:10,
      page:1,
      count:0,

      nationalities: [
        { value: 'select_value', text: 'Select Value' },
        { value: 'Bangladesh', text: 'Bangladesh' },
        { value: 'India', text: 'India' },
        { value: 'Pakistan', text: 'Pakistan' },
        { value: 'Nepal', text: 'Nepal' },
        { value: 'Sirilanka', text: 'Sirilanka' },
        { value: 'Philippine', text: 'Philippine' },
        { value: 'Sudan', text: 'Sudan' },
      ],
      religions: [
        { value: 'select_value', text: 'Select Value' },
        { value: 'Islam', text: 'Islam' },
        { value: 'Hindu', text: 'Hindu' },
        { value: 'Buddhist', text: 'Buddhist' },
        { value: 'Christian', text: 'Christian' },
        { value: 'Other', text: 'Other' },
      ],
      professions: [],
      vendors: [],
      clients: [],
      statuses: [
        { value: 'select_value', text: 'Select Value' },
        { value: 'Deployed', text: 'Deployed' },
        { value: 'Terminated', text: 'Terminated' },
      ],


    }
  },

  mounted () {

      this.getEmployees();
      this.getVendors();
      this.getClients();
      this.getProfessions();
      this.getAccommodations();

  },
   methods: {

    

      deleteEmployee(client_code){

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
          

            axios.get('/deleteClient', {
                params: {
                  client_code: client_code,
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
                          title: 'Client Deleted',
                          icon: 'EditIcon',
                          variant: 'success',
                        },
                      })
                    console.log('Client deleted');
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

      getEmployees(){
        this.isBusy= true;
        axios.get('/getRoles', {
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

      getVendors(){

          axios.get('/vendorsDropdown').then((response) => {

            if(response.data.hasOwnProperty('success'))
            {
              if(response.data.success === true)
              {
                console.log(response.data.data);
                this.vendors = response.data.data;
                
                console.log('Vendors Fetched');
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
      },
    getClients(){

          axios.get('/clientsDropdown').then((response) => {

            if(response.data.hasOwnProperty('success'))
            {
              if(response.data.success === true)
              {
                console.log(response.data.data);
                this.clients = response.data.data;
                
                console.log('Clients Fetched');
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
      },
    getAccommodations(){

          axios.get('/accommodationsDropdown').then((response) => {

            if(response.data.hasOwnProperty('success'))
            {
              if(response.data.success === true)
              {
                console.log(response.data.data);
                this.accommodations = response.data.data;
                
                console.log('accommodations Fetched');
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
      },

    getProfessions(){

          axios.get('/professionsDropdown').then((response) => {

            if(response.data.hasOwnProperty('success'))
            {
              if(response.data.success === true)
              {
                console.log(response.data.data);
                this.professions = response.data.data;
                
                console.log('professions Fetched');
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



      /*getEmployeeDetail(item){
        console.log(item.item);
          axios.get('/getEmployeeDetail', {
            params: {
              emp_id: item.emp_id,
            },
          }).then((response) => {

            if(response.data.hasOwnProperty('success'))
            {
              if(response.data.success === true)
              {

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
      }*/

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
