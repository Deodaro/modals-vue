import Vue from 'vue'
import App from './App.vue'

import Vuelidate from 'vuelidate'

// Plugins
// (будут указываться в скобках через запятую)
Vue.use(Vuelidate)

import router from './routes'

import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
