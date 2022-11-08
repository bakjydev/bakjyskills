<template>
  <form ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="name">
    <label>Email</label>
    <input type="email" name="mail">
    <label>tel</label>
    <input type="text" name="tel">
    <label>Username</label>
    <input type="text" name="username">
    <label>Entreprise</label>
    <input type="text" name="entreprise">
    <label>Choose a pet:</label>
    <select name="inscrit">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
    <label>Date</label>
    <input type="date" name="date">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>
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

</style>