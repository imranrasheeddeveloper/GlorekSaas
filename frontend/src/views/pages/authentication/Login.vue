<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          
          <!-- Brand logo-->
          <b-link class="brand-logo">
            <b-img
              :src="appLogoImage"
              alt="logo"
            />
          </b-link>
          <!-- /Brand logo-->
          

          <!-- form -->
          <validation-observer
            ref="loginForm"
            #default="{invalid}"
          >
            <b-form
              class="auth-login-form mt-2"
              @submit.prevent="login"
            >
              <!-- email -->
              <b-form-group
                label="Email"
                label-for="login-email"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  vid="email"
                  rules="required|email"
                >
                  <b-form-input
                    id="login-email"
                    v-model="userEmail"
                    :state="errors.length > 0 ? false:null"
                    name="login-email"
                    placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- forgot password -->
              <b-form-group>
                <!-- <div class="d-flex justify-content-between">
                  <label for="login-password">Password</label>
                  <b-link :to="{name:'auth-forgot-password'}">
                    <small>Forgot Password?</small>
                  </b-link>
                </div> -->
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  vid="password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="password"
                      :state="errors.length > 0 ? false:null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="login-password"
                      placeholder="Password"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- checkbox -->
             <!--  <b-form-group>
                <b-form-checkbox
                  id="remember-me"
                  v-model="status"
                  name="checkbox-1"
                >
                  Remember Me
                </b-form-checkbox>
              </b-form-group> -->

              <!-- submit buttons -->
              <b-button
                type="submit"
                variant="primary"
                block
                :disabled="isSubmitting"
              >
                <b-spinner v-if="isSubmitting" small />
                <span v-if="isSubmitting" >Please Wait</span>

                <span v-if="!isSubmitting" >Sign in</span>
                
              </b-button>
            </b-form>
          </validation-observer>

         <!--  <b-card-text class="text-center mt-2">
            <span>New on our platform? </span>
            <b-link :to="{name:'auth-register'}">
              <span>&nbsp;Create an account</span>
            </b-link>
          </b-card-text> -->

          <!-- divider -->
         <!--  <div class="divider my-2">
            <div class="divider-text">
              or
            </div>
          </div> -->

          <!-- social buttons -->
         <!--  <div class="auth-footer-btn d-flex justify-content-center">
            <b-button
              variant="facebook"
              href="javascript:void(0)"
            >
              <feather-icon icon="FacebookIcon" />
            </b-button>
            <b-button
              variant="twitter"
              href="javascript:void(0)"
            >
              <feather-icon icon="TwitterIcon" />
            </b-button>
            <b-button
              variant="google"
              href="javascript:void(0)"
            >
              <feather-icon icon="MailIcon" />
            </b-button>
            <b-button
              variant="github"
              href="javascript:void(0)"
            >
              <feather-icon icon="GithubIcon" />
            </b-button>
          </div> -->
        </b-col>
      </b-col>
    <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow, BCol, BLink, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BFormCheckbox, BCardText, BCardTitle, BImg, BForm, BButton, BAlert, VBTooltip,BSpinner,
} from 'bootstrap-vue'
import useJwt from '@/auth/jwt/useJwt'
import axios from 'axios'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import { getHomeRouteForLoggedInUser } from '@/auth/utils'
import { $themeConfig } from '@themeConfig'

import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  directives: {
    'b-tooltip': VBTooltip,
  },
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    BAlert,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
    BSpinner,
  },
  setup(props) {
    const { appName, appLogoImage } = $themeConfig.app

    return {

      // App Name
      appName,
      appLogoImage,
      isSubmitting:false,
    }

  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: '',
      password: '',
      userEmail: '',
      sideImg: require('@/assets/images/pages/login-v2.svg'),

      // validation rules
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    login() {
      this.$refs.loginForm.validate().then(success => {
        if (success) {
          this.isSubmitting = true;
          useJwt.login({
            email: this.userEmail,
            password: this.password,
          })
            .then(response => {

              if(response.data.hasOwnProperty('success'))
                  {
                    if(response.data.success === true)
                    {

                      console.log('response', response.data.data);
                      var user = response.data.data
                      const  userData  = user
                      useJwt.setToken(response.data.data.token)
                      useJwt.setRefreshToken(response.data.data.token)
                      localStorage.setItem('userData', JSON.stringify(userData))
                      this.$ability.update([]);
                      this.$ability.update(userData.ability)
                      localStorage.setItem('permissions', userData.ability)

                      console.log('injected enteries',this.$ability)
                      //console.log('abilities',this.$ability.can('add/copy', 'employees'))


                      // ? This is just for demo purpose as well.
                      // ? Because we are showing eCommerce app's cart items count in navbar
                      this.$store.commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', 7/*userData.extras.eCommerceCartItemsCount*/)

                      // ? This is just for demo purpose. Don't think CASL is role based in this case, we used role in if condition just for ease
                      this.$router.replace(getHomeRouteForLoggedInUser(userData.role))
                        .then(() => {
                          this.$toast({
                            component: ToastificationContent,
                            position: 'top-right',
                            props: {
                              title: `Welcome ${userData.name || userData.username}`,
                              icon: 'CoffeeIcon',
                              variant: 'success',
                              text: `You have successfully logged in as ${userData.role}. Now you can start to explore!`,
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





            })
            .catch(error => {
              console.log(error);
              this.$refs.loginForm.setErrors(error.response)
            })
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
