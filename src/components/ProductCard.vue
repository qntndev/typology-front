<template>
  <div class="product-card relative">
    <div class="relative pb-5/4 overflow-hidden bg-gray-200">
      <img
        :class="{'animate-image': hoverImage}"
        class="absolute h-full w-full object-cover"
        :src="image"
        alt
      />
      <img
        v-if="hoverImage"
        class="animate-preview-image absolute h-full w-full object-cover"
        :src="hoverImage"
        alt
      />
    </div>
    <h3 class="absolute top-0 right-0 mr-4 mt-4 uppercase text-xxs tracking-widest" v-html="tag" />
    <g-link class="absolute w-full h-full top-0 left-0" :to="path" />
    <div class="relative pt-4">
      <h2 class="inline leading-tight">
        <span class="font-semibold">{{title}}</span>
        <br v-if="subtitle" />
        {{subtitle}}
      </h2>
      <span class="inline">&mdash;&nbsp;{{regularPrice}}€</span>
      <button
        class="preview-button mt-2 p-3 w-full z-10 bg-gray-100 border-gray-300 uppercase font-semibold xl:mt-0 hover:bg-black hover:text-white hover:border-black cursor-pointer"
      >apercu rapide</button>
    </div>
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
  @media (min-width: 1280px) {
    &:hover {
      .preview-button {
        opacity: 1;
      }

      .animate-image {
        opacity: 0;
        filter: blur(0.8rem);
        transition-duration: 0s;
        transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition-delay: 0.2s;
      }

      .animate-preview-image {
        transform: none;
        transition-duration: 0.2s;
        transition-delay: 0.05s;
        opacity: 1;
      }
    }
    .preview-button {
      position: absolute;
      top: 15px;
      left: 0;
      opacity: 0;
    }
  }
}

.animate-image {
  transition-duration: 1.5s;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  // transition-delay: 0.15s;
}

.animate-preview-image {
  transition-duration: 0.1s;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  transform: scale3d(1.05, 1.05, 1.05);
  opacity: 0;
}
</style>