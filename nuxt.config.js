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
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

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
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    prefix: "https://api.github.com",
    proxy: true,
    https: true
    // proxyHeaders: true,
    // credentials: true,
  },
  proxy: {
    "/api/": {
      target: "https://api.github.com",
      pathRewrite: { "^/api/": "" },
      changeOrigin: true,
      secure: false
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ["@nuxtjs/axios"],
    extend(config, ctx) {}
  }
};
