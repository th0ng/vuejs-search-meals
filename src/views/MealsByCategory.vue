<template>
  <div>
    <meals />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import{ useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import store from "../store";

import Meals from "../components/Meals.vue";

const route = useRoute();
const category = route.params.category;
const mealsByCategory = ref([]);

onMounted(async () => {
  const response = await axiosClient.get(`filter.php?c=${category}`);
  mealsByCategory.value = response.data;
  store.commit('setSearchedMeals', mealsByCategory.value);
});
</script>