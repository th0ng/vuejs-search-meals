import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword.value}`).then(({ data }) => {
    debugger;
    commit("setSearchedMeals", data);
  });
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient
    .get(`www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    .then(({ data }) => {
      debugger;
      commit("setSearchedMeals", data);
    });
}
