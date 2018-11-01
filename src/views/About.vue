<template>
  <div>
    <h1>Works Cited</h1>
    <ul v-for="item in links" v-bind:key='item.id'>
      <li>
        <a :href='item.link' target='_blank'>
        {{item.link}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import data from '../assets/data.js'
export default {
  name: 'About',
  data: function() {
    return {
      links: data.about
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
