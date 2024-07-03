<template>
  <div class="p-8 pb-0">
    <h1 class="mb-4 text-4xl font-bold text-orange-500">Meals by Ingredients</h1>
  </div>
     <input
      type="text"
      v-model="keyword"
      class="w-full mt-4 mb-3 focus:ring-orange-500 focus:border-orange-500"
      name="name"
      autocomplete="true"
      placeholder="Search for Ingrediens"
    />
    <div class="p-9">
      <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
      <a href="#"
        @click.prevent="openIngredient(ingredient)"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block p-3 mb-3 bg-white rounded shadow"
      >
        <h3 class="mb-2 text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
    </div>
  </template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watch } from "vue";
import client from '../client';
import store from "../store";
import { useRouter } from "vue-router";

const router = useRouter();
const ingredients = ref([]);
const keyword = ref('');


const computedIngredients = computed(() => {
  if(!computedIngredients) return ingredients;
  return ingredients.value.filter((i) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
})

function openIngredient(ingredient) {
  store.commit('setIngredient', ingredient)
  router.push({
    name: "MealsByIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}


onMounted(() => {
    client.get('list.php?i=list').then(({data}) => {
        ingredients.value = data.meals
    })

})
</script>