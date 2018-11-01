<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from './layout/index.vue'

export default {
  name: 'app',
  components: {
    Layout
  },
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
