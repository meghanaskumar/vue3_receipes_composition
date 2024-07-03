<template>
  <div class="p-8 pb-0">
    <h1 class="mb-4 text-4xl font-bold text-orange-500">Meals by Letter</h1>
  </div>
  <div class="flex flex-wrap gap-4 p-2 mt-2">
    <router-link
      :to="{ name: 'MealsByLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="transition-all hover:text-orange-500 hover:scale-150"
    >
      {{ letter }}
    </router-link>
  </div>
  <Meal :meals="meals"/>

</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meal from "../components/Meal.vue";



const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute();
const meals = computed(() => store.state.mealsByLetter);

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);

})

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
})

</script>

<style></style>
