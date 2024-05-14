import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'nuxt-primevue'],
  css: [
    '@/assets/styles/main.scss',
    'primevue/resources/themes/aura-light-green/theme.css',
    'primeicons/primeicons.css',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/variables.scss";`,
        },
      },
    },
  },
});
