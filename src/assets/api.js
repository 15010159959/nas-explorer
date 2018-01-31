
var { ajax, ajaxSplitAction } = require("@/assets/utility");

module.exports = {
    getBlock(type, done, fail) {
        ajax1("block", { type }, function (s, xhr) {
            var o = JSON.parse(s);

            if (o.code == 0)
                done(o.data);
            else
                fail(xhr);
        }, fail);
    },

    getTx(type, done, fail) {
        ajax1("tx", { type }, function (s, xhr) {
            var o = JSON.parse(s);

            if (o.code == 0)
                done(o.data);
            else
                fail(xhr);
        }, fail);
    },

    getBlacks(height, done, fail) {
        ajax1("black", { height }, function (s, xhr) {
            var o = JSON.parse(s);

            if (o.code == 0)
                done(o.data);
            else
                fail(xhr);
        }, fail);
    }



};

// 网址加前缀 http://192.168.1.168:8080/api/
function ajax1(action, args, done, fail) {
    var a = ajaxSplitAction(action);
    return ajax(a[0] + " " + "http://192.168.1.168:8080/api/" + a[1], args, done, fail);
}
