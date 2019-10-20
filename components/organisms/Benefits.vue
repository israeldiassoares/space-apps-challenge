<template>
  <div class="benefits-container">
    <div class="card-content">
      <div class="card card-1">
        <img alt="" class="card-img" src="../../assets/card/card-img-1.jpeg">
        <div class="card-text">
          <p class="title">
            Suas Aplicações
          </p>
          <p class="description">
            Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e
            fazendo
            pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi. Detraxit
            consequat
            et quo num tendi nada.
          </p>
        </div>
        <div class="border-bottom"></div>

      </div>
      <div class="card card-2">
        <img alt="" class="card-img" src="../../assets/card/card-img-1.jpeg">
        <div class="card-text">
          <p class="title">
            Suas Aplicações
          </p>
          <p class="description">
            Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e
            fazendo
            pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi. Detraxit
            consequat
            et quo num tendi nada.
          </p>
        </div>
        <div class="border-bottom"></div>

      </div>
      <div class="card card-3">
        <img alt="" class="card-img" src="../../assets/card/card-img-1.jpeg">
        <div class="card-text">
          <p class="title">
            Suas Aplicações
          </p>
          <p class="description">
            Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e
            fazendo
            pose. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi. Detraxit
            consequat
            et quo num tendi nada.
          </p>
        </div>
        <div class="border-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Benefits"
    }
</script>

<style scoped>


  .card-content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    min-width: 100%;
    height: auto;
  }

  .card-content img {
    width: 100%;
    height: 100px;
  }

  .card {
    width: 320px;
  }

  .card-text {
    padding: 0 12px 0 12px;
  }

  .title {
    font-size: 28px;
  }

  .description {
    padding-top: 16px;
    font-size: 16px;
  }

  .border-bottom {
    height: 32px;
    width: 100%;
    background-color: #3595C5;
    opacity: 0.6;
  }
</style>
