import {Cart} from "./Cart.js"
let itemsBox = document.querySelector('.items');
const cart = new Cart();

let storeId = 58958138;
let token = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD';
let requestURL = 'https://app.ecwid.com/api/v3/'+storeId+'/products?limit=3&token='+token;

            import {Home} from "./Home.js"
            import {About} from "./About.js"
            import {CartRoute} from "./CartRoute.js";
const Collections = {template: '<div>Collections</div>'};
const Contacts = {template: '<div>Contacts</div>'};

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/cart', component: CartRoute},
    { path: '/collections', component: Collections },
    { path: '/contacts', component: Contacts },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = Vue.createApp({
    data(){
        return{
            items:[],
            cart:cart
        }
    },
    created(){
        this.getItems();
    },
    methods:{
        getItems(){
            fetch(requestURL)
                .then(response => response.json())
                .then(json => this.items = json.items)
        },
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


fetch(requestURL).then(resp => resp.json()).then(jsoned => console.log(jsoned))


