<template>
  <div class='section'>
  <h1>Bugout Bag</h1>
    <div class='cardContainer'>
      <ItemCard v-for='item in items' v-bind:key=' item.id' :props='item'/>
    </div>
  </div>
</template>

<script>
import data from '../assets/data'
import ItemCard from '../components/ItemCard.vue'

export default {
  name: 'BugoutBag',
  components: {
    ItemCard
  },
  data: function() {
    return{
      items: data.items
    }
  }
}
</script>

<style scoped>
  h1 {
      text-align: center;
  }
  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
