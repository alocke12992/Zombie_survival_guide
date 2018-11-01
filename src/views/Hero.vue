<template>
  <div :style="{ 'background-image': 'url(' + img + ')' }" class="hero">
    <div class='heroContainer'>
      <div class='heroText'>
        <h1 class='heroContent'>Zombie</h1>
        <h1 class='heroContent'>Survival Guide</h1>
        <h3 class='heroContent subText'>Get Started before it's too late</h3>
      </div>
      <div class='getStarted'>
        <router-link to='/guide' class='getStartedLink'>
          Get Started
        </router-link>
      </div>
    </div>
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

<style scoped>
  .hero {
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
  }

  .heroContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 18%;
  }

  .heroText {
    margin-bottom: 85px;
  }

  .heroContent {
    margin: 0;
    color: #D8D8D8;
    font-size: 66px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-style: italic; 
    font-variant: normal;
    font-weight: 500;
  }

  .subText {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 300;
  }

  .getStarted {
    background: #D8D8D8;
    border-radius: 32px;    
    height: 60px;
    width: 184px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .getStartedLink {
    margin: auto;
  }
</style>
