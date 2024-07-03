<template>
   <div class="grid grid-cols-1 gap-6 md:grid-cols-3 p-9">
      <MealItem 
      v-for="meal of meals"
      :key="meal.idMeal" :meal="meal"/>
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-9">
There are no meals
    </div>
  </template>
  
  <script setup>
  import MealItem from "../components/MealItem.vue";
  const {meals} = defineProps({
   meals: {
    required: true,
    type: Array,
  }
})
  </script>