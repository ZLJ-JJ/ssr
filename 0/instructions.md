<!--
 * @Author: zlj
 * @Date: 2021-07-14 16:31:25
 * @LastEditTime: 2021-08-28 13:42:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \b2b-h5\instructions.md
-->

- 无法把之前的一部分功能搬完的如下
  share 该组件分享功能未搬
  倒计时组件还未封装完成

  模板分为两种
  layout: "B2B", //模板
  layout: "B2B-Matter", //模板

  this.open2 => import { Toast } from "vant"; Toast  
  this.toNav => this.$router.push   
  this.toNav({ type: "redirectTo" }) => this.$router.replace
  this.goBack => this.\$router.go(-1)
  所有:uni
  onShow => mounted
  onHide => beforeDestroy

# 使用说明 案例可以参考 mode 封装后的组件和 js 文件须写在该文件

1.语言切换 实例与 zh 中文格式类似

- 1-1 如要新增其它语言 则在文件中 config\index.js locales
  添加格式如下:
  {
  code: 'en',
  iso: 'en-US',
  name: 'English'
  },

- 1-2 添加语言文件夹 lang

  2.加 \_ 下划线 是动态路由格式

  3.layouts 页面布局

  4.plugins\main.js 该插件已经引入，类似 vue 脚手架的 main.js

  5.常用组件，例如底部、头部等 写在 components\B2Bcomm\

  6.页面需要用到组件放置 \components\B2Bcomponents

  7.样式 flex 、 margin 、pd 、颜色等样式 公共部分放置 assets\styles\styles.less

  8.config/common.js 内容存储

# 封装组件及 js 说明 , 列举如下

- 储存 localStorage config/common.js
  使用 import { setStore, getStore, removeStore } from "~/config/common";
  eg: setStore("userinfoShop", res.user);

######

1.Waterfall 瀑布流组件封装
<Waterfall v-model="数据" ref="uWaterfall">

<div slot="left">
</div>
<div slot="right">
</div>
</Waterfall>

实例：如果配合 tabs 组件使用，数据缓慢，需要配合计时器
watch: {
// 监听 tabs 分类列表切换
searchgoodDaolist(nVal, oVal) {
if (this.$refs.uWaterfall) {
 this.leftList = this.$refs.uWaterfall.leftList;
this.rightList = this.\$refs.uWaterfall.rightList;
}
},
},

使用方式：监听数组模式--> refs 传值到左右两边组件中 参考\pages\index.vue 该文件

2.StickyTop 顶端粘滞效果
使用方式:
<StickyTop :offsetTop="需置顶吸附距离" :isSticky="默认 sticky为true ，如果 sticky有问题，修改成false " >

<section slot="StickyTop_header">
<!-- A区 -->
</section>
<section slot="StickyTop_fixed">
<!-- B区 需置顶 -->
</section>
<section slot="StickyTop_fake">
<!-- c区  -->
</section>
</StickyTop>

3.Scroll 上拉加载,下拉刷新
<ZScroller
:isDownPullEvent="控制是否下拉 默认为 true,关闭下拉为 false"
@upPullEvent="onScrollUpPullEvent"
@downPullEvent="onScrollDownPullEvent" >
</ZScroller>

4.MaskLay 遮罩层 样式默认居中
案例参考优惠券实例
使用说明 如果内部需要滚动 加上 @touchstart="touchstart"
eg： // 弹出层内滚滚动效果
touchstart(e) {
this.isRoll = true;
},
<Zhezhao :isCenter=" // 是否显示居中" :isRoll="// 内部是否滚动" >
</Zhezhao>

5.Footer tab 底部栏 （暂时未封装）

6.LeftRightRoll 左右下上联动布局
使用方式:

:leftItemList 传入左侧栏数据
:rightItemList 传入右侧栏数据
@swichMenu 左侧栏 index 选中和 id 数据
<LeftRightRoll>

<section slot="z-roll-right">
<!-- 右边栏 -->
</section>
</LeftRightRoll>

7.SelectJump 选择 跳转/筛选 组合使用
<SelectJumpGroup  :border="false">
<SelectJumpItem>
</SelectJumpItem>
</SelectJumpGroup>

8.Stepper 步进器 常用使用说明
<ZStepper
v-model="Data"//数据
:min="NumMin"//最小值
:max="NumMax" //最大值
:disabled="disabled" //禁止叠加
@change="change" //改变值
:step="stepBox" //严格步进
:long-press="false" //长按连续递增或递减
:disabled-input="true"> //是否禁止输入框手动输入值
</ZStepper>

9.SwipeCell 滑动单元格
传值格式：handles: [{ title: "删除", id: 2 }],
<SwipeCell
@click="onClick" // 将用户点击的操作
@onSlide="onSlide" // 告知父组件当前向左滑动的组件 id
:sliderId="item.id" // 左滑动的组件 id
:curSlideID="curSlideID" // 监听当前滑动的 slider 组件
:handles="handles" // 左滑后显示内容
:sensitivity="sensitivity" // 右边模块灵敏度 >  
 </SwipeCell>

10.Navbar 头部导航

<Navbar :title2="多个标题 数组模式 引用这个无需传 title" @titleArrIndex="多个数组点击 Indx" :title="名称(单个标题)" :isBack="是否显示返回 默认 true 展示" :isFixed="是否固定 默认 false 不固定">

<div slot="navSearch">
<!-- 搜索框定义 -->
</div>
<div slot="navRight">
<!-- 右边内容可以自己定义 -->
</div>
 <div slot="navBottom">
 <!-- 自定义tabs -->
 </div>
</Navbar>

11.Search 搜索栏
<ZSearch
v-model="searName"
@change="HandleSearch"
border-color="#999"
placeholder="Enter key words"
:show-action="false"
height="32"
:action-style="{ color: '#fff' }"
@search="onSearch"
bg-color="#fff" ></ZSearch>

12.tag 标签
<ZTag
            shape="circle"
            :text="文案"
            type="info"
            bg-color="#fff"
            :key="index"
          />

13.Empty 内容为空 替换之前 no-sear-good 标签 noSearGood
<ZEmpty
:imgSrc="图片"
describe="文字标题"
:goodFlag="显示图片表达内容" //如果没有改字段，另外出现一段文案 ></ZEmpty>

14.Modal 再次提示弹框 (组件没有封装很完善)
<ZModal
v-model="弹框开关"
:content="内容"
:show-cancel-button="是否显示取消按钮"
confirm-text="确认文案"
cancel-text="取消文案"
:async-close="异步关闭"
@confirm="确认事件"
:show-title="是否显示标题 默认 ture"

> </ZModal>

15.Progress 进度条
<ZProgress
                :progressBar="(item.activitySaleNum / item.activityNum) * 100"
                :pivotTxt="item.activityState 状态颜色显示"
              ></ZProgress>

16.常用 js 函数 utils.js

17.轮播图 该组件还未正式使用 有问题尚未处理
<ZSwiper :interval="1000">
<ZSwiperitem
            class="swiper-banner"
            v-for="(item, index) in productImgList"
            :key="index"
          >
<img v-lazy="item.img" :src="item.img" alt="" class="banner_img" />

<div slot="indicator">
<div class="custom-indicator">{{ current + 1 }}/4</div>
</div>
</ZSwiperitem>
</ZSwiper>

18.步骤条 树状
<ZSteps>

<div slot="title"></div> //自定义标题
          <div slot="content"></div> //自定义内容
          <div slot="time"></div> //自定义时间
</ZSteps>

19.上传组件
<UploadAll ref="uploadall" :maxCount="图片数量" @getfilePathList="上传成功返回图片路径"></UploadAll>

20.输入框 该组件还未正式使用 有问题尚未处理
<ZInput
          placeholder="Re-enter the new password"
          v-model="formData.userPwd2"
          type="password"
        ></ZInput>

以下是文件说明

1.components: 组件首字母大写,驼峰.用于自己编写的 Vue 组件，比如滚动组件，日历组件，分页组件
2.pages: 页面。一个 vue 文件即为一个页面。
3.assets: 存放资源文件。用于组织未编译的静态资源入 LESS、SASS 或 JavaScript
4.middleware: 中间件。存放中间件。可以在页面中调用： middleware: 'middlewareName'
5.plugins: 用于存放 JavaScript 插件的地方
6.static: 用于存放静态资源文件，比如图片，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。 服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。
7.layouts: 布局。页面都需要有一个布局，默认为 default。它规定了一个页面如何布局页面。所有页面都会加载在布局页面中的 <nuxt /> 标签中。
8.store: 用于组织应用的 Vuex 状态管
9.lang:用于语言管理
10.config:接口请求文件
