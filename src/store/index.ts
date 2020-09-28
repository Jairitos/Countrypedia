import axios from 'axios';

const state = {
  countries: [] as Array<object>,
  europeanCountries: [] as Array<object>,
  isLoading: false as boolean,
}

const getters = {
  allCountries: (state: { countries: Array<object> }) => state.countries,
  loadingInProgress: (state: {isLoading: boolean}) => state.isLoading
}

const actions = {
  // Fetching european countries that are going to be used on the homepage. I used a settimeout here just so you are able to see the loading state. It is only for showing purposes
  async getCountries({ commit }: {commit: Function}) {
    try {
      // set Loading state to true. This will result in the appareance of the loading gif.
        commit('setIsLoading', true);
        const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
       
          // Data from call is set to the state and set Loading state is set to false. This will result in the disappareance of the loading gif and appareance  of the data.
          await commit('setCountries', data)
          await commit('setIsLoading', false);
    } 
    catch (err) {
      await commit('setIsLoading', false);
      return err;
    }
  },
}

const mutations = {
  setCountries: (state: { countries: Array<object> }, countries: Array<object>) => (state.countries = countries),
  setIsLoading: (state: { isLoading: boolean}, loading: boolean) => (state.isLoading = loading)
}

export default {
  state,
  getters,
  actions,
  mutations
};