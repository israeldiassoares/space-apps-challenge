<template>
  <div class="container">
    <div class="content">
      <Banner class="index-banner"/>
      <Benefits class="benefits-section"/>
      <Clients class="clients-section"/>
    </div>
  </div>
</template>

<script>
    import Header from '../components/organisms/Header'
    import Banner from "../components/molecules/Banner";
    import Benefits from "../components/organisms/Benefits";
    import Clients from "../components/organisms/Clients";

    export default {
        layout: 'default',
        components: {
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
  .index-banner{
    /*z-index: -100;*/
  }

</style>
