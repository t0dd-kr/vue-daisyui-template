import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
  // other options...
  state() {
    return {
      // other options...
      count: 0
    }
  },
  actions: {
    increment() {
      this.count ++
    },
    decrement() {
      this.count --
    },
  },
})