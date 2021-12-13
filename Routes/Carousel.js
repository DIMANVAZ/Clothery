import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

export const Carousel = {
  props:[`items`,`cart`],
  template: `
    <div class="swiper" ref="carousel">
   <!-- Additional required wrapper -->
   <div class="swiper-wrapper">
     <!-- Slides -->
     <div v-for="(pic,i) in items[0]?.media?.images" class="swiper-slide">
       <img :src="pic.image160pxUrl"
            alt="160">
     </div>
 
   </div>
   <!-- If we need pagination -->
   <div class="swiper-pagination"></div>
  
   <!-- If we need navigation buttons -->
   <div class="swiper-button-prev"></div>
   <div class="swiper-button-next"></div>
  
   <!-- If we need scrollbar -->
  <!-- <div class="swiper-scrollbar"></div>-->
</div>`,

  methods: {
    init() {
      const options = {
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
      const carousel = new Swiper(this.$refs.carousel, options)
    },
    //выбираем карточку товара из массива, ищем через id в роуте-парамс
    selectItem(){
      let match = {}
      this.items.forEach(item => {
        if(item.id === parseInt(this.$route.params.xxx)) {
          match = item;
        }
      });
      return match;
    },
  },
  mounted() {
    this.$nextTick(() => { //что такое НекстТик ?
      this.init()
    }),
        console.log(this.items);
  },
  computed:{
    //карточка товара - находим через функцию
    item(){
      console.log(this.items[0]);
      return this.items[0]
    },
  }
}
