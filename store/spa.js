import { fetchApiData as fetchApi } from '~/services/api'

export const state = () => ({
  fetchedData: 'loading...'
})

export const actions = {
  async fetchApiData ({ commit }) {
    const data = await fetchApi()
    commit('SET_FETCHED_DATA', data)
  }
}

export const mutations = {
  SET_FETCHED_DATA (state, fetchedData) {
    state.fetchedData = fetchedData
  }
}
