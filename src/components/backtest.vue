<template>
    <section class="section is-small">
      <div class="columns">
        <div class="column">
          <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_2uvh7uv0.json"  background="transparent"  speed="1"  style="height: 500px;"  loop autoplay></lottie-player>
        </div>
        <div class="column align-self-center">
          <h1 class="title">FORMATIONS</h1><br>
          <h2 class="subtitle"><span>En présentiel & en distanciel </span> <br><br><img src="../assets/book.png"><br><br> Des parcours de formations <br> crées par des professionnels  </h2>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "backtest",
}
</script>

<style scoped>


  html {
  scroll-behavior: smooth;
}

.section{
  background-color: #066382;
}

.title{
  color: white;
  font-weight: bold;
  font-size: 8vw;
}

.subtitle{
  color: white;
  font-weight: bold;
}

span{
  font-size: 2rem;
}
.test{
  margin-top: 12%;
}

img{
  width: 5%;
}
</style>