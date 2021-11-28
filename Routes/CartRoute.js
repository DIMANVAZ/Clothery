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
                    <tr v-for="i in this.cart.adapter()">
<!--                            <td class="table position">
                                {{ elem.position.name.slice(9) }} <br>
                                <img :src="elem.position?.media?.images[0].image160pxUrl" alt=""> 
                            </td>
                            <td class="table size">{{ size }}</td>
                            <td class="table pcs">{{ elem.ordered[size] }}</td>
                            <td class="table price_per_position">{{ this.sizesSum(elem) * elem.position.price }}</td>-->
                            <td > {{i?.item}} </td>
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