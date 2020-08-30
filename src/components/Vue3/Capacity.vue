<template>
    <div>
        <h1>Vue 3</h1>
        <h6>Capacity: {{capacity}}</h6>
        <h6>Spaces left: {{spacesLeft}}</h6>
        <button @click="increment">Increment</button>
        <h3>Attending:</h3>
        <ul>
            <li v-for="(name , index) in attending" :key="index">
                {{name}}
            </li>
        </ul>
    </div>
</template>
<script>
import { ref, computed } from '@vue/composition-api'
export default {
    setup(){
        const capacity = ref(0)
        const attending = ref(['John', 'Jane', 'Steve'])
        const spacesLeft = computed(()=>{
            return capacity.value - attending.value.length
        })
        function increment () {
            capacity.value++
        }
        return {
            capacity,
            attending,
            spacesLeft,
            increment
        }
    }
}
</script>