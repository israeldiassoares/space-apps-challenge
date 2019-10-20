<template>
  <div class="container">
    <div class="main-container">
      <Header class="main-header"/>
      <nuxt/>
      <Footer class="main-footer"/>
    </div>
  </div>
</template>

<script>
    import Header from '../components/organisms/Header'
    import Footer from '../components/organisms/Footer'

    export default {
        name: 'default',
        components: {
            Footer,
            Header
        }
    }

</script>
<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }

  Header, Footer {
    width: 100% ;
    height: 10vh;
  }

  Footer {
    bottom: 100%;
  }
</style>
