<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { COMPANY_ADDRESS, PHONE_NUMBER, WECHAT_NUMBER } from '../../constant/text'

const { t } = useI18n()
const route = useRoute()
const currentLang = computed(() => route.params.lang || 'zh')
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
          <p class="text-sm text-blue-100 mb-2">{{ t('common.phone') }}</p>
          <a :href="`tel:${PHONE_NUMBER}`" class="text-xl font-bold hover:text-blue-200">{{ PHONE_NUMBER }}</a>
        </div>
        <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
          <p class="text-sm text-blue-100 mb-2">WeChat</p>
          <p class="text-xl font-bold">{{ WECHAT_NUMBER }}</p>
        </div>
        <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
          <p class="text-sm text-blue-100 mb-2">{{ t('common.address') }}</p>
          <p class="text-sm font-medium">{{ COMPANY_ADDRESS }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
