<template>
  <div :style="{ 'background-image': 'url(' + img + ')' }" class="hero">
    <h1>Zombie Survival Guide</h1>
    <h3>Get Started before it's too late</h3>
    <router-link to='/guide'>
    <v-btn>
      Get Started
      </v-btn>
      </router-link>
  </div>
</template>

<script>
import img from '../assets/the-walking-dead-atlanta.jpg'
export default {
  name: 'Hero',
  data: function(){
    return {
      img: img
    }
  }
}
</script>

<style>
  .hero {
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
