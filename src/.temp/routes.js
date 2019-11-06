export default [
  {
    path: "/produits/:title/",
    component: () => import(/* webpackChunkName: "page--src--templates--product-vue" */ "/Users/quentin/GIT/typology/src/templates/Product.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/quentin/GIT/typology/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/quentin/GIT/typology/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/quentin/GIT/typology/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/quentin/GIT/typology/node_modules/gridsome/app/pages/404.vue")
  }
]

