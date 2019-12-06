<template>
  <div
    ref="scroller"
    class="background-image font-content w-screen h-screen flex overflow-x-hidden"
  >
    <sidebar></sidebar>
    <div class="flex-grow flex flex-col md:pl-64 w-full">
      <appbar></appbar>
      <main
        class="flex-grow main-gradient pb-24 pt-15 md:pt-0 transition-padding-top-200 text-gray-100 px-6 md:px-16 lg:px-32 xl:px-56"
      >
        <nuxt />
      </main>
    </div>
  </div>
</template>
<script>
import Appbar from '../components/appbar.vue'
import Sidebar from '../components/sidebar.vue'

import clientData from '../middleware/client-data'
import { scrollToTop } from '../assets/utils'
export default {
  components: {
    Appbar,
    Sidebar,
  },
  beforeMount() {
    // get client data
    clientData({ store: this.$store })
  },
  mounted() {
    const connection = navigator.connection
    if (
      connection === undefined ||
      (!connection.saveData && connection.effectiveType === '4g')
    ) {
      Array.from(document.getElementsByClassName('background-image')).forEach(
        element => {
          element.classList.add('background-image__highres')
        }
      )
    }

    // open sidebar when swiping
    /**
     * Max distance from the border to start swiping to open the menu
     */
    let swipeZoneMax = 60
    let swipeTriggerMin = window.innerWidth / 4
    let swipeMaxTime = 600

    window.onresize = () => {
      swipeTriggerMin = window.innerWidth / 4
    }

    let swipeStartX = 0
    let swipeStartTime = 0

    /**
     * @param {TouchEvent} e
     */
    const lock = e => {
      swipeStartX = e.changedTouches[0].clientX
      swipeStartTime = e.timeStamp
    }

    /**
     * @param {TouchEvent} e
     */
    const move = e => {
      const x = e.changedTouches[0].clientX
      const time = e.timeStamp
      const dx = x - swipeStartX
      const dtime = time - swipeStartTime

      if (dtime > swipeMaxTime || Math.abs(dx) < swipeTriggerMin) {
        return
      }

      if (dx > 0) {
        // right swipe
        // check that it started in the swip zone
        if (swipeStartX <= swipeZoneMax) {
          this.$store.commit('SET_SIDEBAR_OPENED', { sidebarOpened: true })
        }
      } else {
        // left swipe
        this.$store.commit('SET_SIDEBAR_OPENED', { sidebarOpened: false })
      }
    }

    document.body.addEventListener('touchstart', lock, { capture: false })
    document.body.addEventListener('touchend', move, { capture: false })
  },
  watch: {
    $route() {
      // make sure the page is scrolled to the top
      scrollToTop(this.$refs.scroller)
    },
  },
}
</script>
