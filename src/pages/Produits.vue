
<template>
  <div>
    <div v-for="product in $page.products.edges" :key="product.node.id">
      <h2>{{ product.node.title }}</h2>
      <h3>{{ product.node.subtitle }}</h3>
      <span>{{ product.node.regular_price }}€</span>
      <g-link :to="product.node.path">
        <img :src="product.node.image" alt />
      </g-link>
    </div>
  </div>
</template>

<page-query>
query Product {
  products: allProduct {
    edges {
      node { 
        path
        id
        title
        subtitle
        regular_price
        image
      }
    }
  }
}
</page-query>