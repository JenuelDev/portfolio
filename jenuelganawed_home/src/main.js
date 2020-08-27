import Vue from 'vue';
import './assets/style.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import vsButton from 'vuesax/dist/vsButton';
import vsDialog from 'vuesax/dist/vsDialog';
import 'vuesax/dist/vuesax.css';
import VuePageTransition from 'vue-page-transition'
 
Vue.use(VuePageTransition)
Vue.use(vsButton)
Vue.use(vsDialog)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
