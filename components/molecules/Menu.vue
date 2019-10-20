<template>
  <div class="menu-container">
    <nuxt-link class="menu-about" to="company">
      About Company
    </nuxt-link>
    <nuxt-link class="menu-contact" to="contact">
      Contact
    </nuxt-link>
    <nuxt-link class="menu-press" to="press">
      Press
    </nuxt-link>
    <nuxt-link class="menu-buy" to="buy-it">
      Buy Now
    </nuxt-link>
  </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>
  .menu-container {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
  }

  .menu-container a {
    color: white;
  }
  .menu-container .menu-buy{
    background-color: mediumblue;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 25%;
  }

</style>
