import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-primevue'],
  css: [
    '@/assets/styles/main.scss',
    'primevue/resources/themes/aura-light-green/theme.css',
    'primeicons/primeicons.css',
  ],
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
