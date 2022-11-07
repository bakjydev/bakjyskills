<template>
  <section class="section is-medium">
    <h1 class="title has-text-centered"><span>NOTRE BUT ?</span></h1>
    <h2 class="subtitle">Créer et animer des formations pour améliorer et transformer vos pratiques en entreprise.</h2>
    <div class="columns">
      <div class="column is-align-items-center">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img class="picto" src="../assets/ecoute.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="subtitle is-4 text-start">ECOUTE ET ANALYSE
                EN FONCTION DE VOTRE PROFIL</p>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img class="picto" src="../assets/mesure.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="subtitle is-4 text-start">ADAPTATION
                FORMATIONS SUR MESURE</p>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img class="picto" src="../assets/professionnel.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="subtitle is-4 text-start">PROFESSIONNELS
                DU METIERS</p>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img class="picto" src="../assets/pratiques.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="subtitle is-4 text-start">CAS PRATIQUES ET
                RETOURS D'EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>
      <div class="column align-self-center">
        <figure class="image is-centered is-hidden-mobile">
          <img class="is-centered" src="../assets/background-assets/backblue.jpg">
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "But"
}
</script>

<style scoped>
h2{
  padding-bottom: 5rem;
}

.section{
  padding: 2rem;
}
span{
  font-weight: bold;
}
.subtitle{
  font-size: 1rem;
  vertical-align: center;
  margin-top: 1.5rem;
}
figure{
  float: left;
}

.picto{
  width: 100px;
  vertical-align: top;
}
</style>