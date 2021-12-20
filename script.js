import {Cart} from "./Classes/Cart.js"
const cart = new Cart();

import {getAPIdata} from "./Classes/GetRemoteData.js";
import {Home} from "./Routes/Home.js";
import {About} from "./Routes/About.js";
import {CartRoute} from "./Routes/CartRoute.js";
import {Collections} from "./Routes/Collections.js";
import {Contacts} from "./Routes/Contacts.js";
import {Item} from "./Routes/Item.js";
// import {Carousel} from './Routes/Carousel.js'


const routes = [
    { path: '/', name:'Home', component: Home },
    { path: '/about', name:'About',component: About },
    { path: '/cart', name:'CartRoute',component: CartRoute},
    { path: '/collections', name:'Collections',component: Collections },
    { path: '/contacts', name:'Contacts',component: Contacts },
    { path: '/item/:xxx', name:"Item",component: Item },
    // { path: '/carousel', name: 'Carousel', component: Carousel }

];
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = Vue.createApp({
    data(){
        return{
            items:[],
            cart:cart,
        }
    },
    created(){
        this.fetcher();

    },
    methods:{
        getMainColor(item){
            let {red,green,blue,alpha} = item.borderInfo.dominatingColor;
            item.mainColor = `rgba(${red},${green},${blue},${alpha})`; //преобладающий цвет на фото
            return item.mainColor
        },

        async fetcher(){//---импорт сырого фетчА и его приготовление------
            try{
                let respObject = await getAPIdata().then(response => response.json());
                this.items = respObject.items;
            } catch(e){ console.error(`Error from App.vue/created(): `,e)}
        },

    },
    computed:{
    },
    mounted(){
    },
    watch:{
    }
})
      app.use(router);
      app.mount('#app');

 //---------- эта штука показывает эвент-таргеты---------------------

document.onclick = function(){
    //console.log(event.target)

}








