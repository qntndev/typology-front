(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{221:function(t,e,a){},222:function(t,e){},224:function(t,e,a){"use strict";var s=a(221);a.n(s).a},225:function(t,e,a){"use strict";var s=a(222),i=a.n(s);e.default=i.a},226:function(t,e,a){"use strict";a.r(e);var s={props:{path:String,title:String,subtitle:String,reference:String,volume:String,image:String,hoverImage:String,regularPrice:String,tag:String},data:function(){return{count:0}}},i=(a(224),a(44)),r={components:{ProductCard:Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-card relative"},[a("div",{staticClass:"relative pb-5/4 overflow-hidden bg-gray-200"},[a("img",{staticClass:"absolute h-full w-full object-cover",class:{"animate-image":t.hoverImage},attrs:{src:t.image,alt:""}}),t.hoverImage?a("img",{staticClass:"animate-preview-image absolute h-full w-full object-cover",attrs:{src:t.hoverImage,alt:""}}):t._e()]),a("h3",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"absolute top-0 right-0 mr-4 mt-4 uppercase text-xxs tracking-widest",domProps:{innerHTML:t._s(t.tag)}}),a("g-link",{staticClass:"absolute w-full h-full top-0 left-0",attrs:{to:t.path}}),a("div",{staticClass:"relative pt-4"},[a("h2",{staticClass:"inline leading-tight"},[a("span",{staticClass:"font-semibold"},[t._v(t._s(t.title))]),t.subtitle?a("br"):t._e(),t._v("\n      "+t._s(t.subtitle)+"\n    ")]),a("span",{staticClass:"inline"},[t._v("— "+t._s(t.regularPrice)+"€")]),a("button",{staticClass:"preview-button mt-2 p-3 w-full z-10 bg-gray-100 border-gray-300 uppercase font-semibold xl:mt-0 hover:bg-black hover:text-white hover:border-black cursor-pointer"},[t._v("apercu rapide")])])],1)}),[],!1,null,"e4739c58",null).exports}},l=a(225),n=Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"pt-12 lg:pt-32 container mx-auto"},[e("div",{staticClass:"pb-4 lg:pb-10 px-4 lg:px-6"},[e("ul",{staticClass:"breadcrumb pt-8 pb-2 lg:py-8"},[e("li",[this._v("Produits")]),e("li",[this._v("Nouveautés")])]),e("h1",{staticClass:"text-4xl md:text-7xl font-semibold uppercase"},[this._v("Nouveautés")]),e("p",{staticClass:"mt-1 md:mt-0 font-mono"},[this._v("\n        4/5 |\n        "),e("span",{staticClass:"font-semibold"},[this._v("26 avis vérifiés sur les produits Nouveautés")])])]),e("hr",{staticClass:"my-6 border-gray-300"}),e("div",{staticClass:"row mx-1 lg:mx-3"},this._l(this.$page.products.edges,(function(t){return e("div",{key:t.node.id,staticClass:"col-6 lg:col-3"},[e("ProductCard",{staticClass:"pb-8",attrs:{path:t.node.path,title:t.node.title,subtitle:t.node.subtitle,reference:t.node.reference,image:t.node.image,"hover-image":t.node.hoverImage,"regular-price":t.node.regularPrice,tag:t.node.tag}})],1)})),0)])])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(n);e.default=n.exports}}]);