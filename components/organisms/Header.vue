<template>
  <div class="header-container">
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
  .header-container{
    display: flex;
    flex-direction: row;
    background-color: darkblue;
    height: 75px;
  justify-content: flex-end;
  }
  .menu-header {
    display: flex;
    align-items: center;
  }

</style>
