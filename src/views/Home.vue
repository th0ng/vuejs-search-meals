<template>
  <div class="container grid grid-cols-2 lg:grid-cols-3 mx-auto px-2 pt-2 gap-2">
    <router-link v-for="category in categories.categories" :key="category.idCategory" :to="{name: 'byCategory', params: {category: category.strCategory}}">
      <div class="max-w-sm rounded-xl overflow-hidden shadow-lg">
        <img class="w-full" :src="category.strCategoryThumb" alt="Image of category">
        <div class="px-6 py-4">
          <div class="font-semibold text-center text-xl mb-2">
            {{ category.strCategory }}
          </div>
          <p class="text-gray-700 text-base">
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const categories = ref([])

onMounted(async () => {
  const response = await axiosClient.get('/categories.php');
  categories.value = response.data;
})

</script>