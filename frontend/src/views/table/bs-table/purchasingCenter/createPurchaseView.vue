<template>
  <b-form @submit.prevent>
    <b-row>
      <b-col md="6">
        <b-form-group
          label="Purchase Type"
          label-for="v-purchaseType"
        >
          <v-select
            id="v-purchaseType"
            v-model="purchaseType"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="purchaseTypes"
            
            label="text"
            :reduce="text => text.value"
            @input="resourceTypeChange"
          />
        </b-form-group>
      </b-col>

      <!-- <b-col md="6">

        <b-form-group
          label="Purchase Order No."
          label-for="purchaseOrderNo"
        >
          <b-form-input
                v-model="PurchaseOrderNo"
                id="purchaseOrderNo"
                type="text"
                placeholder="purchase Order No"
                
              />
        </b-form-group>
      </b-col> -->
      <b-col md="6">
        
        <label for="date">Date</label>
            <b-input-group >

              <cleave
                id="date"
                v-model="allocationDate"
                class="form-control"
                :raw="false"
                :options="options.date"
                placeholder="YYYY-MM-DD"
              />

    
              <b-input-group-append>
                <b-form-datepicker
                  v-model="allocationDate"
                  show-decade-nav
                  button-only
                  right
                  locale="en-US"
                  aria-controls="date"
                />
              </b-input-group-append>

              
            
            </b-input-group>
      </b-col>

      <b-col md="6">
                <b-form-group
                  label="Attachment"
                  label-for="v-purchaseOrder"
                >

                  <b-form-file
                    v-model="purchaseOrderFile"
                    id="v-purchaseOrder"
                    accept=".pdf"
                    placeholder="Upload Purchase Order..."
                    drop-placeholder="Drop file here..."
                  />
                </b-form-group>
              </b-col>
        <!-- form repeate -->
      <b-col md="12">

            <b-card   title="Purchase Items">
                <div>
                  <b-form
                    ref="form"
                    :style="{height: trHeight}"
                    class="repeater-form"
                    @submit.prevent="repeateAgain"
                  >

                    <!-- Row Loop -->
                    <b-row
                      v-for="(item, index) in items"
                      :id="item.id"
                      :key="item.id"
                      ref="row"
                    >

                      <!-- Item Name -->
                      <b-col md="4">
                        <b-form-group
                          label="Item Name"
                          label-for="item-name"
                        >

                          <v-select
                          v-show="!showServiceInput"
                          id="item-name"
                          v-model="item.name"
                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                          :options="purchaseItems"
                          
                          label="text"
                          :reduce="text => text.value"
                        />

                        <b-form-input
                            v-show="showServiceInput"
                            id="rate"
                            v-model="item.serviceName"
                            type="text"
                            placeholder="1"
                          />
                          
                        </b-form-group>
                      </b-col>



                      

                      <!-- Quantity -->
                      <b-col md="2">
                        <b-form-group
                          label="Quantity"
                          label-for="quantity"
                        >
                          <b-form-input
                            id="quantity"
                            v-model="item.quantity"
                            type="number"
                            placeholder="1"
                            @input="calculatePrices"
                          />
                        </b-form-group>
                      </b-col>

                      <!-- Rate -->
                      <b-col md="2">
                        <b-form-group
                          label="Rate"
                          label-for="rate"
                        >
                          <b-input-group>
                            <b-input-group-prepend is-text>
                              SR
                            </b-input-group-prepend>
                            <b-form-input
                              id="rate"
                              v-model="item.rate"
                              type="number"
                              placeholder="1"
                              @input="calculatePrices"
                            />
                          </b-input-group>
                          
                        </b-form-group>
                      </b-col>

                      <!-- total -->
                      <b-col md="3">
                        <b-form-group
                          label="total"
                          label-for="total"
                        >
                          <b-input-group>
                            <b-input-group-prepend is-text>
                              SR
                            </b-input-group-prepend>
                            <b-form-input
                            id="total"
                            v-model="item.total = item.quantity * item.rate"
                            type="number"
                            placeholder="1"
                            readonly
                          />
                          </b-input-group>
                          
                          
                        </b-form-group>
                      </b-col>

                      <!-- Remove Button -->
                      <b-col
                        md="1"
                        class="mb-50"
                      >
                        <b-button
                          v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                          variant="outline-danger"
                          class="mt-0 mt-md-2"
                          @click="removeItem(index)"
                        >
                          <feather-icon
                            icon="XIcon"
                            class="mr-25"
                          />
                          <!-- <span>Delete</span> -->
                        </b-button>
                      </b-col>
                      <b-col cols="12">
                        <hr>
                      </b-col>
                    </b-row>

                  </b-form>
                </div>
                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="primary"
                  @click="repeateAgain"
                >
                  <feather-icon
                    icon="PlusIcon"
                    class="mr-25"
                  />
                  <span>Add more</span>
                </b-button>

                <div class="col-12"><hr></div>

                <div>
                  <b-row>

                    <b-col md="4">
                      <b-form-group
                        label="Sub Total"
                        label-for="subtotal"
                      >
                         <b-form-input
                           id="subtotal"
                          v-model="subtotal"
                          type="text"
                          placeholder="Sub Total"
                          readonly
                          
                        />
                      </b-form-group>
                    </b-col>

                    <b-col md="4">
                      <b-form-group
                        label="VAT"
                        label-for="vat"
                      >
                         <b-form-input
                           id="vat"
                          v-model="vat"
                          type="text"
                          placeholder="VAT"
                          readonly
                          
                        />
                      </b-form-group>
                    </b-col>

                    <b-col md="4">
                      <b-form-group
                        label="Total"
                        label-for="net_total"
                      >
                         <b-form-input
                           id="net_total"
                          v-model="net_total"
                          type="text"
                          placeholder="Total"
                          readonly
                          
                        />
                      </b-form-group>
                    </b-col>

                  </b-row>
                </div>

                
              </b-card>
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
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BFormDatepicker, BCard, BFormFile, BSpinner,BInputGroup, BInputGroupPrepend,BInputGroupAppend,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import { VueAutosuggest } from 'vue-autosuggest'
import axios from '@axios'
import { heightTransition } from '@core/mixins/ui/transition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

import Cleave from 'vue-cleave-component'
import 'cleave.js/dist/addons/cleave-phone.us' 

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
    BInputGroupAppend,
    Cleave,
  },
  directives: {
    Ripple,
  },

  mixins: [heightTransition],

  data() {
    return {
      options: {

        phone: {
          prefix: '9665',
          blocks: [12],
          uppercase: true,
          noImmediatePrefix: true
        },
        date: {
          date: true,
          delimiter: '-',
          datePattern: ['Y', 'm', 'd'],
        },
        account_number: {
          blocks: [15],
          uppercase: true,
        },
        iqama_number: {
          blocks: [10],
          uppercase: true,
        },
        cr_number: {
          blocks: [10],
          uppercase: true,
        },
        iban: {
          prefix: 'SA',
          blocks: [24],
          uppercase: true,
          noImmediatePrefix: true
        },

      },
      isSubmitting:false,

      purchaseTypes: [
        { value: 'Product', text: 'Product' },
        { value: 'Service', text: 'Service' },
      ],
      settings:[],
      subtotal:'',
      vat:'',
      net_total:'',
      purchaseType: 'Product',
      filteredOptions:[],
      resourceOwner:'',
      allocationDate:'',
     /* PurchaseOrderNo:'',*/
      purchaseOrderFile:null,
      fileString:'',

      purchaseItems:[],
      items: [{
        id: 1,
        name: '',
        quantity: 1,
        rate: 1,
        total: 0,
        serviceName:'',
      }],
      nextTodoId: 2,

      showServiceInput:false,


    }
  },
  mounted() {
    this.initTrHeight()
    this.getSettings()
    this.getResourceItems()
  },
  created() {
    window.addEventListener('resize', this.initTrHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.initTrHeight)
  },
  methods: {


    getSettings(){

      axios.get('/getsettings').then((response) => {

            if(response.data.hasOwnProperty('success'))
            {
              if(response.data.success === true)
              {
                /*console.log(response.data.data);*/
                this.settings = response.data.data;
                
                console.log('settings',this.settings);
                console.log('Settings Fetched');
                this.calculatePrices()
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

    calculatePrices(){
      this.subtotal = 0;
      this.items.forEach((value, index) => {
            console.log(value.amount);
            this.subtotal += value.rate * value.quantity;
        });

      let vat_per = this.settings.vat / 100;

      this.vat = vat_per * this.subtotal;
      this.net_total = this.subtotal + this.vat;

    },


    submitResource(){

          this.isSubmitting = true;

        if (this.purchaseOrderFile != null) {
          this.uploadImg(this.purchaseOrderFile);
          
        }
        else
        {
          axios.post('/createPurchase', {
                    purchaseType: this.purchaseType,
                    /*orderNo: this.PurchaseOrderNo,*/
                    date: this.allocationDate,
                    purchaseOrderFile: this.fileString,
                    subtotal: this.subtotal,
                    vat: this.vat,
                    net_total: this.net_total,
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
        }

        

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
                    subtotal: this.subtotal,
                    vat: this.vat,
                    net_total: this.net_total,
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

    resourceTypeChange(val){
      if (this.purchaseType == 'Product') {
        this.showServiceInput = false;
      } else {

        this.showServiceInput = true;
      }
      
      this.getResourceItems()

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

    getResourceItems() {

          axios.get('/getAllResources', {
                params: {
                  resourceType : this.resourceType,
                },
              }).then((response) => {

            if(response.data.hasOwnProperty('success'))
            {
              if(response.data.success === true)
              {
                /*console.log(response.data.data);*/
                this.purchaseItems = response.data.data;
                
                
                console.log('Resource Items Fetched');
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

    repeateAgain() {

      this.items.push({
        id: this.nextTodoId += this.nextTodoId,
        name:'',
        quantity:1,
        rate: 1,
        total: 0,
        serviceName:'',
      })
      console.log(this.items);
      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
      })

      this.calculatePrices()
    },
    removeItem(index) {
      this.items.splice(index, 1)
      this.trTrimHeight(this.$refs.row[0].offsetHeight)

      this.calculatePrices()
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
    },
  },
}
</script>
