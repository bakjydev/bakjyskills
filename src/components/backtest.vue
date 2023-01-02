<template>
    <section class="section is-small">
      <div class="columns">
        <div class="column">
          <!--  lien animation lottie       -->
          <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_2uvh7uv0.json"  background="transparent"  speed="1"  style="height: 500px;"  loop autoplay></lottie-player>
        </div>
        <div class="column align-self-center">
          <!--  text à droite de l'animation lottie en haut de page       -->
          <h1 class="title">FORMATIONS</h1>
          <h2 class="subtitle"><span>En présentiel & en distanciel </span> <br><br><img src="../assets/newImg/book.webp" alt="séparateur book"><br><br> Des parcours de formations <br> crées par des professionnels  </h2>
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
  font-family: ChampagnelimousineBold;
  font-size: 6.5vw;
}

.subtitle{
  color: white;
  font-family: ChampagnelimousineBold;
}

span{
  font-size: 2rem;
}

img{
  width: 5%;
}
</style>