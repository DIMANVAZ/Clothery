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
            <div v-if="!this.ordered" 
                 @click="cart.addToCart(item, this.orderedSizes()),this.cart.saveToLS(),this.ordered=true" 
                 class="item-addToCart-button">
                 Добавить в корзину
            </div>
                
            <router-link to="/cart">
                 <div v-if="this.ordered" class="item-goToCart-button">В корзине >></div>
            </router-link>
                
            <br>
              --------------- все изображения (в px это высота) -------<br>
              <div style="display:flex">
                <img :src="this.dynamicBigImage() || this.setBigImage" alt="800px-image-of-Cloth" class="big-image" id="big-image">
                <div v-for="(pic,i) in item?.media?.images" >
                    <img :src="pic.image160pxUrl" alt="160" :data="i" @click="this.dynamicBigImage(i)">
                </div>
              </div>
              ---------------------------------------------------------------------------<br>
<!--            1) 160px
            <div v-for="(pic,i) in item?.media?.images" >
                <img :src="pic.image160pxUrl" alt="160" style="border:1px solid var(&#45;&#45;divide-line)">
            </div>
            2) 400px
            <div v-for="(pic,i) in item?.media?.images" >
                <img :src="pic.image400pxUrl" alt="400" style="border:1px solid var(&#45;&#45;divide-line)">
            </div>
            3) 800px
            <div v-for="(pic,i) in item?.media?.images" >
                <img :src="pic.image800pxUrl" alt="800px" style="border:1px solid var(&#45;&#45;divide-line)">
            </div>
            4) 1500px
            <div v-for="(pic,i) in item?.media?.images" >
                <img :src="pic.image1500pxUrl" alt="1500px" style="border:1px solid var(&#45;&#45;divide-line)">
            </div>
            4) orig
            <div v-for="(pic,i) in item?.media?.images" >
                <img :src="pic.imageOriginalUrl" alt="medium Product Photo" style="border:1px solid var(&#45;&#45;divide-line)">
            </div>-->
              `,
    data(){
        return{
            dataParams:'initially Empty => ',
            ordered:false,
            setBigImage:`${this.selectItem().media?.images[0]?.image800pxUrl}`
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
        orderedSizes(){
            let ordered = {}
            let checkedSizes = document.querySelectorAll('.size-checkbox');
            checkedSizes.forEach(el => { //el здесь это html тег с атрибутами
                el.checked ? ordered[el.id] = 1 : '';
            })
            //console.log('chckbx called')
            return ordered //массив вида {S:1,M:0,L:1}
        },
            //назначение большого рисунка
        dynamicBigImage(i=0){
            let BI = document.getElementById("big-image");
            if(BI){
                console.log(`BI.src = ${this.item?.media?.images[i]?.image800pxUrl}`)
                BI.src = `${this.item?.media?.images[i]?.image800pxUrl}`
            } else return `${this.item?.media?.images[i]?.image800pxUrl}`
        },
    },
    mounted(){
        let toCheck = document.querySelector('.size-checkbox');
        if(toCheck){toCheck.checked = true}

        this.dataParams += this.$route.params.id;
            //console.log(this.$route.params) // {"id": "344134464"} сформированный в Collection через :to = item/item.id

    },
    computed:{
        //карточка товара - находим через функцию
        item(){
            return this.selectItem()
        },
    }
}