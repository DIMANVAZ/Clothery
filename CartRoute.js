export const CartRoute = {
    props:['items'],
    template:`<div v-for="(item,i) in items"><h2>{{item.name.slice(8)}}</h2></div>`

    // template:`<h1>items</h1>`
}