<template>
    <div class="row">
        <div class="col tal">
            TalentPitch
        </div>
        <div class="col">
            <button type="button" class="btn btn-outline-light">Conéctate</button>
            <button type="button" class="btn btn-outline-light">Mi muros</button>
            <button type="button" class="btn btn-outline-light">Mis Listas</button>
            <button type="button" class="btn btn-outline-light">Aprende</button>
            
        </div>
        <div class="col perfil">
            <button type="button" class="btn btn-danger btnP">Comenzar <i class="material-icons">add</i></button>
            <span class="material-icons icons">email</span>
            <span class="material-icons icons">notifications</span>
            <span class="material-icons icons"> account_circle </span>
        </div>
    </div>
    <div>
        <img src="../assets/header.jpg" class="card-img-top" alt="...">
    </div>
</template>
  
<script>

</script>
  
<style>
.colorboton {
    color: aliceblue;
}

.row {
    background-color: #1A237E;
}

.col {
    margin-top: .5rem;
    margin-bottom: .5rem;
}

.tal {
    color: aliceblue;
    font-size: 25px;
    font-weight: bold;
}

.btnP {
    background-color: #DE1C7D;
    display: flex;
      justify-content: center; /* Centra horizontalmente */
      align-items: center; /* Centra verticalmente */
      

}
.icons{
    color: #ffff;
    font-size: 28px;
    margin-left: 2rem;
}
.perfil{
    display: flex;
      justify-content: center; /* Centra horizontalmente */
      align-items: center; /* Centra verticalmente */
      
}
</style>