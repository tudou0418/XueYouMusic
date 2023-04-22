import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

import { onMounted, onUnmounted, onActivated, onDeactivated, ref } from 'vue'

// 注册插件
BScroll.use(Slide)

export default function useSlider(wrapperRef) {
  const slider = ref(null)
  const currentPageIndex = ref(0)

  // 初始化
  onMounted(() => {
    // wrapperRef.value 容器dom对象
    const sliderVal = slider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      probeType: 2,
      slide: true // 使用插件
    })

    sliderVal.on('slideWillChange', (page) => {
      currentPageIndex.value = page.pageX
    })
  })
// 卸载销毁
  onUnmounted(() => {
    slider.value.destroy()
  })

  onActivated(() => {
    slider.value.enable()
    slider.value.refresh()
  })

  onDeactivated(() => {
    slider.value.disable()
  })

  return {
    slider,
    currentPageIndex
  }
}
