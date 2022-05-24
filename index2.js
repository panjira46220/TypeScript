"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
// const response = fetch('https://api1.binance.com/api/v3/klines?interval=1h&symbol=BTCUSDT');
// console.log(response);
//import dayjs from "dayjs";
var dayjs = require("dayjs");
var url = 'https://api1.binance.com/api/v3/klines?interval=1h&symbol=BTCUSDT';
axios_1["default"].get(url).then(function (response) {
    // console.log(response.data[0]);
    var clt = response.data;
    var object = {};
    clt.map(function (item) {
        var _a;
        //console.log(item);
        var newobject = {
            open: item[1],
            hight: item[2],
            low: item[3],
            close: item[4]
        };
        var formatdate = dayjs(item[0]).format("YYYY-MM-DD h:mm:ss");
        Object.assign(object, (_a = {}, _a[formatdate] = newobject, _a));
    });
    console.log(object);
});
