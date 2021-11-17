import {Cart} from "./Classes/Cart.js"
let itemsBox = document.querySelector('.items');
const cart = new Cart();

//---импорт сырого фетчА и его приготовление------
import {getAPIdata} from "./Classes/GetRemoteData.js";
let apiRespObj = {items:[]};
try{    //------------перенести это в created(), прочитать про created!
    apiRespObj = await getAPIdata().then(response => response.json())
} catch(e){ console.error(`Error from script.js: `,e)}


            import {Home} from "./Routes/Home.js"
            import {About} from "./Routes/About.js"
            import {CartRoute} from "./Routes/CartRoute.js";
            import {Collections} from "./Routes/Collections.js";
            import {Contacts} from "./Routes/Contacts.js";
            import {Item} from "./Routes/Item.js";

// console.log('fd',apiRespObj)

const routes = [
    { path: '/', name:'Home', component: Home },
    { path: '/about', name:'About',component: About },
    { path: '/cart', name:'CartRoute',component: CartRoute},
    { path: '/collections', name:'Collections',component: Collections },
    { path: '/contacts', name:'Contacts',component: Contacts },
    { path: '/item/:xxx', name:"Item",component: Item },
];
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = Vue.createApp({
    data(){
        return{
            items:apiRespObj.items,
            cart:cart
        }
    },
    created(){

    },
    methods:{
        getMainColor(item){
            let {red,green,blue,alpha} = item.borderInfo.dominatingColor;
            item.mainColor = `rgba(${red},${green},${blue},${alpha})`; //преобладающий цвет на фото
            return item.mainColor
        },
    },
    computed:{
    },
})
      app.use(router);
      app.mount('#app');

document.onclick = function(){
    console.log(event.target)
}




