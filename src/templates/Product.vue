<template>
  <Layout>
    <div class="flex flex-row">
      <div class="w-7/12 min-h-screen bg-gray-200">
        <img :src="$page.product.image" alt />
      </div>
      <div class="w-5/12 pt-24">
        <div class="max-w-sm m-auto">
          <div class="border border-solid border-gray-500 pt-8 px-10">
            <p class="mb-4 text-xs" v-html="$page.product.subtitle" />
            <h1 class="mb-8 text-2xl leading-tight font-semibold" v-html="$page.product.title" />
            <div class="mb-8 font-mono" v-html="$page.product.description" />
          </div>
          <button
            class="mt-3 uppercase bg-black text-white p-6 w-full"
          >ajouter au panier - {{$page.product.regular_price}}</button>
        </div>
      </div>
    </div>
    <div></div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  product(id: $id) {
    title
    subtitle
    description
    regular_price
    image
  }
}
</page-query>