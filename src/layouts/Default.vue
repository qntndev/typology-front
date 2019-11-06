<template>
  <div class="font-body text-sm layout">
    <header
      class="absolute top-0 left-0 w-full flex justify-between items-center px-6 pt-2 lg:px-12 lg:pt-4 z-10"
    >
      <div class="w-1/3">
        <g-link to="/">
          <img
            class="my-4"
            src="//cdn.shopify.com/s/files/1/0078/1058/0553/t/250/assets/logo-typology.svg?250986"
            alt
          />
        </g-link>
      </div>
      <div class="lg:w-1/3 hidden md:block">
        <nav class>
          <ul class="flex flex-row justify-center">
            <li>
              <g-link class="py-2 px-3 uppercase text-md font-semibold" to="/">produits</g-link>
            </li>
            <li>
              <g-link class="py-2 px-3 uppercase text-md font-semibold" to>routines</g-link>
            </li>
            <li>
              <g-link class="py-2 px-3 uppercase text-md font-semibold" to>à propos</g-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="lg:w-1/3">
        <nav class>
          <ul class="flex flex-row justify-end items-center">
            <li class="hidden lg:block">
              <g-link class="uppercase py-2 px-3 text-md font-semibold" to>se connecter</g-link>
            </li>
            <li>
              <g-link class="flex items-center" to>
                <span class="uppercase py-2 pl-3 pr-1 text-md font-semibold">panier</span>
                <span
                  class="w-6 h-6 flex justify-center items-center bg-black rounded-full text-xs text-white"
                >0</span>
              </g-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <slot />
    <footer class="py-16">
      <p class="text-center font-mono">
        Codé avec passion par
        <strong class="font-semibold">Quentin</strong> 👋
      </p>
      <p class="text-center">
        avec
        <a class="lg:hover:underline" href="https://vuejs.org/">VueJS</a>,
        <a class="lg:hover:underline" href="https://gridsome.org/">Gridsome</a> et
        <a class="lg:hover:underline" href="https://tailwindcss.com/">Tailwindcss</a>
      </p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
