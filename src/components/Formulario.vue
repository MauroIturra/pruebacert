<template>
    <div>
        <div class="mb-3 mt-5">
            <label for="exampleFormControlInput1" class="form-label" style="color: white;">Correo Electrónico</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Correo">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label" style="color: white;">Mensaje</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="button" class="btn btn-secondary">Enviar</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
div{
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: italic;
}
button{
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: italic;
}
</style>