<template name="about">
  <div class="section is-small bg-img">
    <div class="columns">
      <div class="column">
        <a @click.prevent="nextStep1(true)" href="">
          <div class="box">
            <h1 class="title is-3 has-text-centered">Formation Management</h1>
            <div class="expandabl" v-if="activeStep ==1">
              <div class="box2">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="../assets/anais.png" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Anaïs Evrard</strong> <small>anais@bakjy.com</small>
                        <br>
                        Formation s'adressant à tous les managers qui souhaitent monter en compétences
                      </p>
                    </div>
                    <div>
                      <div class="buttons is-inline-block">
                        <a class="button"
                           href="https://drive.google.com/file/d/1u84o2DgihY9o6GSF_miSUbttmZKaZt2y/view?usp=sharing"
                           target="_blank">
                          <strong>PROGRAMME <br>Formation Management</strong>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="column">
        <a @click.prevent="nextStep2(true)" href="">
          <div class="box opacity-50">
            <h1 class="title is-3 has-text-centered">Formation Anglais</h1>
            <div class="expandabl" v-if="activeStep ==2">
              <div class="box2">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>John Smith</strong> <small></small>
                        <br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa
                        fringilla egestas. Nullam condimentum luctus turpis.
                      </p>
                    </div>
                    <nav class="level is-mobile">
                      <div class="level-left">
                        <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
                        </a>
                        <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
                        </a>
                        <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <a @click.prevent="nextStep3(true)" href="">
          <div class="box opacity-50">
            <h1 class="title is-3 has-text-centered">Formation Excel</h1>
            <div class="expandabl" v-if="activeStep ==3">
              <div class="box2">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                        <br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa
                        fringilla egestas. Nullam condimentum luctus turpis.
                      </p>
                    </div>
                    <nav class="level is-mobile">
                      <div class="level-left">
                        <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
                        </a>
                        <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
                        </a>
                        <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="column">
        <a @click.prevent="nextStep4(true)" href="">
          <div class="box opacity-50">
            <h1 class="title is-3 has-text-centered">Formation Comptabilité</h1>
            <div class="expandabl" v-if="activeStep ==4">
              <div class="box2">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                        <br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa
                        fringilla egestas. Nullam condimentum luctus turpis.
                      </p>
                    </div>
                    <nav class="level is-mobile">
                      <div class="level-left">
                        <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
                        </a>
                        <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
                        </a>
                        <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hero',
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
  }
}
</script>

<style scoped>

.box {
  box-shadow: rgba(0, 0, 0, 0.15) 4px 4px 4px;
}

.section {
  background-color: #066382;
}


lottie-animation {
  float: right;
}

.title {
  color: #066382;
}

.button {
  background-color: #066382;
  color: white;
  border: solid 2px white;
  padding: 2rem;
  border-radius: 25px;
}

.button:hover {
  background-color: white;
  color: #066382;
  border: solid 2px #066382;
}
</style>