<template>
  <section class="section bg-gray-900 text-white">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="text-accent mb-4">Hubungi Kami</h2>
        <p class="text-gray-300 max-w-3xl mx-auto">
          Tertarik dengan tanah di Jogja? Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut atau jadwalkan kunjungan.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h3 class="text-2xl font-semibold mb-6">Informasi Kontak</h3>

          <div class="space-y-6">
            <div class="flex items-start">
              <div class="text-accent text-xl mr-4">
                <span class="fas fa-phone"></span>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Telepon/WhatsApp</h4>
                <a href="tel:+6282325674451" class="text-gray-300 hover:text-white">+62 823-2567-4451</a>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-accent text-xl mr-4">
                <span class="fas fa-envelope"></span>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Email</h4>
                <a href="mailto:info@tanahdijualjogja.com" class="text-gray-300 hover:text-white">info@tanahdijualjogja.com</a>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-accent text-xl mr-4">
                <span class="fas fa-clock"></span>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Jam Operasional</h4>
                <p class="text-gray-300">Senin - Sabtu: 08.00 - 17.00 WIB</p>
                <p class="text-gray-300">Minggu: Dengan Janji</p>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="mt-8">
            <h4 class="font-semibold mb-4">Ikuti Kami</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-300 hover:text-accent text-2xl">
                <span class="fab fa-instagram"></span>
              </a>
              <a href="#" class="text-gray-300 hover:text-accent text-2xl">
                <span class="fab fa-facebook"></span>
              </a>
              <a href="#" class="text-gray-300 hover:text-accent text-2xl">
                <span class="fab fa-youtube"></span>
              </a>
              <a href="#" class="text-gray-300 hover:text-accent text-2xl">
                <span class="fab fa-tiktok"></span>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-gray-800 p-8 rounded-lg">
          <h3 class="text-2xl font-semibold mb-6">Kirim Pesan</h3>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-accent focus:border-accent"
                required
              >
            </div>

            <div>
              <label for="phone" class="block mb-2 text-sm font-medium">Nomor Telepon</label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-accent focus:border-accent"
                required
              >
            </div>

            <div>
              <label for="email" class="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-accent focus:border-accent"
                required
              >
            </div>

            <div>
              <label for="message" class="block mb-2 text-sm font-medium">Pesan</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-accent focus:border-accent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full btn btn-accent"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-20 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Tanah Dijual Jogja. All rights reserved.</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'ContactSection',
  setup() {
    const form = reactive({
      name: '',
      phone: '',
      email: '',
      message: ''
    })

    const submitForm = () => {
      // In a real application, you would send this data to a server
      // For now, we'll just redirect to WhatsApp with the form data
      const text = `Nama: ${form.name}%0ATelepon: ${form.phone}%0AEmail: ${form.email}%0APesan: ${form.message}`
      window.open(`https://wa.me/6282325674451?text=${text}`, '_blank')

      // Reset form
      form.name = ''
      form.phone = ''
      form.email = ''
      form.message = ''
    }

    return {
      form,
      submitForm
    }
  }
})
</script>