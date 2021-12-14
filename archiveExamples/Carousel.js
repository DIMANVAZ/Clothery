import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

export default {
  template: `<div class="swiper" ref="carousel">
 <!-- Additional required wrapper -->
 <div class="swiper-wrapper">
   <!-- Slides -->
   <div class="swiper-slide">Slide 1</div>
   <div class="swiper-slide">Slide 2</div>
   <div class="swiper-slide">Slide 3</div>
   ...
 </div>
 <!-- If we need pagination -->
 <div class="swiper-pagination"></div>

 <!-- If we need navigation buttons -->
 <div class="swiper-button-prev"></div>
 <div class="swiper-button-next"></div>

 <!-- If we need scrollbar -->
 <div class="swiper-scrollbar"></div>
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
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  }
}
