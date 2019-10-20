<template>
  <div class="banner-container">
    <img alt="" class="img-banner" src="../../assets/banner/top.jpeg">
  </div>

</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>
  .banner-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .img-banner {

  }

  .title-benefits {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 1000;
  }

  .title-benefits p {
    background-color: #fff;
    color: #000;
    font-size: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
</style>
