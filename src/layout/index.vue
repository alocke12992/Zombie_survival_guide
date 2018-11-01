
<template>
  <div class="app-layout">
      <Navbar v-if="this.$route.path !== '/'" />
      <AppContent class='appContainer'/>
  </div>
</template>

<script>
import AppContent from './AppContent.vue'
import Navbar from '../components/Navbar.vue'
import Hero from '../views/Hero.vue'
export default {
  name: 'appLayout',
  data: function() {
    return {
      showNav: false
    }
  },
  components: {
    AppContent,
    Navbar,
    Hero
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }

</style>
