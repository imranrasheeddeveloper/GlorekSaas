import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
   baseURL: 'https://arabinspire.glorek.com/api/',
   // baseURL: 'http://gulflamar.itridtechnologies.com/api/',
  // timeout: 1000,
  // headers: {'Content-Type': 'multipart/form-data'}
})

Vue.prototype.$http = axiosIns

export default axiosIns
