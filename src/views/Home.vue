<template>
  <div class="home">
    <Loading v-if="loading">
      <div class="loading-text">数据大屏加载中...</div>
    </Loading>
    <container v-else :options="{ width: 3840, height: 2160}">
      <div class="header">
        <top-header2/>
      </div>
      <div class="separator">222</div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user
              :todayUser="todayUser"
              :growthLastDay="growthLastDay"
              :growthLastMonth="growthLastMonth"
            />
          </div>
          <div class="left2">
            <average-age
              :data="ageData"
              :avgAge="averageAge"
            />
          </div>
          <div class="left3">
            <total-device
              :data="deviceData"
            />
          </div>
          <div class="left4">
            <total-gender
              :data="genderData"
            />
          </div>
          <div class="left5">
            <total-rider
              :data="riderData"
            />
          </div>
          <div class="left6">
            <hot-category
              :data="hotCategoryData"
            />
          </div>
        </div>
        <div class="right">
          <div class="right-top1">
            <center-header
              :data="headerData"
            />
          </div>
          <div class="right-top2">
            <transform-category
              :data="['ALL', '北京', '上海', '深圳', '杭州', '南京', '武汉']"
            />
          </div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">
                <order-map/>
              </div>
              <div class="right-left2">
                <transform-category
                  :data="['订单量', '销售额', '用户数', '退单量']"
                  :color="['rgb(178, 209, 126)', 'rgb(116, 166, 49)']"
                />
              </div>
              <div class="right-left3">
                <fly-box starColor="rgb(251,253,142)">
                  <real-time-order :data="realTimeOrderData"/>
                </fly-box>
              </div>
              <div class="right-left4">
                <schedule-view :data="scheduleViewData"/>
              </div>
            </div>
            <div class="right-right">
              <div class="right-right1">
                <sale-list :data="salesListData" />
              </div>
              <div class="right-right2">
                <sales-rank :data="salesRankData"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import screenData from '../hooks/useScreenData'
import topHeader2 from '../components/TopHeader2/index'
import totalUser from '../components/TotalUser/index'
import averageAge from '../components/AverageAge/index'
import centerHeader from '../components/CenterHeader/index'
import TransformCategory from '../components/TransformCategory/index'
import TotalDevice from '../components/TotalDevice/index'
import TotalGender from '../components/TotalGender/index'
import TotalRider from '../components/TotalRider/index'
import HotCategory from '../components/HotCategory/index'
import SaleList from '../components/SaleList/index'
import OrderMap from '../components/OrderMap/index'
import RealTimeOrder from '../components/RealTimeOrder/index'
import ScheduleView from '../components/ScheduleView/index'
import SalesRank from '../components/SalesRank/index'

export default {
  name: 'Home',
  components: {
    OrderMap,
    topHeader2,
    totalUser,
    averageAge,
    centerHeader,
    TransformCategory,
    TotalDevice,
    TotalGender,
    TotalRider,
    HotCategory,
    SaleList,
    RealTimeOrder,
    ScheduleView,
    SalesRank
  },
  setup () {
    const loading = ref(true)

    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 300)
    })

    return {
      loading,
      ...screenData()
    }
  }
}
</script>
<style lang="less">
  .home {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgb(29, 29, 29);
    color: #fff;
    font-size: 48px;
    #container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .header {
      width: 100%;
      height: 167px;
    }
    .separator {
      width: 100%;
      height: 10px;
      background: rgb(92, 88, 89);
    }
    .center {
      width: 100%;
      flex: 1;
      display: flex;
      .left {
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 860px;
        height: 100%;
        padding-bottom: 20px;
        box-sizing: border-box;
        margin-right: 20px;
        .left1 {
          height: 300px;
        }
        .left2 {
          height: 320px;
        }
        .left3 {
          height: 280px;
        }
        .left4 {
          height: 230px;
          background: tan;
        }
        .left5 {
          height: 360px;
          background: aquamarine;
        }
        .left6 {
          height: 360px;
          background: forestgreen;
        }
      }
      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        .right-top1 {
          width: 100%;
          height: 206px;
        }
        .right-top2 {
          width: 100%;
          height: 48px;
          margin: 10px 0;
        }

        .right-bottom {
          flex: 1;
          display: flex;
          padding-bottom: 20px;
          .right-left {
            flex: 0 0 1917px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 1917px;
            .right-left1 {
              height: 999px;
            }
            .right-left2 {
              height: 80px;
            }
            .right-left3 {
              height: 350px;
            }
            .right-left4 {
              height: 220px;
            }
          }
          .right-right {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;
            margin-right: 20px;
            .right-right1 {
              width: 100%;
              height: 999px;
              background-color: aquamarine;
            }
            .right-right2 {
              width: 100%;
              flex: 1;
              background-color: firebrick;
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
  .loading-text {
    font-size: 20px;
    padding-top: 10px;
  }
</style>
