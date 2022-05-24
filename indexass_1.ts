
// import axios from "axios";
// const url1 ='https://ftx.com/api/markets/BTC/USDT';
// const url2 ='https://api1.binance.com/api/v3/avgPrice?symbol=BTCUSDT';
// let num1:number = 0;
// let num2:number = 0;
// let sum: number = 0;
// let percent: number = 0;

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


import axios from "axios";
const url1 ='https://ftx.com/api/markets/BTC/USDT';
const url2 ='https://api1.binance.com/api/v3/avgPrice?symbol=BTCUSDT';
let num1:number = 0;
let num2:number = 0;
let sum: number = 0;


async function asyncFtxPrice(){
    await axios.get(url1).then(aa=> {
    const price = aa.data.result.price
    num1=price;
    console.log(`FTX BTC Price: ${num1} USDT`);
   
});
}

async function asyncBinancePrice() {
    await axios.get(url2).then(bb => {
    const price2  = bb.data.price
    num2=price2;
    console.log(`Binance BTC Price: ${num2} USDT`);
    sum= num1-num2; 
    console.log(sum);
});
}
asyncFtxPrice();
asyncBinancePrice()
sum= num1-num2; 
 console.log(sum);

