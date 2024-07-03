<template>
  <div
    class="transition-all bg-white shadow-xl rounded-xl hover:scale-105"
  >
    <div>
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="object-cover w-full rounded-t-xl h-46"
      />
      <h3 class="px-3 py-2 font-semibold">{{ meal.strMeal }}</h3>
      <p class="px-3 py-2 mb-4 font-thin" v-if="meal.strInstructions">
        {{ $filters.truncateWords(meal.strInstructions, 20) }}
      </p>
      <div class="flex justify-between gap-2 px-3 py-2">
        <YoutubeButton :href="meal.strYoutube" />
        <router-link
          class="px-3 py-2 transition-colors border-2 border-purple-600 rounded hover:bg-purple-500 hover:text-white"
          :to="{ name: 'MealDetails', params: { id: meal.idMeal } }"
          >View</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";


const {meal} = defineProps({
  meal: {
    required: true,
    type: Object
  },
})
</script>
