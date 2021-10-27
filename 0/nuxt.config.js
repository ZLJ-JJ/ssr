/*
 * @Author: your name
 * @Date: 2021-07-14 15:52:32
 * @LastEditTime: 2021-09-02 17:52:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \b2b-h5\nuxt.config.js
 */
import { API_SEVER, I18N } from "./config";
const Timestamp = new Date().getTime();
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "b2b-h5",
    // htmlAttrs: {
    //     lang: 'en'
    // },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "/js/flexible.js",
        type: "text/javascript",
        charset: "utf-8"
      },
      {
        src: "/js/api_client.js",
        type: "text/javascript",
        charset: "utf-8"
      }
    ]
  },
  loading: { color: "#2f80ed" },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@assets/styles/reset.css",
    "@assets/styles/styles.less",
    "vant/lib/index.less"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/main",
    { src: "~/plugins/version" },
    { src: "@/plugins/calendar", ssr: false },
    { src: "@/plugins/request" },
    { src: "@/api/seo/index" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    ["nuxt-i18n", I18N],
    [
      "@nuxtjs/axios",
      {
        baseURL: API_SEVER
      }
    ]
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  // 修改打包路由路径
  // router: {
  //     base: './'
  // },
  cache: true,
  // // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.output.filename = `js/[name].${Timestamp}.js`; // 每次构建打包时给文件名加上时间戳，保证版本更新时与上版本文件名不一样
      config.output.chunkFilename = `js/[name].${Timestamp}.js`;
      // ...
    },
    postcss: [
      require("postcss-px2rem")({
        // remUnit: 37.5, //remUnit值根据设计图宽度来设置，比如设计图宽度是375px，值就设置为37.5
        remUnit: 75 //表示1rem=75px
      })
    ],
    transpile: [/^vant-ui/],
    extractCSS: { allChunks: true }

    // analyze: true, // 分析 让你可视化你的包以及如何优化它们
    // extractCSS: true, //提取CSS  提取成单个文件
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             styles: {
    //                 name: 'styles',
    //                 test: /\.(css|vue)$/,
    //                 chunks: 'all',
    //                 enforce: true
    //             }
    //         }
    //     }
    // },
    // parallel: true, //线程加载器
  }
};
