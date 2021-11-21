export const CartRoute = {
    props:['items',`cart`],
    template:`<div ><h2>Корзина: всего товаров {{this.cart.totalItems()}}</h2></div>`
}