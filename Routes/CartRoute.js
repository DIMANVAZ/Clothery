export const CartRoute = {
    props:['items',`cart`],
    template:`
                <div >
                <h2>Корзина 
                    <span v-if="this.cart.totalItems() > 0">: всего товаров {{this.cart.totalItems()}} на сумму {{this.cart.totalPrice()}} руб</span>
                    <span v-if="this.cart.totalItems() === 0">пуста... </span>
                </h2>
                <div v-if="this.cart.totalItems() > 0">
                     <tr v-for="(position,i) in this.cart.cartBox">
                                <router-link :to="'/item/' + position.item.id">
                            <td > {{position?.item.name.slice(9)}} <br>
                                <img :src="position.item?.media?.images[0].image160pxUrl" alt="160">
                            </td>
                                </router-link>
                            <td class="table size">{{ Object.keys(position)[1] }}</td>
                            <td class="table pcs">{{ Object.values(position)[1] }}</td>
                            <td class="table price_per_position">{{ Object.values(position)[1] * position.item.price }}</td>
                            <td class="table delete-item-x" :data="i" @click="this.cart.removeOneLine(i),this.cart.saveToLS()"> X </td>
                    </tr>
                </div>
                
                
                
                <table v-if="this.cart.totalItems() > 0">
                    <caption></caption>
                    <tr>
                        <th class="table position">Товар</th>
                        <th class="table size">Размер</th>
                        <th class="table pcs">Штук</th>
                        <th class="table price_per_position">Сумма</th>
                        <th class="table delete-item">Удалить</th>
                    </tr>
                    <tr v-for="(position,i) in this.cart.cartBox">
                                <router-link :to="'/item/' + position.item.id">
                            <td > {{position?.item.name.slice(9)}} <br>
                                <img :src="position.item?.media?.images[0].image160pxUrl" alt="160">
                            </td>
                                </router-link>
                            <td class="table size">{{ Object.keys(position)[1] }}</td>
                            <td class="table pcs">{{ Object.values(position)[1] }}</td>
                            <td class="table price_per_position">{{ Object.values(position)[1] * position.item.price }}</td>
                            <td class="table delete-item-x" :data="i" @click="this.cart.removeOneLine(i),this.cart.saveToLS()"> X </td>
                    </tr>
                </table>
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