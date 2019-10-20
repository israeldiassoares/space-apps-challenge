<template>
  <div class="main-container">
  </div>
</template>

<script>
    import Button from '../atoms/Button'

    export default {
        name: "AsideMenu",
        components: {
            Button
        }
    }
</script>

<style scoped>
  .main-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: red;
    width: 35%;
    height: 100vh;
  }


</style>
