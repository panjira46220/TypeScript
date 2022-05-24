"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
// let inputUSDT : number;
var token = 0;
var url = 'https://api1.binance.com/api/v3/depth?symbol=BTCUSDT';
var prompt = require('prompt-sync')();
var inputUSDT = prompt("Input USDT:");
axios_1["default"].get(url).then(function (response) {
    var orderBook = response.data;
    var asks = response.data.asks;
    for (var _i = 0, asks_1 = asks; _i < asks_1.length; _i++) {
        var item = asks_1[_i];
        // console.log("price= "+parseFloat(item[0])+"\tvolume= "+parseFloat(item[1]));
        // calculateOutput(parseFloat(item[0]),parseFloat(item[1]))
        calculateOutput(item);
    }
    //calculateOutput(item);
    console.log("Output BTC: ".concat(inputUSDT, "  ").concat(token));
});
function calculateOutput(order) {
    var a = parseFloat(order[0]);
    var b = parseFloat(order[1]);
    console.log("price= " + a + "\tvolume= " + b);
    if (inputUSDT >= (a * b)) {
        token = b + token;
        inputUSDT = inputUSDT - (a * b);
    }
    else if (inputUSDT < (a * b)) { //เงินเหลือ
        var fewToken = inputUSDT / a; //เหรียญที่ซื้อได้ด้วยเงินที่เหลือจริงๆ
        if (b >= fewToken) { //เหรียญมีจำนวนเยอะกว่าที่ต้องการ
            token = fewToken + token;
            inputUSDT = 0;
        }
        else { //เหรียญมีจำนวนน้อยกว่า
            var payMoney = (inputUSDT * b) / fewToken; //เงินที่ต้องจ๋ายตามจำนวนเหรียญที่มี
            token = b + token;
            inputUSDT = payMoney;
        }
        // token =  fewToken + token ; ย่อๆๆ
        // inputUSDT = 0;
    }
}
