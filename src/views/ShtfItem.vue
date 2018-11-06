<template>
  <div class='section'>
  <div class='itemContainer'>
    <h1>{{item.title}}</h1>
    <img :src='item.image' alt='Item title' />
    <p>{{item.description}}</p>
    <router-link to='/bugoutBag'>Back</router-link>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ShtfItem',
  props: {
    id: {
      type: Number,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
  }
}
</script>

<style scoped>
  .itemContainer {
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
  }

  .itemContainer > h1,img,p {
    margin: 50px;
  }
</style>
