export const Item = {
    props:[`items`], //это массив объектов
    template:`<div style="color:#24699E">Динамическое id: {{ $route.params.id }}</div> 
              <div style="color:coral">Показываем dataParams: {{ this.dataParams }}</div>
              <div style="color:forestgreen">Показываем items[0]: {{ items[0] }}</div>
              <div style="color:orangered">Показываем typeof(items[0]): {{ typeof(items[0]) }}</div> <!--выводит слово Object-->
              `,
    data(){
        return{
            dataParams:'initially Empty => ',
        }
    },
    mounted(){
        this.dataParams += this.$route.params.id;
        console.log(`props = ${this.items}`)
    }
}