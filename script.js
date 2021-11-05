import {Cart} from "./Cart.js"
let itemsBox = document.querySelector('.items');
const cart = new Cart();

let storeId = 58958138;
let token = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD';
let requestURL = 'https://app.ecwid.com/api/v3/'+storeId+'/products?limit=3&token='+token;

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
}).mount('#app');

document.querySelectorAll('.nav-icon').forEach(htmlEl => {
    console.log(htmlEl.width)
})

fetch(requestURL).then(resp => resp.json()).then(jsoned => console.log(jsoned))


