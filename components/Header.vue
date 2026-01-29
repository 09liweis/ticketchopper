<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()
const currentLang = route.params.lang || 'zh'

const toggleLang = () => {
  const newLang = currentLang === 'en' ? 'zh' : 'en'
  useRouter().push(`/${newLang}`)
}
</script>

<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <h1 class="text-2xl font-bold text-blue-900">Ticketchopper</h1>
          <p class="text-xs text-gray-600">{{ currentLang === 'en' ? 'Legal Services' : '法律服务' }}</p>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex space-x-8">
          <a href="#" class="text-gray-700 hover:text-blue-900 font-medium text-sm">{{ t('nav.home') }}</a>
          <a href="#" class="text-gray-700 hover:text-blue-900 font-medium text-sm">{{ t('nav.about') }}</a>
          <a href="#" class="text-gray-700 hover:text-blue-900 font-medium text-sm">{{ t('nav.services') }}</a>
          <a href="#" class="text-gray-700 hover:text-blue-900 font-medium text-sm">{{ t('nav.blog') }}</a>
          <a href="#" class="text-gray-700 hover:text-blue-900 font-medium text-sm">{{ t('nav.faq') }}</a>
          <a href="#" class="text-gray-700 hover:text-blue-900 font-medium text-sm">{{ t('nav.contact') }}</a>
        </nav>

        <!-- Language Switcher & Phone -->
        <div class="flex items-center space-x-4">
          <button
            @click="toggleLang"
            class="px-3 py-1 text-sm font-medium rounded-md bg-blue-100 text-blue-900 hover:bg-blue-200"
          >
            {{ currentLang === 'en' ? '中文' : 'EN' }}
          </button>
          <a href="tel:2898098899" class="hidden sm:inline-block text-blue-900 font-semibold hover:text-blue-700">
            {{ t('site.phone') }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
