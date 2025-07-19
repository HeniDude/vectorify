export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  css: ["~/assets/css/reset.css", "~/assets/css/main.css"],
  build: {
    transpile: ["lucide-vue-next"],
  },
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
    display: 'swap',
  },
  app: {
    head: {
      title: 'Vectorify - Векторные иллюстрации',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Векторные иллюстрации под ваш стиль — быстро и без дизайнера' }
      ]
    }
  }
});
