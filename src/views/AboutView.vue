<template>
  <div v-if="!trabajo">
    <h2>Selecciona primero una vacante</h2>

  </div>
  <div v-else>
    <div class="card" style="width: 100hv;">
      <div class="card-body">
        <h5 class="card-title"><i class='bx bxs-user-circle'></i>Resumen de {{ trabajo.company_name }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Descripcón</h6>
        <p class="card-text descripciontexto">{{ trabajo.description }}</p>
        <div class="row">
          <div class="col col-6">
            <p class="card-text tituloCard1">Correo electrónico</p>
            <p class="card-text subtituloCard1">ejemplo@ejemplo.com</p>
          </div>
          <div class="col col-6">
            <p class="card-text tituloCard1">Número de contacto</p>
            <p class="card-text subtituloCard1">3005895648</p>
          </div>
        </div>
        <div class="row">
          <div class="col col-6">
            <p class="card-text tituloCard1">Estados deseados buscados</p>
            <p class="card-text subtituloCard1">Emprendedor, practicas, primer empleo</p>
          </div>
          <div class="col col-6">
            <p class="card-text tituloCard1">Rol más buscado</p>
            <p class="card-text subtituloCard1">{{ trabajo.name }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col col-6">
          <div class="card" style="width: 100hv;">
            <div class="card-body">
              <h5 class="card-title"><i class='bx bxs-bullseye'></i>Áreas de interés</h5>

            </div>
          </div>
        </div>
        <div class="col col-6">
          <div class="card" style="width: 100hv;">
            <div class="card-body">
              <h5 class="card-title"><i class='bx bx-user'></i>Vacantes sugeridas por AI</h5>

            </div>
          </div>
        </div>
      </div>

      <h5 class="card-title">Lo que buscamos en el talento -------------</h5>
      <div class="row">
        <div class="col col-6">
          <div class="card" style="width: 100hv;">
            <div class="card-body">
              <h5 class="card-title"><i class='bx bxs-brain'></i>Conocimientos</h5>

            </div>
          </div>
        </div>
        <div class="col col-6">
          <div class="card" style="width: 100hv;">
            <div class="card-body">
              <h5 class="card-title"><i class='bx bx-file-find'></i>Habilidades</h5>

            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col col-6">
          <div class="card" style="width: 100hv;">
            <div class="card-body">
              <h5 class="card-title"><i class='bx bxs-key'></i>Herramientas</h5>

            </div>
          </div>
        </div>
        <div class="col col-6">
          <div class="card" style="width: 100hv;">
            <div class="card-body">
              <h5 class="card-title"><i class='bx bx-transfer'></i>Idiomas</h5>
              <div class="row">
                <div class="col col-4">
                  <p class="card-text tituloCard1">Ingles</p>
                  <p class="card-text subtituloCard1">Avanzado</p>
                </div>
                <div class="col col-4">
                  <p class="card-text tituloCard1">Frances</p>
                  <p class="card-text subtituloCard1">Avanzado</p>
                </div>
                <div class="col col-4">
                  <p class="card-text tituloCard1">Frances</p>
                  <p class="card-text subtituloCard1">Avanzado</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="card" style="width: 100hv;">
        <div class="card-body">
          <h5 class="card-title"><i class='bx bx-menu'></i>Metodologias</h5>

        </div>
      </div>
      <h5 class="card-title">Lo que ofrecemos en la empresa -------------</h5>
      <div class="row">
        <div class="col col-6">
          <div class="card" style="width: 100hv;">
            <div class="card-body">
              <h5 class="card-title"><i class='bx bxs-badge-check' ></i>Beneficios que ofrecemos</h5>

            </div>
          </div>
        </div>
        <div class="col col-6">
          <div class="card" style="width: 100hv;">
            <div class="card-body">
              <h5 class="card-title"><i class='bx bx-briefcase'></i>Formas de trabajo que ofrecemos </h5>

            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col col-6">
          <div class="card" style="width: 100hv;">
            <div class="card-body">
              <h5 class="card-title"><i class='bx bx-conversation' ></i>Cultura que ofrecemos</h5>

            </div>
          </div>
        </div>
        <div class="col col-6">
          <div class="card" style="width: 100hv;">
            <div class="card-body">
              <h5 class="card-title"><i class='bx bx-group' ></i>Comunidades</h5>

            </div>
          </div>
        </div>
      </div>



    </div>

  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const trabajo = store.getters.trabajoSeleccionado;
</script>

<style scoped>
.row {
  background-color: white;
}

.subtituloCard1 {
  text-align: left;
  margin: 0;
}

.tituloCard1 {
  margin: 0;
  font-weight: bold;
  text-align: left;
}

.card-title {
  text-align: left;
  color: #1A237E;
  font-weight: bold;
}

.card-subtitle {
  text-align: left;
  font-weight: bold;
}

.descripciontexto {
  text-align: left;
}

</style>
