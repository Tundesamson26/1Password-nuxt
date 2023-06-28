// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  buildModules: [
    '@nuxtjs/vite'
  ],
  vite: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag.startsWith('passage-'),
    },
  },
  runtimeConfig: {
    public: {
      APP_ID: process.env.NUXT_APP_PASSAGE_APP_ID,
    },
  },
  devtools: {
    enabled: true,
  },
});
