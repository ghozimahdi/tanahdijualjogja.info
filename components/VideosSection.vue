<template>
  <section class="section bg-gray-50">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-primary mb-4">Video Lokasi</h2>
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
            :loop="getLoop"
            :autoplay="{ delay: 3500, disableOnInteraction: false }"
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
            <div
                class="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                @click="openVideo(video.embedUrl)">
              <div class="relative aspect-[16/9] w-full">
                <img
                    :src="getVideoThumbnail(video.embedUrl)"
                    :alt="video.title"
                    class="absolute inset-0 w-full h-full object-cover"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div
                      class="bg-primary bg-opacity-80 rounded-full p-4 text-white transform transition-transform duration-300 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="p-6 flex-grow min-h-[150px]">
                <h3 class="text-xl font-semibold mb-2">{{ video.title }}</h3>
                <p class="text-gray-600">{{ video.description }}</p>
                <div class="mt-4 text-center">
                  <span class="text-primary font-medium hover:underline">Tonton Video</span>
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
import {defineComponent, computed} from 'vue'
import {Swiper, SwiperSlide} from 'swiper/vue'
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
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
        title: 'Tanah Pekarangan Area Palagan Jogja',
        description: 'Menikmati keindahan alam Jogja dengan pemandangan Gunung Merapi dan sawah.',
        embedUrl: 'https://www.youtube-nocookie.com/embed/4F0DR8vlWT8'
      },
      {
        title: 'Tanah Kavling Pekarangan Dekat Kotagede, Potensi Tinggi di Jogja',
        description: 'Tips dan strategi investasi tanah di Jogja untuk keuntungan jangka panjang.',
        embedUrl: 'https://www.youtube-nocookie.com/embed/HBE6FrwJBF0'
      },
      {
        title: 'Tanah Kavling Pekarangan Dekat Kampus UII',
        description: 'Langkah-langkah membangun rumah impian di Jogja dengan budget terjangkau.',
        embedUrl: 'https://www.youtube-nocookie.com/embed/8KIUaBoVLnA'
      },
      {
        title: 'Tanah Kavling Pekarangan Dekat Kampus UMY',
        description: 'Peluang bisnis menjanjikan dengan memanfaatkan tanah di Jogja.',
        embedUrl: 'https://www.youtube-nocookie.com/embed/WSQ7WQ-VCsM'
      },
      {
        title: 'Tanah Kavling Pekarangan Barat Tugu Jogja',
        description: 'Menikmati gaya hidup tenang dan nyaman di Jogja, jauh dari hiruk pikuk kota besar.',
        embedUrl: 'https://www.youtube-nocookie.com/embed/WSYCD9VBOR8'
      }
    ]

    // Matikan loop jika jumlah video kurang dari 6
    const getLoop = computed(() => videos.length >= 6);

    // Function to open video in a new tab
    const openVideo = (embedUrl: string) => {
      // Convert embed URL to watch URL
      const watchUrl = embedUrl.replace('youtube-nocookie.com/embed/', 'youtube.com/watch?v=');
      window.open(watchUrl, '_blank');
    };

    // Function to get video thumbnail from embedUrl
    const getVideoThumbnail = (embedUrl: string) => {
      // Extract video ID from embedUrl
      const videoId = embedUrl.split('/').pop() || '';
      // Return YouTube thumbnail URL (using hqdefault as it's more reliable than maxresdefault)
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    };

    return {
      videos,
      openVideo,
      getVideoThumbnail,
      SwiperNavigation: Navigation,
      SwiperPagination: Pagination,
      SwiperAutoplay: Autoplay,
      getLoop
    }
  }
})
</script>

<style scoped>

</style>
