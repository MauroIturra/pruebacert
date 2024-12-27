<template>
    <div class="container mt-4">
        <h3 class="d-flex justify-content-center">Flora & Fauna</h3><br>

        
        <div class="d-flex flex-wrap justify-content-start">
            <div 
                v-for="especie in especies" :key="especie.id" class="card" style="width: 20rem; margin-right: 20px; margin-bottom: 20px;">
                <img @click="iraDetalles" :src="especie.imagen" class="card-img-top" :alt="especie.nombre" style="height: 200px;"/>
                <div class="card-body">
                    <h6 class="card-title"><strong>Nombre:</strong> {{ especie.nombre }}</h6>
                    <h6 class="card-text"><strong>Estado de Conservación:</strong> {{ especie.estadoConservacion }}</h6>
                    <p><strong>Tipo:</strong> {{ especie.tipo }}</p>
                </div>
            </div>
        </div>   
    </div>
</template>
<script>
export default {
    name: "ListaEspecies",
    data() {
    return {
        especies: [], 
    };
    },
    mounted() {
    this.fetchEspecies(); 
    },
    methods: {
    async fetchEspecies() {
        try {
        const response = await fetch("./db.json"); 
        const data = await response.json();

        
        this.especies = data.especies;
        } catch (error) {
        console.error("Error al cargar los datos:", error);
        }
    },
    },
};
</script>

<style scoped>
h3{
    text-decoration: underline;
}
.card {
    margin-bottom: 20px;
}
div{
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: italic;
}
</style> 