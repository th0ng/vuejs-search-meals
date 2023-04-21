<template>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" :src="mealToShow.strMealThumb">
    <div class="lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{{ mealToShow.strMeal }}</h1>
      <p>Category: {{ mealToShow.strCategory }}</p>
      <p class="mb-2">Area: {{ mealToShow.strArea }}</p>
      <p class="mb-2 leading-relaxed font-bold">Instructions:</p>
      <p class="mb-2">{{ mealToShow.strInstructions }}</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

const route = useRoute();
const mealId = route.params.mealid;
const mealToShow = ref([]);

onMounted(async () => {
  const response = await axiosClient.get(`lookup.php?i=${mealId}`);
  mealToShow.value = response.data.meals[0];
  console.log(mealToShow.value);
})
</script>