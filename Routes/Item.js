export const Item = {
    props:[`items`,`cart`], //это переданный нам массив объектов items.
                     // Здесь к нему можно обращаться this.items
    template:` 
            <h2 class="item-text-elem">{{item.name?.slice(8)}}</h2>
            <h3 class="item-text-elem">Код товара: {{item.id}}</h3>
            <p class="item-text-elem">Цена: {{item.defaultDisplayedPriceFormatted}} р</p>
            <p v-html="item.description" class="item-full-description item-text-elem"></p>

            <h3 class="item-text-elem">Доступные размеры:</h3>
            <fieldset class="item checkboxes-fieldset">
                <div v-for="(size,i) in item.options[0].choices" class="item checkboxAndLabel">
                    <label :for="size.text" class="item checkbox-label">{{ size.text }}</label>
                    <select style="margin:10px" :id="size.text" :name="size.text">
                        <option v-for="i in 11" :value="i-1" class="item size-amount-selector">{{ i-1 }}</option>
                    </select>
                </div>
            </fieldset>
            <div v-if="!ordered" 
                 @click="cart.addToCart(item, orderedSizes()),
                         cart.saveToLS(),
                         ordered=true,
                         clearFlags()" 
                 class="item-addToCart-button item-text-elem">
                 Добавить в корзину
            </div>
                
            <router-link to="/cart">
                 <div v-if="ordered" class="item-goToCart-button">В корзине >></div>
            </router-link>    
            <br>
            
            <div class="item all-images-container">
              <img :src="dynamicBigImage() || setBigImage" 
                   alt="800px-image-of-Cloth" 
                   id="big-image" 
                   style="max-width:100%;padding:5px">
                   
              <div v-for="(pic,i) in item?.media?.images" >
                  <img :src="pic.image160pxUrl" 
                       alt="160" 
                       :data="i" 
                       @click="dynamicBigImage(i)" 
                       style="border:1px solid var(--mob-R);padding:5px;margin:0 5px;">
              </div>
            </div>
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
            let selects = document.querySelectorAll('select')
            console.log(`selectorAll  = `,selects)
            selects.forEach(el =>{ //чтобы нули не улетали в корзину
                if(el.value !== '0'){
                    ordered[el.id] = +el.value;
                }
            })
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
            //сбросить значения флагов или селектора
        clearFlags(){
            let selects = document.querySelectorAll('select')
            selects.forEach(el =>{
                el.value = '0'
            })
        }
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