export class Cart{
    cartBox = []; //объекты {position:{item}, ordered:{}}

    //если есть такое имя - накрутим его счётчик, а если нету - добавим полностью
    //элементов массива должно быть не более, чем товаров. Счётчик корзины считается от общего кол-ва заказанных штук

    addToCart(itemPlusOrder = {position:{name:"Рыба-имя"}, ordered:{XL:1, XXL:2}}){
        // addToCart вызывается в Item.js, строка 18
        // 1. Есть ли уже такой товар?
        // да - наслаиваем, нет - просто пушим
        if (this.cartBox.length === 0){      // корзина пуста ? смело пушим!
            this.cartBox.push(itemPlusOrder)
        }
        else {
            let match = this.cartBox.find(cartEl => {
                if (cartEl.position.name === itemPlusOrder.position.name){ //если с таким именем элемент есть - наслаиваем
                    return cartEl
                }
            });
            if (match) {    // совпадения по имени есть? Да - наслаиваем
                this.appendNewOrder(itemPlusOrder.ordered, match.ordered)
            } else {        // совпадения по имени есть? Нет - смело пушим!
                this.cartBox.push(itemPlusOrder)
            }
        }
        console.log(this.cartBox)
    };

    //убавить на 1 позицию данного товара - продумать, как быть с галками
    removeOne(){

    };

    //полностью удалить позицию вообще
    fullyRemove(){
        // применить метод .filter
    };

    //сложить счётчики у всех товаров в корзине
    totalItems(){
        return this.cartBox.reduce()
    };

    //сложить цены у всех товаров в корзине
    totalPrice(){
        // применить метод reduce
    };

    showAllItems(){
        // применить html-конструкцию
    };

    //генератор промокода
    promoCodeGen(){
        let pCode = "";
        this.cartBox.forEach(el => pCode += (el.name[0]+el.count+el.name[el.name.length-1]));
        pCode += this.totalPrice();
            console.log(this.cartBox)
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
}

/*let c = new Cart();
*/
