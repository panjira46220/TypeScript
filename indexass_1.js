"use strict";
// import axios from "axios";
// const url1 ='https://ftx.com/api/markets/BTC/USDT';
// const url2 ='https://api1.binance.com/api/v3/avgPrice?symbol=BTCUSDT';
// let num1:number = 0;
// let num2:number = 0;
// let sum: number = 0;
// let percent: number = 0;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// axios.get(url1).then(aa=> {
//     const price = aa.data.result.price
//     num1=price;
//     console.log(`FTX BTC Price: ${num1} USDT`);
// });
// axios.get(url2).then(bb => {
//     const price2  = bb.data.price
//     num2=price2;
//     console.log(`Binance BTC Price: ${num2} USDT`);
//     sum= Math.abs(num1-num2); 
//     percent= Math.abs((sum/num1)*100);
//     console.log(`Diff: ${sum} USDT (${percent} %)`)
// });
////////////////////////////////อีฟ
// import axios from 'axios'
// const url1 = 'https://ftx.com/api/markets/BTC/USDT'
// const url2 = 'https://api1.binance.com/api/v3/avgPrice?symbol=BTCUSDT'
// let a: number = 0
// let b: number = 0
// axios.get(url1).then(response => {
//     console.log("Binance BTC Price:"+ response.data.result.price+"USDT")
//     a=response.data.result.price;
//     axios.get(url2).then(response => {
//          console.log("FTX BTC Price:"+ response.data.price+"USDT")
//          b=response.data.price;
//          if(a>b){
//             const sum = a - b;
//             const sum1 = sum*100/a;
//             console.log("Diff:"+sum1+"%")
//          }
//         else{
//             const sum = b - a;
//             const sum1 = sum*100/b;
//             console.log("Diff:"+sum1+"%")
//         }
//     });
//  });
var axios_1 = require("axios");
var url1 = 'https://ftx.com/api/markets/BTC/USDT';
var url2 = 'https://api1.binance.com/api/v3/avgPrice?symbol=BTCUSDT';
var num1 = 0;
var num2 = 0;
var sum = 0;
function asyncFtxPrice() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get(url1).then(function (aa) {
                        var price = aa.data.result.price;
                        num1 = price;
                        console.log("FTX BTC Price: ".concat(num1, " USDT"));
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function asyncBinancePrice() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get(url2).then(function (bb) {
                        var price2 = bb.data.price;
                        num2 = price2;
                        console.log("Binance BTC Price: ".concat(num2, " USDT"));
                        sum = num1 - num2;
                        console.log(sum);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
asyncFtxPrice();
asyncBinancePrice();
// sum= num1-num2; 
// console.log(sum);
