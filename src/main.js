import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue'
import {routes} from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);
<<<<<<< HEAD
Vue.http.options.root = "http://sdc.test:8080/api/";
=======
Vue.http.options.root = "http://localhost:8000/api/";
>>>>>>> 5a936414381366100532e0f7281843f945dfd637

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
