require('./bootstrap');
window.Vue = require('vue');
import router from "./routes";
import VueRouter from "vue-router";
import Index from "./components/Index"
import moment from "moment";
import StarRating from "./shared/components/StarRating";
import FatalError from "./shared/components/FatalError";
import ValidationErrors from "./shared/components/ValidationErrors";
import Success from "./shared/components/Success";
import Vuex from 'vuex'
import storeDefinition from './store'
import axios from "axios";




// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('example-2', require('./components/Example2.vue').default);
Vue.use(Vuex)
Vue.use(VueRouter);
Vue.filter('fromNow', value => moment(value).fromNow());
Vue.component('star-rating', StarRating)
Vue.component('fatal-error', FatalError)
Vue.component('v-errors', ValidationErrors)
Vue.component('success', Success)

const store = new Vuex.Store(storeDefinition);

window.axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (401 == error.response.status) {
            store.dispatch('logout')
        }

        return Promise.reject(error);
    }
);

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        'index': Index
    },
    async beforeCreate(){
        this.$store.dispatch('loadStoredState');
        this.$store.dispatch('loadUser');
    }
});
