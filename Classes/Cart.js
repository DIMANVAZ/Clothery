export class Cart{
    cartBox = this.getFromLS() || []; //объекты {item:{item}, S:3}
    //надо в объекты {item:{item}, sizes:{S:3, M:2}}

    addToCart(item = {name:'defName',price:999}, sizes = {XXL:1}){

        if(this.cartBox.length === 0){  //массив пуст - смело пушим!! 1 товар - 1 строка. item, sizes
            this.cartBox.push({item,sizes})
        }
        else{               //массив не пуст
            let matchItem = this.cartBox.find(el => el.item.name === item.name) //предполагаемое совпадение

            if(!matchItem){ //совпадения по имени нет - пушим
                this.cartBox.push({item,sizes})
            }
            else {          //есть совпадение по имени. Сращиваем объекты размеров у входящего item и match

                Object.keys(sizes).forEach(incomSize => { //для каждого входящего размера
                    if (matchItem.sizes[incomSize]){      //...если в размерах совпавшего есть такой ключ, то...
                        matchItem.sizes[incomSize] += sizes[incomSize] //..плюсуем! и выходим досрачно
                        return
                    }
                    matchItem.sizes[incomSize] = sizes[incomSize] //а раз не вышли, то ключа не было - присваиваем новый ключ
                })
            }
        }
        console.log('this CartBox = ',this.cartBox)
    }

    //убавить на 1 позицию данного товара - продумать, как быть с галками
    removeOneLine(i){
        this.cartBox = this.cartBox.filter(el => el !== this.cartBox[i])
    };

    //сложить счётчики у всех товаров в корзине
    totalItems(){
        return this.cartBox.reduce((initial,cartString) => {
            let amountForString = 0;
            Object.values(cartString.sizes).forEach(amountOfSize => {
                amountForString += amountOfSize
            })
            return initial + amountForString;
        },0);
    };

    //сложить цены у всех товаров в корзине, перемножив сумму размеров в ordered на цену товара
    totalPrice(){
        return this.cartBox.reduce((initial,cartString) => {
            let amountForString = 0;
            Object.values(cartString.sizes).forEach(amountOfSize => {
                amountForString += amountOfSize
            })
            return initial + amountForString * cartString.item.price;
        },0)
    };

    saveToLS(){
        localStorage.setItem('Clothery',JSON.stringify(this.cartBox));
    }

    getFromLS(){
        //this.cartBox = JSON.parse(localStorage.getItem('Clothery'));
        return JSON.parse(localStorage.getItem('Clothery'));
    }

    clearLS(){
        //this.cartBox = []
        localStorage.removeItem('Clothery')
    }

    //генератор промокода
    // промокод 10% появляется только при сумме больше 10000,
    // а при сумме больше 15000 он 15%
    // и он не длиннее 8 букв
    promoCodeGen(initDiscount){
        //console.table(this.cartBox)
        console.log('pcGEN----------')
        let rawCode = this.cartBox.reduce((initDiscount,value) => {
            return '' + initDiscount + Object.keys(value)[1] + Object.values(value)[1]
        },initDiscount)
        if(rawCode && this.totalPrice()){
            return (rawCode + this.totalPrice()).slice(0,8)
        } else return '15SSX2'

    };
}

/*let c = new Cart();
*/
