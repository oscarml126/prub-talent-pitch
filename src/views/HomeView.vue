<template>
  <div class="hello">
    <h2 class="subtitulo">Publicadas recientemente</h2>
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(datos, index) in catalogo" :key="datos.id" :class="['carousel-item', { 'active': index === 0 && index < 3 }]">
          <div class="d-flex justify-content-center align-items-center" style="height: 100%;">
            <div class="card" style="width: 18rem; margin-right: 10px;">
              <img :src="datos.image" class="card-img-top" alt="...">
              <div class="card-body">
                <div class="row">
                  <div class="col col-4">
                    <p class="card-text expert">Experticia</p>
                  </div>
                  <div class="col col-6">
                    <StarRating :totalStars="5" :selectedStars="datos.level_experience" />
                  </div>
                  <div class="col col-2">
                    <i class='bx bx-share-alt'></i>
                  </div>
                </div>
                <h5 class="card-title">{{ datos.name }}</h5>
                <p class="card-text empresacolor">Creada por organización {{ datos.company_name }}</p>
                <p class="card-text description">{{ datos.description }}</p>
                <a @click="() => aplicarVacante(datos)" class="btn coloresbtn">Aplicar Vacante</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import StarRating from '../components/StartRating.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const catalogo = ref([]);

const aplicarVacante = (datos) => {
  store.dispatch('seleccionarTrabajo', datos);
  router.push({ name: 'about' });
};

onMounted(async () => {
  try {
    const response = await fetch('https://data2.talentpitch.co/api/homeservice/categories/d/challenges/trending_challenges/unique/null?limit=10');
    const data = await response.json();
    catalogo.value = data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<style scoped>
/* Estilos adicionales según sea necesario */
.subtitulo {
  text-align: left;
  color: #1A237E;
  font-weight: bold;
}

.row {
  background-color: rgba(136, 136, 136, 0.161);
}

.expert {
  font-size: 13px;
  color: rgb(62, 57, 57);
}

.bx-share-alt {
  color: #DE1C7D;
  font-size: 20px;
}

.card-title {
  color: #1A237E;
  font-size: 20px;
  font-weight: bold;
}

.empresacolor {
  color: #1A237E;
  background-color: aqua;
  border-radius: 1rem;
}

.description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.coloresbtn {
  background-color: #DE1C7D;
  color: aliceblue;
}
</style>
