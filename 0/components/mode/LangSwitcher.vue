<!--
 * @Author: your name
 * @Date: 2021-07-14 16:09:01
 * @LastEditTime: 2021-07-20 15:41:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \b2b-h5\components\LangSwitcher.vue
-->
<template>
  <span class="lang-switcher">
    <!-- <a-dropdown>
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
       {{ lang }} <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item
          v-for="(locale, index) in showLocales"
          :key="index"
          @click="langLocale(locale)"
        >
          <nuxt-link :to="switchLocalePath(locale.code)">
            {{ locale.name }}
          </nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-dropdown> -->
  </span>
</template>

<script>
export default {
  name: "LangSwitcher",
  data() {
    return {
      lang: "Select Language",
    };
  },
  computed: {
    showLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      );
    },
  },
  methods: {
    langLocale(lang) {
      this.lang =  this.$i18n.locale
      // console.log( this.lang)
      // this.lang= this.lang==ZH ?"中文": this.lang==EN?"English": this.lang==FR?"Français": this.lang==ES?"Español":"Select Language"
    },
  },
};
</script>
