<template>
   <div class="p-8 pb-0">
    <h1 class="mb-4 text-4xl font-bold text-orange-500">Meals for {{ ingredient.strIngredient }}</h1>
  </div>
    <Meal :meals="meals"/>
  </template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meal from "../components/Meal.vue";


const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);
const ingredient = computed(() => store.state.ingredient)



onMounted(() => {
    store.dispatch("searchMealsByIngredient", route.params.ingredient);

})

watch(route, () => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
})
</script>