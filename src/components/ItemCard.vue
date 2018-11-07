<template>
  <div class='card'>
    <router-link :to="{ 
      name: 'Bugout Item', 
      params: {
        id: item.id, 
        item: {
          title: item.title, 
          description: item.description, 
          image: item.image
        }
      }
    }">
    <div class='cardImge'>
      <img :src='item.image' alt="temp" />
    </div>
    <div class="cardContent">
      <div class='cardTitle'>{{item.title}}</div>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: ['props'],
  data: function() {
    return{
      item: this.props,
    }
  }
}
</script>

<style scoped>
  a {
    margin: auto;
  }
  
  img {
    vertical-align: middle;
    max-width: 100%;
    height: unset;
    width: unset;
  }
  .card{
    max-width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 290px;
    min-height: 0;
    background: #fff;
    padding: 0;
    border: none;
    border-radius: .28571429rem;
    -webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    -webkit-transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;
    transition: -webkit-box-shadow .1s ease,-webkit-transform .1s ease;
    transition: box-shadow .1s ease,transform .1s ease;
    transition: box-shadow .1s ease,transform .1s ease,-webkit-box-shadow .1s ease,-webkit-transform .1s ease;
    margin: 10px;
  }

  .cardImage {
    position: relative;
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding: 0;
    background: rgba(0,0,0,.05)
  }

  .cardContent{
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    border: none;
    border-top: 1px solid rgba(34,36,38,.1);
    background: 0 0;
    margin: 0;
    padding: 1em 1em;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 1em;
    border-radius: 0;
    text-align: center;
  }

  .cardTitle {
    display: block;
    margin: '';
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    color: rgba(0,0,0,.85);
    font-weight: 700;
    font-size: 1.28571429em;
    margin-top: -.21425em;
    line-height: 1.28571429em;
  }

  .cardDescription {
    margin-top: .5em;
    color: rgba(0,0,0,.68);
  }
</style>
