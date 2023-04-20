<template>
  <div class="flex justify-center gap-4 mt-4 mb-2">
    <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter" @click="searchMealsByLetter(letter.toLowerCase())">
      <div class="max-w-sm rounded-xl bg-purple-200 p-3">
        {{ letter }}
      </div>
    </router-link>
  </div>
  <div>
    <meals />
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import store from '../store';
import Meals from '../components/Meals.vue';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(() => store.state.searchedMeals);
function searchMealsByLetter(letter) {
  store.dispatch('searchMealsByLetter', letter);
}
</script>