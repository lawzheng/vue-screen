<template>
  <button @click="goAbout">{{count}}</button>:{{doubleCount}}
</template>

<script>
import useTest from './test.js'
import { getCurrentInstance } from 'vue'

export default {
  setup () {
    const { ctx } = getCurrentInstance()
    console.log(ctx.$store.state.num)
    const { count, doubleCount, increament } = useTest()
    const goAbout = () => {
      ctx.$router.push('/about')
    }
    return {
      count,
      doubleCount,
      increament,
      goAbout
    }
  }
}
</script>

<style>

</style>
