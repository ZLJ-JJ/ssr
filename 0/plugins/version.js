/*
 * @Author: your name
 * @Date: 2021-07-14 11:00:08
 * @LastEditTime: 2021-07-21 16:08:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nuxt\plugins\version.js

*/

import packageJson from '../package.json'

export default (_, inject) => {
    inject('nuxtI18nVersion', packageJson.dependencies['nuxt-i18n'])
}