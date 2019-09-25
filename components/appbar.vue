<template>
  <header
    class="fixed top-0 w-full h-15 md:translate-y--15 appbar-gradient shadow-lg flex items-center justify-between transition-transform-200"
  >
    <button
      @click="openSidebar"
      class="clickable w-15 h-15 text-gray-100 hover:lighten-10 active:darken-10 focus:shadow-outline flex items-center justify-center"
    >
      <i class="material-icons text-2xl">menu</i>
    </button>
    <ul class="flex mr-4">
      <li class="mx-2">
        <a class="action bg-naito-green-200 text-white" :href="`mailto:${email}`">
          <span v-text="email"></span>
        </a>
      </li>
      <li class="mx-2">
        <a
          class="action bg-naito-yellow-200 text-black"
          href="https://meters.ch"
          target="_blank"
          rel="noopener"
        >
          <span v-text="$t('pages.meters.quick_access')"></span>
        </a>
      </li>
      <!--
      <li class="mx-2">
        <a
          class="action bg-naito-pink-200 text-white"
          href="https://studio.naito.one"
          target="_blank"
        >
          <span>Studio</span>
        </a>
      </li>
      -->
    </ul>
  </header>
</template>
<script>
export default {
  methods: {
    openSidebar() {
      this.$store.commit('SET_SIDEBAR_OPENED', { sidebarOpened: true })
    },
  },
  computed: {
    email() {
      return this.$store.state.email
    },
  },
}
</script>

