<script setup>
defineProps({
  currentLang: {
    type: String,
    default: 'zh'
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16">
    <div class="absolute inset-0 bg-[url('/images/legal-bg.jpg')] opacity-10 bg-cover bg-center"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="mb-6 text-sm">
          <ol class="flex items-center space-x-2 text-blue-200">
            <li>
              <a :href="`/${currentLang}`" class="hover:text-white transition-colors">
                {{ currentLang === 'en' ? 'Home' : '首页' }}
              </a>
            </li>
            <li>/</li>
            <li>
              <a :href="`/${currentLang}/blog`" class="hover:text-white transition-colors">
                {{ currentLang === 'en' ? 'Blog' : '博文' }}
              </a>
            </li>
            <li>/</li>
            <li class="text-white">{{ category }}</li>
          </ol>
        </nav>

        <!-- Title -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {{ title }}
        </h1>

        <!-- Meta Info -->
        <div class="flex flex-wrap items-center gap-4 text-blue-100">
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {{ date }}
          </div>
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {{ author }}
          </div>
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            {{ category }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>