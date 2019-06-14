<template>
  <div class="w-full min-h-screen bg-gradient-b-gray-pink flex justify-center">
    <header
      class="z-20 h-16 bg-gray-900 shadow-lg fixed top-0 w-full flex justify-between items-center"
    >
      <i
        class="material-icons clickable text-4xl text-naito-green-100 hover:text-naito-green-200 p-4"
      >menu</i>
      <h1 class="text-xl font-bold text-naito-green-100 mr-4">Naito One</h1>
    </header>
    <main class="py-20 container mx-10 sm:mx-20 text-gray-100 text-lg">
      <section class="section mb-10">
        <img
          src="images/naito-colored.svg"
          alt="Naito One Logo"
          class="logo h-32 lg:h-64 text-white"
        >
      </section>
      <section class="section mb-10">
        <p
          class="text-center"
        >Ce site est en construction. Repassez nous voir sous peu ou laissez un message !</p>
      </section>
      <section class="section">
        <h2 class="font-medium text-xl mb-3">Contact</h2>
        <a
          href="mailto:hello@naito.one"
          class="block w-64 text-center text-naito-yellow-100 hover:text-naito-yellow-200 p-4 border border-naito-yellow-100 hover:border-naito-yellow-200"
        >hello@naito.one</a>
      </section>
    </main>
  </div>
</template>
<style lang="scss">
.bg-gradient-b-gray-pink {
  background: linear-gradient(
    to bottom,
    theme('colors.gray.900'),
    steps(8, skip-both),
    theme('colors.naito-pink.300')
  );
}

img {
  filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.2));
}
</style>


