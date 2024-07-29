// https://nuxt.com/docs/api/configuration/nuxt-config
import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
export default defineNuxtConfig({
 devtools: { enabled: false },
 modules: ["@nuxtjs/device"],

 app: {
					// baseURL: '/blackdsn/',
					head: {
									title: 'Blackdsn',
									meta: [{ name: 'description', content: 'Blackdsn Nuxt-js Template' }],
									link: [{ rel: 'icon', type: 'image/x-icon', href: '/_nuxt/assets/img/logo-32x32.png' }],
									script: [{ src: '/_nuxt/assets/js/threejs.min.js' }],
					}
	},

 devServer: { port: 8000 },
 ssr: false,
 css: ['@fortawesome/fontawesome-svg-core/styles.css', '@fancyapps/ui/dist/fancybox/fancybox.css', '@/assets/styles/style.scss'],
 router: { options: { scrollBehaviorType: 'smooth' } },
 plugins: [{ src: '@/plugins/fontawesome.js' }],
 vue: { compilerOptions: { isCustomElement: (tag) => /^(swiper|swiper-slide|swiper-container)$/.test(tag) } },
 env: { 'vue/setup-compiler-macros': true },

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
})