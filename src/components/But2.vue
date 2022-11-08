<template>
  <section class="section is-medium">
    <div class="columns">
      <div class="column ">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-96x96">
                <img class="picto is-rounded" src="../assets/ecoute.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content text-start ">
              <p class="subtitle is-4">ECOUTE ET ANALYSE
                EN FONCTION DE VOTRE PROFIL</p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-96x96">
                <img class="picto is-rounded" src="../assets/mesure.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content text-start">
              <p class="subtitle is-4 ">ADAPTATION
                FORMATIONS SUR MESURE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-96x96">
                <img class="picto is-rounded" src="../assets/professionnel.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content text-start">
              <p class="subtitle is-4">PROFESSIONNELS
                DU METIERS</p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-96x96 is-rounded">
                <img class="picto is-rounded" src="../assets/pratiques.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content text-start">
              <p class="subtitle is-4">CAS PRATIQUES ET
                RETOURS D'EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "But2"
}
</script>

<style scoped>

.media{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
  .subtitle{
    font-family: ChampagnelimousineBold;
    font-size: 1.5rem;
  }

  img{
    border: #066382 solid 2px;
    border-radius: 50%;
    overflow: hidden;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    object-fit: cover;
    object-position: right center;

  }
</style>