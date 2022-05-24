// import axios from "axios";
// import *as dayjs from "dayjs";

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
import axios from "axios";
let getData : object = {};
let setData : object = {};
const url ='https://api1.binance.com/api/v3/klines?interval=1h&symbol=BTCUSDT';

axios.get(url).then(response =>{
 
  const candlestick = response.data;
  for( let item of candlestick){
    setData = {
       "open" : item[1],
       "highn" : item[2],
       "low" : item[3],
       "close" : item[4],
     
    };
    let openTime =new Date(item[0]);
    let dateTime = openTime.getFullYear() + '-' +('0' + (openTime.getMonth()+1)).slice(-2)+ '-' +  ('0' + openTime.getDate()).slice(-2) + ' '+openTime.getHours()+ ':'+('0' + (openTime.getMinutes())).slice(-2)+ ':'+openTime.getSeconds();
    // console.log(dateTime);
     
    Object.assign(getData,{[dateTime]:setData});
  }
  console.log(getData);
 
  
});