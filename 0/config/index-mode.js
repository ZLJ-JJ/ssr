/*
 * @Author:zlj
 * @Date: 2021-07-14 11:02:12
 * @LastEditTime: 2021-07-17 13:57:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Nuxt\config\index.js
 */
import en from '../lang/en-US'
import gh from '../lang/en-GH'
import fr from '../lang/fr-FR'
import es from '../lang/es-ES'
import zh from '../lang/zh-CN'

export const API_ROOT = 'https://jsonplaceholder.typicode.com/' //模板json

// export const API_SEVER = 'https://gsadmin.tospino.com/' //服务器接口，该接口为实例
// export const API_SEVER = 'http://192.168.3.164:8086' //服务器接口，测试接口
export const API_SEVER = 'http://192.168.3.161:8086' //服务器接口，测试接口

export const I18N = {

    locales: [{
            code: 'en',
            iso: 'en-US',
            name: 'English'
        },
        {
            code: 'fr',
            iso: 'fr-FR',
            name: 'Français'
        },
        {
            code: 'es',
            iso: 'es-ES',
            name: 'Español'
        },
        {
            code: 'zh',
            iso: 'zh-CN',
            name: '中文'
        },
        {
            code: 'gh',
            iso: 'en-GH',
            name: '加纳'
        }
    ],
    defaultLocale: 'en',

    routes: {
        about: {
            fr: '/a-propos',
            en: '/about-us',
            zh: "/about-zh"
        },
        posts: {
            fr: '/articles',
            zh: "/about-zh"
        },
        'post/_id': {
            fr: '/article/:id?',
            es: '/articulo/:id?',
            zh: "/about-zh/:id?",
            gh: "/about-zh/:id?"
        },
        'dynamicNested/_category': {
            fr: 'imbrication-dynamique/:category',
            zh: 'about-zh/:category',
        }
    },
    vueI18n: {
        fallbackLocale: 'en',
        messages: { en, fr, es, zh, gh }
    }
}