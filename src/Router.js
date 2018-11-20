import Vue from 'vue'
import VueRouter from 'vue-router'
import About from './views/About.vue'
import Hero from './views/Hero.vue'
import Guide from './views/Guide.vue'
import BugoutBag from './views/BugoutBag.vue'
import ShtfItem from './views/ShtfItem.vue'

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
      path: '/references',
      name: 'References',
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
      component: BugoutBag,
    },
    {
      path: '/bugoutBag/:id',
      name: 'Bugout Item',
      component: ShtfItem,
      props: true
    }
  ]
})
