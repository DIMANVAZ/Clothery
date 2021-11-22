export const Item = {
    props:[`items`,`cart`], //это переданный нам массив объектов items.
                     // Здесь к нему можно обращаться this.items
    template:` 
            <h2>{{item.name.slice(8)}}</h2>
            <h3>Код товара: {{item.id}}</h3>
            <p>Цена:{{item.defaultDisplayedPriceFormatted}}</p>
            <p v-html="item.description"></p>

            Доступные размеры:
            <div v-for="(size,i) in item.options[0].choices">
                <input type="checkbox" :id="size.text" :name="size.text" :value="size.text" class="size-checkbox">
                <label for="size">{{ size.text }}</label>
            </div>
 
            <button @click="cart.addToCart({name:item.name.slice(8), price:item?.price}), this.checkBoxToCart()" class="item-cart-button">Добавить в корзину</button>
            <br>
              --------------- все изображения (в px это высота) -------<br>

            1) 160px
            <div v-for="(pic,i) in item?.media?.images" >
                <img :src="pic.image160pxUrl" alt="160" style="border:1px solid var(--divide-line)">
            </div>
           
            2) 400px
            <div v-for="(pic,i) in item?.media?.images" >
                <img :src="pic.image400pxUrl" alt="400" style="border:1px solid var(--divide-line)">
            </div>
            
            3) 800px
            <div v-for="(pic,i) in item?.media?.images" >
                <img :src="pic.image800pxUrl" alt="800px" style="border:1px solid var(--divide-line)">
            </div>
            
            4) 1500px
            <div v-for="(pic,i) in item?.media?.images" >
                <img :src="pic.image1500pxUrl" alt="1500px" style="border:1px solid var(--divide-line)">
            </div>
            
            4) orig
            <div v-for="(pic,i) in item?.media?.images" >
                <img :src="pic.imageOriginalUrl" alt="medium Product Photo" style="border:1px solid var(--divide-line)">
            </div>
              `,
    data(){
        return{
            dataParams:'initially Empty => ',
        }
    },
    created(){
    },
    methods:{
        selectItem(){
            let match = {}
            this.items.forEach(item => {
                if(item.id === parseInt(this.$route.params.xxx)) {
                    match = item;
                }
            });
            return match;
        },
        checkBoxToCart(){
            let checkedSizes = document.querySelectorAll('.size-checkbox');
            console.log(checkedSizes)
            //надо выбрать только галочкой отмеченные...
        }
    },
    mounted(){
        this.dataParams += this.$route.params.id;
            console.log(this.$route.params) // {"id": "344134464"} сформированный в Collection через :to = item/item.id

    },
    computed:{
        item(){
            return this.selectItem()
        },
    }
}