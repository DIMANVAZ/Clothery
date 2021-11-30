export const CartRoute = {
    props:['items',`cart`],
    template:`
                <div >
                <h2>Корзина 
                    <span v-if="this.cart.totalItems() > 0">: всего товаров {{this.cart.totalItems()}} на сумму {{this.cart.totalPrice()}} руб</span>
                    <span v-if="this.cart.totalItems() === 0">пуста... </span>
                </h2>
                <div v-if="this.cart.totalItems() > 0">
                     <div v-for="(position,i) in this.cart.cartBox" class="table row-container">
                        <div class="table pic_and_name_container">
                                <router-link :to="'/item/' + position.item.id">
                            <div class="table pic_and_name"> {{position?.item.name.slice(9)}} <br>
                                <img :src="position.item?.media?.images[0].image160pxUrl" alt="160">
                            </div>
                                </router-link>
                        </div>
                        <div class="table info_container">
                            <div class="table pcs_and_size">Кол-во: {{ Object.values(position)[1] }} </div>
                            <div class>Размер: {{ Object.keys(position)[1] }}</div>    
                            <div class="table price_per_position">На сумму {{ Object.values(position)[1] * position.item.price }} р</div>
                            <div class="table delete-item-x" :data="i" @click="this.cart.removeOneLine(i),this.cart.saveToLS()"> X </div>
                        </div>
                    </div>
                </div>

                <button v-if="this.cart.totalItems() > 0" id="orderRequestButton" @click="this.showDialog(),this.cart.clearLS()">Оформить заказ</button>
                
                <dialog style="border-color:red">Поздравляем с покупкой! <br> Ваш промокод: {{this.cart.promoCodeGen()}}
                    <p>Закрыть</p>
                </dialog>
                </div>`,
    methods:{
        showDialog(){
            document.querySelector('dialog').setAttribute('open','')
        },
        sizesSum(elem){
            return Object.values(elem.ordered).reduce((start, item) => {
                return start + item
            })
        }
    }
}