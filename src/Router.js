import Vue from 'vue'
import VueRouter from 'vue-router'
import About from './views/About.vue'
import Hero from './views/Hero.vue'
import Guide from './views/Guide.vue'
import ShtfBag from './views/ShtfBag.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hero
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide,
    },
    {
      path: '/bugoutBag',
      name: 'Bugout Bag',
      component: ShtfBag,
    },
  ]
})
