import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import feather from 'vue-icon'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 

Vue.use(feather, 'v-icon') 
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
