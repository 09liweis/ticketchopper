<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const currentLang = route.params.lang || 'zh'

const services = [
  { key: 'dui', icon: '🚗', slug: 'impaired-driving-cannabis-laws' },
  { key: 'domestic', icon: '⚖️', slug: 'domestic-violence-assault-canada' },
  { key: 'theft', icon: '📋', slug: 'petty-theft-concept-consequences' },
  { key: 'dangerous', icon: '⚠️', slug: 'dangerous-driving-definition' },
  { key: 'fraud', icon: '🔍', slug: 'fraud-definition-consequences' },
  { key: 'mischief', icon: '📌', slug: 'mischief-definition-consequences' }
]

const getBlogUrl = (slug) => {
  const lang = currentLang || 'zh'
  return `/${lang}/blog/${slug}`
}
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">{{ t('services.title') }}</h2>
        <p class="text-xl text-gray-600">{{ t('services.typesTitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.key"
          class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-900"
        >
          <div class="text-4xl mb-4">{{ service.icon }}</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">
            {{ t(`services.items.${service.key}.title`) }}
          </h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            {{ t(`services.items.${service.key}.desc`) }}
          </p>
          <NuxtLink :to="getBlogUrl(service.slug)" class="text-blue-900 font-semibold hover:text-blue-700">
            {{ currentLang === 'en' ? 'Learn More →' : '了解详情 →' }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
