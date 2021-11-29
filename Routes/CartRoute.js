export const CartRoute = {
    props:['items',`cart`],
    template:`
                <div >
                <h2>Корзина: всего товаров {{this.cart.totalItems()}} на сумму {{this.cart.totalPrice()}} руб</h2>
                <table v-if="this.cart.totalItems() > 0">
                    <caption>Товары в вашей корзине</caption>
                    <tr>
                        <th class="table position">Товар</th>
                        <th class="table size">Размер</th>
                        <th class="table pcs">Штук</th>
                        <th class="table price_per_position">Сумма</th>
                        <th class="table delete-item">Удалить</th>
                    </tr>
                    <tr v-for="i in this.cart.cartBox">
                            <td > {{i?.item.name.slice(9)}} <br>
                                <img :src="i.item?.media?.images[0].image160pxUrl" alt="160">
                            </td>
                            <td class="table size">{{ Object.keys(i)[1] }}</td>
                            <td class="table pcs">{{ Object.values(i)[1] }}</td>
                            <td class="table price_per_position">{{ Object.values(i)[1] * i.item.price }}</td>
                            <td class="table delete-item"> X </td>
                    </tr>
                </table>
                <button v-if="this.cart.totalItems() > 0" id="orderRequestButton" @click="this.showDialog()">Оформить заказ</button>
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