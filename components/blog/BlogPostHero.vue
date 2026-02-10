<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

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
        <nav class="mb-6 text-sm">
          <ol class="flex items-center space-x-2 text-blue-200">
            <li>
              <NuxtLink :href="`/${currentLang}`" class="hover:text-white transition-colors">
                {{ t('common.home') }}
              </NuxtLink>
            </li>
            <li>/</li>
            <li>
              <NuxtLink :href="`/${currentLang}/blogs`" class="hover:text-white transition-colors">
                {{ t('common.blogs') }}
              </NuxtLink>
            </li>
            <li>/</li>
            <li class="text-white">{{ category }}</li>
          </ol>
        </nav>

        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {{ title }}
        </h1>

        <div class="flex flex-wrap items-center gap-4 text-blue-100">
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
            </svg>
            {{ date }}
          </div>
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            {{ author }}
          </div>
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
              <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
            </svg>
            {{ category }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
