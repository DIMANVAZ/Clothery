export const CartRoute = {
    props:['items',`cart`],
    template:`
                <div class="CartRoute-main-container" >
                <h2>Корзина 
                    <span v-if="this.cart.totalItems() > 0">: всего товаров {{this.cart.totalItems()}} на сумму {{this.cart.totalPrice()}} руб</span>
                    <span v-if="this.cart.totalItems() === 0">пуста...</span>
                </h2>
                <div v-if="this.cart.totalItems() > 0" class="CartRoute-allRows-container">
                     <div v-for="(position,i) in this.cart.cartBox" class="CartRoute whole-row-container">
                        <div class="row pic_and_name_container">
                                <router-link :to="'/item/' + position.item.id">
                            <div class="row pic_and_name"> {{position?.item.name?.slice(9)}} <br>
                                <img :src="position.item?.media?.images[0].image160pxUrl" alt="160">
                            </div>
                                </router-link>
                        </div>
                        <div class="row info_container">
                            <div class="row pcs_and_size">Кол-во: {{ Object.values(position)[1] }} </div>
                                <select style="margin:10px" :id="Object.keys(position)[1]" :name="Object.keys(position)[1]">
                                    <option v-for="i in 11" :value="Object.values(position)[1]" class="item size-amount-selector">{{ Object.values(position)[1] }}</option>
                                </select>
                            <div class>Размер: {{ Object.keys(position)[1] }}</div>    
                            <div class="row price_per_position">На сумму {{ Object.values(position)[1] * position.item.price }} р</div>
                            <div class="row delete-item-x" :data="i" @click="this.cart.removeOneLine(i),this.cart.saveToLS()"> X </div>
                        </div>
                    </div>
                </div>


                <div class="item-goToCart-button" 
                     v-if="this.cart.totalItems() > 0" 
                     id="orderRequestButton" 
                     @click="this.showDialog(),this.cart.clearLS()">Оформить заказ</div>
                
                <dialog>Поздравляем с покупкой! <br> 
                        Ваш промокод: {{this.cart.promoCodeGen()}} <br>
                            <router-link to="/">
                        <p class="delete-item-x" @click="this.hideDialog(),this.cart.cartBox=[]">Закрыть</p>
                            </router-link>
                </dialog>
                </div>`,
    methods:{
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
        }
    }
}