<template>
  <div class="product-card relative">
    <div class="relative pb-5/4 overflow-hidden bg-gray-200">
      <img class="image absolute h-full w-full object-cover" :src="image" alt />
      <img class="preview-image absolute h-full w-full object-cover" :src="hoverImage" alt />
    </div>
    <h3 class="absolute top-0 right-0 mr-4 mt-4 uppercase text-xxs tracking-widest" v-html="tag" />
    <div class="relative pt-4">
      <h2 class="inline leading-tight">
        <span class="font-semibold">{{title}}</span>
        <br v-if="subtitle" />
        {{subtitle}}
      </h2>
      <span class="inline">&mdash;{{regularPrice}}€</span>
      <button
        class="preview-button p-3 w-full bg-gray-100 border-gray-300 uppercase font-semibold hover:bg-black hover:text-white hover:border-black cursor-pointer"
      >apercu rapide</button>
    </div>
    <g-link class="absolute w-full h-full top-0 left-0" :to="path" />
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    title: String,
    subtitle: String,
    reference: String,
    volume: String,
    image: String,
    hoverImage: String,
    regularPrice: String,
    tag: String
  },
  data: function() {
    return {
      count: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.product-card {
  &:hover {
    .preview-button {
      opacity: 1;
    }

    .image {
      opacity: 0;
      filter: blur(0.75rem);
      transition-duration: 0.8s;
      transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transition-delay: 0s;
    }

    .preview-image {
      transform: none;
      transition-delay: 0.1s;
      opacity: 1;
    }
  }
}

.preview-button {
  position: absolute;
  top: 15px;
  left: 0;
  z-index: 2;
  opacity: 0;
}

.image {
  transition-duration: 1.5s;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  transition-delay: 0.15s;
}

.preview-image {
  transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transform: scale3d(1.05, 1.05, 1.05);
  opacity: 0;
}
</style>