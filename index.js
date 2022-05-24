"use strict";
// import axios from "axios";
// import *as dayjs from "dayjs";
exports.__esModule = true;
// const url ='https://api1.binance.com/api/v3/klines?interval=1h&symbol=BTCUSDT';
// axios.get(url).then(response =>{
//   const clt = response.data;
//   const object = {};
//   clt.map((item : any)=>{
//     const newobject ={
//       open :item[1],
//       hight : item[2],
//       low : item[3],
//       close : item[4]
//     };
//     const formatdate = dayjs(item[0]).format("YYYY-MM-DD h:mm:ss");
//     Object.assign(object,{[formatdate]:newobject});
//   });
//   console.log(object);
// });
var axios_1 = require("axios");
var getData = {};
var setData = {};
var url = 'https://api1.binance.com/api/v3/klines?interval=1h&symbol=BTCUSDT';
axios_1["default"].get(url).then(function (response) {
    var _a;
    var candlestick = response.data;
    for (var _i = 0, candlestick_1 = candlestick; _i < candlestick_1.length; _i++) {
        var item = candlestick_1[_i];
        setData = {
            "open": item[1],
            "highn": item[2],
            "low": item[3],
            "close": item[4]
        };
        var openTime = new Date(item[0]);
        var dateTime = openTime.getFullYear() + '-' + ('0' + (openTime.getMonth() + 1)).slice(-2) + '-' + ('0' + openTime.getDate()).slice(-2) + ' ' + openTime.getHours() + ':' + ('0' + (openTime.getMinutes())).slice(-2) + ':' + openTime.getSeconds();
        // console.log(dateTime);
        Object.assign(getData, (_a = {}, _a[dateTime] = setData, _a));
    }
    console.log(getData);
});
