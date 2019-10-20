<template>
  <div class="container">
    <div class="content">
      <Banner class="index-banner"/>
      <Benefits class="benefits-section"/>
      <Connected class="connected-section"/>
      <Clients class="clients-section"/>
    </div>
  </div>
</template>

<script>
    import Header from '../components/organisms/Header'
    import Banner from "../components/molecules/Banner";
    import Benefits from "../components/organisms/Benefits";
    import Clients from "../components/organisms/Clients";
    import Connected from "../components/organisms/Connected";

    export default {
        plugins: ['~/plugins/ship-maps'],
        layout: 'default',
        components: {
            Connected,
            Clients,
            Benefits,
            Banner,
            Header
        }
    }
</script>

<style>
  .container {
    overflow: hidden;
  }

  .index-banner {
    /*z-index: -100;*/
  }

  .connected-section {
    position: relative;
    bottom: 50px;
    z-index: -1000;
  }

</style>
