const pkg = require("./package");

module.exports = {
  mode: "spa",
  router: {
    middleware: "mypage"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Git Notification",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: pkg.description}
    ],
    link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}]
  },

  manifest: {
    "gcm_sender_id": "103953800507"
  },


  /*
   ** Customize the progress-bar color
   */
  loading: {color: "#fff"},

  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/element-ui",
    {src: "@/plugins/localStorage.js", ssr: false},
    {src: '@/plugins/registerSW.js', ssr: false}
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios"
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // prefix: "https://",
    proxy: true,
    https: true
  },
  env: {
    NUXT_ENV_GITHUB: process.env.NUXT_ENV_GITHUB,
    NUXT_ENV_FIREBASE: process.env.NUXT_ENV_FIREBASE,
    NUXT_ENV_ACCESS_TOKEN: process.env.NUXT_ENV_ACCESS_TOKEN_WRAPP + " " + process.env.NUXT_ENV_ACCESS_TOKEN,
    NUXT_ENV_USE_PUBLIC_VAPID_KEY: process.env.NUXT_ENV_USE_PUBLIC_VAPID_KEY,
    NUXT_ENV_TOKEN: process.env.NUXT_ENV_TOKEN
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ["@nuxtjs/axios"],
    extend(config, ctx) {
    }
  }
};
