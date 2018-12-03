import vant from "vant";
import dataView from "./data-view";
import 'vant/lib/index.css';
import { Lazyload } from 'vant';

const components ={
    'data-view':dataView
}

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    // locale.use(opts.locale);
    // locale.i18n(opts.i18n);

    Object.keys(components).forEach(key => {
        Vue.component('gui-'+key, components[key]);
    });

    vant.install(Vue);
    Vue.use(Lazyload, {});

};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
}