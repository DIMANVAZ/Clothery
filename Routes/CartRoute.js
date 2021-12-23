// рефакторить КартРОУТ - чтобы выводило по размерам + рефекторить Карт, чтобы удаляло по размеру
// массив cart = [{item:{},size:S,amount:1}},{item:{},size:M,amount:4}} ]
export const CartRoute = {
    props:['items',`cart`],
    template:`
      <div class="CartRoute-main-container">
      <h4 class="CartRoute-header-info">Корзина
        <span v-if="totalItems > 0">: всего товаров {{ cart.totalItems() }} на сумму {{ cart.totalPrice() }} руб</span>
        <span v-if="cart.totalItems() === 0">пуста...</span>
      </h4>
      <div v-if="cart.totalItems() > 0" class="CartRoute-allRows-container">

        <div v-for="(position,i) in cart.cartBox" class="CartRoute whole-row-container">
          <div class="row pic-name-container">
            <router-link :to="'/item/' + position.item.id">
              <div class=""> {{ position?.item.name?.slice(9) }} <br>
                <img :src="position.item?.media?.images[0].image160pxUrl" alt="160">
              </div>
            </router-link>
          </div>
          <div class="row-info-container">
            Кол-во:
            <select class="row-info-container-select"
                    :id="position.size"
                    :name="position.size"
                    :selectedIndex="position.amount - 1"
                    @change="refresh(position)">
              <option v-for="i in position.amount + 5"
                      :value="i"
                      class="item size-amount-selector">{{ i }}
              </option>
            </select>
            <div class>Размер: {{ position.size }}</div>
            <div class="">На сумму {{ position.amount * position.item.price }} р</div>
            <div class="row-delete-item-x" :data="i" @click="cart.removeOneLine(i),cart.saveToLS()"> X</div>
          </div>
        </div>
      </div>

      <div class="CartRoute-order-button"
           v-if="cart.totalItems() > 0"
           id="orderRequestButton"
           @click="showDialog(),cart.clearLS()">Оформить заказ
      </div>

      <dialog class="cart-route-dialog">Поздравляем с покупкой! <br>
        <p v-if="cart.totalPrice() >= 15000">Ваш промокод на скидку в 15%: <span>{{ cart.promoCodeGen(15) }}</span></p>
        <br>
        <p v-if="cart.totalPrice() >= 10000 && cart.totalPrice() < 15000">Ваш промокод на скидку в 10%:
          <span>{{ cart.promoCodeGen(10) }}</span></p> <br>
        <router-link to="/">
          <p class="close-dialog-red-x" @click="hideDialog(),cart.cartBox=[]">Закрыть</p>
        </router-link>
      </dialog>
      </div>`,
    methods:{
        hideThis(){
            event.target.style = "display:none;"
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

        refresh(position){
            position.amount = +event.target.value
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