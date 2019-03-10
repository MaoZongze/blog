import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VFadeTransition
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'
// src/main.js
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VFadeTransition
  },
  directives: {
    Ripple
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
