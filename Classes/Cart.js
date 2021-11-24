export class Cart{
    cartBox = []; //товары по типу {name:"any", count:1, price:111}

    //добавить +1 товар типа {name:"dd",price:999}
    //если есть такое имя - накрутим его счётчик, а если нету - добавим
    addToCart(item = {name:"проверка", price:999}){
        let added = false;
        this.cartBox.find(nextEl => {
            if(nextEl.name === item.name){
                    console.log(`we increase count of ${nextEl.name}`);
                nextEl.count++;
                nextEl.price = nextEl.price * nextEl.count;
                added = true;
            }
        })
        if(!added){
            item.count = 1;
            this.cartBox.push(item);
                console.log(`added new: ${item.name}`)
        }
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
        return this.cartBox.reduce((sum,item) =>{
            sum += item.count;
            return sum
        },0)
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
