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

// export const API_SEVER = "https://serviceapp.tospinobusiness.com.gh/"; //服务器接口，正式接口
export const API_SEVER = "http://192.168.3.161:8086"; //服务器接口，测试接口
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
