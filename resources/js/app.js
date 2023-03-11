import './bootstrap';
import * as Vue from 'vue';
import { createApp } from 'vue';
import * as VueRouter from 'vue-router'
import locale from 'element-plus/lib/locale/lang/en'
import ElementUI from 'element-plus'
import VueTimeago from 'vue-timeago'
import axios from 'axios';
import VueAxios from 'vue-axios';
// import store from './store'
import routers from './routes'
import Inertia from '@inertiajs/vue3'
// import * as VueI18n from 'vue-i18n';
import messages from './i18n';
import App from '@/App.vue';

const app = createApp(App);
// Vue.config.productionTip = false
// const i18n = new VueI18n({
//     locale: 'vi', // set locale
//     fallbackLocale: 'vi', // set fallback locale
//     messages, // set locale messages
// })
// Vue.use(VueI18n);
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
// const app = new Vue({
//   router,
//   store,
// }).$mount('#app')


Vue.config.productionTip = false;
Vue.use(Inertia);

new Vue({
    // i18n,
    render: h => h(Inertia, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: (name) => {
                return import(`@_components/${name}`).then(module => module.default)
            }
        }
    })
}).$mount('#app');

axios.interceptors.response.use(function (response) {
  return response;
  }, function (error) {
  if (error.response.status === 419) {
    error.response.data.message = "Please refresh the page and try again";
  }
  return Promise.reject(error);
});

app.mount('#app');
