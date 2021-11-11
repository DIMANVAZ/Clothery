export const Item = {
    props:[`items`], //это массив объектов
    template:`<div>Dинамиеское id:{{ $route.params.id }}</div> 
              <div>Показываем пропс:{{ items[0] }}</div>, <!--выводит развёрнутый объект-->
              <div>Показываем пропс:{{ typeof(items[0]) }}</div> <!--выводит слово Object-->
<!--              <div>Показываем пропс:{{ Object.keys(items[0]) }}</div> &lt;!&ndash;Uncaught (in promise) TypeError: Cannot convert undefined or null to object&ndash;&gt;-->
`,
    data(){
        return{
        }
    },
    mounted(){
    }
}