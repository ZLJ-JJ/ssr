<!--
 * @Author: your name
 * @Date: 2021-07-16 15:04:25
 * @LastEditTime: 2021-09-06 17:25:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \b2b-h5\layouts\B2B.vue
-->
<template>
  <div>
    <div class="layout_modal">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/B2Bcomm/Footer";
import { setStore, getStore, removeStore } from "~/config/common";
export default {
  components: {
    Footer
  },
  data() {
    return {
      isApp: null,
      appCode: ""
    };
  },
  created() {
    if (process.client) {
      var sUserAgent = navigator.userAgent.toLowerCase();

      var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";

      var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";

      var bIsMidp = sUserAgent.match(/midp/i) == "midp";

      var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";

      var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";

      var bIsAndroid = sUserAgent.match(/android/i) == "android";

      var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";

      var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

      if (
        bIsIpad ||
        bIsIphoneOs ||
        bIsMidp ||
        bIsUc7 ||
        bIsUc ||
        bIsAndroid ||
        bIsCE ||
        bIsWM
      ) {
        console.log("手机站链接");
      } else {
        console.log("PC站链接");
        let NT = window.location.href;
        let skuId;
        var url = location.search;
        url = url.split("&");
        url.forEach(el => {
          if (el.indexOf("skuId") != -1) {
            el = el.split("=");
            skuId = el[1];
          }
        });
        var url = "http://192.168.3.164:3333/"; //测试地址
        // var url = "http://192.168.3.245:3333/"; //胡保清地址
        // var url = 'http://192.168.3.245:3333/'   //正式地址
        if (NT.indexOf("commodityDetails") != -1) {
          window.location.href = url + "productDetail/" + skuId + ".html";
        } else {
          window.location.href = url;
        }
      }
    }
  },
  mounted() {
    this.appCode = navigator.userAgent;
    if (this.appCode.indexOf(";tospino") != -1) {
      this.isApp = true;
    } else {
      this.isApp = false;
    }
    setStore("isApp", this.isApp);
  }
};
</script>

<style scoped>
.layout_modal {
  margin: auto;
  width: 750px;
  min-height: 100vh;
  background: #f8f8f8;
  box-sizing: border-box;
  font-family: "Microsoft YaHei";
  overflow: hidden;
}

html,
body {
  height: 100%;
}
</style>
