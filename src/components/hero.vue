<template name="about">
  <a name="about"></a>
    <div class="section is-small bg-img">
      <div class="columns">
        <div class="column">
          <a @click.prevent="nextStep1(true)">
            <div class="box">
              <h1 class="title is-3 has-text-centered">Formation Management</h1>
              <div class="expandabl"  v-if="activeStep ==1">
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
          <a @click.prevent="nextStep2(true)">
            <div class="box">
              <h1 class="title is-3 has-text-centered">Formation Anglais</h1>
              <div class="expandabl"  v-if="activeStep ==2">
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
      <div class="columns">
        <div class="column">
          <a @click.prevent="nextStep3(true)">
            <div class="box">
              <h1 class="title is-3 has-text-centered">Formation Excel</h1>
              <div class="expandabl"  v-if="activeStep ==3">
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
          <a @click.prevent="nextStep4(true)">
            <div class="box">
              <h1 class="title is-3 has-text-centered">Formation Comptabilité</h1>
              <div class="expandabl"  v-if="activeStep ==4">
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
    nextStep2() {
      this.activeStep = 2;
    },
    nextStep3() {
      this.activeStep = 3;
    },
    nextStep4() {
      this.activeStep = 4;
    },
  }
}
</script>

<style scoped>

.box{
  box-shadow: rgba(0, 0, 0, 0.15) 4px 4px 4px;
}

.section{
  background-color: #066382;
}


lottie-animation{
  float: right;
}

.title{
  color: #066382;
}

</style>