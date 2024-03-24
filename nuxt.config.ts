// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: false,

  components: [
    { global: true, path: '@/components' },
    { global: true, path: '@/components/logos' }
  ],

  css: [
    '@/styles/global.css'
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    'floating-vue/nuxt'
  ],

  plugins: [
    '@/plugins/floating-vue'
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Faaz M',
      base: {
        target: '_blank'
      },
      meta: [
        {
          key: 'description',
          name: 'description',
          content: "I'm a self-taught full-stack developer, who loves tinkering with stuff."
        },
        {
          key: 'color-scheme',
          name: 'color-scheme',
          content: '#FFD1DC'
        }
      ]
    }
  },

  devtools: {
    enabled: true
  },

  runtimeConfig: {
    LAST_FM_API_KEY: process.env.LAST_FM_API_KEY,
    public: {
      IS_DEV: process.env.IS_DEV,
      PROJECT_DEFAULT_COLOR: process.env.PROJECT_DEFAULT_COLOR,
      DATE_OF_BIRTH: process.env.DATE_OF_BIRTH,
      USER_ID: process.env.USER_ID
    }
  }
})
