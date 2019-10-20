<template>
  <div class="main-container">
    <CopyRight/>
  </div>
</template>

<script>
    import CopyRight from "../atoms/CopyRight";

    export default {
        name: "Footer",
        components: {CopyRight}
    }
</script>

<style scoped>
  .main-container {
    background-color: blueviolet;
    width: 100%;
    bottom: 100%;
  }

  .copy-main-container {
    font-size: 18px;
  }
</style>
