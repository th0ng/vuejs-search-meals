<template>
  <div class="p-8">
    <div class="flex justify-center gap-2 mt-2">
      <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter" @click="searchMealsByLetter(letter.toLowerCase())">
        {{ letter }}
      </router-link>
    </div>
    <div>
      <meals />
    </div>
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
