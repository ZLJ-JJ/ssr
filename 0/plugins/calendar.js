import Vue from "vue";
import calendar from "~/components/B2Bcomm/Nav/Calendar";
import lrz from "lrz";
Vue.prototype.$lrz = lrz;

Vue.component("calendar", calendar);

import clipboard from "clipboard";
Vue.prototype.clipboard = clipboard;
