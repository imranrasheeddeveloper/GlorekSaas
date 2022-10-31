<template>
  <b-form @submit.prevent>
    <b-row>

      <b-col cols="12">
        <b-form-group
          label="Name"
          label-for="client_name"
          label-cols-md="3"
        >
           <b-form-input
             cols="6"
             id="client_name"
            v-model="formValues.name"
            type="text"
            placeholder="User Level Name"
            
          />
        </b-form-group>
      </b-col>


      <b-col cols="12">
            <b-form-group
              label="Employees"
              label-for="employees"
              label-cols-md="3"
            >
            <b-form-checkbox-group
              id="employees"
              v-model="formValues.employees"
              name="Employees"
              class="demo-inline-spacing"
            >
              <b-form-checkbox value="C">
                Create
              </b-form-checkbox>
              <b-form-checkbox value="D">
                Delete
              </b-form-checkbox>
              <b-form-checkbox value="E">
                Edit
              </b-form-checkbox>
              <b-form-checkbox value="V">
                View
              </b-form-checkbox>
              

            </b-form-checkbox-group>
            </b-form-group>
      </b-col>

      <b-col cols="12">
            <b-form-group
              label="Resources"
              label-for="resource"
              label-cols-md="3"
            >
            <b-form-checkbox-group
              id="resource"
              v-model="formValues.resource"
              name="resource"
              class="demo-inline-spacing"
            >
              <b-form-checkbox value="C">
                Create
              </b-form-checkbox>
              <b-form-checkbox value="D">
                Delete
              </b-form-checkbox>
              <b-form-checkbox value="E">
                Edit
              </b-form-checkbox>
              <b-form-checkbox value="V">
                View
              </b-form-checkbox>
              

            </b-form-checkbox-group>
            </b-form-group>
      </b-col>
      <b-col cols="12">
            <b-form-group
              label="Resource Items"
              label-for="resource_item"
              label-cols-md="3"
            >
            <b-form-checkbox-group
              id="resource_item"
              v-model="formValues.resource_item"
              name="resource_item"
              class="demo-inline-spacing"
            >
              <b-form-checkbox value="C">
                Create
              </b-form-checkbox>
              <b-form-checkbox value="D">
                Delete
              </b-form-checkbox>
              <b-form-checkbox value="E">
                Edit
              </b-form-checkbox>
              <b-form-checkbox value="V">
                View
              </b-form-checkbox>
              

            </b-form-checkbox-group>
            </b-form-group>
      </b-col>

      <b-col cols="12">
            <b-form-group
              label="Accommodation"
              label-for="accommodation"
              label-cols-md="3"
            >
            <b-form-checkbox-group
              id="accommodation"
              v-model="formValues.accommodation"
              name="accommodation"
              class="demo-inline-spacing"
            >
              <b-form-checkbox value="C">
                Create
              </b-form-checkbox>
              <b-form-checkbox value="D">
                Delete
              </b-form-checkbox>
              <b-form-checkbox value="E">
                Edit
              </b-form-checkbox>
              <b-form-checkbox value="V">
                View
              </b-form-checkbox>
              

            </b-form-checkbox-group>
            </b-form-group>
      </b-col>

      <b-col cols="12">
            <b-form-group
              label="Rent Payments"
              label-for="rent_payment"
              label-cols-md="3"
            >
            <b-form-checkbox-group
              id="rent_payment"
              v-model="formValues.rent_payment"
              name="rent_payment"
              class="demo-inline-spacing"
            >
              <b-form-checkbox value="C">
                Create
              </b-form-checkbox>
              <b-form-checkbox value="D">
                Delete
              </b-form-checkbox>
              <b-form-checkbox value="E">
                Edit
              </b-form-checkbox>
              <b-form-checkbox value="V">
                View
              </b-form-checkbox>
              

            </b-form-checkbox-group>
            </b-form-group>
      </b-col>

      <b-col cols="12">
            <b-form-group
              label="Bill Payments"
              label-for="bill_payment"
              label-cols-md="3"
            >
            <b-form-checkbox-group
              id="bill_payment"
              v-model="formValues.bill_payment"
              name="bill_payment"
              class="demo-inline-spacing"
            >
              <b-form-checkbox value="C">
                Create
              </b-form-checkbox>
              <b-form-checkbox value="D">
                Delete
              </b-form-checkbox>
              <b-form-checkbox value="E">
                Edit
              </b-form-checkbox>
              <b-form-checkbox value="V">
                View
              </b-form-checkbox>
              

            </b-form-checkbox-group>
            </b-form-group>
      </b-col>

      <b-col cols="12">
            <b-form-group
              label="Clients"
              label-for="client"
              label-cols-md="3"
            >
            <b-form-checkbox-group
              id="client"
              v-model="formValues.client"
              name="client"
              class="demo-inline-spacing"
            >
              <b-form-checkbox value="C">
                Create
              </b-form-checkbox>
              <b-form-checkbox value="D">
                Delete
              </b-form-checkbox>
              <b-form-checkbox value="E">
                Edit
              </b-form-checkbox>
              <b-form-checkbox value="V">
                View
              </b-form-checkbox>
              

            </b-form-checkbox-group>
            </b-form-group>
      </b-col>

      <b-col cols="12">
            <b-form-group
              label="Invoice"
              label-for="invoice"
              label-cols-md="3"
            >
            <b-form-checkbox-group
              id="invoice"
              v-model="formValues.invoice"
              name="invoice"
              class="demo-inline-spacing"
            >
              <b-form-checkbox value="C">
                Create
              </b-form-checkbox>
              <b-form-checkbox value="D">
                Delete
              </b-form-checkbox>
              <b-form-checkbox value="E">
                Edit
              </b-form-checkbox>
              <b-form-checkbox value="V">
                View
              </b-form-checkbox>
              

            </b-form-checkbox-group>
            </b-form-group>
      </b-col>

      <b-col cols="12">
            <b-form-group
              label="Purchases"
              label-for="purchase_order"
              label-cols-md="3"
            >
            <b-form-checkbox-group
              id="purchase_order"
              v-model="formValues.purchase_order"
              name="purchase_order"
              class="demo-inline-spacing"
            >
              <b-form-checkbox value="C">
                Create
              </b-form-checkbox>
              <b-form-checkbox value="D">
                Delete
              </b-form-checkbox>
              <b-form-checkbox value="E">
                Edit
              </b-form-checkbox>
              <b-form-checkbox value="V">
                View
              </b-form-checkbox>
              

            </b-form-checkbox-group>
            </b-form-group>
      </b-col>

      <b-col cols="12">
            <b-form-group
              label="Vendor"
              label-for="vendor"
              label-cols-md="3"
            >
            <b-form-checkbox-group
              id="vendor"
              v-model="formValues.vendor"
              name="vendor"
              class="demo-inline-spacing"
            >
              <b-form-checkbox value="C">
                Create
              </b-form-checkbox>
              <b-form-checkbox value="D">
                Delete
              </b-form-checkbox>
              <b-form-checkbox value="E">
                Edit
              </b-form-checkbox>
              <b-form-checkbox value="V">
                View
              </b-form-checkbox>
              

            </b-form-checkbox-group>
            </b-form-group>
      </b-col>

      <b-col cols="12">
            <b-form-group
              label="User Level"
              label-for="user_level"
              label-cols-md="3"
            >
            <b-form-checkbox-group
              id="user_level"
              v-model="formValues.user_level"
              name="user_level"
              class="demo-inline-spacing"
            >
              <b-form-checkbox value="C">
                Create
              </b-form-checkbox>
              <b-form-checkbox value="D">
                Delete
              </b-form-checkbox>
              <b-form-checkbox value="E">
                Edit
              </b-form-checkbox>
              <b-form-checkbox value="V">
                View
              </b-form-checkbox>
              

            </b-form-checkbox-group>
            </b-form-group>
      </b-col>

      <b-col cols="12">
            <b-form-group
              label="Users"
              label-for="user"
              label-cols-md="3"
            >
            <b-form-checkbox-group
              id="user"
              v-model="formValues.user"
              name="user"
              class="demo-inline-spacing"
            >
              <b-form-checkbox value="C">
                Create
              </b-form-checkbox>
              <b-form-checkbox value="D">
                Delete
              </b-form-checkbox>
              <b-form-checkbox value="E">
                Edit
              </b-form-checkbox>
              <b-form-checkbox value="V">
                View
              </b-form-checkbox>
              

            </b-form-checkbox-group>
            </b-form-group>
      </b-col>

      <b-col cols="12">
            <b-form-group
              label="Dashboard"
              label-for="dashboard"
              label-cols-md="3"
            >
            <b-form-radio-group
              v-model="formValues.dashboard"
              :options="dashboardOptions"
              class="demo-inline-spacing"
              name="dashboard"
            />
            
            </b-form-group>
      </b-col>
      
      


      <!-- submit and reset -->
      <b-col md="12">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
          class="mr-1"
          :disabled="isSubmitting"
          @click="submitResource"
        >
          <b-spinner v-if="isSubmitting" small />
          <span v-if="isSubmitting" >Please Wait</span>

          <span v-if="!isSubmitting" >Submit</span>
        </b-button>
        
      </b-col>
    </b-row>
  </b-form>
</template>


<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BFormDatepicker, BCard, BFormFile, BSpinner,BInputGroup, BInputGroupPrepend,BFormRadio,BFormCheckboxGroup,BFormRadioGroup,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import { VueAutosuggest } from 'vue-autosuggest'
import axios from '@axios'
import { heightTransition } from '@core/mixins/ui/transition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
    BFormDatepicker,
    vSelect,
    VueAutosuggest,
    BCard,
    BFormFile,
    BSpinner,
    BInputGroup,
    BInputGroupPrepend,
    BFormRadio,
    BFormCheckboxGroup,
    BFormRadioGroup,
  },
  directives: {
    Ripple,
  },

  mixins: [heightTransition],

  data() {
    return {
      isSubmitting:false,

      formValues: {
        name:'',
        employees:[],
        resource:[],
        resource_item:[],
        accommodation:[],
        rent_payment:[],
        bill_payment:[],
        client:[],
        invoice:[],
        purchase_order:[],
        vendor:[],
        user_level:[],
        user:[],
        dashboard:'Admin',

      },

      dashboardOptions: [
        { text: 'Admin', value: 'Admin' },
        { text: 'Operation', value: 'Operation' },
        { text: 'Master', value: 'Master' },
      ],

      purchaseType: 'Product',
      filteredOptions:[],
      resourceOwner:'',
      allocationDate:'',
     /* PurchaseOrderNo:'',*/
      purchaseOrderFile:null,
      fileString:'',

      purchaseItems:[],
      
      nextTodoId: 2,

      showServiceInput:false,


    }
  },
  mounted() {
   
  },
  created() {
    
  },
  destroyed() {
    
  },
  methods: {


    submitResource(){

          this.isSubmitting = true;
          axios.post('/createRole',
                        this.formValues,).then((response) => {

                  if(response.data.hasOwnProperty('success'))
                  {
                    if(response.data.success === true)
                    {
                      console.log(response.data.data);
                      
                      this.$router.replace('/userLevel')
                      .then(() => {
                        this.$toast({
                          component: ToastificationContent,
                          position: 'top-right',
                          props: {
                            title: response.data.message,
                            icon: 'EditIcon',
                            variant: 'success',
                          },
                        })
                      })
                    }
                    else
                    {
                      this.isSubmitting = false;

                      this.$toast({
                          component: ToastificationContent,
                          position: 'top-right',
                          props: {
                            title: response.data.message,
                            icon: 'AlertCircleIcon',
                            variant: 'danger',
                          },
                        })
                    }
                    
                  }
                  else
                  {
                    this.isSubmitting = false;

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

    uploadImg(img){

      var formData = new FormData();
      formData.append('image', img);

      axios.post('/imgUpload',
          formData,).then((response) => {
          console.log(response);
          if(response.data.hasOwnProperty('success'))
            {
              if(response.data.success === true)
              {
                /*this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                      title: `Done`,
                      icon: 'EditIcon',
                      variant: 'success',
                      text: response.data.message,
                    },
                  })*/

                console.log('imgUploadResponce',response.data)
                this.fileString = response.data.data.image;
                //create purchase start -------------------------------------------------------------------

                  axios.post('/createPurchase', {
                    purchaseType: this.purchaseType,
                   /* orderNo: this.PurchaseOrderNo,*/
                    date: this.allocationDate,
                    purchaseOrderFile: this.fileString,
                    resourceItems: this.items,
                  }).then((response) => {

                  if(response.data.hasOwnProperty('success'))
                  {
                    if(response.data.success === true)
                    {
                      console.log(response.data.data);
                      
                      this.$router.replace('/purchase_list')
                      .then(() => {
                        this.$toast({
                          component: ToastificationContent,
                          position: 'top-right',
                          props: {
                            title: response.data.message,
                            icon: 'EditIcon',
                            variant: 'success',
                          },
                        })
                      })
                    }
                    else
                    {
                      this.isSubmitting = false;

                      this.$toast({
                          component: ToastificationContent,
                          position: 'top-right',
                          props: {
                            title: '! '+response.data.message,
                            icon: 'AlertCircleIcon',
                            variant: 'danger',
                          },
                        })
                    }
                    
                  }
                  else
                  {
                    this.isSubmitting = false;

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
                //create purchase end-----------------------------------------------------------------------------
                

              }
              else
              {
                this.isSubmitting = false;

                this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                      title: `Error`,
                      icon: 'AlertCircleIcon',
                      variant: 'danger',
                      text: response.data.message,
                    },
                  })
              }

            }
            else
            {
              this.isSubmitting = false;

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

    assignOwnerField(item) {
      if (item) {
        
        this.resourceOwner = item.item.id;
        console.log(this.allocationDate);
      }
    },

    onInputChange(text) {
      if (text === '' || text === undefined) {
        return
      }

      axios.get('/getEmployeeDropdown', {
                params: {
                  id: text,
                  resourceType : this.resourceType,
                },
              }).then((response) => {

            if(response.data.hasOwnProperty('success'))
            {
              if(response.data.success === true)
              {
                console.log(response.data.data);
                this.filteredOptions = [{data:response.data.data}];
                
                
                console.log('Resource Owners Fetched');
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



    
  },
}
</script>
