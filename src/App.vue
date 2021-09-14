<template>
  <div id="nav" class="border-bottom mb-3 shadow">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <div class="container-md">
        <a class="navbar-brand" href="#">
          <img
            src="@/assets/logo.png"
            alt
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          PrediChoc
        </a>
        <button
          class="navbar-toggler"
          ref="navbarToggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Sondage</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about-us" class="nav-link">A propos de nous</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="main">
    <router-view />
  </div>
  <footer class="bg-light pt-5 pb-2">
    <div class="container">
      <div class="row">
        <div class="col">
          <h5>Liens</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <router-link to="/">Questionnaire</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/about-us">A propos de nous</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/">Mentions Légales</router-link>
            </li>
          </ul>
        </div>
      </div>
      <p>&copy; 2021 - Tous droits réservés</p>
    </div>
  </footer>
</template>
<script setup>
import { Collapse } from 'bootstrap'
import { ref, onMounted } from "vue"

const navbarToggle = ref(null)
const collapse = ref(null)

const mountCollapse = () => {
  collapse.value = new Collapse(navbarToggle.value)
}

onMounted(mountCollapse)
</script>

<style lang="scss">
@import "./assets/styles/custom.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";

footer {
  a {
    text-decoration: none;
  }
}
.main {
  margin-top: 5em;
}
</style>
