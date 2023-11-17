<template>
    <div>
      <span v-for="star in totalStars" :key="star" @click="setRating(star)">
        <i :class="star <= selectedStars ? 'fas fa-star yellow-star' : 'far fa-star'"></i>
      </span>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      totalStars: {
        type: Number,
        default: 5,
      },
      selectedStars: {
        type: Number,
        default: 0,
      },
    },
    setup(props) {
      const selectedStars = ref(props.selectedStars);
  
      const setRating = (stars) => {
        selectedStars.value = stars;
      };
  
      return {
        selectedStars,
        setRating,
      };
    },
  };
  </script>
  
  <style scoped>
   .yellow-star {
    color: yellow;
  }
  </style>
  