<template>
  <Layout>
    <div class="container-fluid">
      <div class="row">
        <div class="md:col-6 lg:col-7 bg-gray-200 pt-24 lg:pt-28">
          <div class="relative max-w-xl mx-auto">
            <p class="absolute top-0 left-0 mt-8 ml-8 text-xs">{{$page.product.reference}}</p>
            <img :src="$page.product.image" alt />
          </div>
        </div>
        <div class="md:col-6 lg:col-5 pt-12 md:pt-24 lg:pt-28">
          <div class="max-w-sm m-auto">
            <div class="border border-solid border-gray-500 pb-6">
              <div class="px-10 pt-8">
                <p class="mb-4 text-xs" v-html="$page.product.reference" />
                <h1 class="mb-8 text-2xl leading-tight font-semibold">
                  {{$page.product.title}}
                  <br />
                  {{$page.product.subtitle}}
                </h1>
                <div class="rich-text font-mono" v-html="$page.product.description" />
                <a class="underline font-mono text-xs" href>écrire un avis</a>
              </div>
              <hr class="mx-4 my-6 border-gray-300" />
              <p class="flex items-center justify-center font-semibold">
                <span class="mr-1 text-2xl">&#8226;</span>
                {{$page.product.volume}}
              </p>
            </div>
            <button
              class="mt-3 p-6 w-full bg-black uppercase text-white text-sm font-semibold cursor-pointer border-black lg:hover:bg-transparent lg:hover:text-black transition-1"
            >
              ajouter au panier
              <span class="px-1">&ndash;</span>
              {{$page.product.regularPrice}}€
            </button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  product(id: $id) {
    title
    subtitle
    reference
    volume
    description
    regularPrice
    image
    hoverImage
    tag
  }
}
</page-query>