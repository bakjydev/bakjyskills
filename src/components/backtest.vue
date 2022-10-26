<template>
  <div class="bg-img">
    <section class="section is-medium">
      <h1 class="subtitle"><span>Bakjy</span> Skills</h1>
      <h2 class="subtitle">
        <!--          <vue-typer
                      :text='["Dévelopeur web","Webmaster","Jeune","Ambitieux","Curieux"]'
                      :repeat='Infinity'
                      :shuffle='true'
                      initial-action='typing'
                      :pre-type-delay='70'
                      :type-delay='70'
                      :pre-erase-delay='2000'
                      :erase-delay='250'
                      erase-style='select-all'
                      :erase-on-complete='false'
                      caret-animation='expand'
                  ></vue-typer>-->
        <p>Etre formé par des professionnels</p>
        <a class="fa-solid fa-arrow-down fa-4x smooth-scroll" href="#about" style="scroll-behavior: smooth;"></a>
      </h2>
    </section>
  </div>
</template>

<script>
export default {
  name: "backtest"
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

p{
  text-transform: none;
  font-size: 1.5rem;
  letter-spacing: 2px;
}
h1 {
  text-transform: uppercase;
  font-size: 4.5rem;
  font-weight: 700;
  color: #066382;
}
h2 {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  color: #066382;
  letter-spacing: 4px;
}
h3 {
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 700;
  color: #066382;
  letter-spacing: 4px;
  padding-bottom: 3%;
}
span {
  color: #066382;
}
a{
  color: #066382;
}
a:hover{
  color: #066382;
}

.fa-arrow-down{
  margin-top: 5rem;
}
</style>