import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import feather from 'vue-icon'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 

Vue.use(feather, 'v-icon') 

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
