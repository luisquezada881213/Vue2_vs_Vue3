<template>
    <div>
        <h6>Vue 3 LifeCycle hooks component</h6>
        <h6 v-if="previous">Previous value: {{previous}}</h6>
        <h6>Random value: {{value}}</h6>
        <button @click="update">Update</button>
    </div>
</template>
<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
  ref,
  watch
} from "@vue/composition-api";
export default {
    setup(){
        onBeforeMount(() => {
        console.log("Vue 3: Before Mount!");
        });
        onMounted(() => {
        console.log("Vue 3: Mounted!");
        });
        onBeforeUpdate(() => {
        console.log("Vue 3: Before Update!");
        });
        onUpdated(() => {
        console.log("Vue 3: Updated!");
        });
        onBeforeUnmount(() => {
        console.log("Vue 3: Before Unmount!");
        });
        onUnmounted(() => {
        console.log("Vue 3: Unmounted!");
        });
        onActivated(() => {
        console.log("Vue 3: Activated!");
        });
        onDeactivated(() => {
        console.log("Vue 3: Deactivated!");
        });
        onErrorCaptured(() => {
        console.log("Vue 3: Error Captured!");
        });
        const value = ref(0)
        const previous = ref(undefined)

        watch(value, (newVal, prevVal)=>{
            console.log("Vue 3 watcher", prevVal, newVal)
            previous.value = prevVal
        }, {immediate: true})

        function update(){
            value.value = Math.random()
        }
        return {
            update,
            value,
            previous
        }
    }
}
</script>