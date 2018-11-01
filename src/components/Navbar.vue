<template>
  <div>
    <nav>
      <div class='logo'>
        <img src="../assets/ZombieSurvivalGuide.png" alt="zombie guide" />
      </div>
      <div class="divider"></div>
      <div class='navLinks'>
        <router-link v-for="routes in links" 
          v-bind:key="routes.id"
          :to="`${routes.page}`"
        >
        {{routes.text}}
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'About',
          page: '/about',
        },
        {
          id: 2,
          text: 'Guide',
          page: '/guide'
        },
        {
          id: 3,
          text: 'Bugout Bag',
          page: '/bugoutBag'
        }
      ]
    }
  }
}
</script>

<style>
  nav{
    width: 100%;
    display: block
  }
  a {
    margin: 15px;
    color: gray;
    text-decoration: none;
  }

  img {
    height: 25%;
    width: 25%;
  }

  .logo {
    display: flex;
    justify-content: center;
  }

  .divider {
    content: '';
    z-index: 1;
    width: 70%;
    height: 1px;
    margin: auto;
	  background: #dddddd;
  }

  .navLinks {
    display: flex;
    justify-content: center;
  }
</style>
