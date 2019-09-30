<template>
  <div class="mt-8">
    <a class="yellow-link" ref="link" :href="wikiUrl">Wiki</a>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$refs.link.click()
  },
  computed: {
    wikiUrl() {
      return this.$store.getters.wikiUrl
    },
  },
}
</script>
