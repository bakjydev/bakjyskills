<template>
  <section class="section is-medium">
    <div class="columns">
      <div class="column  is-4">
        <div class="list-group" id="list-tab" role="tablist">
          <a @click.prevent="nextStep1(true)" class="list-group-item list-group-item-action active" id="list-Management-list"
             data-toggle="list"
             href="#list-Management" role="tab" aria-controls="home">Management</a>
          <a @click.prevent="nextStep2(true)" class="list-group-item list-group-item-action" id="list-Excel-list"
             data-toggle="list"
             href="#list-Excel" role="tab" aria-controls="profile">Excel</a>
          <a @click.prevent="nextStep3(true)" class="list-group-item list-group-item-action" id="list-Gestion-list"
             data-toggle="list"
             href="#list-Gestion" role="tab" aria-controls="messages">Comptabilité - Gestion</a>
          <a @click.prevent="nextStep4(true)" class="list-group-item list-group-item-action" id="list-Anglais-list"
             data-toggle="list"
             href="#list-Anglais" role="tab" aria-controls="messages">Anglais</a>
        </div>
      </div>
      <div class="column">
        <div class="box" v-if="activeStep ==1">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                </p>
              </div>
              <div class="buttons">
                <a class="button is-primary" href="https://drive.google.com/file/d/1u84o2DgihY9o6GSF_miSUbttmZKaZt2y/view?usp=sharing" target="_blank">
                  <strong>En savoir plus</strong>
                </a>
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
        <div class="box" v-if="activeStep ==2">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
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
        <div class="box" v-if="activeStep ==3">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
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
        <div class="box" v-if="activeStep ==4">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
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
  </section>
</template>

<script>
export default {
  name: "Formation",
  data() {
    return {
      count: 1,
      activeStep: 1,
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
.section{
  background-color: #066382;
}
.list-group {
  border-radius: 25px;
}
.active {
  background-color: #400186;
  border: none;
}

.button{
  background-color: #066382;
  color: white;
  border: solid 2px white;
}

.button:hover{
  background-color: white;
  color: #066382;
  border: solid 2px #066382;
}
</style>