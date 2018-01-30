
var { ajax, ajaxSplitAction } = require("@/assets/utility");

module.exports = {

    getBlock(){

    }

};

// 网址加前缀 http://39.106.136.143/dubhe
function ajax1(action, args, done, fail) {
    var a = ajaxSplitAction(action);
    return ajax(a[0] + " " + "http://192.168.1.168:8080/api/" + a[1], args, done, fail);
}
