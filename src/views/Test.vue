<template>
  <div class="earth-wrapper">
    <vue-echarts :options="options" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import 'echarts-gl'
const ROOT_PATH = './'

export default {
  name: 'Test',
  setup () {
    const options = ref({})
    const update = () => {
      options.value = {
        backgroundColor: '#000',
        globe: {
          baseTexture: `${ROOT_PATH}assets/datav-gl-texture.jpg`,
          heightTexture: `${ROOT_PATH}assets/datav-gl-texture.jpg`,
          displacementScale: 0.04,
          shading: 'realistic',
          environment: `${ROOT_PATH}assets/star-bg.jpg`,
          realisticMaterial: {
            roughness: 0.9
          },
          postEffect: {
            enable: true
          },
          light: {
            main: {
              intensity: 5,
              shadow: true
            },
            ambientCubemap: {
              texture: `${ROOT_PATH}assets/pisa.hdr`,
              diffuseIntensity: 0.2
            }
          }
        }
      }
    }
    onMounted(update)
    return {
      options
    }
  }
}
</script>

<style lang="less" scoped>
  .earth-wrapper {
    width: 100%;
    height: 100%;
  }
</style>
