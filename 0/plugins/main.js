/*
 * @Author:zlj
 * @Date: 2021-07-14 15:52:32
 * @LastEditTime: 2021-08-16 14:24:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \b2b-h5\plugins\main.js
 */
import Vue from "vue";

// https://youzan.github.io/vant/#/zh-CN/password-input
import vant from "vant";
import { Lazyload } from "vant";
import goods_default from "@/assets/img/goods_default.jpg";
import GSignInButton from 'vue-google-signin-button'
Vue.use(vant);
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: goods_default, // 加载失败或者无资源时显示的图片
  loading: goods_default, // loading图片，未加载时显示的
  attempt: 1
});
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(GSignInButton);
// 全局引入组件
import Waterfall from "@/components/B2Bcomm/WaterfallPlus/Waterfall.vue"; // 瀑布流 需要监听tabs分类列表
import StickyTop from "@/components/B2Bcomm/StickyTop/StickyTop.vue"; // 顶端粘滞效果
// import Scroll from "@/components/B2Bcomm/Scroll.vue"; // 上拉\下拉效果
import ZScroller from "@/components/B2Bcomm/Scroller/Scroller.vue"; // 上拉\下拉效果

Vue.component("Waterfall", Waterfall);
Vue.component("StickyTop", StickyTop);
Vue.component("ZScroller", ZScroller);

import Zhezhao from "@/components/B2Bcomm/Mask/MaskLay.vue"; // 遮罩层
Vue.component("Zhezhao", Zhezhao);
import LeftRightRoll from "@/components/B2Bcomm/LeftRightRoll/LeftRightRoll.vue"; // 分类 左右联动
Vue.component("LeftRightRoll", LeftRightRoll);

import SelectJumpGroup from "@/components/B2Bcomm/SelectJump/SelectJumpGroup.vue"; // 分类 左右联动
import SelectJumpItem from "@/components/B2Bcomm/SelectJump/SelectJumpItem.vue"; // 分类 子组件左右模块上下联动
Vue.component("SelectJumpGroup", SelectJumpGroup);
Vue.component("SelectJumpItem", SelectJumpItem);

import ZStepper from "@/components/B2Bcomm/Stepper/Stepper.vue"; // 步进器
Vue.component("ZStepper", ZStepper);

import SwipeCell from "@/components/B2Bcomm/SwipeCell/SwipeCell.vue"; // 分类 左右滑动删除
Vue.component("SwipeCell", SwipeCell);

import Navbar from "@/components/B2Bcomm/Navbar/Navbar.vue"; // nav导航
Vue.component("Navbar", Navbar);

import ZSearch from "@/components/B2Bcomm/Search/Search.vue"; // 搜索栏
Vue.component("ZSearch", ZSearch);

import ZTag from "@/components/B2Bcomm/Tag/Tag.vue"; // tag 标签
Vue.component("ZTag", ZTag);

import ZEmpty from "@/components/B2Bcomm/Empty/ZEmpty.vue"; // Empty 内容为空
Vue.component("ZEmpty", ZEmpty);

import ZModal from "@/components/B2Bcomm/Modal/ZModal.vue"; // 再次提示弹框
Vue.component("ZModal", ZModal);

import ZProgress from "@/components/B2Bcomm/Progress/Progress.vue"; // 横状进度条
Vue.component("ZProgress", ZProgress);
import ZSwiper from "@/components/B2Bcomm/Swiper/ZSwiper"; //轮播图组合1
Vue.component("ZSwiper", ZSwiper);
import ZSwiperitem from "@/components/B2Bcomm/Swiper/ZSwiperitem"; //轮播图组合2
Vue.component("ZSwiperitem", ZSwiperitem);

import ZSteps from "@/components/B2Bcomm/ZSteps/ZSteps"; //步骤条 树状
Vue.component("ZSteps", ZSteps);

import ZInput from "@/components/B2Bcomm/ZInput/ZInput"; //输入框
Vue.component("ZInput", ZInput);

import {
  isDisabled,
  formValidate,
  strTrim,
  objTrim,
  priceReg,
  objDeepCopy,
  deepnull,
  MyLocalStorage,
  countdown,
  trim,
  ossImgArg
} from "@/plugins/utils";
Vue.prototype.$fn = {
  copy: objDeepCopy,
  isDisabled,
  formValidate,
  strTrim,
  objTrim,
  priceReg,
  deepnull,
  MyLocalStorage,
  countdown,
  trim,
  ossImgArg
};
import clipboard from "clipboard";
Vue.prototype.clipboard = clipboard;
// 图片路径前缀
import { gethttpimgurlApi } from "@/api/login/index";
Vue.prototype.$webUrl = "";
Vue.prototype.jn = "";
Vue.prototype.webUrlThumb = "";
Vue.prototype.$oss = "?x-oss-process=image/format,jpg";
gethttpimgurlApi().then(res => {
  if (res.code == 0) {
    Vue.prototype.jn = res.currency;
    Vue.prototype.$webUrl = res.webUrl;
    Vue.prototype.$webUrlThumb = res.webUrlThumb.replace("/thumb/", "");
    Vue.prototype.$areaId = res.areaId;
    Vue.prototype.areaName = res.areaName;
    // item.bgUrl = item.bgUrl
  }
});
