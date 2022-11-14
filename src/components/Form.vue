<template>
  <section class="section is-medium">
    <div class="container">
      <form ref="form" @submit.prevent="sendEmail">
        <di>
          <h1>
            <strong class="fas fa-phone is-white"></strong>
            Nous contacter
          </h1>
        </di>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p>Prénom</p>
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" name="name" placeholder="Name" value="Paul">
                <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p>Nom</p>
              <p class="control is-expanded has-icons-left has-icons-right">
                <input class="input" type="text" name="username" placeholder="Username" value="Joube">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p>Mail</p>
              <p class="control is-expanded has-icons-left">
                <input class="input" type="email" name="mail" placeholder="Email" value="Paul@gmail.com">
                <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p>Téléphone</p>
              <p class="control is-expanded has-icons-left has-icons-right">
                <input class="input" name="tel" placeholder="Your phone number" value="0612345678">
                <span class="icon is-small is-left">
                </span>
              </p>
            </div>
          </div>
        </div>


        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p>Entreprise</p>
              <div class="control">
                <input class="input" type="text" name="entreprise" placeholder="Entreprise name" value="My society">
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p>Nombre d'inscrit</p>
              <div class="control">
                <div class="select is-fullwidth">
                  <select name="inscrit">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <p>Date</p>
              <p class="control is is-expanded has-icons-left has-icons-right">
                <input class="input" name="date" type="date" aria-label="Date">
              </p>
            </div>
          </div>
        </div>


        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p>Demande</p>
              <div class="control">
                <textarea class="textarea" name="message" placeholder="Explain how we can help you"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="button is-primary" type="submit" value="Send">
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_gkwy7wh', 'template_4uhwedf', this.$refs.form, 'bMS1RO88XQRk1txIR')
          .then((result) => {
            console.log('SUCCESS!', result.text);
            return alert('message envoyé avec succés');
          }, (error) => {
            console.log('FAILED...', error.text);
            return alert('message non envoyé');
          });
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 5rem;
  padding-top: 2rem;
  color: white;
}

.fa-phone{
  color: white;
}

p {
  color: white;
}

.container {
  background-color: #066382;
  width: 60%;
  padding: 2rem;
  border-radius: 25px;
}

.button {
  background-color: #066382;
  color: white;
  border: solid 2px white;
  margin-top: 1rem;
}

.button:hover {
  background-color: white;
  color: #066382;
  border: solid 2px white;
}

input {
  color: grey;
}

.select {
  margin-right: 6.5rem;
}
</style>