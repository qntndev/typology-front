<template>
  <div class="font-body text-sm layout">
    <header class="absolute top-0 left-0 w-full flex flex-row items-center px-10 pt-3 z-10">
      <div class="w-1/3">
        <g-link to="/">
          <img
            class="my-4"
            src="//cdn.shopify.com/s/files/1/0078/1058/0553/t/250/assets/logo-typology.svg?250986"
            alt
          />
        </g-link>
      </div>
      <div class="w-1/3">
        <nav class>
          <ul class="flex flex-row justify-center">
            <li>
              <g-link class="p-2 uppercase text-md font-semibold" to="/produits">produits</g-link>
            </li>
            <li>
              <g-link class="p-2 uppercase text-md font-semibold" to>routines</g-link>
            </li>
            <li>
              <g-link class="p-2 uppercase text-md font-semibold" to>à propos</g-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="w-1/3">
        <nav class>
          <ul class="flex flex-row justify-end">
            <li>
              <g-link class="uppercase p-2" to>se connecter</g-link>
            </li>
            <li>
              <g-link class="uppercase p-2" to>panier</g-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <slot />
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
