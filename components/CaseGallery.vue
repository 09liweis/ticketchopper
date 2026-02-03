<script setup>
import { ref, computed } from 'vue'

defineProps({
  currentLang: {
    type: String,
    default: 'en'
  }
})

// Generate array of case images (1-40)
const caseImages = computed(() => {
  const images = []
  for (let i = 1; i <= 40; i++) {
    images.push({
      id: i,
      src: `/images/cases/case-${i}.jpg`,
      alt: `Case ${i}`
    })
  }
  return images
})

const selectedImage = ref(null)

const openLightbox = (image) => {
  selectedImage.value = image
}

const closeLightbox = () => {
  selectedImage.value = null
}

const goToNext = () => {
  if (!selectedImage.value) return
  const currentIndex = caseImages.value.findIndex(img => img.id === selectedImage.value.id)
  if (currentIndex < caseImages.value.length - 1) {
    selectedImage.value = caseImages.value[currentIndex + 1]
  }
}

const goToPrev = () => {
  if (!selectedImage.value) return
  const currentIndex = caseImages.value.findIndex(img => img.id === selectedImage.value.id)
  if (currentIndex > 0) {
    selectedImage.value = caseImages.value[currentIndex - 1]
  }
}
</script>

<template>
  <section class="case-gallery">
    <div class="container mx-auto px-4 py-12">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
        {{ currentLang === 'en' ? 'Our Case Gallery' : '案例库' }}
      </h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        {{ currentLang === 'en' ? 'View some of our successful cases and client testimonials' : '查看我们的成功案例和客户证言' }}
      </p>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div
          v-for="image in caseImages"
          :key="image.id"
          class="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
          @click="openLightbox(image)"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Transition name="fade">
      <div
        v-if="selectedImage"
        class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        @click.self="closeLightbox"
      >
        <div class="relative max-w-4xl w-full">
          <!-- Close Button -->
          <button
            @click="closeLightbox"
            class="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Image -->
          <img
            :src="selectedImage.src"
            :alt="selectedImage.alt"
            class="w-full rounded-lg"
          />

          <!-- Navigation Buttons -->
          <button
            v-if="caseImages.findIndex(img => img.id === selectedImage.id) > 0"
            @click="goToPrev"
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-gray-300 transition-colors"
            aria-label="Previous image"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            v-if="caseImages.findIndex(img => img.id === selectedImage.id) < caseImages.length - 1"
            @click="goToNext"
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-gray-300 transition-colors"
            aria-label="Next image"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Image Counter -->
          <div class="text-center text-white mt-4">
            {{ caseImages.findIndex(img => img.id === selectedImage.id) + 1 }} / {{ caseImages.length }}
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
