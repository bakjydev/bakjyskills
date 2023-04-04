<template>
  <section class="section is-medium">
    <div class="">
      <div class="container">
        <h2 class="pb-3 pt-2 border-bottom mb-5 title">Déroulé d'une formation</h2>
        <!--first section-->
        <div class="row align-items-center how-it-works d-flex">
          <div class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
            <div class="circle font-weight-bold">1</div>
          </div>
          <div class="col-6 text-left">
            <h5 class="title">En amont :</h5>
            <p class="subtitle">Prise de contact, définition et évaluation du besoin.</p>
          </div>
        </div>
        <!--path between 1-2-->
        <div class="row timeline">
          <div class="col-2">
            <div class="corner top-right"></div>
          </div>
          <div class="col-8">
            <hr/>
          </div>
          <div class="col-2">
            <div class="corner left-bottom"></div>
          </div>
        </div>
        <!--second section-->
        <div class="row align-items-center justify-content-end how-it-works d-flex">
          <div class="col-6 text-right">
            <h5 class="title">Organisation :</h5>
            <p class="subtitle">Choix de la date et envoie des documents relatifs à la formation</p>
          </div>
          <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
            <div class="circle font-weight-bold">2</div>
          </div>
        </div>
        <!--path between 2-3-->
        <div class="row timeline">
          <div class="col-2">
            <div class="corner right-bottom"></div>
          </div>
          <div class="col-8">
            <hr/>
          </div>
          <div class="col-2">
            <div class="corner top-left"></div>
          </div>
        </div>
        <!--third section-->
        <div class="row align-items-center how-it-works d-flex">
          <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
            <div class="circle font-weight-bold">3</div>
          </div>
          <div class="col-6 text-left">
            <h5 class="title">Formation :</h5>
            <p class="subtitle">En présentiel, la formation se déroulera au 23 rue des lombards à Paris 4.
              Les cours ont lieu de 9h à 12h30 et de 14h à 17h30.
              Les participants sont accueillis à partir de 8h45. Les petits déjeuners et déjeuners seront offerts par
              l’organisme de formation.</p>
          </div>
        </div>

        <div class="row timeline">
          <div class="col-2">
            <div class="corner top-right"></div>
          </div>
          <div class="col-8">
            <hr/>
          </div>
          <div class="col-2">
            <div class="corner left-bottom"></div>
          </div>
        </div>

        <div class="row align-items-center justify-content-end how-it-works d-flex">
          <div class="col-6 text-right">
            <h5 class="title">Modalités d'évaluation :</h5>
            <p class="subtitle">Le formateur évalue la progression pédagogique du participant tout au long de la formation au moyen de
              QCM, mises en situation, travaux pratiques…</p>
          </div>
          <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
            <div class="circle font-weight-bold">4</div>
          </div>
        </div>

        <div class="row timeline">
          <div class="col-2">
            <div class="corner right-bottom"></div>
          </div>
          <div class="col-8">
            <hr/>
          </div>
          <div class="col-2">
            <div class="corner top-left"></div>
          </div>
        </div>
        <!--third section-->
        <div class="row align-items-center how-it-works d-flex">
          <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
            <div class="circle font-weight-bold">5</div>
          </div>
          <div class="col-6 text-left">
            <h5 class="title">A l’issue de la formation :</h5>
            <p class="subtitle">Si l'évaluation est positive, un diplôme CONCILIA vous sera décerné à l'issue de la formation.</p>
          </div>
        </div>

        <div class="row timeline">
          <div class="col-2">
            <div class="corner top-right"></div>
          </div>
          <div class="col-8">
            <hr/>
          </div>
          <div class="col-2">
            <div class="corner left-bottom"></div>
          </div>
        </div>

        <div class="row align-items-center justify-content-end how-it-works d-flex">
          <div class="col-6 text-right">
            <h5 class="title">Bilan :</h5>
            <p class="subtitle">Nous vous remettrons à la fin de la formation par mail ou par papier une enquête de satisfaction
              (anonyme), afin de nous partager vos impressions et nous aider à améliorer nos processus.</p>
          </div>
          <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
            <div class="circle font-weight-bold">6</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Timeline"
}
</script>

<style scoped>

.section {
  padding: 3rem;
}

.circle {
  padding: 13px 20px;
  border-radius: 50%;
  background-color: #066382;
  color: #fff;
  max-height: 50px;
  z-index: 2;
}

.how-it-works.row .col-2 {
  align-self: center;
}

.how-it-works.row .col-2::after {
  content: "";
  position: absolute;
  border-left: 3px solid #066382;
  z-index: 1;
}

.how-it-works.row .col-2.bottom::after {
  height: 50%;
  left: 50%;
  top: 50%;
}

.how-it-works.row .col-2.full::after {
  height: 100%;
  left: calc(50% - 3px);
}

.how-it-works.row .col-2.top::after {
  height: 50%;
  left: 50%;
  top: 0;
}


.timeline div {
  padding: 0;
  height: 40px;
}

.timeline hr {
  border-top: 3px solid #066382;
  margin: 0;
  top: 17px;
  position: relative;
}

.timeline .col-2 {
  display: flex;
  overflow: hidden;
}

.timeline .corner {
  border: 3px solid #066382;
  width: 100%;
  position: relative;
  border-radius: 15px;
}

.timeline .top-right {
  left: 50%;
  top: -50%;
}

.timeline .left-bottom {
  left: -50%;
  top: calc(50% - 3px);
}

.timeline .top-left {
  left: -50%;
  top: -50%;
}

.timeline .right-bottom {
  left: 50%;
  top: calc(50% - 3px);
}

</style>