export const Item = {
    props:[`items`], //это переданный нам массив объектов items.
                     // Здесь к нему можно обращаться this.items
    template:` 
       <div style="color:#cc6600">this.$route.params: {{ this.$route.params }}</div>
       <div style="color:#cc6600">       $route.params: {{ $route.params }}</div>
       <div style="color:lime"> this.items[0]: {{ this.items[0] }}</div>
              `,
    data(){
        return{
            dataParams:'initially Empty => ',
        }
    },
    methods:{
    },
    mounted(){
        this.dataParams += this.$route.params.id;
            console.log(this.$route.params) // {"id": "344134464"} сформированный в Collection через :to = item/item.id

        this.items.forEach(el =>{
            console.log(el) // выведет поочерёдно 3 объекта
        })
    }
}