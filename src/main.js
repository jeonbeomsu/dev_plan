// =========================================================
// * Development Plan - v1.0.0
// =========================================================
//
// * Copyright 2020 By Jeon, Beomsu 
//
// * Coded by Jeon Beomsu
//
// =========================================================
//

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
