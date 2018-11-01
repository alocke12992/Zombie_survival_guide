<template>
  <div>
    <nav>
      <router-link v-for="routes in links" 
        v-bind:key="routes.id"
        :to="`${routes.page}`"
      >
      {{routes.text}}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/home'
        },
        {
          id: 1,
          text: 'About',
          page: '/about',
        },
        {
          id: 2,
          text: 'Guide',
          page: '/guide'
        },
        {
          id: 3,
          text: 'Bugout Bag',
          page: '/bugoutBag'
        }
      ]
    }
  }
}
</script>

<style>

</style>
