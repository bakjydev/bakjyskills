<template>
  <section class="section is-medium">
    <div class="columns">
      <div class="column align-self-center">
        <h2 class="title">Retrouvez notre parcours de <br>formation en Management</h2>
        <h2 class="subtitle">Des fondamentaux aux cas par cas </h2>
        <div class="buttons is-inline-block">
          <a class="button"  href="https://drive.google.com/file/d/1u84o2DgihY9o6GSF_miSUbttmZKaZt2y/view?usp=sharing" target="_blank">
            <strong>PROGRAMME <br>Formation Management</strong>
          </a>
        </div>
      </div>
      <div class="column align-self-center has-text-centered">
        <lottie-player class="is-centered has-text-centered" src="https://assets2.lottiefiles.com/packages/lf20_9wpyhdzo.json"  background="transparent"  speed="1"  style=" height: 400px;"  loop  autoplay></lottie-player>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Programme"
}
</script>

<style scoped>

.section{
  padding: 3rem;
}
.title{
  margin-bottom: 1.5rem;
}
.subtitle{
  margin-bottom: 3rem;
  font-size: 1.7rem;
}
.button{
  background-color: #066382;
  color: white;
  border: solid 2px white;
  padding: 2rem;
  border-radius: 25px;
}

.button:hover{
  background-color: white;
  color: #066382;
  border: solid 2px #066382;
}
</style>