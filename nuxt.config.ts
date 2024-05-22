import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/ui'],
  css: ['@/assets/styles/main.scss'],
  colorMode: {
    preference: 'light',
  },
  ui: {
    icons: ['simple-icons'],
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
