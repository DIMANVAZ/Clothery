export const Collections = {
    props:[`items`],
    template:`<div class="Collections">
                <a>Мужская одежда</a> <br>
                <a>Женская одежда</a>
                <hr>
                <div v-for="(item,i) in items">
                    <router-link :to="'/item/' + item.id">{{item.name.slice(8)}}</router-link>
                    <!--то есть  :to = /item/344134464  в итоге -->
                </div>
              </div>`,
    data(){
        return{
            neededItem:[]
        }
    },
    mounted() {

    }
}