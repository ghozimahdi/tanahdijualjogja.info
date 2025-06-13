<template>
  <section class="section bg-white">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-primary mb-4">Tanah Premium di Jogja</h2>
        <p class="text-gray-600 max-w-3xl mx-auto">
          Pilihan tanah premium dengan lokasi strategis di Jogja. Investasi properti terbaik untuk masa depan Anda.
        </p>
      </div>

      <!-- Swiper Slider -->
      <div class="relative">
        <swiper
          :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]"
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          :autoplay="{ delay: 3500, disableOnInteraction: false }"
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
          <swiper-slide v-for="(land, index) in lands" :key="index">
            <div class="bg-white rounded-lg overflow-hidden shadow-md h-full">
              <div class="h-64 overflow-hidden">
                <img :src="land.image" :alt="land.title" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">{{ land.title }}</h3>
                <p class="text-gray-600 mb-4">{{ land.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-secondary font-bold">{{ land.price }}</span>
                  <a 
                    href="https://wa.me/6282325674451?text=Halo,%20saya%20tertarik%20dengan%20tanah%20di%20Jogja.%20Boleh%20minta%20informasi%20lebih%20detail?" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-primary font-medium hover:underline"
                  >
                    Detail
                  </a>
                </div>
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
  name: 'LandSection',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const lands = [
      {
        title: 'Tanah View Gunung Merapi',
        description: 'Tanah kavling dengan pemandangan langsung ke Gunung Merapi. SHM Pekarangan.',
        price: 'Rp 500rb/m²',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80'
      },
      {
        title: 'Tanah Tepi Sawah',
        description: 'Tanah dengan pemandangan sawah yang menyejukkan. Cocok untuk villa atau homestay.',
        price: 'Rp 450rb/m²',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      },
      {
        title: 'Tanah Dekat Kampus UGM',
        description: 'Lokasi strategis dekat kampus UGM. Investasi menguntungkan untuk kost mahasiswa.',
        price: 'Rp 750rb/m²',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
      },
      {
        title: 'Tanah Siap Bangun di Sleman',
        description: 'Tanah kavling siap bangun dengan akses jalan aspal. Lingkungan perumahan.',
        price: 'Rp 600rb/m²',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      },
      {
        title: 'Tanah Luas di Bantul',
        description: 'Tanah luas cocok untuk perumahan atau investasi jangka panjang.',
        price: 'Rp 400rb/m²',
        image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      },
      {
        title: 'Tanah Premium di Kaliurang',
        description: 'Tanah premium di kawasan wisata Kaliurang. Udara sejuk dan pemandangan indah.',
        price: 'Rp 550rb/m²',
        image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      }
    ]

    return {
      lands,
      SwiperNavigation: Navigation,
      SwiperPagination: Pagination,
      SwiperAutoplay: Autoplay
    }
  }
})
</script>

<style>
/* Styles already defined in DreamHousesSection.vue */
</style>