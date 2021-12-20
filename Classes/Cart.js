export class Cart{
    cartBox = this.getFromLS() || []; //массив объектов [{item:{},size:S,amount:1}},{item:{},size:M,amount:4}} ]

    addToCart(orderedList = [{item:{id:"default"}, size:"RR", amount:99}]){
        if(_.isEmpty(this.cartBox)){ // для лодаша, подключенного через <script>
            this.cartBox = orderedList
        }
        else{
            orderedList.forEach(order => { //для очередного входящего
                let match = false;         //флаг)) по умолчанию совпадений нет
                this.cartBox.find(yetItem => { //Чтобы не городить двойной цикл - поиск функцией
                    if (yetItem.item.id === order.item.id && yetItem.size === order.size){
                        yetItem.amount += order.amount
                        match = true  //...было дело, значит ))
                    }
                })
                if(!match){ // а раз не нашлось совпадений - пушим
                    this.cartBox.push(order)
                }
            })
        }
        console.log('this CartBox = ',this.cartBox)
    }


    //сложить счётчики у всех товаров в корзине. ЙЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕ
    totalItems(){
        return this.cartBox.reduce((initial, cartString) => {
            return initial + cartString.amount
        },0)
    };

    //сложить цены у всех товаров в корзине, перемножив сумму размеров в ordered на цену товара
    totalPrice(){
        return this.cartBox.reduce((initialPrice, cartString) => {
            return initialPrice + cartString.item?.price * cartString.amount
        },0)
    };

    //убавить на 1 позицию данного товара - продумать, как быть с галками
    removeOneLine(i){
        this.cartBox = this.cartBox.filter(el => el !== this.cartBox[i]);
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
