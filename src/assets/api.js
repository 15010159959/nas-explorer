
var { ajax, ajaxSplitAction } = require("@/assets/utility");

module.exports = {
    // get api/block
    // get api/block?type=latest        目前 type 只有 latest
    // get api/block/:id
    getBlock(t, done, fail) {
        // wtf - webpack 对 if (typeof t == "object") 报异常
        if (eval('typeof t == "object"'))
            ajax1("block", t, d, fail);
        else
            ajax1("block/" + t, null, d, fail);

        function d(s, xhr) {
            var o = JSON.parse(s);

            if (o.code == 0)
                done(o.data);
            else if (typeof fail == "function")
                fail(xhr);
        }
    },

    // get api/market_cap
    getMarket(market_cap, done, fail) {
        ajax1(market_cap, null, function (s, xhr) {
            var o = JSON.parse(s);

            if (o.code == 0)
                done(o.data);
            else
                fail(xhr);
        }, fail);
    },

    // get api/tx               p -页码, 默认 1
    // get api/tx?type=latest   目前 type 只有 latest
    // get api/tx/cnt_static
    // get api/tx/:id
    getTx(t, done, fail) {
        // wtf - webpack 对 if (typeof t == "object") 报异常
        if (eval('typeof t == "object"'))
            ajax1("tx", t, d, fail);
        else
            ajax1("tx/" + t, null, d, fail);

        function d(s, xhr) {
            var o = JSON.parse(s);

            if (o.code == 0)
                done(o.data);
            else if (typeof fail == "function")
                fail(xhr);
        }
    },



};

// 网址加前缀 http://192.168.1.168:8080/api/
function ajax1(action, args, done, fail) {
    var a = ajaxSplitAction(action);
    return ajax(a[0] + " " + "http://192.168.1.168:8080/api/" + a[1], args, done, fail);
}
