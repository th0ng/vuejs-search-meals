<template>
  <div class="container mx-auto px-2 pt-2 grid grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
    <div v-for="meal in meals.meals" :key="meal.id">
      <router-link :to="{name: 'mealDetail', params: { mealid: meal.idMeal }}" class="max-w-sm rounded-xl overflow-hidden shadow-lg">
        <img class="w-full" :src="meal.strMealThumb" alt="Meal image" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ meal.strMeal }}</div>
          <p class="text-gray-700 text-base">
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{ meal.strTags }}</span>
        </div>
      </router-link>
    </div>
  </div>
  <div class="flex flex-col items-center">

  </div>
</template>

<script setup>
import { onUpdated } from 'vue';
import { computed } from '@vue/reactivity';
import store from '../store';

const meals = computed(() => store.state.searchedMeals);
onUpdated(() => {
  const numberOfMeals = meals._value.meals.length;
  console.log(meals._value.meals.length);
  console.log(meals);
})
</script>
