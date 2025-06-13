<template>
  <section class="section bg-white">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="text-primary mb-4">Keunggulan Tanah di Jogja</h2>
        <p class="text-gray-600 max-w-3xl mx-auto">
          Mengapa memilih tanah di Jogja? Berikut adalah beberapa keunggulan yang membuat investasi tanah di Jogja menjadi pilihan tepat.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features" :key="index" class="bg-gray-50 p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
          <div class="text-primary text-4xl mb-4">
            <component :is="feature.icon" />
          </div>
          <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>

      <div class="mt-16 text-center">
        <h3 class="text-2xl font-semibold mb-6">Kesempatan Tidak Datang Dua Kali!</h3>
        <p class="text-gray-600 max-w-3xl mx-auto mb-8">
          Tanah ini bukan sekadar lahan—ini adalah masa depan Anda. Dengan lokasi premium, lingkungan asri, dan prospek cerah, tanah di Jogja adalah pilihan tepat bagi Anda yang ingin menikmati ketenangan sekaligus keuntungan investasi.
        </p>
        <a 
          href="https://wa.me/6282325674451?text=Halo,%20saya%20tertarik%20dengan%20tanah%20di%20Jogja.%20Boleh%20minta%20informasi%20lebih%20detail?" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          Hubungi Kami Sekarang
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

// Add Font Awesome for icons
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
    }
  ]
})

// Simple icon components using h function
const LocationIcon = () => h('span', { class: 'fas fa-map-marker-alt' }, [])
const MoneyGrowthIcon = () => h('span', { class: 'fas fa-chart-line' }, [])
const EnvironmentIcon = () => h('span', { class: 'fas fa-tree' }, [])
const DocumentIcon = () => h('span', { class: 'fas fa-file-contract' }, [])
const MountainIcon = () => h('span', { class: 'fas fa-mountain' }, [])
const UniversityIcon = () => h('span', { class: 'fas fa-university' }, [])

const features = [
  {
    title: 'Lokasi Super Strategis',
    description: 'Dekat kampus unggulan di Jogja dan akses mudah ke pusat kota Jogja, ideal untuk hunian, masa pensiun, atau bisnis villa dan kost.',
    icon: LocationIcon
  },
  {
    title: 'Harga Terbaik & Nilai Terus Naik',
    description: 'Properti di Jogja semakin diminati, ambil kesempatan ini sebelum harga melonjak! Dapatkan luasan lebih besar dengan harga terjangkau.',
    icon: MoneyGrowthIcon
  },
  {
    title: 'Lingkungan Berkembang, Potensi Besar',
    description: 'Cocok untuk berbagai kebutuhan: rumah impian, Villa, Kost, atau investasi jangka panjang dengan potensi keuntungan besar.',
    icon: EnvironmentIcon
  },
  {
    title: 'Legalitas Aman & Jelas',
    description: 'Tanpa ribet! Kami memastikan kelengkapan dokumen SHM Pekarangan, sertifikat sudah pecah dan proses pembelian yang mudah.',
    icon: DocumentIcon
  },
  {
    title: 'Pemandangan Indah & Udara Segar',
    description: 'Nikmati pemandangan Gunung Merapi dan sawah hijau dengan udara segar khas Jogja yang menyehatkan.',
    icon: MountainIcon
  },
  {
    title: 'Kota Pendidikan & Budaya',
    description: 'Jogja adalah kota pendidikan dan budaya dengan berbagai fasilitas modern namun tetap mempertahankan nilai-nilai tradisional.',
    icon: UniversityIcon
  }
]

// Component name is automatically derived from filename in Nuxt with script setup
</script>
