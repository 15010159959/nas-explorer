
module.exports = [{
    component: require("@/routes/block").default,
    path: "/block"
}, {
    component: require("@/routes/home").default,
    path: ""
}, {
    name: 404,
    path: "*",
}];
