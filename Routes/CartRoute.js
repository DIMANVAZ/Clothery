export const CartRoute = {
    props:['items',`cart`],
    template:`
                <div >
                <h2>Корзина: всего товаров {{this.cart.totalItems()}}</h2>
                <table v-if="this.cart.totalItems() > 0">
                    <caption>Товары в вашей корзине</caption>
                    <tr>
                        <th>Позиция</th>
                        <th>Размер</th>
                        <th>Штук</th>
                        <th>На сумму</th>
                    </tr>
                    <tr v-for="item in this.cart.cartBox">
                        <td>{{item.name}} </td>
                        <!--<img :src="item?.media?.images[0].image160pxUrl" alt="">-->
                        <td>Размер</td>
                        <td>{{item.count}}</td>
                        <td>{{item.price}}</td>
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
        }
    }
}