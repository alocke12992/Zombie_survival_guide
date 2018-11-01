
<template>
  <div class="app-layout">
    <div v-if="this.$route.path !== '/'">
      <Navbar />
    </div>
    <AppContent/>
  </div>
</template>

<script lang="ts">
import AppContent from './AppContent.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'appLayout',
  data: function() {
    return {
      showNav: false
    }
  },
  components: {
    AppContent,
    Navbar
  },
  created: function () {
    console.log(this.$route)
  },
  watch:{
    $route (to, from){
      console.log(this.$route)
    }
  } 
}
</script>

<style>

</style>
