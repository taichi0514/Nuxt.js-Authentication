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
    NUXT_ENV_GITHUB: 'https://api.github.com',
    NUXT_ENV_FIREBASE: 'https://fcm.googleapis.com/v1/projects/nuxtjs-authentication/messages:send',
    NUXT_ENV_ACCESS_TOKEN: 'Bearer ya29.c.ElrZBnnRX-4cQZOuD2bswTj7yGCqSsoJP2Urid1j9IBKPGIr8zkU6cLDppoXWbuiQ_jmpvjlvQv_nY5e4gHldGho27EOjzCnqu0Cfc6wzh4N1Lb8t0jo_GJQyg8',
    NUXT_ENV_USE_PUBLIC_VAPID_KEY: 'BK05JP91BVFnCHgDYRM-q0I7dqgCwyTlFs2k4Z152HHU2Ben9NfuZjz9duR2y7TSBfJh1r7Im2FOdT-7i8SXy34',
    NUXT_ENV_TOKEN: 'd5HoTE3AGc0:APA91bGg5t7SYDBufYaTxdmSyFL2oc11LHWyRiV_YADjDwrRGVYK7xn0gf3FkOeGdYeVLVgTOwFBplo8j1uFR00TFXmx3bqX4-IJtEdF2SfT6GYE3-bfTg6PtwRcjH0CPT0pUdd1V1p'
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
