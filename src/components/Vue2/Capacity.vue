<template>
  <div>
    <h1>Vue 2</h1>
    <h6>Capacity: {{capacity}}</h6>
    <h6>Spaces left: {{spacesLeft}}</h6>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
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
import clickMixin from './mixins/clickMixin'
import alertMixin from './mixins/alertMixin'
import LifeCycles from './components/LifeCycles'
import fetchRandomUser from '../../api/fetchRandomUser'
import usePromise from '../composables/use-random-user'
export default {
  name: "Vue2Two",
  mixins: [clickMixin, alertMixin],
  components: { LifeCycles },
  methods: {
    decrement: function () {
      this.capacity--;
    }
  },
  data() {
    return {
      capacity: 0,
      attending: ["John", "Jane", "Steve"],
      randomUser: usePromise(fetchRandomUser)
    };
  },
  computed: {
    spacesLeft: function () {
      return this.capacity - this.attending.length;
    },
  },
  watch: {
    capacity: {
      immediate: false,
      handler (){
        this.randomUser.createPromise()
      }
    }
  }
};
</script>