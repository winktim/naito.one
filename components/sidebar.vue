<template>
  <div id="sidebar" :class="sidebarClasses">
    <!-- color overlay -->
    <div class="absolute top-0 left-0 w-full h-full sidebar-gradient"></div>
    <section class="relative select-none flex justify-between md:items-center md:mx-4">
      <button
        @click="closeSidebar"
        class="clickable w-15 h-15 text-gray-100 hover:text-gray-300 flex items-center justify-center text-2xl md:hidden"
      >
        <i class="material-icons">menu</i>
      </button>
      <div class="flex items-center justify-center py-4">
        <img src="/images/naito-white.svg" alt="Nait One Logo" class="h-10 mx-1" />
        <p class="font-heading text-3xl">Naito.One</p>
      </div>
      <language-selector
        :locale="locale"
        :locales="locales"
        :label="'global.set_locale'"
        name="page"
        @change="SET_LOCALE($event)"
      ></language-selector>
    </section>
    <nav class="relative overflow-y-auto max-h-screen-20">
      <!-- quick links -->
      <ul class="mb-8">
        <!--
      <li class="my-1">
        <a
          class="inline-action pl-4 bg-naito-pink-200 text-white"
          href="https://studio.naito.one"
          target="_blank"
        >
          <i class="material-icons pr-4">aspect_ratio</i>
          <span>Studio</span>
        </a>
      </li>
        -->
        <li class="my-1">
          <a class="inline-action pl-4 bg-naito-green-200 text-white" :href="`mailto:${email}`">
            <i class="material-icons pr-4">alternate_email</i>
            <span v-text="email"></span>
          </a>
        </li>
        <li class="my-1">
          <a
            class="inline-action pl-4 bg-naito-yellow-200 text-black"
            href="https://meters.ch"
            target="_blank"
            rel="noopener"
          >
            <i class="material-icons pr-4">insert_chart_outlined</i>
            <span v-text="$t('pages.meters.quick_access')"></span>
          </a>
        </li>
      </ul>

      <!-- menu -->
      <ul>
        <li>
          <p class="flex items-center py-3 px-4 font-semibold bg-gray-800-trans">
            <i class="material-icons pr-4">category</i>
            <span v-text="$t('nav.products')"></span>
          </p>
          <ul>
            <li v-for="(element, i) in productsServices" :key="i">
              <nuxt-link
                class="inline-action pl-6 bg-gray-900-tran transition-color-200"
                :to="{ name: element.to }"
                @click.native="closeSidebar"
              >
                <i class="material-icons pr-4" v-text="element.icon"></i>
                <span v-text="element.text"></span>
              </nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <p class="flex items-center py-3 px-4 font-semibold bg-gray-800-trans">
            <i class="material-icons pr-4">info</i>
            <span v-text="$t('nav.about')"></span>
          </p>
          <ul>
            <li v-for="(element, i) in about" :key="i">
              <nuxt-link
                class="inline-action pl-6 bg-gray-900-trans transition-color-200"
                :to="{ name: element.to }"
                @click.native="closeSidebar"
              >
                <i class="material-icons pr-4" v-text="element.icon"></i>
                <span v-text="element.text"></span>
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import LanguageSelector from './language-selector.vue'
import { mapMutations } from 'vuex'
export default {
  components: { LanguageSelector },
  methods: {
    closeSidebar() {
      this.$store.commit('SET_SIDEBAR_OPENED', { sidebarOpened: false })
    },
    ...mapMutations(['SET_LOCALE']),
  },
  computed: {
    email() {
      return this.$store.state.email
    },
    locale() {
      return this.$store.state.locale
    },
    locales() {
      return this.$store.state.locales
    },
    sidebarOpened() {
      return this.$store.state.sidebarOpened
    },
    sidebarClasses() {
      return [
        'background-image',
        'fixed',
        'z-30',
        'w-screen',
        'h-screen',
        'md:w-64',
        this.sidebarOpened ? '' : 'translate-x--screen',
        'md:translate-x-0',
        'transition-transform-100',
        'text-gray-100',
        'shadow-lg-side',
      ]
    },
    productsServices() {
      return [
        {
          to: 'index',
          icon: 'home',
          text: this.$t('pages.index.title'),
        },
        {
          to: 'meters',
          icon: 'settings_remote',
          text: this.$t('pages.meters.title'),
        },
      ]
    },
    about() {
      return [
        {
          to: 'company',
          icon: 'domain',
          text: this.$t('pages.company.title'),
        },
        {
          to: 'jobs',
          icon: 'rowing',
          text: this.$t('pages.jobs.title'),
        },
        {
          to: 'legal',
          icon: 'gavel',
          text: this.$t('pages.legal.title'),
        },
        {
          to: 'contact',
          icon: 'question_answer',
          text: this.$t('pages.contact.title'),
        },
      ]
    },
  },
}
</script>
