<template>
  <section class="section bg-gray-50">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-primary mb-4">Video Inspirasi</h2>
        <p class="text-gray-600 max-w-3xl mx-auto">
          Lihat berbagai inspirasi dan informasi tentang properti di Jogja melalui video berikut.
        </p>
      </div>

      <!-- Swiper Slider -->
      <div class="relative">
        <swiper
          :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]"
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          :pagination="{ clickable: true }"
          :navigation="true"
          :breakpoints="{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }"
          class="mySwiper"
        >
          <swiper-slide v-for="(video, index) in videos" :key="index">
            <div class="bg-white rounded-lg overflow-hidden shadow-md h-full">
              <div class="aspect-w-16 aspect-h-9">
                <iframe 
                  :src="video.embedUrl" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  class="w-full h-full"
                ></iframe>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">{{ video.title }}</h3>
                <p class="text-gray-600">{{ video.description }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default defineComponent({
  name: 'VideosSection',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const videos = [
      {
        title: 'Keindahan Alam Jogja',
        description: 'Menikmati keindahan alam Jogja dengan pemandangan Gunung Merapi dan sawah.',
        embedUrl: 'https://www.youtube.com/embed/4F0DR8vlWT8'
      },
      {
        title: 'Investasi Tanah di Jogja',
        description: 'Tips dan strategi investasi tanah di Jogja untuk keuntungan jangka panjang.',
        embedUrl: 'https://www.youtube.com/embed/HBE6FrwJBF0'
      },
      {
        title: 'Membangun Rumah Impian',
        description: 'Langkah-langkah membangun rumah impian di Jogja dengan budget terjangkau.',
        embedUrl: 'https://www.youtube.com/embed/8KIUaBoVLnA'
      },
      {
        title: 'Potensi Bisnis di Jogja',
        description: 'Peluang bisnis menjanjikan dengan memanfaatkan tanah di Jogja.',
        embedUrl: 'https://www.youtube.com/embed/WSQ7WQ-VCsM'
      },
      {
        title: 'Wisata Alam Jogja',
        description: 'Menjelajahi keindahan wisata alam di sekitar Jogja yang menakjubkan.',
        embedUrl: 'https://www.youtube.com/embed/WSYCD9VBOR8'
      },
      {
        title: 'Kehidupan di Jogja',
        description: 'Menikmati gaya hidup tenang dan nyaman di Jogja, jauh dari hiruk pikuk kota besar.',
        embedUrl: 'https://www.youtube.com/embed/WSYCD9VBOR8'
      }
    ]

    return {
      videos,
      SwiperNavigation: Navigation,
      SwiperPagination: Pagination,
      SwiperAutoplay: Autoplay
    }
  }
})
</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}

.aspect-h-9 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>