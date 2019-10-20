<template>
  <div class="localization-content">
    <p>Stars: {{ $store.state.stars }}</p>
  </div>
</template>

<script>
    import * as axios from "../.nuxt/axios";

    export default {
        fetch ({ store, params }) {
            return axios.get('http://my-api/stars')
                .then((res) => {
                    store.commit('setStars', res.data)
                })
        },
        layout: 'default',
        name: "localization",
        methods: {
            fetch({store, params}) {
                return axios.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_4460')
                    .then((res) => {
                        store.commit('setStorms', res.data)
                    }),
                    console.warn()
            },
        }
    }
</script>

<style scoped>

</style>
