<template>
    <div class="headerSecundario">

        <div class="row">
            <div class="col col-3">
                Mach con la cultura 80%
                
            </div>
            <div class="progress col-5">
                    <div class="progress-bar" role="progressbar" :style="{ width: progressBarWidth }">
                        {{ progressBarWidth }}
                    </div>
                </div>
            <div class="col col-4">
                <a  class="btn coloresbtn">Enviar Ptich</a>
                <a  class="btn coloresbtn1"><i class='bx bxs-user-plus' ></i>Seguir</a>
            </div>
        </div>
    </div>
</template>
  
<script>

</script>
  
<script setup>
import { ref, onMounted } from 'vue';

const progressBarWidth = ref('80%');

onMounted(() => {
    // Puedes ajustar la lógica aquí para cambiar el progreso según tus necesidades.
});
</script>

<style scoped>
.progress-bar {
    background-color: #8BC34A;
    color: #E8EAF6;
}
.headerSecundario{
    margin-top: 1rem;

}
.row{
    background-color: #fff;
}
.coloresbtn{
    font-size: 15px;
    background-color: #DE1C7D;
    color: #fff;
}
.coloresbtn1{
    font-size: 15px;
    margin-left: 1rem;
    border: 1px solid #DE1C7D;
    color: #DE1C7D;
}
.bxs-user-plus{
    font-size: 20px;
}
</style>