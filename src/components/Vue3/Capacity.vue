<template>
  <div>
    <h1>Vue 3</h1>
    <h6>Capacity: {{capacity}}</h6>
    <h6>Spaces left: {{spacesLeft}}</h6>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
	<br/>
    <button @click="openAlert">Alert</button>
    <h3>Attending:</h3>
    <ul>
      <li v-for="(name , index) in attending" :key="index">{{name}}</li>
    </ul>
  </div>
</template>
<script>
import useEventSpace from "./use/event-space.js"
export default {
  setup() {
    return {...useAlertSpace(), ...useEventSpace()}
  }
};
function useAlertSpace(){
	function openAlert(){
		alert('you have alerted')
	}
	return{
		openAlert
	}
}
</script>