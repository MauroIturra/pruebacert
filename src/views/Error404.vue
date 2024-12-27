<template>
    <div class="container mt-4">
      <h3>Página no encontrada (Error 404)</h3>
      <p>La ruta que has intentado visitar no existe.</p>
      <img src="../assets/img/fotoerror.jpg" alt="">
    </div>
  </template>
  
  <script>
  export default {
    name: "Error404",
  };
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    color: rgb(15, 15, 15);   
    }
  img{
      height: 200px;
      width: 200px;
      border-radius: 5%;
    }
  div{
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: italic;
  }

  </style>