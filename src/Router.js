import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Hero from './views/Hero.vue'
import Guide from './views/Guide.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
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
      component: Guide
    },
  ]
})