
module.exports = [{
    component: require("@/routes/block").default,
    path: "/block/:id"
}, {
    component: require("@/routes/txs-internal").default,
    path: "/txs-internal/:id"
}, {
    component: require("@/routes/home").default,
    path: ""
}, {
    name: 404,
    path: "*",
}];
