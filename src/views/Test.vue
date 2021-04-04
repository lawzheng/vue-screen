<template>
  <div class="test">
    <order-map />
  </div>
</template>

<script>
import OrderMap from '../components/OrderMap/index'
export default {
  name: 'Test',
  components: {
    OrderMap
  },
  setup () {
  }
}
</script>

<style lang="less" scoped>
  .test {
    width: 100%;
    height: 100%;
  }
</style>
