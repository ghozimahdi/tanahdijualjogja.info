<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyEwDtAWteGD238AUbPRrIK2YQtb9zR2Cun4AvD1ZYE_Oa3ZJ1bKT3CQUHxOwqjSiDhulPF6MSug2Mpy6864v-wXxTFytzze8yfEuoT3j2Y0rBHHG6Ousva0gfbp4WmhpYcUVi0NMYzreu/s1100/5561169b0423bdcd3a8b4568.jpeg"
          alt="Tugu Jogja"
          class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>

    <!-- Content -->
    <div class="container relative z-10 text-center text-white">
      <h1 class="mb-4 font-bold leading-tight">
        Tanah Dijual di Jogja
      </h1>
      <h2 class="mb-8 text-2xl md:text-3xl">
        Investasi Tepat, Lokasi Strategis!
      </h2>
      <p class="mb-8 text-lg md:text-xl max-w-3xl mx-auto">
        Hidup nyaman di Jogja dengan udara segar, pemandangan Gunung Merapi, dan hamparan sawah hijau. Investasi
        properti terbaik untuk masa depan Anda.
      </p>
      <p class="mb-8 text-lg md:text-xl max-w-3xl mx-auto">
        Bayangkan bangun pagi dengan udara segar khas Jogja, disambut hamparan <strong>sawah hijau</strong> yang
        menyejukkan mata. Dari kejauhan, <strong>Gunung Merapi</strong> berdiri megah, menghadirkan keindahan yang tak
        tergantikan.
      </p>
      <p class="mb-8 text-lg md:text-xl max-w-3xl mx-auto">
        Jogja bukan hanya kota pendidikan dan budaya, tetapi juga tempat yang menawarkan <strong>kenyamanan
        hidup</strong>, jauh dari hiruk-pikuk kota besar. Di sini, Anda bisa menikmati suasana <strong>tenang, ramah,
        dan penuh pesona</strong>, sambil tetap memiliki akses mudah ke berbagai fasilitas modern.
      </p>

    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'HeroSection'
})
</script>
