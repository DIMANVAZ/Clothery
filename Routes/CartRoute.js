export const CartRoute = {
    props:['items',`cart`],
    template:`
                <div class="CartRoute-main-container" >
                <h4 class="CartRoute-header-info">Корзина 
                    <span v-if="totalItems > 0">: всего товаров {{cart.totalItems()}} на сумму {{cart.totalPrice()}} руб</span>
                    <span v-if="cart.totalItems() === 0">пуста...</span>
                </h4>
                <div v-if="cart.totalItems() > 0" class="CartRoute-allRows-container">
                     <div v-for="(position,i) in cart.cartBox" class="CartRoute whole-row-container">
                        <div class="row pic-name-container">
                                <router-link :to="'/item/' + position.item.id">
                            <div class=""> {{position?.item.name?.slice(9)}} <br>
                                <img :src="position.item?.media?.images[0].image160pxUrl" alt="160">
                            </div>
                                </router-link>
                        </div>
                        <div class="row-info-container">
                                Кол-во: 
                                <select class="row-info-container-select" 
                                :id="size(position)" 
                                :name="size(position)" 
                                :selectedIndex="amount(position)-1"
                                @change="refresher(position)">
                                    <option v-for="i in amount(position)+5" 
                                            :value="i"
                                            class="item size-amount-selector" >{{ i }}</option>
                                </select>
                            <div class>Размер: {{ size(position) }}</div>    
                            <div class="">На сумму {{ amount(position) * position.item.price }} р</div>
                            <div class="row-delete-item-x" :data="i" @click="cart.removeOneLine(i),cart.saveToLS()"> X </div>
                        </div>
                    </div>
                </div>

                <div class="CartRoute-order-button" 
                     v-if="cart.totalItems() > 0" 
                     id="orderRequestButton" 
                     @click="showDialog(),cart.clearLS()">Оформить заказ</div>
                
                <dialog>Поздравляем с покупкой! <br> 
                       <p v-if="cart.totalPrice() >= 15000">Ваш промокод на скидку в 15%: {{cart.promoCodeGen(15)}}</p> <br>
                       <p v-if="cart.totalPrice() >= 10000 && cart.totalPrice() < 15000">Ваш промокод на скидку в 10%: {{cart.promoCodeGen(10)}}</p> <br>
                            <router-link to="/">
                        <p class="close-dialog-red-x" @click="hideDialog(),cart.cartBox=[]">Закрыть</p>
                            </router-link>
                </dialog>
                </div>`,
    methods:{
        size(position){
            return Object.keys(position)[1];
        },
        amount(position){
            return Object.values(position)[1];
        },
        showDialog(){
            let dialog = document.querySelector('dialog');
            //dialog.show();
            dialog.showModal();
        },
        hideDialog(){
            let dialog = document.querySelector('dialog');
            dialog.close();
        },
        sizesSum(elem){
            return Object.values(elem.ordered).reduce((start, item) => {
                return start + item
            })
        },
        refresher(position){
            position[this.size(position)] = +event.target.value
        }
    },
    data(){
        return {}
    },
    computed:{
        totalItems(){
            //чисто как альтернатива cart.totalItems() - см. span v-if, строки ~6-7
            return this.cart.totalItems()
        }
    }
}