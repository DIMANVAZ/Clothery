export const CartRoute = {
    props:['items',`cart`],
    template:`
                <div >
                <h2>Корзина: всего товаров {{this.cart.totalItems()}} на сумму {{this.cart.totalPrice()}} руб</h2>
                <table v-if="this.cart.totalItems() > 0">
                    <caption>Товары в вашей корзине</caption>
                    <tr>
                        <th class="table position">Позиция</th>
                        <th class="table size_pcs">Размер : штук</th>
                        <th class="table price_per_1">Цена за шт</th>
                        <th class="table price_per_position">Сумма по позиции</th>
                    </tr>
                    <tr v-for="elem in this.cart.cartBox">
                        <td class="table position">
                            {{elem.position.name.slice(9)}} <br>
                            <img :src="elem.position?.media?.images[0].image160pxUrl" alt="">
                        </td>
                        <td class="table size_pcs">
                            <div v-for="size in Object.keys(elem.ordered)">{{size}} : {{elem.ordered[size]}}</div>
                        </td>
                        <td class="table price_per_1">
                            {{elem.position.price}} ₽
                        </td>
                        <td class="table price_per_position">
                            {{this.sizesSum(elem) * elem.position.price}} ₽
                        </td>
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