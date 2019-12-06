<template>
  <div class="mt-8">
    <a class="yellow-link" ref="link" :href="wikiUrl">Wiki</a>

    <!-- Matomo Image Tracker-->
    <img
      src="https://analytics.naito.one/matomo.php?idsite=1&amp;rec=1&amp;action_name=Wiki"
      style="border:0"
      alt
    />
    <!-- End Matomo -->
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
