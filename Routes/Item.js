import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'
import {getAPIdata} from "../Classes/GetRemoteData.js";

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
                        <div v-for="(size,i) in item.options[0]?.choices" class="item-selector-and-label">
                            <label :for="size.text" class="item-selector-label">{{ size.text }}</label>
                            <select :id="size.text" :name="size.text">
                                <option v-for="i in 11" :value="i-1" class="item-size-amount-selector">{{ i-1 }}</option>
                            </select>
                        </div>
                      <div v-if="!item.options[0]?.choices && item.name.slice(9) === 'Солнечные очки'" 
                           class="item-selector-and-label only-for-glasses">
                            <label for="One-Size" class="item-selector-label"> One-Size </label>
                            <select id="One-Size" name="One-Size">
                              <option v-for="i in 11" :value="i-1" class="item-size-amount-selector">{{ i-1 }}</option>
                            </select>
                      </div>
                      
                    </fieldset>
                    <div 
                         
                         @click="cart.addToCart(orderedList()),
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
              `,
    data(){
        return{
            item:{},
            ordered:false,
            setBigImage:''
        }
    },
    created(){
        this.giveMetTrueItem();
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

        //выбираем карточку товара из массива, ищем через id в роуте-парамс ЛИБО костылим, если к нам идут по прямой ссылке
        async giveMetTrueItem(){
            if(this.items.length > 0){
                this.item = this.items.find(el => el.id  === +this.$route.params.xxx)
                this.setBigImage = `${this.item?.media?.images[0]?.image800pxUrl}`
            }
            else{
                const idParam = +window.location?.hash?.slice(7) || 0;
                let respObj = await getAPIdata().then(response => response.json());
                this.item = respObj.items.find(item => item.id === +idParam)
                this.setBigImage = `${this.item?.media?.images[0]?.image800pxUrl}`
            }
        },
            //работа с выбранными чекбоксами - а если размеров нет? как у очков
        orderedList(){
            let orderedList = []
            let selects = document.querySelectorAll('select')

            selects.forEach(el =>{ //чтобы нули не улетали в корзину
                if(el.value !== '0'){
                    orderedList.push(
                        {item:this.item,
                         size:el.id,
                       amount:+el.value}
                    )
                }
            })

            return orderedList //массив вида [{item:{},size:S,amount:1}, {item:{},size:M,amount:3}]
        },
            //назначение большого рисунка
        dynamicBigImage(i=0){
            let BI = document.getElementById("big-image");
            if(BI){

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

        this.$nextTick(() => {
            this.init()
        });
        let preSelect= document.querySelector('select');
        if(preSelect){preSelect.selectedIndex = 1}

    },
    computed:{
    }
}