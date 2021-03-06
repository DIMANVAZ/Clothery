import {getAPIdata} from "../Classes/GetRemoteData.js";

export const Collections = {
    props:[`items`],
    template:`<div class="Collections collections-route">
                <div class="collection two-boxes-container" >
                    <div class="collections icon-and-header-box" 
                         @click="femStaff=false, maleStaff=true, scrollToItem()" >
                        <h3 class="collections-header" >Мужская линейка</h3>
                       <svg class="collections-gender-icon" width="212" height="202" viewBox="0 0 212 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="brown" d="M131.525 12.2915C131.525 12.2915 155.136 17.2397 164.581 23.1709C174.026 29.1017 211.213 175.119 211.213 175.119L183.47 184.609L158.088 123.402L131.525 12.2915Z" fill="#BA7D6A" stroke="black" stroke-width="1.0125"/>
                            <path class="brown" d="M80.6877 12.2915C80.6877 12.2915 57.0769 17.2397 47.6322 23.1709C38.1875 29.1017 1 175.119 1 175.119L28.743 184.609L54.1252 123.402L80.6877 12.2915Z" fill="#BA7D6A" stroke="black" stroke-width="1.0125"/>
                            <path class="blue" d="M52.9732 20.2596L51.2014 192.136C55.7769 193.802 98.4347 202.643 103.444 199.349C103.829 199.096 108.001 199.242 108.141 199.211C110.079 198.789 106.228 75.0424 106.076 29.8422C105.992 29.9417 102.097 22.9515 102.097 22.9515L95.7165 19.55L85.3077 9.19385L52.9732 20.2596Z" fill="#48BEEE" stroke="black" stroke-width="0.943377"/>
                            <path class="blue" d="M159.24 20.2599L161.012 192.137C160.459 192.979 105.074 203.009 103.126 200.638C101.864 199.101 103.76 79.9755 103.912 34.7836C104.599 32.3755 109.644 24.5752 110.448 23.0655C114.052 22.0334 116.497 19.5528 116.497 19.5528L126.906 9.19678L159.24 20.2599Z" fill="#48BEEE" stroke="black" stroke-width="0.943377"/>
                            <path class="blue" d="M124.096 3.14941L88.4095 3.56879L86.74 25.1666L101.47 22.8357L106.046 30.3378L110.493 22.9977L126.601 17.1985L124.096 3.14941Z" fill="#48BEEE" stroke="black" stroke-width="1.0125"/>
                            <path class="brown" d="M125.348 12.7949C125.348 12.7949 112.401 11.0114 105.957 11.0157C99.5125 11.0241 86.844 12.7949 86.844 12.7949L88.2005 3.04446C88.2005 3.04446 100.336 0.996064 106.409 1.00001C112.481 1.00001 124.408 3.04446 124.408 3.04446L125.973 7.6576L125.243 12.2707L125.348 12.7949Z" fill="#BA7D6A" stroke="black" stroke-width="1.0125"/>
                            <path class="brown" d="M124.347 3.82007C124.347 3.82007 126.434 4.65882 128.312 15.1432C130.19 25.6276 125.599 35.2732 125.599 35.2732L110.781 22.9017C110.781 22.9017 123.303 16.611 124.138 11.3688C124.973 6.12663 124.347 3.82007 124.347 3.82007Z" fill="#BA7D6A" stroke="black" stroke-width="1.0125"/>
                            <path class="brown" d="M88.2842 3.82007C88.2842 3.82007 86.1973 4.65882 84.319 15.1432C82.4408 25.6276 87.032 35.2732 87.032 35.2732L101.849 22.9017C101.849 22.9017 89.3277 16.611 88.4929 11.3688C87.6581 6.12663 88.2842 3.82007 88.2842 3.82007Z" fill="#BA7D6A" stroke="black" stroke-width="1.0125"/>
                            <path class="brown" d="M121.675 58.6747L147.979 58.5269L148.07 88.3846L121.675 88.3109V58.6747Z" fill="#BA7D6A" stroke="black" stroke-width="1.12469"/>
                        </svg>
                    </div>
                    
                    <div class="collections icon-and-header-box" 
                          @click="maleStaff=false, femStaff=true, scrollToItem()" >
                       <h3 class="collections-header">Женская линейка</h3>
                       <svg class="collections-gender-icon" width="146" height="204" viewBox="0 0 146 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="blue" d="M36.3688 1.25128L35.208 1.2477L35.6818 2.30739C37.3611 6.06351 37.8561 10.2782 37.4297 14.3951L37.4289 14.4028L37.4282 14.4106C37.1008 18.3717 35.4434 22.2053 32.6671 25.0338L32.1744 25.5358L32.6438 26.0597C38.0917 32.1395 41.5017 39.7831 44.0036 47.5897C47.6311 59.0948 49.018 71.2101 49.1479 83.2903L49.1549 83.9441L49.8036 84.0263C65.1771 85.9738 80.7958 85.9823 96.1703 84.022L96.8177 83.9394L96.8254 83.2868C97.014 67.2855 99.3359 51.0194 106.317 36.5674C108.302 32.799 110.456 29.1465 113.305 26.064L113.783 25.5465L113.296 25.037C111.145 22.7846 109.578 19.9717 108.953 16.9421L108.952 16.9403C107.932 12.0556 108.27 6.84989 110.288 2.30571L110.758 1.24771L109.6 1.25128C108.616 1.25432 107.628 1.25294 106.638 1.25156C104.898 1.24913 103.153 1.24669 101.414 1.26816L100.797 1.27579L100.685 1.88308C99.9401 5.95549 98.821 9.95154 97.0021 13.6264L96.9953 13.64L96.9891 13.654C94.6259 18.961 90.8083 23.6969 85.8159 26.642C79.7993 30.1735 72.2879 30.8065 65.5728 28.9596C59.7157 27.3419 54.7327 23.2532 51.428 18.1506C48.2654 13.2603 46.2973 7.64523 45.2845 1.88816L45.1766 1.27488L44.554 1.26815C42.8285 1.24951 41.0977 1.25105 39.3719 1.25258C38.3685 1.25347 37.3667 1.25436 36.3688 1.25128Z" fill="#48BEEE" stroke="black" stroke-width="1.5"/>
                            <path class="brown" d="M47.9027 86.1117L47.4829 86.0531L47.2162 86.3824C33.4307 103.397 23.361 123.098 15.584 143.439L15.5824 143.443C9.28116 160.225 4.43005 177.575 1.2618 195.226L1.19722 195.585L1.44078 195.858C4.98874 199.828 10.0822 203.068 15.785 202.725C23.3204 202.319 29.6173 197.741 35.2101 193.543L35.4813 193.339L35.5075 193.001C37.1499 171.813 40.3412 150.697 46.1515 130.258L46.1515 130.258L46.1534 130.251C48.7275 120.852 51.8939 111.601 55.9436 102.747C55.9888 102.657 56.0319 102.569 56.074 102.484C56.2677 102.09 56.4373 101.746 56.6596 101.455C56.9093 101.128 57.1555 100.966 57.472 100.94L57.4849 100.939L57.4977 100.937C57.8711 100.893 58.2634 101.08 58.5194 101.429C58.772 101.773 58.8206 102.172 58.6495 102.501L58.6299 102.539L58.6148 102.578C58.1466 103.797 57.6034 104.986 57.0487 106.2C57.012 106.28 56.9753 106.36 56.9386 106.441C56.3505 107.729 55.7558 109.046 55.2588 110.411C45.1252 136.885 39.9986 165.047 37.8828 193.207L37.8576 193.542L38.0918 193.784C38.5772 194.286 39.025 194.788 39.4842 195.302C39.8025 195.659 40.1263 196.022 40.4719 196.395C41.2861 197.274 42.1644 198.144 43.1904 198.88C47.0778 201.87 52.1716 203.287 57.055 202.559C61.6013 201.952 65.7887 199.605 68.9147 196.349L68.9201 196.343L68.9253 196.338C69.1461 196.098 69.3639 195.859 69.5802 195.622C70.2471 194.891 70.9009 194.175 71.5914 193.487L71.8123 193.267L71.8123 192.955C71.8106 180.939 71.8116 168.923 71.8126 156.907C71.8141 138.884 71.8157 120.861 71.8081 102.839L71.8081 102.827L71.8077 102.815C71.7943 102.398 71.8269 101.994 71.9378 101.673C72.0428 101.369 72.1988 101.186 72.4284 101.089L72.4668 101.073L72.5031 101.052C72.8654 100.848 73.2856 100.901 73.6426 101.169C74.0086 101.443 74.21 101.876 74.1525 102.29L74.1453 102.341L74.1453 102.394C74.1681 129.55 74.1601 156.713 74.1522 183.875C74.1513 186.895 74.1504 189.915 74.1496 192.934L74.1495 193.243L74.3672 193.463C74.8783 193.978 75.3577 194.503 75.849 195.041C76.1315 195.35 76.4179 195.664 76.7165 195.982C77.5146 196.833 78.3661 197.681 79.3418 198.417C83.203 201.493 88.2493 203.155 93.2188 202.66C96.9069 202.321 100.43 200.809 103.28 198.486C104.188 197.777 104.978 196.967 105.717 196.156C105.988 195.859 106.248 195.567 106.505 195.278C106.965 194.761 107.413 194.258 107.891 193.763L108.123 193.524L108.1 193.191C107.459 183.752 106.295 174.36 104.888 165.02L104.886 165.011C103.227 154.815 101.283 144.625 98.496 134.642C95.6736 123.768 92.1432 113.026 87.4292 102.79L87.4107 102.75L87.3875 102.712C87.1619 102.344 87.1856 101.877 87.423 101.488C87.6582 101.104 88.0471 100.885 88.473 100.933L88.473 100.933L88.4845 100.935C88.8372 100.969 89.1033 101.158 89.3719 101.538C89.5801 101.832 89.7333 102.151 89.9069 102.512C89.9807 102.665 90.0581 102.826 90.145 102.996C94.3079 112.187 97.5661 121.781 100.165 131.542L100.165 131.542L100.167 131.551C105.78 151.574 108.845 172.254 110.463 192.993L110.49 193.345L110.779 193.548C111.514 194.064 112.252 194.613 112.999 195.168C114.619 196.372 116.284 197.61 118.062 198.624C122.628 201.323 128.155 203.512 133.745 202.462C138.1 201.692 141.696 198.919 144.525 195.859L144.776 195.587L144.714 195.223C142.978 185.117 140.441 175.179 137.687 165.337L137.685 165.329C133.104 149.674 127.308 134.341 119.993 119.741L119.992 119.739C114.054 107.963 107.096 96.6479 98.7577 86.3817L98.4911 86.0533L98.0722 86.1117C81.4577 88.4247 64.5164 88.433 47.9027 86.1117Z" fill="#BA7D6A" stroke="black" stroke-width="1.5"/>
                        </svg> 
                    </div>    
                </div>
                
                <section v-show="maleStaff" class="collections-section collections-male" id="maleStaff">
                    
                    <div v-for="item in sortCollections" class="collections-section-vFor">
                        <h4>{{ item.name?.slice(9) }}</h4>
                            <router-link :to="'/item/' + item.id">
                        <img :src="item?.media?.images[0].image400pxUrl" alt="image of item" style="max-width:100%;height:auto">
                            </router-link>
                        <p>Цена:{{item.defaultDisplayedPriceFormatted}}</p>
                            <router-link :to="'/item/' + item.id">
                        <div class="item-goToCart-button" >Купить >></div>
                            </router-link>   
                    </div>
                    
                </section>
                
                <section v-show="femStaff" class="collections-section collections-female" id="femStaff">
                    
                    <div v-for="item in sortCollections" class="collections-section-vFor">
                        <h4>{{ item.name?.slice(9) }}</h4>
                            <router-link :to="'/item/' + item.id">
                        <img :src="item?.media?.images[0].image400pxUrl" alt="image of item" style="max-width:100%;height:auto">
                            </router-link>
                        <p>Цена:{{item.defaultDisplayedPriceFormatted}}</p>
                            <router-link :to="'/item/' + item.id">
                        <div class="item-goToCart-button">Купить >></div>
                            </router-link>  
                    </div>                    
                </section>
                    
              </div>
              `,
    data(){
        return{
            finalItems:{},
            maleStaff:false,
            femStaff:false
        }
    },
    methods:{
        scrollToItem(){ //прописать сразу активацию переменной
           let x = document.querySelector('.icon-and-header-box')
           let params = x.getBoundingClientRect()
           let sum = params.y + params.height - 102 //margin -20
           window.scrollTo(0,sum)
        },
        async fetchItems(){
            if(this.items.length > 0){
                this.finalItems = this.items;
            }
            else{
                let respObj = await getAPIdata().then(response => response.json());
                this.finalItems = respObj.items;
            }
        }
    },
    created(){
        this.fetchItems()
    },
    computed:{
        sortCollections(){
            let male = ['Рубашка', 'Шорты', 'Фланель']
            let female = ['Римская туника','Черное платье','Солнечные очки','Белый топ','Цветочный топ','Черный топ']
            let selected = this.maleStaff === true ? male : female
            return this.finalItems.filter(el => {
                //return selected.some(selectedEl => selectedEl === el.name.slice(9))
                return selected.includes(el.name.slice(9))
            })
        }
    }
}