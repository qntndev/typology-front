<template>
  <div>
    <div class="relative pb-8">
      <div class="relative pb-5/4">
        <img class="absolute h-full w-full object-cover" :src="image" alt />
      </div>
      <h3 class="absolute top-0 right-0 mr-4 mt-4 uppercase text-xxs tracking-widest" v-html="tag" />
      <div class="pt-4">
        <h2 class="inline leading-tight">
          <span class="font-semibold">{{title}}</span>
          <br v-if="subtitle" />
          {{subtitle}}
        </h2>
        <span class="inline">&mdash;{{regularPrice}}€</span>
      </div>
      <g-link class="absolute w-full h-full top-0 left-0" :to="path" />
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

<style>
</style>