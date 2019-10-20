<template>
  <div class="container">
      <Logo class="img-logo"/>
      <Menu class="menu-header"/>
  </div>
</template>

<script>
    import Logo from '../atoms/Logo'
    import Menu from "../molecules/Menu";

    export default {
        name: "Header",
        components: {
            Menu,
            Logo
        }
    }
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: row;
    background-color: darkblue;
    height: 75px;
  }
  .menu-header {
    display: flex;
    align-items: center;
  }
  .img-logo{
    position: relative;
    z-index: 1000;

  }

</style>
