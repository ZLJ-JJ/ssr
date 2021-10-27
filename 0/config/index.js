/*
 * @Author:zlj
 * @Date: 2021-07-14 11:02:12
 * @LastEditTime: 2021-07-17 13:57:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nuxt\config\index.js
 */
import en from "../lang/en-GH";
import vn from "../lang/en-US";
export const API_ROOT = "https://jsonplaceholder.typicode.com/"; //模板json
export const I18N = {
  locales: [
    {
      code: "en",
      iso: "en-GH",
      name: "English"
    }
    // {
    //   code: "vn",
    //   iso: "en-US",
    //   name: "Vietnam"
    // }
  ],
  defaultLocale: "en",
  // defaultLocale: "vn",
  routes: {},
  vueI18n: {
    fallbackLocale: "en",
    // fallbackLocale: "vn",
    messages: { en, vn }
  }
};
