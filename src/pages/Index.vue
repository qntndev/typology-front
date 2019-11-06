<template>
  <Layout>
    <div class="pt-24 lg:pt-32 container mx-auto">
      <div class="pb-10 px-6">
        <ul class="breadcrumb py-8">
          <li>Produits</li>
          <li>Nouveautés</li>
        </ul>
        <h1 class="text-4xl md:text-7xl font-semibold uppercase">Nouveautés</h1>
        <p class="font-mono">
          4/5 |
          <span class="font-semibold">26 avis vérifiés sur les produits Nouveautés</span>
        </p>
      </div>
      <hr class="my-6 border-gray-300" />
      <div class="row mx-3">
        <div class="col-6 md:col-3" v-for="product in $page.products.edges" :key="product.node.id">
          <ProductCard
            class="pb-8"
            :path="product.node.path"
            :title="product.node.title"
            :subtitle="product.node.subtitle"
            :reference="product.node.reference"
            :image="product.node.image"
            :hover-image="product.node.hoverImage"
            :regular-price="product.node.regularPrice"
            :tag="product.node.tag"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import ProductCard from "~/components/ProductCard.vue";

export default {
  components: {
    ProductCard
  }
};
</script>


<page-query>
query Product {
  products: allProduct {
    edges {
      node { 
        path
        id
        title
        subtitle
        reference
        volume
        regularPrice
        image
        hoverImage
        tag
      }
    }
  }
}
</page-query>