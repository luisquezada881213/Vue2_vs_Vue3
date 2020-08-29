<template>
    <div>
        <h3>Vue 3: One</h3>
        <code>Capacity: {{capacity}}</code>
    </div>
</template>
<script>
import { ref } from '@vue/composition-api'
export default {
   setup(){
       const capacity = ref(99)
       return {
           capacity
       }
   } 
}
</script>