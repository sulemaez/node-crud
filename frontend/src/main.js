import Vue from 'vue'
import axios from 'axios'
import VueSweetAlert2 from 'vue-sweetalert2'
import App from './App.vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import './assets/tailwind.css'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Add from './components/Add.vue'
Vue.component('icon', Icon)

const alertOptions ={
  confirmButtonColor: '#74b4ff',
  cancelButtonColor: '#ff0000'
}

const router = new VueRouter({
  routes :[
    {
      path : '/home',
      component : Home
    },
    {
      path : '/add',
      component : Add
    }
  ]
})

Vue.use(VueSweetAlert2,alertOptions)
Vue.use(VueRouter)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

 
