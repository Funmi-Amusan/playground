import axios from "axios"

export const getMeals = ({commit}, searchString) => {
    axiosClient.get(`/search.php?s=${searchString}`)
    .then(({data}) => {
        debugger;
        commit('setSearchedMeals', data)
    })
}