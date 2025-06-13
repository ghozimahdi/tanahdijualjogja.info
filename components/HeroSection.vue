<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
          src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=2070&q=80"
          alt="Pemandangan Gunung dan Sawah di Jogja"
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

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
            href="https://wa.me/6282325674451?text=Halo,%20saya%20tertarik%20dengan%20tanah%20di%20Jogja.%20Boleh%20minta%20price%20list%20nya?"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-accent"
        >
          Download Pricelist
        </a>
        <a
            href="https://wa.me/6282325674451?text=Halo,%20saya%20tertarik%20dengan%20tanah%20di%20Jogja.%20Boleh%20minta%20informasi%20lebih%20detail?"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
        >
          Info Detail
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'HeroSection'
})
</script>