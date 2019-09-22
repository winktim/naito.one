<template>
  <div>
    <a ref="link" :href="wikiURL">Wiki</a>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$refs.link.click()
  },
  computed: {
    wikiURL() {
      return (
        'https://github.com/winktim/meters.ch/wiki' +
        (this.$store.state.locale === 'fr' ? '/Home-fr' : '')
      )
    },
  },
}
</script>
