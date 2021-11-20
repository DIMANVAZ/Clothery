export const Item = {
    props:[`items`], //это переданный нам массив объектов items.
                     // Здесь к нему можно обращаться this.items
    template:` 
                <!-- с оператором ?. норм, режет-->
       <div> Вы выбрали {{ shortName }} </div> 
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
        shortName(){
            console.log(this.selectItem()) //Proxy {id: ...}
            console.log(this.selectItem().name) // ОБРАЗЕЦ. Черное платье
            console.log(typeof(this.selectItem().name)) // String
            console.log(this.selectItem().name.slice(8)) // ERROR
            return 'quokka'
        },
    }
}