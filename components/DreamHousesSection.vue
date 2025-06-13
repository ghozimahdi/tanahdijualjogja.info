<template>
  <section class="section bg-gray-50">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-primary mb-4">Rumah Idaman di Jogja</h2>
        <p class="text-gray-600 max-w-3xl mx-auto">
          Temukan inspirasi rumah idaman Anda di Jogja. Dengan tanah yang strategis, Anda bisa membangun rumah impian seperti contoh-contoh berikut.
        </p>
      </div>

      <!-- Swiper Slider -->
      <div class="relative">
        <swiper
          :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]"
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          :navigation="true"
          :breakpoints="{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }"
          class="mySwiper"
        >
          <swiper-slide v-for="(house, index) in dreamHouses" :key="index">
            <div class="bg-white rounded-lg overflow-hidden shadow-md h-full">
              <div class="h-64 overflow-hidden">
                <img :src="house.image" :alt="house.title" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">{{ house.title }}</h3>
                <p class="text-gray-600">{{ house.description }}</p>
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
  name: 'DreamHousesSection',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const dreamHouses = [
      {
        title: 'Villa Modern dengan View Gunung',
        description: 'Rumah modern dengan pemandangan langsung ke Gunung Merapi.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80'
      },
      {
        title: 'Rumah Joglo Kontemporer',
        description: 'Perpaduan arsitektur tradisional Jawa dengan sentuhan modern.',
        image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      },
      {
        title: 'Rumah Minimalis Tepi Sawah',
        description: 'Desain minimalis dengan pemandangan sawah yang menyejukkan.',
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      },
      {
        title: 'Villa Resort dengan Kolam Renang',
        description: 'Rumah bergaya resort dengan kolam renang pribadi.',
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      },
      {
        title: 'Rumah Tropis dengan Taman Luas',
        description: 'Desain tropis dengan taman luas dan area outdoor yang nyaman.',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      },
      {
        title: 'Rumah Keluarga dengan Halaman Luas',
        description: 'Rumah keluarga yang nyaman dengan halaman luas untuk anak-anak bermain.',
        image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2078&q=80'
      }
    ]

    return {
      dreamHouses,
      SwiperNavigation: Navigation,
      SwiperPagination: Pagination,
      SwiperAutoplay: Autoplay
    }
  }
})
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: #4F7942 !important;
}

.swiper-pagination-bullet-active {
  background-color: #4F7942 !important;
}
</style>