<template>
    <div>
        <h1>Vue 3</h1>
        <h6>Capacity: {{event.capacity}}</h6>
        <h6>Spaces left: {{event.spacesLeft}}</h6>
        <button @click="increment">Increment</button>
        <h3>Attending:</h3>
        <ul>
            <li v-for="(name , index) in event.attending" :key="index">
                {{name}}
            </li>
        </ul>
    </div>
</template>
<script>
import { reactive, computed } from '@vue/composition-api'
export default {
    setup(){
        const event = reactive({
            capacity : 0,
            attending : ['John', 'Jane', 'Steve'],
            spacesLeft : computed(()=>{
                return event.capacity - event.attending.length
            })
        })
        function increment () {
            event.capacity++
        }
        return {
            event,
            increment
        }
    }
}
</script>