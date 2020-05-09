import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import { saveAsPng, saveAsJpeg } from 'save-html-as-image'

Vue.use(saveAsPng, saveAsJpeg)
Vue.component('vue-draggable-resizable', VueDraggableResizable)



Vue.use(BootstrapVue)
Vue.config.productionTip = false;


new Vue({

    router,
    store,
    render: h => h(App)
}).$mount("#app");
