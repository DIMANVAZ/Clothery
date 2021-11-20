export const Item = {
    props:[`items`], //это переданный нам массив объектов items.
                     // Здесь к нему можно обращаться this.items
    template:` 
            <h2>{{item.name.slice(8)}}</h2>
            <h3>Код товара: {{item.id}}</h3>
            <p>Цена:{{item.defaultDisplayedPriceFormatted}}</p>
            <p v-html="item.description"></p>

            <div v-for="(pic,i) in item.media.images" >
                <img :src="pic.image160pxUrl" alt="medium Product Photo" style="border:1px solid blue">
            </div>

            Доступные размеры:
            <div v-for="size in item.options[0].choices">
                <p>{{size.text}}</p>
            </div>
 
              `,
    data(){
        return{
            dataParams:'initially Empty => ',
        }
    },
    created(){
    },
    methods:{
        selectItem(){
            let match = {}
            this.items.forEach(item => {
                if(item.id === parseInt(this.$route.params.xxx)) {
                    match = item;
                }
            });
            return match;
        }
    },
    mounted(){
        this.dataParams += this.$route.params.id;
            console.log(this.$route.params) // {"id": "344134464"} сформированный в Collection через :to = item/item.id

    },
    computed:{
        item(){
            console.log('this selectItem(): ', this.selectItem()) //Proxy {id: ...}
            console.log('this selectItem().name: ',this.selectItem().name) // ОБРАЗЕЦ. Черное платье
            console.log('typeof(this.selectItem().name): ',typeof(this.selectItem().name)) // String
            console.log(this.selectItem().name.length) // 23
            //console.log(this.selectItem().name.slice(8))
            return this.selectItem()
        },
    }
}