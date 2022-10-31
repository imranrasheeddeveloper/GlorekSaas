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
            v-model="oldOwner"
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
      
      <b-col md="6" v-if="isPdf(ui_logo)" >

                            <a class="btn btn-primary mt-md-2" :href="ui_logo" target="_blank">View file</a>
              </b-col>
        <b-col md="6" v-else>
                <enlargeable-image v-if="ui_logo" :src="ui_logo" :src_large="ui_logo" animation_duration="600">
                      <b-img style="max-height: 80px;" thumbnail  :src="ui_logo" />
                </enlargeable-image>
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
      
      <b-col md="6" v-if="isPdf(ui_letter_head)" >

                            <a class="btn btn-primary mt-md-2" :href="ui_letter_head" target="_blank">View file</a>
              </b-col>
        <b-col md="6" v-else>
                <enlargeable-image v-if="ui_letter_head" :src="ui_letter_head" :src_large="ui_letter_head" animation_duration="600">
                      <b-img style="max-height: 80px;" thumbnail  :src="ui_letter_head" />
                </enlargeable-image>
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
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BFormDatepicker, BCard, BFormFile, BSpinner,BInputGroup, BInputGroupPrepend,BFormCheckboxGroup,BInputGroupAppend,BImg,
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
import EnlargeableImage from '@diracleo/vue-enlargeable-image';

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
    EnlargeableImage,
    BImg,
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
      ui_letter_head:'',
      ui_logo:'',
      oldOwner:'',
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
    this.getCompanyDetail()
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

    assignOwnerField(item) {
      if (item) {
        
        this.formValues.owner_id = item.item.id;
      }
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

    getCompanyDetail(){
        console.log(this.$route.params.id);

        const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                        
                    }
                }


          axios.get('/getCompanyDetail', {
            params: {
              id: this.$route.params.id,
            },
          },config).then((response) => {

            if(response.data.hasOwnProperty('success'))
            {
              if(response.data.success === true)
              {
                console.log(response.data);
                this.formValues.owner_id = response.data.data.owner_id;
                this.formValues.name = response.data.data.name;
                
                this.oldOwner = response.data.data.owner;
                
                this.formValues.name_arabic = response.data.data.name_arabic;
                this.formValues.vat_number = response.data.data.vat_number;
                this.formValues.cr_number = response.data.data.cr_number;
                this.formValues.email = response.data.data.email;
                this.formValues.contact_number = response.data.data.contact_number;
                
                this.ui_logo = response.data.data.logo;
                this.ui_letter_head = response.data.data.letter_head;
                
                console.log('done');
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
      
    submitResource(){

          this.isSubmitting = true;
          var formData = new FormData();
          this.formValues.id = this.$route.params.id;
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
          axios.post('/updateCompany',
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
