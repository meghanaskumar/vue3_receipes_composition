<template>
  <div class="p-8 pb-0">
    <h1 class="mb-4 text-4xl font-bold text-orange-500">Meals by Name</h1>
  </div>
  <div class="p-6">
    <input
      type="text"
      v-model="keyword"
      class="w-full mb-3 focus:ring-orange-500 focus:border-orange-500"
      name="name"
      autocomplete="true"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <Meal :meals="meals"/>

</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meal from "../components/Meal.vue";

const keyword = ref("");
const route = useRoute();
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  if(keyword.value){
    store.dispatch("searchMeals", keyword.value);
  }else{
    store.commit("setSearchedMeals", []);
  }
  
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style></style>
