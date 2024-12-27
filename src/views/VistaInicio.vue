<template> 
  <div class="container inicio">
    <br><h3 class="inicio__titulo">La Flora y Fauna de Chile</h3><br>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6"> 
        <p class="inicio__text">La flora y fauna de Chile es menos diversa que la de otros países. Sin embargo, destaca por su alto porcentaje de endemismo, es decir, por la cantidad de especies que viven exclusivamente en nuestro país. Esto ha producido que nuestro ecosistema sea sumamente vulnerable a cualquier cambio o invasión, ya sea humana o animal, amenazando con la extinción a diversas especies. Para controlar las amenazas, Chile ha desarrollado una red de parques y reservas naturales que protegen zonas representativas de los diferentes ecosistemas que existen a lo largo del país. Todas estas áreas están a cargo de Corporación Nacional Forestal (CONAF), que las administra y trabajar para potenciar su desarrollo. En el norte de Chile la fauna está determinada por dos ecosistemas muy diferenciados. Por un lado, el desierto de Atacama, el más seco del mundo, limita la cantidad y variedad de especies que en él viven. Sin embargo sobre los 3.500 metros de altura, la influencia del clima tropical de Bolivia produce un ambiente caracterizado por fuertes lluvias en verano y gran riqueza de vida vegetal de baja altura, el que posibilita la existencia de numerosas especies animales. Es lo que sucede en el Parque Nacional Lauca, situado en la primera región del país, donde habita casi un tercio de todas las especies de aves existentes en Chile. Destacan los flamencos andinos, los más grandes de las tres especies que viven en el norte.</p>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex align-items-center"> 
        <img  class="inicio__pic" src="../assets/img/fotoinicio.jpg" alt="">
      </div>
    </div>
    
    <div class="row mt-5">
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="inicio__video d-flex justify-content-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KG-d9xUNyTY?si=eepsDAZP39BYOixR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div class="inicio__video d-flex justify-content-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/cCn0670BloE?si=igsDraBh-0WGbW3L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
  
  
  export default {
    name: 'VistaInicio',
    components: {  
    },
  
  }
  </script>

<style scoped lang="scss">
.inicio__titulo {
  margin-left: 10%;
  background-color: rgba(160, 160, 154, 0.4); 
  display: inline;
  padding: 10px;
  color: rgb(255, 255, 255);
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: italic;
  text-decoration: underline;
}

.inicio__text {
  margin-top: 20px;
  text-align: justify;
  color: rgb(255, 255, 255);
  background-color: rgba(160, 160, 154, 0.4);
  padding: 15px;
  border-radius: 8px;

  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.inicio__pic {
  height: 400px;
  width: 100%;
  
  border-radius: 5%;
}
.inicio__video iframe {
  border-radius: 10px;
  margin-bottom: 40px;
  
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 350px;
  border: none; 
}
</style>