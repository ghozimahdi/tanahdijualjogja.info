<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <DreamHousesSection />
    <LandSection />
    <VideosSection />
    <ContactSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeroSection from '~/components/HeroSection.vue'
import DreamHousesSection from '~/components/DreamHousesSection.vue'
import LandSection from '~/components/LandSection.vue'
import VideosSection from '~/components/VideosSection.vue'
import FeaturesSection from '~/components/FeaturesSection.vue'
import ContactSection from '~/components/ContactSection.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeroSection,
    DreamHousesSection,
    LandSection,
    VideosSection,
    FeaturesSection,
    ContactSection
  }
})
</script>