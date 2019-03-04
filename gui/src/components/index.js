import vant from "vant";
// import 'vant/lib/index.css';
import { Lazyload } from 'vant';

import $http from './http';

import page from "./page";
import panel from "./panel";
import grid from "./grid";
import media from "./media";
import dataList from "./data-list";
import dataView from "./data-view";

const components ={
    page,
    panel,
    grid,
    media,
    "data-list":dataList,
    'data-view':dataView
}

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    // locale.use(opts.locale);
    // locale.i18n(opts.i18n);

    Object.keys(components).forEach(key => {
        Vue.component('gui-'+key, components[key]);
    });

    console.log(vant);
    // Vue.use(vant);
    // Vue.use(Lazyload, {});

    Vue.prototype.$http=$http;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
}