<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="@/assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
          PrediChoc
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">Sondage</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>


<style lang="scss">
@import "./assets/styles/custom.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";

</style>
