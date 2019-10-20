<template>
  <div class="ship-route-maps">
    <div class="maps">

    </div>
  </div>
</template>

<script>
    export default {
        plugins: ['~/plugins/ship-maps'],
        name: "ShipRouteMaps",
        mounted() {
            let shipMap = document.createElement('script')
            shipMapScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCYbfpYyLzUZml_kR1LAaGB4-EaZRJHeKM&callback=initialize')
            document.head.appendChild(shipMap)
        },
    }
</script>
<style scoped>

</style>
