<template>
  <div>
    <section class="flex flex-col items-center">
      <img src="/images/naito-colored.svg" alt="Naito One Logo" class="h-40" />
      <h1 class="font-heading text-5xl">Naito.One</h1>
      <p class="text-center text-gray-200">
        Société suisse d'innovation informatique
        <br class="lg:hidden" />fondée en 2019
      </p>
      <!--
      <p class="text-gray-300">
        Ici,
        <nuxt-link class="yellow-link" to="/privacy">on ne vous traque pas</nuxt-link>.
      </p>
      -->
    </section>

    <section class="mt-4">
      <h2 class="font-heading text-naito-green-100 text-4xl pl-4">Services</h2>
      <p class="pl-4">Nos services seront bientôt disponibles. Merci de votre patience.</p>
      <div id="coming-soon-image" class="rounded shadow h-64 mt-8 flex items-center justify-center">
        <nuxt-link class="action action__big bg-naito-yellow-200 text-gray-900" to="/">
          <span>Bientôt disponible</span>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Accueil - Naito One',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Naito One est une entreprise d'informatique et design",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Accueil,Services,Produits,Présentation',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
#coming-soon-image {
  background-image: url(/images/coming-soon.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
