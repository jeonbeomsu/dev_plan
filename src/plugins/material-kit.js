import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "@/assets/scss/argon.scss";
import "@/assets/vendor/font-awesome/css/font-awesome.css";
import "@/assets/scss/material-kit.scss";
import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/demo.css";


import globalDirectives from "./globalDirectives";
import globalMixins from "./globalMixins";
import globalComponents from "./globalComponents";
import VueLazyload from "vue-lazyload";
import VueCarousel from "vue-carousel";

export default {
  install(Vue) {
    Vue.use(VueMaterial);
    Vue.use(globalDirectives);
    Vue.use(globalMixins);
    Vue.use(globalComponents);
    Vue.use(VueCarousel);
    Vue.use(VueLazyload, {
      observer: true,
      // optional
      observerOptions: {
        rootMargin: "0px",
        threshold: 0.1
      }
    });
  }
};
