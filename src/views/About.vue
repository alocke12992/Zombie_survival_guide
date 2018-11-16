<template>
  <div class='section'>
    <h1>References</h1>
    <div class='abtContainer'>
      <ul>
        <li v-for="item in sources" v-bind:key='item.id'>
          <a :href='item.link' target='_blank'>
            {{item.source}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import data from '../assets/data.js'
export default {
  name: 'About',
  data: function() {
    return {
      sources: data.about
    }
  }
}
</script>

<style scoped>
  .section {
    height: 100vh;
  }
  
  h1 {
    text-align: center;
  }

  .abtContainer {
    height: 100vh;
  }

  ul {
    margin: 10px
  }

  li {
    margin: 25px
  }
</style>
