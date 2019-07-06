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
  },
}
</script>

