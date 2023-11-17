<template>
  <Header class="componente1 "/>
  <div class="row valor">
        <div class="col col-4 position-absolute top-25 start-0">
            <InfoEmp />
        </div>
        <div class="col col-8 position-absolute start-1">
          <HeaderSecundario />
          <nav class="ordenTexto">
    <router-link to="/about">Perfil</router-link> |
    <router-link to="/">Vacantes</router-link>
    |
    <router-link to="#">Lista</router-link>
  </nav>
  <router-view/>
        </div>
    </div>
 
  
</template>
<script setup>
import Header from '@/components/Header.vue';
import InfoEmp from '@/components/InfoEmp.vue';
import HeaderSecundario from '@/components/HeaderSecundario.vue';

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #DE1C7D;
}
.valor{
  background-color: rgb(255, 255, 255);
}
.carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: #DE1C7D;
    border-radius: 50%; 
  }

  .carousel-control-prev,
  .carousel-control-next {
    filter: invert(100%); 
  }
  .ordenTexto{
    text-align: left;
    border-bottom: 1px solid #000;
    background-color: aliceblue;
  }
  .componente1 {
  position: relative;
  background-color: #f0f0f0; /* Ajusta el color de fondo según tus necesidades */
  padding: 20px;
}

/* Ajusta estos estilos según tus necesidades */
.position-absolute {
  position: absolute;
}

.top-25 {
  top: 25%;
}

.start-0 {
  left: 0;
}
.start-1 {
  right:  0;
}

</style>
