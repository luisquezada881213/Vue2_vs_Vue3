<template>
  <div id="app">
    <Vue2/>
    <Vue3/>
  </div>
</template>

<script>
//import Vue2One from './components/Vue2/One'
//import Vue3One from './components/Vue3/One'
import Vue2 from './components/Vue2/Capacity'
import Vue3 from './components/Vue3/CapacityReactiveSyntax'

export default {
  name: 'App',
  components: {
    Vue2,
    Vue3
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
  display: flex;
  justify-content: space-around;
}
</style>
