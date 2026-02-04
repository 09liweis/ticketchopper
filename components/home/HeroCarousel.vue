<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { computed, ref, onMounted } from 'vue'

const { t } = useI18n()
const route = useRoute()
const currentLang = computed(() => route.params.lang || 'zh')
const currentSlide = ref(0)

const slides = computed(() => t('hero.slides'))

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

onMounted(() => {
  const interval = setInterval(nextSlide, 5000)
  return () => clearInterval(interval)
})
</script>

<template>
  <div class="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
    <div class="relative h-96 sm:h-[500px] md:h-[600px]">
      <div class="absolute inset-0 flex">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          :style="{ opacity: currentSlide === index ? 1 : 0 }"
        >
          <div
            v-if="index === 0"
            class="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700"
          />
          <div
            v-else
            class="absolute inset-0 bg-[url('https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center"
          >
            <div class="absolute inset-0 bg-black/50"></div>
          </div>

          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center px-4 sm:px-8 max-w-3xl">
              <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                {{ slide.title }}
              </h2>
              <p class="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-4 font-semibold animate-fade-in">
                {{ slide.subtitle }}
              </p>
              <p class="text-base sm:text-lg text-blue-200 animate-fade-in">
                {{ slide.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all"
          :class="currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-in-out forwards;
}
</style>
