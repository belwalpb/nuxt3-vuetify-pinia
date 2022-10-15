// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  imports: {
    dirs: ['stores'],
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
    css: ['vuetify/lib/styles/main.sass'],
    build: {
      transpile: ['vuetify'],
    }

})
