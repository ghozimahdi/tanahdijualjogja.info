<template>
  <section class="section bg-white">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-primary mb-4">Tanah Premium di Jogja</h2>
        <p class="text-gray-600 max-w-3xl mx-auto">
          Pilihan tanah premium dengan lokasi strategis di Jogja. Investasi properti terbaik untuk masa depan Anda.
        </p>
      </div>

      <!-- Grid Display of Lands -->
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(land, index) in lands" :key="index" class="bg-white rounded-lg overflow-hidden shadow-md h-full">
          <div class="h-80 overflow-hidden">
            <img :src="land.image" :alt="land.title"
                 class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
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
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center">
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
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import pakemImage from '@/assets/images/pakem2.png'
import permataResidence from '@/assets/images/permata-residence.png'
import pakemImage1 from '@/assets/images/pakem1.png'
import moyudan from '@/assets/images/moyudan.png'
import alena from '@/assets/images/alena.png'

export default defineComponent({
  name: 'LandSection',
  setup() {
    const lands = [
      {
        title: 'Tanah Dekat JL. Palangan Joga',
        description: 'Pas Bangun Kos-Kosan dan Hunian',
        price: 'Rp 2jt-an/m²',
        image: pakemImage
      },
      {
        title: 'Tanah Tepi Sawah',
        description: 'Dekat Lapangan Kasihan Bantul',
        price: 'Rp 2jt-an/m²',
        image: permataResidence
      },
      {
        title: 'Tanah Dekat Warung Kopi Klotok',
        description: 'Cocok Bangun Hunian Dan Kos-Kosan',
        price: 'Rp 2jt-an/m²',
        image: pakemImage1
      },
      {
        title: 'Tanah di Barat Tugu Yogyakarta',
        description: 'Cocok Bangun Hunian Dan Villa',
        price: 'Rp 2jt-an/m²',
        image: moyudan
      },
      {
        title: 'Tanah di Barat Unisa Trihanggo',
        description: 'Cocok Bangun Hunian Dan Villa',
        price: 'Rp 3jt-an/m²',
        image: alena
      }
    ]

    return {
      lands
    }
  }
})
</script>

<style>
/* Styles already defined in DreamHousesSection.vue */
</style>
