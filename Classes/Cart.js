export class Cart{
    cartBox = []; //объекты {item:{item}, S:3}

    addToCart(item = {name:'defName',price:999}, sizes = {XL:1, XS:2}){
        let incomKeys = Object.keys(sizes);

        if (this.cartBox.length === 0) {//массив пуст - смело пушим!! для каждого размера по отдельности
            incomKeys.forEach(incomSize => {
                this.cartBox.push({item,[incomSize]:sizes[incomSize]}) //для каждого размера по отдельности
            })
        } else {
            //проверить, есть ли совпадения по имени. Да - проверяем ключи. Нет - пушим
            let allMatches = this.cartBox.filter(cartEl => cartEl.item.id === item.id);
            //console.log('All matches = ', allMatches)
            if (!allMatches.length) { //по имени не совпало - пушим!!
                incomKeys.forEach(size => {
                    this.cartBox.push({item,[size]:sizes[size]}) //для каждого размера по отдельности
                })
            } else {    //по имени cовпало - проверяем ключи.
                        // allMatches - это все совпавшие по имени с входящим элементы массива корзины
                incomKeys.forEach(incomSize => {
                    let match = false;
                    //console.log(`=========started iteration of size ${incomSize} in incomKeys=====================================`)
                    allMatches.forEach(idMatchElem => {
                        //console.log(`--started iteration inside allMatches: ${idMatchElem} in incomKeys---`)
                        if (idMatchElem[incomSize]){
                            //console.log(`element of allMathces ${idMatchElem} has common key ${incomSize} within incomKeys---`)
                            //debugger
                            idMatchElem[incomSize] += sizes[incomSize];
                            match = true;
                        }
                    })
                    if(!match){
                        //console.log(`no mathes. We push incoming item with ${incomSize}:${sizes[incomSize]}`)
                        this.cartBox.push({item,[incomSize]:sizes[incomSize]})
                    }
                })
            }
        }
        //console.log('this CartBox = ',this.cartBox)
    }

    //убавить на 1 позицию данного товара - продумать, как быть с галками
    removeOneLine(i){
        this.cartBox = this.cartBox.filter(el => el !== this.cartBox[i])
        //console.log(`removed elem ${this.cartBox[i]}`)
    };

    //сложить счётчики у всех товаров в корзине
    totalItems(){
        return this.cartBox.reduce((initial,object) => {
            return initial + Object.values(object)[1]
        },0)
    };

    //сложить цены у всех товаров в корзине, перемножив сумму размеров в ordered на цену товара
    totalPrice(){
        return this.cartBox.reduce((initial,object) => {
            return initial + Object.values(object)[1] * object.item.price
        },0)
    };

    //упорядочить массив Cart по именам \id, чтобы выводилось не вразброс
    sortCartBox(){

    }

    //генератор промокода - переписать!!!
    promoCodeGen(){
        let pCode = "R1A2N3O4V5A6T7O8";

        return pCode;
    };
}

/*let c = new Cart();
*/
