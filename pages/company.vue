<template>
  <section class="mt-4">
    <h1 class="font-heading text-white text-5xl text-center lg:mb-8">Entreprise</h1>
    <p class="mb-4">
      Naito One est une société suisse d’innovation informatique.
      <br />La société a été crée en 2019 par Tim Winkelmann comme raison individuelle sous le nom “Naito One Winkelmann”.
    </p>

    <div
      class="flex flex-col-reverse sm:flex-row lg:flex-col-reverse items-center justify-around mb-4 xl:ml-4 xl:float-right"
    >
      <label class="font-heading text-small text-gray-400 text-center">
        Tim Winkelmann,
        <br class="lg:hidden" />Directeur Naito One
      </label>
      <div
        class="bg-center bg-cover w-2/3 sm:w-1/2 lg:w-64 h-76 lg:h-100 m-4 rounded shadow"
        id="human-picture"
      ></div>
    </div>

    <p
      class="mb-4"
    >Notre but est de fournir des prestations et produits intélligents et utiles, accessibles dans un premier temps aux entreprises puis également aux particuliers.</p>

    <p class="mb-4">
      Notre entreprise a pour but de satisfaire à la fois ses clients et ses employés. C’est pourquoi nous innovons également dans le domaine de l’environnement de travail.
      <br />Si travailler avec nous vous intéresse, jetez un oeil à la page
      <nuxt-link to="/jobs" class="yellow-link">Emplois</nuxt-link>, nous cherchons peut-être votre profil.
    </p>

    <h2 class="font-heading text-naito-green-100 text-4xl xl:mt-32">Le Studio</h2>

    <p
      class="mb-4"
    >En plus de ses prestations informatiques, Naito One est également un studio de créations numériques.</p>

    <p>Le but du studio est de servir des produits sur mesure dans le domaine de la communication, comme des spots vidéos ou des affiches et d’explorer les technologies émergentes afin de réaliser du contenu unique de manière innovante.</p>
  </section>
</template>
<script>
export default {
  head() {
    return {
      title: 'Entreprise - Naito One',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Informations concernant l'entreprise Naito One",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Informations,Entreprise,Détails',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
#human-picture {
  background-image: url(/images/human.jpg);
}
</style>
