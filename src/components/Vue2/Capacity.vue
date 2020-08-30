<template>
  <div>
    <h1>Vue 2</h1>
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
import clickMixin from './mixins/clickMixin'
import alertMixin from './mixins/alertMixin'
export default {
  name: "Vue2Two",
  mixins: [clickMixin, alertMixin],
  methods: {
    decrement: function () {
      this.capacity--;
    },
  },
  data() {
    return {
      capacity: 0,
      attending: ["John", "Jane", "Steve"],
    };
  },
  computed: {
    spacesLeft: function () {
      return this.capacity - this.attending.length;
    },
  },
};
</script>