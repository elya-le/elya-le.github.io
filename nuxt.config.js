import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/device"],
  app: {
    head: {
      title: 'Elya.dev',
      meta: [{ name: 'description', content: 'Elya Lê' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/logo-32x32.png' }],  // Updated path
      script: [{ src: '/js/threejs.min.js' }],  // Updated path
    },
  },
  devServer: { port: 8000 },
  ssr: false,
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@fancyapps/ui/dist/fancybox/fancybox.css',
    '@/assets/styles/style.scss'
  ],
  router: {
    base: '/',
    options: {
      scrollBehavior: {
        behavior: 'smooth'
      }
    }
  },
  plugins: [
    { src: '@/plugins/fontawesome.js', mode: 'client' },
    { src: '~/plugins/splitting.client.js', mode: 'client' }
  ],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => /^(swiper|swiper-slide|swiper-container)$/.test(tag)
    }
  },
  env: {
    'vue/setup-compiler-macros': true
  },
  vite: {
    optimizeDeps: {
      include: [
        "smooth-scrollbar",
        "@fancyapps/ui",
        "isotope-layout/js/isotope",
        "three",
        "splitting",
        "flickr-justified-gallery",
        "@googlemaps/js-api-loader",
      ]
    }
  },
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },
  compatibilityDate: '2024-07-28',
});
