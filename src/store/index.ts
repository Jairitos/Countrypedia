import axios from 'axios';

const state = {
  countries: [] as Array<object>,
  europeanCountries: [] as Array<object>,
  isLoading: false as boolean,
}

const getters = {
  allCountries: (state: { countries: Array<object> }) => state.countries,
  allEuropeanCountries: (state: { europeanCountries: Array<object> }) => state.europeanCountries,
  loadingInProgress: (state: {isLoading: boolean}) => state.isLoading
}

const actions = {
  // Fetching european countries that are going to be used on the homepage. I used a settimeout here just so you are able to see the loading state. It is only for showing purposes
  async getCountries({ commit }: {commit: Function}) {
    try {
      // set Loading state to true. This will result in the appareance of the loading gif.
      commit('setIsLoading', true);
      setTimeout(() => {
        axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
          const { data } = response;
          // Data from call is set to the state and set Loading state is set to false. This will result in the disappareance of the loading gif and appareance  of the data.
          commit('setCountries', data)
          commit('setIsLoading', false);
      })
      }, 2000)
    } 
    catch (err) {
      commit('setIsLoading', false);
      return err;
    }
  },
  // Fetching european countries that are going to be used on the homepage. I used a settimeout here just so you are able to see the loading state. It is only for showing purposes
  async getEuropeanCountries({ commit }: {commit: Function}) {
    try {
      // set Loading state to true. This will result in the appareance of the loading gif.
      commit('setIsLoading', true);
      setTimeout(() => {
        axios.get("https://restcountries.eu/rest/v2/region/europe").then((response) => {
          const { data } = response;
          commit('setEuropeanCountries', data );
          commit('setIsLoading', false);
      });
    }, 2000);
    } 
    catch (err) {
      commit('setIsLoading', false);
      return err;
    }
  }
}

const mutations = {
  setCountries: (state: { countries: Array<object> }, countries: Array<object>) => (state.countries = countries),
  setEuropeanCountries: (state: { europeanCountries: Array<object> }, europeanCountries: Array<object>) => (state.europeanCountries = europeanCountries),
  setIsLoading: (state: { isLoading: boolean}, loading: boolean) => (state.isLoading = loading)
}

export default {
  state,
  getters,
  actions,
  mutations
};