<template>
  <section class="section is-medium">
    <div class="container">
      <h1>Nous contacter</h1>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <input class="input" type="text" placeholder="Name">
              <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="Username">
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
            <p class="control is-expanded has-icons-left">
              <input class="input" type="email" placeholder="Email">
              <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
            </p>
          </div>
          <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
              <div class="field is-expanded">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">
                      +33
                    </a>
                  </p>
                  <p class="control is-expanded">
                    <input class="input" type="tel" placeholder="Your phone number">
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
            <div class="control">
              <input class="input" type="text" placeholder="Entreprise name">
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Departement name">
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <div class="control">
              <div class="select is-fullwidth">
                <select>
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
            <p class="control is-expanded has-icons-left has-icons-right">
              <input class="input" type="date">
            </p>
          </div>
        </div>
      </div>


      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option>Ingénieur et Fondateur</option>
                  <option>Ressources Humaines et Communication</option>
                  <option>Comptabilité et Finances</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-primary">
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
export default {
  name: "Form"
}
</script>

<style scoped>
h1 {
  margin-bottom: 5rem;
  padding-top: 2rem;
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
</style>