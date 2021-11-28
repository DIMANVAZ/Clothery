export class Cart{
    cartBox = []; //объекты {position:{item}, ordered:{}}
    arrayForCart = [];

    addToCart(item = {name:'defName',price:999}, sizes = {XL:1, XS:2}){
        let incomKeys = Object.keys(sizes);

        if (this.cartBox.length === 0) {//массив пуст - смело пушим!! для каждого размера по отдельности
            incomKeys.forEach(size => {
                this.cartBox.push({item,[size]:sizes[size]}) //для каждого размера по отдельности
            })
        } else {
            //проверить, есть ли совпадения по имени. Да - проверяем ключи. Нет - пушим
            let allMatches = this.cartBox.filter(cartEl => cartEl.item.name === item.name);
            console.log('am = ', allMatches)
            if (!allMatches.length) { //по имени не совпало - пушим!!
                incomKeys.forEach(size => {
                    this.cartBox.push({item,[size]:sizes[size]}) //для каждого размера по отдельности
                })
            } else {    //по имени cовпало - проверяем ключи.
                        // allMatches - это все совпавшие по имени с входящим элементы массива корзины
                incomKeys.forEach(size => {
                    let first = allMatches.find(elem => { // если в массиве совпавших имён найдем такой же ключ(размер) - плюсуем их!
                        if(elem[size]){
                           elem[size] += sizes[size];
                        }
                    })
                    if(!first){
                        this.cartBox.push({item,[size]:sizes[size]}) //---ПРОВЕРИТЬ!!!--лишнее добавляет(((----------
                    }
                })
            }
        }
        console.log('this CB = ',this.cartBox)
    }
    // addToCart(itemPlusOrder = {position:{name:"Рыба-имя"}, ordered:{XL:1, XXL:2}}){
    //     // addToCart вызывается в Item.js, строка 18
    //     // 1. Есть ли уже такой товар?
    //     // да - наслаиваем, нет - просто пушим
    //     if (this.cartBox.length === 0){      // корзина пуста ? смело пушим!
    //         this.cartBox.push(itemPlusOrder)
    //     }
    //     else {
    //         let match = this.cartBox.find(cartEl => {
    //             if (cartEl.position.name === itemPlusOrder.position.name){ //если с таким именем элемент есть - наслаиваем
    //                 return cartEl
    //             }
    //         });
    //         if (match) {    // совпадения по имени есть? Да - наслаиваем
    //             this.appendNewOrder(itemPlusOrder.ordered, match.ordered)
    //         } else {        // совпадения по имени есть? Нет - смело пушим!
    //             this.cartBox.push(itemPlusOrder)
    //         }
    //     }
    //     console.log(this.cartBox)
    // };

    //убавить на 1 позицию данного товара - продумать, как быть с галками
    removeOne(){

    };

    //сложить счётчики у всех товаров в корзине
    totalItems(){
        return 999;
    };

    //сложить цены у всех товаров в корзине, перемножив сумму размеров в ordered на цену товара
    totalPrice(){
        return 100500;
    };

    //генератор промокода - переписать!!!
    promoCodeGen(){
        let pCode = "R1A2N3O4V5A6T7O8";

        return pCode;
    };

    appendNewOrder(newOrderObj, oldOrderObj){ //наложить новое кол-во заказанного поверх старого
        if (!newOrderObj || !oldOrderObj) {
            return false
        } else {
            Object.keys(newOrderObj).forEach(key => { //----вариант с Object.keys ------------
                if (oldOrderObj[key]) {
                    oldOrderObj[key] += newOrderObj[key]
                } else {
                    oldOrderObj[key] = newOrderObj[key]
                }
            })
        }
        return oldOrderObj
    };

    adapter(){ // адаптировать наш сложный массив cartBox под нужды Корзины для удобства показа в виде таблицы
        this.cartBox.forEach(complexItem => {
            Object.keys(complexItem.ordered).forEach(size => {
                this.arrayForCart.push({item:complexItem.position, size, amount:complexItem.ordered[size]})
            })
        })
        console.log(this.arrayForCart)
        return this.arrayForCart
    }
}

/*let c = new Cart();
*/
