// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuetify from 'vuetify';
import router from './router';
import i18n from './lang';
import 'font-awesome/css/font-awesome.css';
import './theme/default.styl';
import VeeValidate from 'vee-validate';
import colors from 'vuetify/es5/util/colors';
import VueResource from 'vue-resource'
import Truncate from 'lodash.truncate';
import store from './store';
import qs from 'qs';
Vue.prototype.$qs = qs

import './mock';
if (process.env.MOCK_SWITCH !== 'off') {
  require('./mock')
}
Vue.config.productionTip = false;

// Helpers
// Global filters
Vue.filter('truncate', Truncate);

Vue.use(VueResource)
Vue.use(VeeValidate, {
  fieldsBagName: 'formFields'
});
Vue.use(Vuetify, {
  // theme: {
  //   primary: colors.indigo.base, // #E53935
  //   secondary: colors.indigo.lighten4, // #FFCDD2
  //   accent: colors.indigo.base // #3F51B5
  // },
  options: {
    themeVariations: ['primary', 'secondary', 'accent'],
    extra: {
      mainToolbar: {
        color: 'primary',
      },
      sideToolbar: {},
      sideNav: 'primary',
      mainNav: 'primary lighten-1',
      bodyBg: '',
    }
  }
});
// Bootstrap application components



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {
    App
  },
  template: '<App/>'
});