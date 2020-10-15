import Vue from 'vue'
// import Vuex from 'vuex' pas utilisé
import App from './App.vue'
import router from './router'
import axios from "axios";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-scss'
import VueLocalStorage from 'vue-localstorage'
import VueSessionStorage from 'vue-sessionstorage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
Vue.use(VueLocalStorage)
Vue.use(VueSessionStorage)

library.add(faTrash)
Vue.component('font-awesome-icon', FontAwesomeIcon)


// Vue.use(Vuex) pas utilisé

// Configuration d'Axios
axios.defaults.baseURL = 'http://localhost:3000/api/';
const TOKEN = sessionStorage.getItem('token')
if (TOKEN) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + TOKEN;
}
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')