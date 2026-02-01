<script setup>
defineProps({
  currentLang: {
    type: String,
    default: 'zh'
  }
})
</script>

<template>
  <section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
    <div class="absolute inset-0 opacity-10"></div>
    <div class="container mx-auto px-4 relative z-10">
      <nav class="flex items-center space-x-2 text-blue-200 mb-6">
        <a :href="`/${currentLang}`" class="hover:text-white transition-colors">
          {{ currentLang === 'en' ? 'Home' : '首页' }}
        </a>
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M8.59 16.58L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.58z"/>
        </svg>
        <span class="text-white">{{ currentLang === 'en' ? 'FAQ' : '常问问题' }}</span>
      </nav>

      <h1 class="text-5xl md:text-6xl font-bold mb-4">
        {{ currentLang === 'en' ? 'FAQ' : '常问问题' }}
      </h1>
      <p class="text-xl text-blue-100">
        {{ currentLang === 'en' ? 'Frequently Asked Questions' : '常见问题' }}
      </p>
    </div>
  </section>
</template>
