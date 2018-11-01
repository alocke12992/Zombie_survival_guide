<template>
  <div>
    <Tip 
      v-for="item in data"
      v-bind:key='item.id'
    />
  </div>
</template>

<script>
import Tip from '../components/Tip.vue'
import data from '../assets/data'

export default {
  name: 'Guide',
  components: {
    Tip
  },
  data: () => {
    return {
      data 
    }
  }
}
</script>

<style>

</style>
