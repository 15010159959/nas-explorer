
var Vue = require("vue").default,
    VueRouter = require("vue-router").default,
    gRouter = new VueRouter({ routes: require("@/assets/routes") }),
    vm = {};

require("bootstrap");
require("bootstrap/dist/css/bootstrap.min.css");
require("font-awesome/css/font-awesome.min.css");
require("./index.css");

Vue.config.productionTip = false;
Vue.use(VueRouter);
gRouter.beforeEach(onBeforeEach);

vm = new Vue({
    components: {
        vueFooter: require("@/components/vue-footer").default,
        vueHeader: require("@/components/vue-header").default
    },
    data: {
        headerActive: 0
    },
    el: ".vue",
    mounted() {
        // 💀 before new Vue(...), vm = {}; after, vm = this
        this.headerActive = vm.headerActive;
    },
    router: gRouter
});

function onBeforeEach(to, from, next) {
    vm.headerActive = to.meta.headerActive;
    next();
}
