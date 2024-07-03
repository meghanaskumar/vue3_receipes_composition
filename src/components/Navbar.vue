<template>
    <header
      class="flex items-stretch justify-between h-16 shadow-md bg-white-100"
    >
      <router-link
        :to="{ name: 'HomeComp' }"
        class="inline-flex items-center h-full px-5 font-bold text-orange-500"
        >Home</router-link
      >
      <div class="flex items-center">
        <router-link
          :to="{ name: 'MealsByName' }"
          class="inline-flex items-center h-full px-2 transition-colors hover:bg-orange-500 hover:text-white"
          >Search Meals</router-link
        >
        <router-link
          :to="{ name: 'MealsByLetter' }"
          class="inline-flex items-center h-full px-2 transition-colors hover:bg-orange-500 hover:text-white"
          >Meals By Letter</router-link
        >
        <router-link
          :to="{ name: 'Ingredients' }"
          class="inline-flex items-center h-full px-2 transition-colors hover:bg-orange-500 hover:text-white"
          >Meals By Ingredients</router-link
        >
      </div>
    </header>
</template>