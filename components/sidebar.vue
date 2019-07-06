<template>
  <div id="sidebar" :class="sidebarClasses">
    <!-- color overlay -->
    <div class="absolute top-0 left-0 w-full h-full sidebar-gradient"></div>
    <section class="relative select-none flex justify-between md:justify-center">
      <a
        href="#"
        @click="setSidebarOpened({ sidebarOpened: false })"
        class="clickable w-15 h-15 text-gray-100 hover:text-gray-300 flex items-center justify-center text-2xl md:hidden"
      >
        <i class="material-icons">menu</i>
      </a>
      <div class="flex items-center justify-center py-4">
        <img src="/images/naito-white.svg" alt="Nait One Logo" class="h-12" />
        <p class="font-heading text-3xl">Naito.One</p>
      </div>
      <div class="relative transperent-select md:hidden">
        <select
          aria-label="Choix de la langue"
          name="language-select"
          id="language-select"
          class="px-2 w-15 h-15 font-heading text-sm"
        >
          <option value="fr">fr</option>
        </select>
      </div>
    </section>
    <nav class="relative">
      <!-- quick links -->
      <ul class="mb-8">
        <li class="my-1">
          <a
            class="inline-action pl-4 bg-naito-green-200 text-white"
            :href="`mailto:${$store.state.email}`"
          >
            <i class="material-icons pr-4">alternate_email</i>
            <span>{{$store.state.email}}</span>
          </a>
        </li>
      </ul>

      <!-- menu -->
      <ul>
        <li>
          <p class="flex items-center py-3 px-4 font-semibold bg-gray-800">
            <i class="material-icons pr-4">category</i>Produits et services
          </p>
          <ul>
            <li>
              <nuxt-link
                class="inline-action pl-6 bg-gray-900"
                to="/"
                @click.native="setSidebarOpened({ sidebarOpened: false })"
              >
                <i class="material-icons pr-4">home</i>Accueil
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                class="inline-action pl-6 bg-gray-900"
                to="/"
                @click.native="setSidebarOpened({ sidebarOpened: false })"
              >
                <i class="material-icons pr-4">settings_remote</i>Bientôt disponible
              </nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <p class="flex items-center py-3 px-4 font-semibold bg-gray-800">
            <i class="material-icons pr-4">info</i>À propos
          </p>
          <ul>
            <li>
              <nuxt-link
                class="inline-action pl-6 bg-gray-900"
                to="/company"
                @click.native="setSidebarOpened({ sidebarOpened: false })"
              >
                <i class="material-icons pr-4">domain</i>Entreprise
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                class="inline-action pl-6 bg-gray-900"
                to="/jobs"
                @click.native="setSidebarOpened({ sidebarOpened: false })"
              >
                <i class="material-icons pr-4">rowing</i>Emplois
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                class="inline-action pl-6 bg-gray-900"
                to="/privacy"
                @click.native="setSidebarOpened({ sidebarOpened: false })"
              >
                <i class="material-icons pr-4">gavel</i>Politique de confidentialité
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                class="inline-action pl-6 bg-gray-900"
                to="/contact"
                @click.native="setSidebarOpened({ sidebarOpened: false })"
              >
                <i class="material-icons pr-4">question_answer</i>Contact
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['setSidebarOpened']),
  },
  computed: {
    sidebarOpened() {
      return this.$store.state.sidebarOpened
    },
    sidebarClasses() {
      return [
        'background-image',
        'fixed',
        'z-10',
        'w-screen',
        'md:w-64',
        this.sidebarOpened ? '' : 'translate-x--screen',
        'md:translate-x-0',
        'transition-transform-100',
        'h-screen',
        'text-gray-100',
        'shadow-lg-side',
      ]
    },
  },
}
</script>
