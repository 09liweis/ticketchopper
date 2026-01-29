<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const currentLang = route.params.lang || 'zh'
</script>

<template>
  <section class="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <p class="text-2xl sm:text-3xl font-serif italic mb-4">{{ t('site.quote') }}</p>
        <p class="text-lg font-light">{{ t('intro.paragraph') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
          <p class="text-sm text-blue-100 mb-2">{{ currentLang === 'en' ? 'Phone' : '电话' }}</p>
          <a href="tel:2898098899" class="text-xl font-bold hover:text-blue-200">{{ t('site.phone') }}</a>
        </div>
        <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
          <p class="text-sm text-blue-100 mb-2">WeChat</p>
          <p class="text-xl font-bold">{{ t('site.wechat') }}</p>
        </div>
        <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
          <p class="text-sm text-blue-100 mb-2">{{ currentLang === 'en' ? 'Address' : '地址' }}</p>
          <p class="text-sm font-medium">{{ t('site.address') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
