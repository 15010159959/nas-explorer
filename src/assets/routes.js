
module.exports = [{
    component: require("@/routes/address").default,
    path: "/address/:id"
}, {
    component: require("@/routes/accounts").default,
    path: "/accounts"
}, {
    component: require("@/routes/block").default,
    path: "/block/:id"
}, {
    component: require("@/routes/blocks").default,
    path: "/blocks"
}, {
    component: require("@/routes/tx").default,
    path: "/tx"
}, {
    component: require("@/routes/txs").default,
    path: "/txs"
},
// {
//     component: require("@/routes/txs/internal").default,
//     path: "/txs/internal/:id"
// },
{
    component: require("@/routes/txs/pending").default,
    path: "/txs/pending"
}, {
    component: require("@/routes/home").default,
    path: ""
}, {
    name: 404,
    path: "*",
}];

