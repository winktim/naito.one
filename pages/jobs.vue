<template>
  <section class="mt-4">
    <h1 class="font-heading text-white text-5xl text-center" v-text="title"></h1>
    <p>
      Merci de votre intérêt. Naito One ne cherchera
      <strong>pas de nouveaux collaborateurs en 2019</strong>.
    </p>
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
          content: this.$t('pages.jobs.description'),
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('pages.jobs.keywords'),
        },
      ],
    }
  },
  computed: {
    title() {
      return this.$t('pages.jobs.title')
    },
  },
}
</script>
