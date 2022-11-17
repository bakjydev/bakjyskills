<template>
  <section class="section is-medium">
    <h1 class="title">NOS FORMATEURS</h1>
    <div class="columns">
      <div class="column">
        <img src="../assets/newImg/PNB.webp" alt="Pierre-Nicolas Bacquet"><br>
        <h2 class="subtitle name">PIERRE-NICOLAS BACQUET</h2>
        <h2 class="subtitle">Ingénieur et Fondateur du Groupe Bakjy</h2>
        <div class="buttons is-centered">
          <a class="button is-primary" href="https://www.linkedin.com/in/pierre-nicolas-bacquet-61b56820/" target="_blank">
            <strong>En savoir plus</strong>
          </a>
        </div>
      </div>
      <div class="column">
        <img src="../assets/newImg/anais.webp" alt="Anaïs Evrard"><br>
        <h2 class="subtitle name">ANAIS EVRARD</h2>
        <h2 class="subtitle">Responsable des Ressources Humaines et de la Communication</h2>
        <div class="buttons is-centered">
          <a class="button is-primary" href="https://www.linkedin.com/in/ana%C3%AFs-evrard-a41aa0114/" target="_blank">
            <strong>En savoir plus</strong>
          </a>
        </div>
      </div>
      <div class="column">
        <img src="../assets/newImg/tobias.webp" alt="Tobias Sellam"><br>
        <h2 class="subtitle name">TOBIAS SELLAM</h2>
        <h2 class="subtitle">Expert en Comptabilité et Finances</h2>
        <div class="buttons is-centered">
          <a class="button is-primary"  href="https://www.linkedin.com/in/tobias-sellam-6388ba144/" target="_blank">
            <strong>En savoir plus</strong>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Formateurs",
  data() {
    return {
      count: 1,
      activeStep: 0,
    };
  },
  methods: {
    nextStep1() {
      this.activeStep = 1;
    },
    nextStep2() {
      this.activeStep = 2;
    },
    nextStep3() {
      this.activeStep = 3;
    },
  }
}
</script>

<style scoped>
section {
  background-color: #066382;
  padding: 2rem;
  padding-bottom: 4rem;
}

img {
  width: 250px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.title{
  font-size: 6.5vw;
  color: white;
}

.subtitle {
  color: white;
  font-family: ChampagnelimousineBold;
}

.name{
  font-size: 1.7rem;
}

.button {
  background-color: #066382;
  color: white;
  border: solid 2px white;
}

.button:hover {
  background-color: white;
  color: #066382;
  border: solid 2px white;
}
</style>