<template>
  <section class="mt-4 marked">
    <component :is="localeContent"></component>

    <!-- Matomo Image Tracker-->
    <img
      src="https://analytics.naito.one/matomo.php?idsite=1&amp;rec=1&amp;action_name=Legal"
      style="border:0"
      alt
    />
    <!-- End Matomo -->
  </section>
</template>
<script>
import en from '~/components/en/legal'
import fr from '~/components/fr/legal'

const content = {
  en,
  fr,
}

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
          content: this.$t('pages.legal.description'),
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('pages.legal.keywords'),
        },
      ],
    }
  },
  computed: {
    title() {
      return this.$t('pages.legal.title')
    },
    localeContent() {
      return content[this.$i18n.locale]
    },
  },
}
</script>
