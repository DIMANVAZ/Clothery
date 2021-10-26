/*export*/ class Cart{
    cartBox = [{name:"any", count:1}];

    //добавить +1 товар: если есть такое имя - накрутим его счётчик, а если нету - добавим
    addToCart(item){
        let added = false;
        this.cartBox.find(nextEl => {
            if(nextEl.name === item.name){
                console.log('we increase count');
                nextEl.count++;
                added = true;
            }
        })
        if(!added){
            item.count = 1;
            this.cartBox.push(item);
            console.log('added new')
        }
    };

    //убавить на 1 позицию данного товара
    removeOne(item){
        this.cartBox.find(nextEl => {
            if(nextEl.name === item.name && nextEl.count >=1){
                console.log('we decrease count');
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
    }
}

let c = new Cart();
c.addToCart({name:"any"});
console.log(c.cartBox)
c.addToCart({name:"duh"});
console.log(c.cartBox)
c.addToCart({name:"duh"});
console.log(c.cartBox)
c.fullyRemove({name:"duh"})
console.log(c.cartBox)
c.removeOne({name:"any"})
console.log(c.cartBox)
c.removeOne({name:"any"})
console.log(c.cartBox)
c.removeOne({name:"any"})
console.log(c.cartBox)

console.log(c.totalItems())