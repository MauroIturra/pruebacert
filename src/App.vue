<template>
  <div class="VistaBase">
    <Navbar />  
    <router-view/>  
    
  </div>
  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from './components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer,
  }
}

</script>

<style scoped>
.VistaBase{
  background-image: url('../src/assets/img/estudio-como-se-hizo-tan-grande-la-cordillera-de-los-andes.jpeg');
  background-size: cover;
  min-height: 800px;
}
</style>