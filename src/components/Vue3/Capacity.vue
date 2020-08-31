<template>
  <div>
    <h1>Vue 3</h1>
    <h6>Capacity: {{capacity}}</h6>
    <h6>Spaces left: {{spacesLeft}}</h6>
    <button @click="increment" :disabled="randomUser.loading.value">Increment</button>
    <button @click="decrement" :disabled="randomUser.loading.value">Decrement</button>
    <br/>
    <button @click="openAlert">Alert</button>
    <br/>
    <h6>Watcher autofetch on capacity</h6>
    <small v-if="randomUser.loading.value">Loading...</small>
    <small v-if="randomUser.error.value">{{randomUser.error.value}}</small>
    <small v-if="randomUser.data.value">Random user: {{randomUser.data.value}}</small>
    <h5>Attending:
      <small 
        v-for="(name , index) in attending" 
        :key="index">
        {{name}}
        {{attending.length-1 > index ? ', ' : ''}}
      </small>
    </h5>
    <small>Will be shown when capacity > 0</small>
    <LifeCycles v-if="this.capacity > 0"/>
  </div>
</template>
<script>
import {watch} from "@vue/composition-api"
import useEventSpace from "./use/event-space.js"
import LifeCycles from "./components/LifeCycles"
import fetchRandomUser from '../../api/fetchRandomUser'
import usePromise from '../composables/use-random-user'
export default {
  components: { LifeCycles },
  setup() {
    const {
      capacity,
      attending,
      spacesLeft,
      increment,
      decrement,
    } = useEventSpace();
    const randomUser = usePromise(fetchRandomUser)
    const { openAlert } = useAlertSpace();
    watch(capacity, ()=>{
      randomUser.createPromise()
    })
    //or similar to mixins...
    //return {...useAlertSpace(), ...useEventSpace()}
    return { capacity, attending, spacesLeft, increment, decrement, openAlert, randomUser };
  },
};
function useAlertSpace() {
  function openAlert() {
    alert("you have alerted");
  }
  return {
    openAlert,
  };
}
</script>