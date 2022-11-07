<template>
  <NavBar/>
  <router-view></router-view>
  <Footer/>
</template>

<script>

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {Footer, NavBar}
}
</script>

<style>
#app {
  font-family: "Champagnelimousine";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color:black;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}
@font-face {
  font-family: "Champagnelimousine";
  src: local("Champagnelimousine"),
  url(./fonts/champagne_limousines/Champagne&Limousines.ttf) format("truetype");
}

</style>
