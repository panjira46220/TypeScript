import axios from 'axios';
// const response = fetch('https://api1.binance.com/api/v3/klines?interval=1h&symbol=BTCUSDT');
// console.log(response);
//import dayjs from "dayjs";
import * as dayjs from 'dayjs';

const url = 'https://api1.binance.com/api/v3/klines?interval=1h&symbol=BTCUSDT';

axios.get(url).then(response =>{
  // console.log(response.data[0]);
  const clt = response.data;
  const object = {};
  clt.map((item : any)=>{
    //console.log(item);
    const newobject ={
      open :item[1],
      hight : item[2],
      low : item[3],
      close : item[4]
    };
    const formatdate = dayjs(item[0]).format("YYYY-MM-DD h:mm:ss");
    Object.assign(object,{[formatdate]:newobject});
  });
  console.log(object);
  
});