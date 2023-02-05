import './bootstrap';
import * as Vue from 'vue';
import * as VueRouter from 'vue-router'
import locale from 'element-plus/lib/locale/lang/en'
import ElementUI from 'element-plus'
import VueTimeago from 'vue-timeago'
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store'
import routers from './routes'

Vue.use(VueRouter)
Vue.use(VueAxios, axios);
Vue.use(ElementUI, { locale })
Vue.use(VueTimeago, {
  name: 'Timeago',
  locale: 'en',
})

const router = new VueRouter({
  mode: 'history',
  routes: routers,
})

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router,
  store,
}).$mount('#app')


axios.interceptors.response.use(function (response) {
  return response;
  }, function (error) {
  if (error.response.status === 419) {
    error.response.data.message = "Please refresh the page and try again";
  }
  return Promise.reject(error);
});
