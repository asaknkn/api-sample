import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
Vue.config.productionTip = false;
// axios.defaults.baseURL = "http://localhost:8080"
new Vue({
    router: router,
    store: store,
    render: function (h) { return h(App); }
}).$mount('#app');
//# sourceMappingURL=main.js.map