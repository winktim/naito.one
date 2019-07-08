<template>
  <div class="background-image font-content w-screen h-screen flex overflow-x-hidden">
    <sidebar></sidebar>
    <div class="flex-grow flex flex-col md:pl-64">
      <appbar></appbar>
      <main
        class="flex-grow main-gradient pb-24 pt-15 md:pt-0 transition-padding-200 text-gray-100 px-6 md:px-16 lg:px-32 xl:px-56"
      >
        <nuxt />
      </main>
    </div>
  </div>
</template>
<script>
import Appbar from '../components/appbar.vue'
import Sidebar from '../components/sidebar.vue'
export default {
  components: {
    Appbar,
    Sidebar,
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
    let swipeTriggerMin = window.innerWidth / 3
    let swipeMaxTime = 400

    window.onresize = () => {
      swipeTriggerMin = window.innerWidth / 3
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
          this.$store.commit('setSidebarOpened', { sidebarOpened: true })
        }
      } else {
        // left swipe
        this.$store.commit('setSidebarOpened', { sidebarOpened: false })
      }
    }

    document.body.addEventListener('touchstart', lock, { capture: false })
    document.body.addEventListener('touchend', move, { capture: false })
  },
}
</script>

