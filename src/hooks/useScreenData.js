import { ref, onMounted, onUnmounted } from 'vue'

/* eslint-disable-next-line */
const ageMockData = [{"startValue":0,"value":131107,"axis":"0-20","color":"rgb(116,166,49)"},{"startValue":0,"value":330831,"axis":"20-30","color":"rgb(190,245,99)"},{"startValue":0,"value":551238,"axis":"30-50","color":"rgb(202,252,137)"},{"startValue":0,"value":31088,"axis":">50","color":"rgb(251,253,142)"}]

/* eslint-disable-next-line */
const headerMockData = {"headerData":{"value":[{"title":"今日销售额","subTitle":"Today's Sales Amount","startVal":40041113,"endVal":40105335,"img":"https://www.youbaobao.xyz/datav-res/money.png"},{"title":"今日订单量","subTitle":"Today's Total Orders","startVal":2566778,"endVal":2570025,"img":"https://www.youbaobao.xyz/datav-res/order.png"},{"title":"今日交易用户数","subTitle":"Today's Payed Users","startVal":271744,"endVal":272200,"img":"https://www.youbaobao.xyz/datav-res/member.png"},{"title":"今日新增用户数","subTitle":"Today's New Users","startVal":1286552,"endVal":1289057,"img":"https://www.youbaobao.xyz/datav-res/follow.png"}]},"project":{"value":[{"title":"转化率","value":"13.16%","img":"https://www.youbaobao.xyz/datav-res/success.png"},{"title":"退单率","value":"5.73%","img":"https://www.youbaobao.xyz/datav-res/failed.png"}]}}

function random (val) {
  return Math.floor(Math.random() + val)
}

export default function () {
  const todayUser = ref(10000)
  const growthLastDay = ref(10)
  const growthLastMonth = ref(15)
  const ageData = ref(ageMockData)
  const averageAge = ref(0)
  const headerData = ref(headerMockData)

  let task

  onMounted(() => {
    task = setInterval(() => {
      todayUser.value = todayUser.value + 10
      growthLastDay.value = growthLastDay.value + 1
      growthLastMonth.value = growthLastMonth.value + 1
      averageAge.value = averageAge.value + 1

      const _ageData = [...ageData.value]
      _ageData.forEach(item => {
        item.startValue = item.value
        item.value = item.value + random(100)
      })
      ageData.value = _ageData
    }, 3000)
  })

  onUnmounted(() => {
    task && clearInterval(task)
  })

  return {
    todayUser,
    growthLastDay,
    growthLastMonth,
    ageData,
    averageAge,
    headerData
  }
}
