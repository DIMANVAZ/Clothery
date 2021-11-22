export const CartRoute = {
    props:['items',`cart`],
    template:`<div ><h2>Корзина: всего товаров {{this.cart.showAllItems()}}</h2></div>`
}