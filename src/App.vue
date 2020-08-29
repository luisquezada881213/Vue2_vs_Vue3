<template>
  <div id="app">
    <Vue2Two />
    <Vue3Two />
  </div>
</template>

<script>
//import Vue2One from './components/Vue2/One'
//import Vue3One from './components/Vue3/One'
import Vue2Two from './components/Vue2/Two'
import Vue3Two from './components/Vue3/Two'

export default {
  name: 'App',
  components: {
    Vue2Two,
    Vue3Two
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
