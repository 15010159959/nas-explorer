
module.exports = [{
    component: require("@/routes/home").default,
    // meta: { requiresAuth: true },
    path: "/"
}, {
    name: 404,
    path: "*",
}];
