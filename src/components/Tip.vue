<template>
  <div>
    {{$route.params.id}}
  </div>
</template>

<script>
export default {
    beforeRouteUpdate(to, from, next) {
    console.log(`Updating slug from ${from} to ${to}`)
    next() //make sure you always call next()
  }
}
</script>

<style>

</style>
