<template>
    <div>
        <nav class="navbar navbar-expand-lg " style="background-color: rgb(66, 135, 245, 0.3);">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand" href="#"><img src="../assets/img/banderachilena.png" alt="" style="height: 40px; width: 40px;"> F&F</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <router-link to="/florayfauna" class="nav-link active" aria-current="page">Flora & Fauna</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/contacto" class="nav-link active">Contacto</router-link>
                        </li>                    
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {        
        name: "Navbar",
    }
</script>

<style scoped>
div{
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: italic;
}
</style>