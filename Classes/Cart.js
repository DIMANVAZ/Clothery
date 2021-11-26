export class Cart{
    cartBox = []; //объекты {position:{item}, ordered:{}}

    //если есть такое имя - накрутим его счётчик, а если нету - добавим полностью
    //элементов массива должно быть не более, чем товаров. Счётчик корзины считается от общего кол-ва заказанных штук
    addToCart(item, ordered){
        this.cartBox.find(elem => {
            if(elem?.position?.name === item.name){ //такой товар уже есть
                this.addNewOrder()
            }
        })

    this.cartBox.push({position:item, ordered:ordered})
        console.log(this.cartBox)
    };

    //убавить на 1 позицию данного товара
    removeOne(item){
        this.cartBox.find(nextEl => {
            if(nextEl.name === item.name && nextEl.count >= 1){
                    console.log(`we decrease count of ${nextEl.name}`);
                nextEl.count--;
            }
        })
    }

    //полностью удалить позицию вообще
    fullyRemove(item){
        this.cartBox = this.cartBox.filter(elem => elem.name !== item.name);
            console.log(`we fully removed ${item.name}`)
    };

    //сложить счётчики у всех товаров в корзине
    totalItems(){
        return this.cartBox.length; //----------------------!!!!!!!!!!!!!!!---------------------
    };

    //сложить цены у всех товаров в корзине
    totalPrice(){
        return this.cartBox.reduce((sum,item) =>{
            sum += item.price;
            return sum
        },0)
    };

    showAllItems(){

    }

    //генератор промокода
    promoCodeGen(){
        let pCode = "";
        this.cartBox.forEach(el => pCode += (el.name[0]+el.count+el.name[el.name.length-1]));
        pCode += this.totalPrice();
            console.log(this.cartBox)
        return pCode;
    }

    addNewOrder(){

    }
}

/*
let c = new Cart();
c.addToCart({name:"носки", price:333})
c.addToCart({name:"носки", price:333})
c.addToCart({name:"трусы", price:4944})
console.log(c.totalItems())
console.log(c.totalPrice())
console.log(c.cartBox)
console.log(c.promoCodeGen())*/
