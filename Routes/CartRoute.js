export const CartRoute = {
    props:['items',`cart`],
    template:`
                <div >
                <h2>Корзина: всего товаров {{this.cart.showAllItems()}}</h2>
                <button v-if="this.cart.totalItems() > 0" id="orderRequestButton" @click="this.showDialog()">Оформить заказ</button>
                <dialog>Поздравляем с покупкой! <br> Ваш промокод: {{this.cart.promoCodeGen()}}</dialog>
                </div>`,
    methods:{
        showDialog(){
            document.querySelector('dialog').setAttribute('open','')
        }
    }
}