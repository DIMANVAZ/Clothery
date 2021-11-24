export class Cart{
    cartBox = []; //объекты {position:{item}, ordered:{}}

    //если есть такое имя - накрутим его счётчик, а если нету - добавим полностью
    //-----переписать, чтобы принимала объект item целиком и ещё размеры как-нибудь!!!!!!------------------

    addToCart(item = {name:"Тестовый", price:999}, ordered = {S:1, M:2, L:3}){
        //---почему не добавляется?!?!?!--------------
        console.log(this.cartBox)
        let added = false; // флаг - по умолчанию товара нет, т.е. false
        if(this.cartBox){ //если не пустой
            this.cartBox.forEach(cartEl => {
                if (cartEl.position.name === item.name){
                    console.log('match!', item.name)
                } else {
                    this.cartBox.push({position:{item}, ordered:{ordered}});
                    console.log('pushed = ', item.name)
                };
            })
        } else {
            this.cartBox.push({position:{item}, ordered:{ordered}});
            console.log('pushed = ', item.name)
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
