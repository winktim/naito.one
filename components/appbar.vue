<template>
  <header
    class="fixed top-0 w-full h-15 md:translate-y--15 appbar-gradient shadow-lg flex items-center justify-between transition-transform-200"
  >
    <a
      href="#"
      @click="SET_SIDEBAR_OPENED({ sidebarOpened: true })"
      class="clickable w-15 h-15 text-gray-100 hover:text-gray-300 flex items-center justify-center text-2xl"
    >
      <i class="material-icons">menu</i>
    </a>
    <ul class="flex mr-4">
      <li class="mx-2">
        <a class="action bg-naito-green-200 text-white" :href="`mailto:${$store.state.email}`">
          <span>{{$store.state.email}}</span>
        </a>
      </li>
      <!--
      <li class="mx-2">
        <a
          class="action bg-naito-yellow-200 text-gray-900"
          href="https://meters.ch"
          target="_blank"
        >
          <span>Meters</span>
        </a>
      </li>
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
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['SET_SIDEBAR_OPENED']),
  },
}
</script>

