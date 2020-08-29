<template>
  <div id="app">
    <Vue2One />
    <Vue3One />
  </div>
</template>

<script>
import Vue2One from './components/Vue2/One'
import Vue3One from './components/Vue3/One'

export default {
  name: 'App',
  components: {
    Vue2One,
    Vue3One
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
