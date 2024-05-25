import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/ui'],
  css: ['@/assets/styles/main.scss'],
  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  colorMode: {
    preference: 'light',
  },
  ui: {
    icons: ['simple-icons'],
  },

  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/variables.scss";
            @import "@/assets/styles/_colors.scss";
          `,
        },
      },
    },
  },
});
