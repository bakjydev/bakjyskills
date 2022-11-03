<template>
  <section class="section is-medium">
    <div class="columns">
      <div class="column">
        <img src="https://bulma.io/images/placeholders/128x128.png"><br>
        <h2 class="subtitle">Ingénieur et Fondateur</h2><br>
        <div class="buttons is-centered">
          <a class="button is-primary" @click.prevent="nextStep1(true)">
            <strong>En savoir plus</strong>
          </a>
        </div>
      </div>
      <div class="column">
        <img src="https://bulma.io/images/placeholders/128x128.png"><br>
        <h2 class="subtitle">Responsable des Ressources Humaines et de la Communication</h2>
        <div class="buttons is-centered">
          <a class="button is-primary" @click.prevent="nextStep2(true)">
            <strong>En savoir plus</strong>
          </a>
        </div>
      </div>
      <div class="column">
        <img src="https://bulma.io/images/placeholders/128x128.png"><br>
        <h2 class="subtitle">Notre Expert en Comptabilité et Finances</h2>
        <div class="buttons is-centered">
          <a class="button is-primary" @click.prevent="nextStep3(true)">
            <strong>En savoir plus</strong>
          </a>
        </div>
      </div>
    </div>
    <div v-if="activeStep==1">
      <div class="box">
        cc je suis le détail de PNB
      </div>
    </div>
    <div v-if="activeStep==2">
      <div class="box">
        cc je suis le détail de Anaïs
      </div>
    </div>
    <div v-if="activeStep==3">
      <div class="box">
        cc je suis le détail de Tobias
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
}

img {
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.subtitle {
  color: white;
  font-weight: bold;
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