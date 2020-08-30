<template>
    <div>
        <h6>Vue 2 LifeCycle component</h6>
        <h6 v-if="previous">Previous value: {{previous}}</h6>
        <h6>Random value: {{value}}</h6>
        <button @click="update">Update</button>
    </div>
</template>
<script>
export default {
    beforeCreate:()=>{console.log('vue 2: beforeCreate')},
    created:()=>{console.log('vue 2: created')},
    beforeMount:()=>{console.log('vue 2: beforeMount')},
    mounted:()=>{console.log('vue 2: mounted')},
    beforeUpdate:()=>{console.log('vue 2: beforeUpdate')},
    updated:()=>{console.log('vue 2: updated')},
    beforeDestroy:()=>{console.log('vue 2: beforeDestroy')},
    destroyed:()=>{console.log('vue 2: destroyed')},
    data(){
        return{
            value: 0,
            previous: null
        }
    },
    methods:{
        update: function (){
            this.value = Math.random()
        }
    },
    watch: {
        value: {
            immediate: true,
            handler (newVal, oldVal) {
                this.previous = oldVal
                console.log("vue 2 watcher", newVal, oldVal)
            }
        }
    }
}
</script>