<template>
  <section class="mt-4">
    <h1 class="font-heading text-white text-5xl text-center" v-text="title"></h1>
    <p class="pl-4">Ce contenu est en cours de création. Merci de repasser plus tard.</p>
  </section>
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
          content: this.$t('pages.meters.description'),
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('pages.meters.keywords'),
        },
      ],
    }
  },
  computed: {
    title() {
      return this.$t('pages.meters.title')
    },
  },
}
</script>
