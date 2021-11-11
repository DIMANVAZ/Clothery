export const Collections = {
    props:[`items`],
    template:`<div class="Collections">
                <a>Мужская одежда</a> <br>
                <a>Женская одежда</a>
                <hr>
                <div v-for="(item,i) in items">
                    <router-link :to="'/item/' + item.id">{{item.name.slice(8)}}</router-link>
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