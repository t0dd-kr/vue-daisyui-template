<script setup lang="ts">
  // import { ref } from 'vue'
  // import { useStore } from '@/stores'
  // import { storeToRefs } from 'pinia'

  const store = useStore()

  const { increment, decrement } = store
  const { count } = storeToRefs(store)

  const hello = ref('')
</script>

<template>
  <div
    class="flex flex-col items-center justify-center fixed top-0 left-0 w-full h-full text-white"
  >
    <img src="@/assets/images/logo.png" alt="vue" class="w-40" />
    <h1 class="mt-4 text-2xl">Hello world!</h1>
    <div class="mt-10 flex">
      <button class="btn text-lg" @click="decrement">-</button>
      <div class="flex h-full px-4 items-center">
        {{ count }}
      </div>
      <button class="btn text-lg" @click="increment">+</button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
