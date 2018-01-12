<template>
  <div>
    <h1>This is starting page!</h1>
    <div>
      <nuxt-link :to="{ name: 'current' }"> Current way of handling asyncData</nuxt-link>
    </div>
    <div>
      <nuxt-link :to="{ name: 'spa' }"> SPA-like async loading of data</nuxt-link>
    </div>
  </div>
</template>
