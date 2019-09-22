<template>
  <div>
    <section class="flex flex-col items-center">
      <img src="/images/naito-colored.svg" :alt="$t('alt.naito_one_logo')" class="h-40" />
      <h1 class="font-heading text-5xl">Naito.One</h1>
      <p class="text-center text-gray-200">
        <span v-text="$t('pages.index.description_line_1')"></span>
        <br class="lg:hidden" />
        <span v-text="$t('pages.index.description_line_2')"></span>
      </p>
      <!--
      <p class="text-gray-300">
        Ici,
        <nuxt-link class="yellow-link" to="/privacy">on ne vous traque pas</nuxt-link>.
      </p>
      -->
    </section>

    <section class="mt-4">
      <h2 class="font-heading text-naito-green-100 text-4xl pl-4">Meters</h2>
      <p class="pl-4" v-text="$t('pages.index.services.meters.description')"></p>
      <div id="meters-image-outer" class="relative rounded shadow h-64 mt-8 overflow-hidden">
        <nuxt-link
          class="absolute simple-action rounded-md px-6 sm:px-8 py-4 sm:py-6 bg-naito-green-200 w-2/3 sm:w-auto z-10"
          to="/meters"
        >
          <span
            class="text-gray-100 font-bold text-center"
            v-text="$t('pages.index.services.meters.discover')"
          ></span>
        </nuxt-link>
        <div id="meters-image" class="w-full h-full pointer-events-none transition-transform-300"></div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `${this.title} - Naito One`,
      htmlAttrs: {
        lang: this.$store.state.locale,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.index.description'),
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('pages.index.keywords'),
        },
      ],
    }
  },
  computed: {
    title() {
      return this.$t('pages.index.title')
    },
  },
}
</script>
<style lang="scss">
#meters-image-outer > a {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#meters-image-outer > a:hover + #meters-image,
#meters-image-outer > a:active + #meters-image {
  transform: scale(1.05);
}

#meters-image {
  background-image: url(/images/compteur-01.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
