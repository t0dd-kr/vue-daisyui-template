<script setup lang="ts">
  import { useStore } from '@/stores'
  import { storeToRefs } from 'pinia'
  
  const store = useStore()
  
  const { increment, decrement } = store
  const { count } = storeToRefs(store)

</script>

<template>
  <div class="flex flex-col items-center justify-center fixed top-0 left-0 w-full h-full">
    <button class="btn text-lg">Hello</button>
    <div class="mt-4 flex">
      <button class="btn text-lg" @click="decrement">-</button>
      <div class="text-white flex h-full px-4 items-center">
        {{ count }}
      </div>
      <button class="btn text-lg" @click="increment">+</button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>