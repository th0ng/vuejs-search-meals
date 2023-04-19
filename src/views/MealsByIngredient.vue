<template>
  <div class="p-8">
    <input type="text" v-model="ingredient" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals by ingredient" @change="searchMealsByIngredient"/>
  </div>
  <div>
    <meals />
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import store from '../store';

import Meals from '../components/Meals.vue';

var ingredient = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMealsByIngredient() {
  store.dispatch("searchMealsByIngredient", ingredient.value.replace(/ /g,"_"));
}

</script>
