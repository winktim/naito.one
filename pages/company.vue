<template>
  <section class="mt-4 marked">
    <component :is="localeContent"></component>
  </section>
</template>
<script>
import en from '~/components/en/company'
import fr from '~/components/fr/company'

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
          content: this.$t('pages.company.description'),
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('pages.company.keywords'),
        },
      ],
    }
  },
  computed: {
    title() {
      return this.$t('pages.company.title')
    },
    localeContent() {
      return content[this.$i18n.locale]
    },
  },
}
</script>
<style lang="scss">
#human-picture {
  background-image: url(/images/human.jpg);
}
</style>
