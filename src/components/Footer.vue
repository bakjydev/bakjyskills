<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Copyright 2022 ©</strong> groupe Bakjy
        <router-link to="/mentionslegales">
          <link>Mentions légales
        </router-link>
        <router-link to="/ReglementInterieur">
          <link>Réglement Intérieur
        </router-link>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer{
  padding: 1rem;
}
</style>