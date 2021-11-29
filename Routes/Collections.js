export const Collections = {
    props:[`items`],
    template:`<div class="Collections collections-route">
                <section v-if="this.maleShow" class="collections-section collections-male">
                    <h3 @click="this.femShow=false">Мужская линейка</h3>
                    
                    <div v-for="item in this.maleCollection" class="collections-section-vFor">
                            
         <!--               <hr class="collections-section-hr">-->
                        <h4>{{ item.name.slice(9) }}</h4>
                            <router-link :to="'/item/' + item.id">
                        <img :src="item?.media?.images[0].image400pxUrl" alt="400" style="width:100%;height:auto">
                            </router-link>
                        <p>Цена:{{item.defaultDisplayedPriceFormatted}}</p>
                        <button>Купить</button>
                    </div>
                    
                </section>
                
                <section v-if="this.femShow" class="collections-section collections-female">
                    <h3 @click="this.maleShow=false">Женская линейка</h3>
                    
                    <div v-for="item in this.femCollection" class="collections-section-vFor">
            <!--            <hr class="collections-section-hr">-->
                        <h4>{{ item.name.slice(9) }}</h4>
                            <router-link :to="'/item/' + item.id">
                        <img :src="item?.media?.images[0].image400pxUrl" alt="400" style="width:100%;height:auto">
                            </router-link>
                        <p>Цена:{{item.defaultDisplayedPriceFormatted}}</p>
                        <button>Купить</button>
                    </div>                    
                </section>
                    
              </div>
              `,
    data(){
        return{
            femShow:true,
            maleShow:true
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