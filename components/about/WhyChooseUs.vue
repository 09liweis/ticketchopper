<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const currentLang = route.params.lang || 'zh'

const reasons = [
  {
    icon: '⚖️',
    title: currentLang === 'en' ? 'Legal Expertise' : '法律律师',
    desc: currentLang === 'en' ? 'Contact us now with experienced...' : '立即联系我们经验...'
  },
  {
    icon: '📅',
    title: currentLang === 'en' ? 'Years of Experience' : '多年经验',
    desc: currentLang === 'en' ? 'Trust our professional knowledge...' : '相信我们的专业知识...'
  },
  {
    icon: '🏆',
    title: currentLang === 'en' ? 'Legal Certification' : '法律证书',
    desc: currentLang === 'en' ? 'Get our certified expertise...' : '获得我们经过认证的...'
  }
]
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 text-center">
        {{ t('whyChooseUs.title') }}
      </h2>
      <p class="text-lg text-gray-600 text-center mb-12">
        {{ t('whyChooseUs.description') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(reason, idx) in reasons" :key="idx" class="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-900">
          <div class="text-5xl mb-4">{{ reason.icon }}</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ reason.title }}</h3>
          <p class="text-gray-700">{{ reason.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
