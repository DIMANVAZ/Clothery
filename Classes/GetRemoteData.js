let storeId = 58958138;
let token = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD';
let requestURL = 'https://app.ecwid.com/api/v3/'+storeId+'/products?&token='+token;
let OLDrequestURL = 'https://app.ecwid.com/api/v3/'+storeId+'/products?limit=3&token='+token;

//---если хотим из-под НОДЫ---(в браузере и так есть)----
//const fetch = require('node-fetch');

//--экспорт сырого фетчА
export async function getAPIdata(){
    return fetch(requestURL);
}


