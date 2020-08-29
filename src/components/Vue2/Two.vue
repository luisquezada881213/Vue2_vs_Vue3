<template>
    <div>
        <h3>Vue 2: Two</h3>
        <code>Capacity: {{capacity}}</code>
        <br/>
        <button @click="increment">Increment</button>
    </div>
</template>
<script>
export default {
    name: "Vue2Two",
    methods: {
        increment(){
            this.capacity++
        }
    },
    data(){
        return{
            capacity: 0
        }
    }
}
</script>