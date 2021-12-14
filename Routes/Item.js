import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

export const Item = {
    props:[`items`,`cart`], //это переданный нам массив объектов items.
                     // Здесь к нему можно обращаться this.items
    template:` 
        <div class="item-whole-container">
        
            <div class="item-all-images-container">
            
              <div class="item-all-SmallImages-box">
                    
                  <div v-for="(pic,i) in item?.media?.images" class="item-box-for-small-image">
                      <img :src="pic.image160pxUrl" 
                           alt="160" 
                           :data="i" 
                           @click="dynamicBigImage(i)" 
                           class="item-images-smallImage">
                  </div>

              </div>                
            
              <div class="item-box-for-big-image">
                   <img :src="dynamicBigImage() || setBigImage" 
                   alt="800px-image-of-Cloth" 
                   id="big-image" 
                   class="item-images-bigImage">
              </div>

              <div class="item-mobile-swiper swiper" ref="carousel">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                  <!-- Slides -->
                  <div v-for="(pic) in item?.media?.images" class="swiper-slide">
                    <img :src="pic.image800pxUrl"
                         alt="800">
                  </div>

                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>

                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                <!-- If we need scrollbar -->
                <!-- <div class="swiper-scrollbar"></div>-->
              </div>

            </div> 
            
            <div class="item-infoAndOrder-box">
                <h2 class="item-text-name">{{item?.name?.slice(8)}}</h2>
                <p class="item-text-code">Код товара: {{item.id}}</p>
                <p v-html="changeName(item.description)" class="item-text-fullDecription"></p>
                <h3 class="item-text-price">Цена: {{item.defaultDisplayedPriceFormatted}}</h3>
                
                <div class="item-selectors-plus-buttons">
                <h3 class="item-text-availableSizes">Доступные размеры:</h3>
                    <fieldset class="item-selectors-fieldset">
                        <div v-for="(size,i) in item.options[0].choices" class="item-selector-and-label">
                            <label :for="size.text" class="item-selector-label">{{ size.text }}</label>
                            <select style="margin:10px" :id="size.text" :name="size.text">
                                <option v-for="i in 11" :value="i-1" class="item-size-amount-selector">{{ i-1 }}</option>
                            </select>
                        </div>
                    </fieldset>
                    <div v-if="!ordered" 
                         @click="cart.addToCart(item, orderedSizes()),
                                 cart.saveToLS(),
                                 ordered=true,
                                 clearFlags()" 
                         class="item-addToCart-button">
                         Добавить в корзину
                    </div>
                    <router-link to="/cart">
                         <div v-if="ordered" class="item-goToCart-button">В корзине >></div>
                    </router-link>   
                </div> 
                <br>
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
            ordered:false,
            setBigImage:`${this.selectItem().media?.images[0]?.image800pxUrl}`
        }
    },
    created(){
    },
    methods:{
        init() {
            const options = {
                pagination: {
                    el: '.swiper-pagination'
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
            const carousel = new Swiper(this.$refs.carousel, options)
        },
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
        },
            //заменить слово SurfRide на Clothery
        changeName(smth){
            if(typeof(smth) === 'string')
            return smth.replace('SurfRide','Clothery')
        }
    },
    mounted(){
        console.log(this.$route.params, '= this route params')

        this.$nextTick(() => { //что такое НекстТик ?
            this.init()
        });
        let preSelect= document.querySelector('select');
        if(preSelect){preSelect.selectedIndex = 1}

        this.item.media.images.forEach(el => {
            console.log(el.image800pxUrl)
        })
    },
    computed:{
        //карточка товара - находим через функцию
        item(){
            return this.selectItem()
        },
    }
}