import { createRouter, createWebHistory } from "vue-router";
import HomeComp from "../views/Home.vue";
import MealsByLetter from "../views/SearchByLetter.vue";
import MealsByName from "../views/SearchByName.vue";
import MealsByIngredient from "../views/SearchByIngrediens.vue";
import Ingredients from "../views/Ingrediens.vue";
import MealDetails from "../views/MealDetails.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";

const routes = [
  {
    component: DefaultLayout,
    path: "/",
    children:[
      {
        name: "HomeComp",
        component: HomeComp,
        path: "/",
      },
      {
        name: "MealsByLetter",
        component: MealsByLetter,
        path: "/by-letter/:letter?",
      },
      {
        name: "MealsByName",
        component: MealsByName,
        path: "/by-name/:name?",
      },
      {
        name: "MealsByIngredient",
        component: MealsByIngredient,
        path: "/by-ingredient/:ingredient?",
      },
      {
        name: "Ingredients",
        component: Ingredients,
        path: "/ingredients",
      },
      {
        name: "MealDetails",
        component: MealDetails,
        path: "/meal/:id",
      }
    ]
  },
  {
    component: GuestLayout,
    path: "/guest",
    // children:[
    //   {
    //     name: "MealsByName",
    //     component: MealsByName,
    //     path: "/by-name/:name?",
    //   },
    // ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
