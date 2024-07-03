<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="mb-4 text-4xl font-bold">Random Meals</h1>
    
  
  </div>
  <Meal :meals="meals" />

</template>

<script setup>
import client from '../client';
import { ref, onMounted } from 'vue';
import Meal from "../components/Meal.vue";

const meals = ref([]);


onMounted(async () => {
for(let i =0; i< 10; i++){
  client.get(`random.php`)
  .then(({ data }) => meals.value.push(data.meals[0]))
}
});
</script>

<style>

</style>