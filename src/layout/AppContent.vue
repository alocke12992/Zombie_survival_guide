<template>
  <div class="contentContainer" :style="{ 'background-image': 'url(' + image + ')' }">
    <router-view class='content'/>
  </div>
</template>

<script>
  import background from "../assets/the-walking-dead-atlanta.jpg"
  export default {
    name: 'AppContent',
    data: function(){
      return{
        image: background
      }
    }
  }
</script>

<style scoped>
  .contentContainer {
    display: flex;
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .content {
    background: white;
    width: 75%;
  }
</style>