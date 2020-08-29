<template>
    <div>
        <h3>Vue 3: Two</h3>
        <code>Capacity: {{capacity}}</code>
        <br/>
        <button @click="increment">Increment</button>
    </div>
</template>
<script>
import { ref } from '@vue/composition-api'
export default {
    setup(){
        const capacity = ref(0)
        const increment = () => {
            capacity.value++
        }
        return {
            capacity,
            increment
        }
    }
}
</script>