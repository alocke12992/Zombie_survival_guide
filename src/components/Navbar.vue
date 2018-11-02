<template>
  <div>
    <nav>
      <div class='logo'>
        <img :src='logo' alt="zombie guide" />
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
import logo from '../assets/ZombieSurvivalGuide.png'
export default {
  name: 'Navbar',
  data() {
    return {
      logo: logo,
      links: [
        {
          id: 0,
          text: 'HOME',
          page:'/'
        },
        {
          id: 1,
          text: 'GETTING STARTED',
          page: '/guide'
        },
        {
          id: 2,
          text: 'ABOUT',
          page: '/about',
        },
        {
          id: 3,
          text: 'SHTF BAG',
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
