<template>
  <div>
    <h1>Current way of handling asyncData</h1>
    <pre>{{ fetchedData }}</pre>
  </div>
</template>

<script>
import { fetchApiData } from '~/services/api'

export default {
  name: 'CurrentPage',
  async asyncData () {
    const fetchedData = await fetchApiData()
    return {
      fetchedData
    }
  }
}
</script>
