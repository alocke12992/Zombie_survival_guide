
<template>
  <div class="app-layout">
    <div v-if="this.$route.path !== '/'">
      <Navbar />
      <AppContent/>
    </div>
    <div v-else>
      <Hero />
    </div>
  </div>
</template>

<script lang="ts">
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

</style>
