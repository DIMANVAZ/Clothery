export const Collections = {
    props:[`items`],
    template:`<div class="Collections">

                    <div v-for="(item,i) in items">
                        <router-link :to="'/item/' + item.id">{{ item.name.slice(8) }}</router-link>
                        <!--то есть  :to = /item/344134464  в итоге -->
                    </div>
                    
              </div>
              `,
    data(){
        return{
        }
    },
    methods:{
    },
    created(){
    },
    mounted() {
    }
}