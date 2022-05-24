// import axios from "axios";
// // let inputUSDT : number;
// let token : number = 0;
// const url ='https://api1.binance.com/api/v3/depth?symbol=BTCUSDT';

// const prompt = require('prompt-sync')();
// let  inputUSDT = prompt(`Input USDT:`);


// axios.get(url).then(response =>{

//   const orderBook = response.data;
//   const asks = response.data.asks;
//   for( let item of asks){
       
//     // console.log("price= "+parseFloat(item[0])+"\tvolume= "+parseFloat(item[1]));
//     // calculateOutput(parseFloat(item[0]),parseFloat(item[1]))
//     calculateOutput(item);
//    }
    
//     //calculateOutput(item);
//     console.log(`Output BTC: ${inputUSDT}  ${token}` );
  
// });

// function calculateOutput(order : any) {
    
//     let a : number = parseFloat(order[0]);
//     let b : number = parseFloat(order[1]);
//     console.log("price= "+a+"\tvolume= "+b);
//     if(inputUSDT >= (a*b)){
//         token = b + token;
//         inputUSDT = inputUSDT - (a*b) ;
//     }
//     else if (inputUSDT<(a*b)){  //เงินเหลือ
//         let fewToken : number = inputUSDT/a; //เหรียญที่ซื้อได้ด้วยเงินที่เหลือจริงๆ
//         if(b >= fewToken){                    //เหรียญมีจำนวนเยอะกว่าที่ต้องการ
//             token =  fewToken + token ; 
//             inputUSDT = 0;
//         }
//         else{                               //เหรียญมีจำนวนน้อยกว่า
//             let payMoney : number = (inputUSDT*b)/fewToken;            //เงินที่ต้องจ๋ายตามจำนวนเหรียญที่มี
//             token = b  + token ;
//             inputUSDT = payMoney;
//         }
//         // token =  fewToken + token ; ย่อๆๆ
//         // inputUSDT = 0;
//     }
    
// }




import axios from "axios";
const url1 ='https://ftx.com/api/markets/BTC/USDT';
const url2 ='https://api1.binance.com/api/v3/avgPrice?symbol=BTCUSDT';
let num1:number = 0;
let num2:number = 0;
let sum: number = 0;
let percent: number = 0;

async function getPrice(){
    await axios.get(url1).then(aa=> {
    const price = aa.data.result.price
    num1=price;
    console.log(`FTX BTC Price: ${num1} USDT`);   
    });

    await axios.get(url2).then(bb => {
        const price2  = bb.data.price
        num2=price2;
        console.log(`Binance BTC Price: ${num2} USDT`);
    });

    sum= Math.abs(num1-num2); 
    percent= Math.abs((sum/num1)*100);
    console.log(`Diff: ${sum} USDT (${percent} %)`)
}

getPrice()
