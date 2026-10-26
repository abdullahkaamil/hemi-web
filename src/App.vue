<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import ScreensSection from '@/components/sections/ScreensSection.vue'
import WhySection from '@/components/sections/WhySection.vue'
import StepsSection from '@/components/sections/StepsSection.vue'
import ReviewsSection from '@/components/sections/ReviewsSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <FeaturesSection />
    <ScreensSection />
    <WhySection />
    <StepsSection />
    <ReviewsSection />
    <FaqSection />
    <ContactSection />
  </main>
  <AppFooter />
</template>
