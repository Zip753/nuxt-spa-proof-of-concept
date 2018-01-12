<template>
  <div>
    <h1>SPA-like async loading of data</h1>
    <pre>{{ fetchedData }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SpaPage',
  async fetch ({ isServer, store }) {
    if (isServer) {
      await store.dispatch('spa/fetchApiData')
    } else {
      store.dispatch('spa/fetchApiData')
    }
  },
  computed: {
    ...mapState({
      fetchedData: state => state.spa.fetchedData
    })
  }
}
</script>
