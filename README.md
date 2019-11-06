# typology-front

**Proof of concept of a fast version for the Front End part of typology.com website.**

It uses VueJS, Gridsome and Tailwindcss.

Since I can't access the Typology Shopify API key, it mimics the fetch of data from shopify (from a JSON file) but uses the Shopify CDN to serve images.

👉 [Visit this fast version of typology website](https://qntndev.github.io/typology-front/) ⚡️

* Product Card as a Vue Component
```html
<ProductCard
:path="product.path"
:title="product.title"
:subtitle="product.subtitle"
:reference="product.reference"
:image="product.image"
:hover-image="product.hoverImage"
:regular-price="product.regularPrice"
:tag="product.tag"/>
```

* Google page speed score
![Imgur](https://i.imgur.com/rQxeS5L.png)

### 1. Install Gridsome CLI tool if you don't have

`yarn global add @gridsome/cli`

### 2. Run project

1. `yarn` to install dependencies
2. `gridsome develop` to start a local dev server at `http://localhost:8080`
