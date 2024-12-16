import axiosClient from "@/axiosClient";

export const getMeals = ({commit}, searchString) => {
    axiosClient.get(`/search.php?s=${searchString}`)
    .then(({data}) => {
        commit('setSearchedMeals', data)
    })
}