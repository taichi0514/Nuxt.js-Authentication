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
    "gcm_sender_id": "AIzaSyCFt8oCEccawoxNvSl02Pdfa9XsNndDCag"
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
    prefix: "https://",
    proxy: true,
    https: true
  },
  env: {
    GITHUB: process.env.BASE_URL || 'api.github.com',
    FIREBASE: process.env.BASE_URL || 'fcm.googleapis.com/v1/projects/nuxtjs-authentication/'
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
