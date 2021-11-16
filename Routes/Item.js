export const Item = {
    props:[`items`], //это переданный нам массив объектов items.
                     // Здесь к нему можно обращаться this.items
    template:`<div style="color:#24699E">Динамическое id: {{ $route.params.id }}</div> 
              <div style="color:coral">Показываем dataParams: {{ this.dataParams }}</div>
              <div style="color:forestgreen">Показываем items[0]: {{ items[0] }}</div>
              <div style="color:orangered">Показываем typeof(items[0]): {{ typeof(items[0]) }}</div> <!--выводит слово Object-->
              <div style="color:mediumslateblue">Показываем Object.keys(items[0]): {{ Object.keys(items[0]) }}</div> <!--выводит слово Object-->
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
            console.log(this.$route.params)
        this.items.forEach(el =>{
            console.log(el) // выведет поочерёдно 3 объекта
        })
    }
}