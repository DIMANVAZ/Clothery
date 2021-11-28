export const Collections = {
    props:[`items`],
    template:`<div class="Collections collections-route">
                <section class="collections-section collections-male">
                    <h3>Мужская линейка</h3>
                    
                    <div v-for="item in this.maleCollection" class="collections-section-vFor">
                        <hr class="collections-section-hr">
                        <h4>{{ item.name.slice(9) }}</h4>
                        <img :src="item?.media?.images[0].image400pxUrl" alt="400">
                        <p>Цена:{{item.defaultDisplayedPriceFormatted}}</p>
                        <router-link :to="'/item/' + item.id">Перейти >></router-link>
                    </div>
                    
                </section>
                
                <section class="collections-section collections-female">
                    <h3>Женская линейка</h3>
                    
                    <div v-for="item in this.femCollection" class="collections-section-vFor">
                        <hr class="collections-section-hr">
                        <h4>{{ item.name.slice(9) }}</h4>
                        <img :src="item?.media?.images[0].image400pxUrl" alt="400">
                        <p>Цена:{{item.defaultDisplayedPriceFormatted}}</p>
                        <router-link :to="'/item/' + item.id">Перейти >></router-link>
                    </div>                    
                </section>
                    
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
    },
    computed:{
        maleCollection(){
            return [this.items[2]];
        },
        femCollection(){
            return [this.items[0],this.items[1]];
        }
    }
}