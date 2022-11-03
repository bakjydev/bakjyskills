<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/logoBlanc.png">
      </a>

      <a role="button" class="navbar-burger is-right" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end is-hidden-mobile">
        <a class="title text-white text-center">
          Formation en présentiel <br>& distanciel
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" href="mailto:anais@bakjy.com?subject=Bakjy Skills">
              <strong>Nous contacter</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

</script>

<style scoped>

.navbar {
  background-color: #066382;
  padding: 1.5rem;
}

h1{
  color: white;
}
.content{
  margin: 1rem 0 0 0;
}
.button{
  background-color: #066382;
  color: white;
  border: solid 2px white;
}

.button:hover{
  background-color: white;
  color: #066382;
  border: solid 2px white;
}

.navbar-burger{
  color: white;
  background-color: #066382;
}

.navbar-menu{
  background-color: #066382;
  box-shadow: none;
}

</style>