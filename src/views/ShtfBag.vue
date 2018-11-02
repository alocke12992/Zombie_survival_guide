<template>
    <div class='cardContainer'>
      <ItemCard v-for='item in items' v-bind:key=' item.id' :props='item'/>
    </div>
</template>

<script>
import data from '../assets/data'
import ItemCard from '../components/ItemCard.vue'

export default {
  name: 'ShtfBag',
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
  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
