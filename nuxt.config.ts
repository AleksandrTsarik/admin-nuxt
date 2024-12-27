// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: {enabled: false},
  build: {
	transpile: ['vuetify'],
  },
  css: [
		'~/assets/style/main.scss',
		'vuetify/lib/styles/main.sass',
		"@mdi/font/css/materialdesignicons.css",
  ],
	modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  resolve: {
		alias: {
			"@": resolve(".")
	  }
  },
	vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
	compatibilityDate: "2024-08-12"
})