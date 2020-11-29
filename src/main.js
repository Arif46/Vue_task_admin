import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import {  HasError, AlertError } from 'vform'
import axios from 'axios'

import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import CxltToastr from 'cxlt-vue2-toastr'
Vue.use(CxltToastr)

var toastrConfigs = {
  position: 'top right',
  showDuration: 1000,
  timeOut:5000,
  closeButton:true,
  showMethod:'fadeIn',
  hideMethod:'fadeOut'
}
Vue.use(CxltToastr, toastrConfigs)


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.use(axios)

export default router

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
