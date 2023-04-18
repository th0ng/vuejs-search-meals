import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword.value}`).then(({ data }) => {
    commit("setSearchedMeals", data);
  });
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setSearchedMeals", data);
  });
}

export function searchMealsByIngredient({ commit }, ingredient) {
  axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
    console.log(data);
    commit("setSearchedMeals", data);
  });
}
