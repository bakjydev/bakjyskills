<template>
  <section class="section is-medium">
    <div class="container" @submit.prevent="sendEmail">
      <h1>Nous contacter</h1>
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
          <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
              <div class="field is-expanded">
                <div class="field">
                  <p>Téléphone</p>
                  <p class="control is-expanded">
                    <input class="input" type="tel" name="tel" placeholder="Your phone number" value="0612345678">
                  </p>
                </div>
              </div>
            </div>
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
              <div class="select is-fullwidth" >
                <select name="inscrit">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <p>Date</p>
            <p class="control is-expanded has-icons-left has-icons-right">
              <input class="input" name="date" type="date">
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
              <button class="button is-primary" type="submit" value="Send">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
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

p {
  color: white;
}

.container {
  background-color: #066382;
  width: 60%;
  padding: 2rem;
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
</style>