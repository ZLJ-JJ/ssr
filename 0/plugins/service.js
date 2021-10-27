/*
 * @Author: your name
 * @Date: 2021-07-15 11:14:30
 * @LastEditTime: 2021-08-11 14:28:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nuxt\plugins\service.js
 */
import { API_SEVER } from "@/config/index";
import { setStore, getStore, removeStore } from "@/config/common";
import axios from "axios";

import { Toast } from "vant";

axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.post["Content-Type"] = "text/plain;charset=UTF-8"; //自定义请求头信息
let service = axios.create({
  baseURL: API_SEVER,
  timeout: 10000
});

// 请求拦截 可在请求头中加入token等
service.interceptors.request.use(
  config => {
    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //config.headers['X_Innovate_Session'] = getToken()
    if (getStore("token")) {
      // 请求头携带token
      config.headers["token"] = getStore("token");
    }
    if (config.method === "get" || config.method === "GET") {
      config.params = config.data;
    }
    // 在发送请求之前做些什么
    if (!config.hideLoading) {
      Toast.loading({
        message: "",
        forbidClick: true,
        loadingType: "spinner",
        duration: 60000
      });
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截 对响应消息作初步的处理
service.interceptors.response.use(
  resp => {
    var isApp;
    if (getStore("isApp")) {
      isApp = getStore("isApp");
    }
    if (resp.data) {
      /*
       * -1  - -4 token失效
       */
      let data = resp.data;
      let chongdeng =
        window.location.href.indexOf("?") == -1
          ? "?chongdeng=1"
          : "&chongdeng=1";
      if (data.code < 0) {
        if (data.code == -1) {
          // setTimeout(() => {
          //   Toast("Please login again");
          // }, 1000);

          setTimeout(() => {
            if (isApp == "true") {
              javascript: webCtrl.isLogin("", "");
              javascript: webCtrl.toLogin(window.location.href + chongdeng);
            } else {
              setStore("windowUrl", window.location.href + chongdeng);
              window.location.href = "/login";
            }
          }, 2000);
        } else if (data.code == -2) {
          // setTimeout(() => {
          //   Toast("No account information! Please login again.");
          // }, 1000);

          setTimeout(() => {
            if (isApp == "true") {
              javascript: webCtrl.isLogin("", "");
              javascript: webCtrl.toLogin(window.location.href + chongdeng);
            } else {
              setStore("windowUrl", window.location.href + chongdeng);
              window.location.href = "/login";
            }
          }, 2000);
        } else if (data.code == -3) {
          // setTimeout(() => {
          //   Toast("The login is invalid. Please login again.");
          // }, 1000);

          setTimeout(() => {
            if (isApp == "true") {
              javascript: webCtrl.isLogin("", "");
              javascript: webCtrl.toLogin(window.location.href + chongdeng);
            } else {
              setStore("windowUrl", window.location.href + chongdeng);
              window.location.href = "/login";
            }
          }, 2000);
        } else if (data.code == -4) {
          // setTimeout(() => {
          //   Toast("Non-existent account/incorrect password");
          // }, 1000);
          // setTimeout(() => {
          //   window.location.href = "/login";
          // }, 2000);
        } else if (
          data.code == -300 ||
          data.code == -601 ||
          data.code == -30 ||
          data.code === "03"
        ) {
        } else {
          //所有不为0，弹出提示语
          Toast({
            message: data.msg
          });
        }
      } else if (
        data.code === 0 ||
        data.code === "03" ||
        data.status_code === 200 ||
        data.status_code === 3
      ) {
        //这个不要提示语
      } else {
        //所有不为0，弹出提示语
        if (!data.code) {
          return data;
        }
        Toast({
          message: data.msg
        });
      }
      setTimeout(() => {
        Toast.clear();
      }, 500);
      // return { code: resp.data.code, Data: data.Data, msg: data.msg }
      return data;
    } else {
      return data;
    }
  },
  error => {
    if (error.response) {
      switch (error.response.states) {
        case 400: {
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            Toast({
              message: error.response.data.message
            });
          }
          break;
        }
      }
    } else {
      // // 全局销毁弹框
      // Toast.clear();
    }
  }
);

export default service;
