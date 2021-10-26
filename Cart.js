/*export*/ class Cart{
    cartBox = []; //товары по типу {name:"any", count:1}

    //добавить +1 товар: если есть такое имя - накрутим его счётчик, а если нету - добавим
    addToCart(item){
        let added = false;
        this.cartBox.find(nextEl => {
            if(nextEl.name === item.name){
                    console.log(`we increase count of ${nextEl.name}`);
                nextEl.count++;
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
    }
}

let c = new Cart();

console.log(c.totalItems())