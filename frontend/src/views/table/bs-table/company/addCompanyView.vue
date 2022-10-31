<template>
  <b-form @submit.prevent>
    <b-row>

      <b-col md="6">
        <b-form-group
          label="Owner"
          label-for="owner_id"
        >

          <vue-autosuggest
            
            :suggestions="filteredOptions"

            :limit="10"
            :input-props="{id:'autosuggest__input',class:'form-control', placeholder:'Search with name or ID'}"
            @input="onInputChange"
            
            @selected="assignOwnerField"
            
          >
            <template slot-scope="{suggestion}">
              <span class="my-suggestion-item">{{ suggestion.item.name }}, {{ suggestion.item.id }} </span>
            </template>
          </vue-autosuggest>


        </b-form-group>
      </b-col>


      <b-col md="6">
        <b-form-group
          label="Name"
          label-for="name"
        >
           <b-form-input
             id="name"
            v-model="formValues.name"
            type="text"
            placeholder="Name"
            
          />
        </b-form-group>
      </b-col>
      
      <b-col md="6">
        <b-form-group
          label="Name AR"
          label-for="name_arabic"
        >
           <b-form-input
             id="name_arabic"
            v-model="formValues.name_arabic"
            type="text"
            placeholder="Name AR"
            
          />
        </b-form-group>
      </b-col>

    <b-col md="6">
        <b-form-group
          label="Email"
          label-for="email"
        >
           <b-form-input
             id="email"
            v-model="formValues.email"
            type="text"
            placeholder="Email"
            
          />
        </b-form-group>
      </b-col>
      
      <b-col md="6">
        <b-form-group
          label="Contact Number"
          label-for="contact_number"
        >
           <b-form-input
             id="contact_number"
            v-model="formValues.contact_number"
            type="text"
            placeholder="Contact Number"
            
          />
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group
          label="VAT#"
          label-for="vat_number"
        >
           <b-form-input
             id="vat_number"
            v-model="formValues.vat_number"
            type="text"
            placeholder="VAT#"
            
          />
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group
          label="CR#"
          label-for="cr_number"
        >
           <b-form-input
             id="cr_number"
            v-model="formValues.cr_number"
            type="text"
            placeholder="CR#"
            
          />
        </b-form-group>
      </b-col>


      <b-col md="6">
                <b-form-group
                  label="Logo"
                  label-for="logo"
                >

                  <b-form-file
                    v-model="formValues.logo"
                    id="logo"
                    accept="image/* , .pdf"
                    placeholder="Upload Logo attachment..."
                    drop-placeholder="Drop file here..."
                  />
                </b-form-group>
      </b-col>
      
      <b-col md="6">
                <b-form-group
                  label="Letter Head"
                  label-for="letter_head"
                >

                  <b-form-file
                    v-model="formValues.letter_head"
                    id="letter_head"
                    accept="image/* , .pdf"
                    placeholder="Upload Letter Head attachment..."
                    drop-placeholder="Drop file here..."
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
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BFormDatepicker, BCard, BFormFile, BSpinner,BInputGroup, BInputGroupPrepend,BFormCheckboxGroup,BInputGroupAppend,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import VueMonthlyPicker from 'vue-monthly-picker'
import { MonthPickerInput } from 'vue-month-picker'
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
    BFormCheckboxGroup,
    VueMonthlyPicker,
    MonthPickerInput,
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
      nextTodoId: 2,
      isSubmitting:false,
      monthLabelArray:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

      filteredOptions:[],
      statuses:[
        { value: '1', text: 'UnPaid' },
        { value: '2', text: 'Paid' },
        { value: '3', text: 'Partially Paid' },
      ],
      invoiceAttachement:null,
      resourceItems:[],
      settings:[],
      vat : 10, // fixed need to make it dynamic later
      formValues: {
        owner_id:'',
        name:'',
        name_arabic:'',
        vat_number:'',
        cr_number:'',
        email:'',
        contact_number:0,
        logo:null,
        letter_head:null,
      },
    }
  },
  mounted() {
    this.getSettings()
    
  },

  
  methods: {

    assignOwnerField(item) {
      if (item) {
        
        this.formValues.owner_id = item.item.id;
      }
    },

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

    onInputChange(text) {
      if (text === '' || text === undefined) {
        return
      }

      axios.get('/getOwnerDropdown', {
                params: {
                  id: text,
                },
              }).then((response) => {

            if(response.data.hasOwnProperty('success'))
            {
              if(response.data.success === true)
              {
                console.log(response.data.data);
                this.filteredOptions = [{data:response.data.data}];
                
                
                console.log('Owners Fetched');
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
                      text: response.data.message,
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


    submitResource(){

          this.isSubmitting = true;
          var formData = new FormData();
    
          Object.entries(this.formValues).forEach(([key, value]) => {
              
              if(typeof value === 'object' && value !== null && !Array.isArray(value)  )
              {
                
                if (value instanceof File) {

                  formData.append(key, value);
                }
                else
                {
                  console.log(key, value);
                  formData.append(key, JSON.stringify(value));
                }
                
              }
              else if(typeof value === 'object' && value !== null && Array.isArray(value)  )
              {
                  formData.append(key, JSON.stringify(value));
              }
              else
              {
                if (value !== null) {
                  //console.log(key, value);
                  formData.append(key, value);
                }
              }
              
            });
          axios.post('/createCompany',
                        formData,).then((response) => {

                  if(response.data.hasOwnProperty('success'))
                  {
                    if(response.data.success === true)
                    {
                      console.log(response.data.data);
                      
                      this.$router.replace('/companies')
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



  },
}
</script>
