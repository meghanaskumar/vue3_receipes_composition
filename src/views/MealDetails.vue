<template>
  <div class="p-5 mx-auto w-[700px]">
    <h1 class="mb-5 text-4xl font-bold text-orange-500">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div
      class="grid grid-cols-1 py-5 text-lg text-center justify-a md:grid-cols-3"
    >
      <div>
        <strong class="font-bold">Category : </strong>{{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area : </strong>{{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags : </strong>{{ meal.strTags }}</div>
    </div>
    <div class="grid grid-cols-1 text-center md:grid-cols-2">
      <div>
        <h2 class="mb-3 text-2xl font-semibold">Ingredients</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)" :key="el">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="mb-3 text-2xl font-semibold">Measures</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)" :key="el">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="flex justify-between mt-4">
      <YoutubeButton :href="meal.strYoutube">Go to Youtube </YoutubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-3 py-2 transition-colors border-2 border-indigo-600 rounded hover:bg-indigo-500 hover:text-white"
        >View Source
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import client from "../client";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  client.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>

<style></style>
