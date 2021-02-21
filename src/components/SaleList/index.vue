<template>
  <div class="sale-list">
    <base-scroll
      :config="config"
    />
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
export default {
  name: 'SaleList',
  props: {
    data: Array
  },
  setup (props) {
    const config = ref({})

    const update = () => {
      const data = []
      const headerIndexData = []
      const aligns = []
      for (let i = 0; i < props.data.length; i++) {
        data[i] = []
        if (i % 2 === 0) {
          headerIndexData[i] = `<div style="width:100%;height:100%;background:rgb(40,40,40);display:flex;align-items:center;justify-content:center;">
            <div style="width:15px;height:15px;background:rgb(72,122,72);border-radius:50%;border:1px solid #fff;"/>
          </div>`
        } else {
          headerIndexData[i] = `<div style="width:100%;height:100%;background:rgb(40,40,40);display:flex;align-items:center;justify-content:center;">
            <div style="width:15px;height:15px;background:rgb(38,88,104);border-radius:50%;border:1px solid #fff;"/>
          </div>`
        }
        let text = ''
        for (let j = 0; j < 5; j++) {
          aligns.push('center')
          switch (j) {
            case 0:
              text = props.data[i].order
              break
            case 1:
              text = props.data[i].shop
              break
            case 2:
              text = props.data[i].rider
              break
            case 3:
              text = props.data[i].newShop
              break
            case 4:
              text = props.data[i].avgOrder
              break
          }
          if (j === 1 || j === 3) {
            data[i].push(`<div style="color: rgb(178,209,126)">${text}</div>`)
          } else {
            data[i].push(text)
          }
        }
      }

      config.value = {
        headerData: ['城市订单量', '店铺数', '接单骑手人数', '新店铺数量', '人均订单量'],
        headerHeight: 55,
        headerFontSize: 24,
        headerIndex: true,
        headerIndexData,
        headerColor: '#fff',
        headerIndexContent: '',
        rowNum: 12,
        rowBg: ['rgb(40,40,40)', 'rgb(55,55,55)'],
        rowFontSize: 20,
        rowColor: '#fff',
        data,
        aligns
      }
    }

    onMounted(() => {
      update()
    })

    watch(() => props.data, () => {
      update()
    })

    return {
      config
    }
  }
}
</script>

<style scoped>
  .sale-list {
    width: 100%;
    height: 100%;
  }
</style>
