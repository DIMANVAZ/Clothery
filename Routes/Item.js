export const Item = {
    props:[`items`,`cart`], //это переданный нам массив объектов items.
                     // Здесь к нему можно обращаться this.items
    template:` 
            <h2>{{item.name.slice(8)}}</h2>
            <h3>Код товара: {{item.id}}</h3>
            <p>Цена:{{item.defaultDisplayedPriceFormatted}}</p>
            <p v-html="item.description"></p>

            Доступные размеры:
            <fieldset class="item checkboxes-fieldset">
                <div v-for="(size,i) in item.options[0].choices" class="item checkboxAndLabel">
                    <input type="checkbox" :id="size.text" :name="size.text" :value="size.text" class="item size-checkbox">
                    <label for="size" class="item checkbox-label">{{ size.text }}</label>
                </div>
            </fieldset>
 
            <button @click="cart.addToCart(item, this.checkBoxToCart())" class="item-cart-button">Добавить в корзину</button>
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
        //выбираем карточку товара из массива, ищем через id в роуте-парамс
        selectItem(){
            let match = {}
            this.items.forEach(item => {
                if(item.id === parseInt(this.$route.params.xxx)) {
                    match = item;
                }
            });
            return match;
        },
        //работа с выбранными чекбоксами
        checkBoxToCart(){
            let ordered = {}
            let checkedSizes = document.querySelectorAll('.size-checkbox');
            checkedSizes.forEach(el => { //el здесь это html тег с атрибутами
                el.checked ? ordered[el.id] = 1 : '';
            })
            //console.log('chckbx called')
            return ordered //массив вида {S:1,M:0,L:1}
        }
    },
    mounted(){
        this.dataParams += this.$route.params.id;
            console.log(this.$route.params) // {"id": "344134464"} сформированный в Collection через :to = item/item.id

    },
    computed:{
        //карточка товара - находим через функцию
        item(){
            return this.selectItem()
        },
    }
}