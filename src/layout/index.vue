
<template>
  <div class="app-layout">
    <Navbar />
    <AppContent/>
  </div>
</template>

<script lang="ts">
import AppContent from './AppContent.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'appLayout',
  components: {
    AppContent,
    Navbar
  }
}
</script>