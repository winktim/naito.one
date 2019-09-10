<template>
  <section class="mt-4 marked">
    <component :is="renderedMd"></component>
  </section>
</template>
<script>
import en from 'locales/en/company.md'
import fr from 'locales/fr/company.md'

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
    renderedMd() {
      return {
        name: 'DynamicComponent',
        template: content[this.$i18n.locale],
      }
    },
  },
}
</script>
<style lang="scss">
#human-picture {
  background-image: url(/images/human.jpg);
}
</style>
