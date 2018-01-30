
var api = require("@/assets/api"),
    Vue = require("vue").default,
    VueRouter = require("vue-router").default,
    gRouter = new VueRouter({ routes: require("@/assets/routes") });

Vue.config.productionTip = false;
Vue.use(VueRouter);
// gRouter.beforeEach(onBeforeEach);

require("bootstrap/dist/css/bootstrap.min.css");
require("@/index.css");

new Vue({
    components: {
        vueFooter: require("@/components/vue-footer").default,
        vueHeader: require("@/components/vue-header").default
    },
    computed: {
    },
    data: {
    },
    el: ".vue",
    methods: {
    },
    mounted() {
    },
    router: gRouter
});
