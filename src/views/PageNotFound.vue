<template>
<div class="container text-center">
    <h1 class="not-found">404</h1>
    <h3 class="text-secondary">OOPS !</h3>
    <p class="text-secondary mb-3">
    La page n'existe pas ou a été déplacée...
    </p>
    <div class="mt-3">
        <a href="/" class="btn-grad">Retour à l'accueil</a>
    </div>
</div>
</template>
<style type="text/css">
h1.not-found {
  background-image: linear-gradient(135deg, #CE9FFC 10%, #7367F0 100%);
  font-size: 20em;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}


a.btn-grad {
    display: inline-block;
  text-decoration: none;
  background-image: linear-gradient(to right, #DA22FF 0%, #9733EE 51%, #DA22FF 100%);
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>