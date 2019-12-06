<template>
  <section class="mt-4 marked">
    <component :is="localeContent"></component>

    <!-- Matomo Image Tracker-->
    <img
      src="https://analytics.naito.one/matomo.php?idsite=1&amp;rec=1&amp;action_name=Contact"
      style="border:0"
      alt
    />
    <!-- End Matomo -->
  </section>
</template>
<script>
import en from '~/components/en/contact'
import fr from '~/components/fr/contact'

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
          content: this.$t('pages.contact.description'),
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('pages.contact.keywords'),
        },
      ],
    }
  },
  computed: {
    title() {
      return this.$t('pages.contact.title')
    },
    localeContent() {
      return content[this.$i18n.locale]
    },
  },
}
</script>
