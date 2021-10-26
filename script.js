//let items = [];
let itemsBox = document.querySelector('.items')

let storeId = 58958138;
let token = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD';
let requestURL = 'https://app.ecwid.com/api/v3/'+storeId+'/products?limit=3&token='+token;

let u2 = 'https://app.ecwid.com/api/v3/58958138/products?limit=3&token=public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'


const app = Vue.createApp({
    data(){
        return{
            items:[],
        }
    },
    created(){
        this.getItems()
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
        }
    },
    computed:{

    }
}).mount('#app');

fetch(u2).then(resp => resp.json()).then(jsoned => console.log(jsoned))


