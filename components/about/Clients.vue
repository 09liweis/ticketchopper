<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const currentLang = route.params.lang || 'zh'

const clients = [
  { name: 'Leo', title: currentLang === 'en' ? 'Real Estate Tycoon' : '地产大亨' },
  { name: 'Ivan', title: currentLang === 'en' ? '168 Sushi Owner' : '168寿司老板' },
  { name: 'Howard', title: currentLang === 'en' ? 'Luxury Car Salesman' : '豪车销售王子' },
  { name: 'Mike', title: currentLang === 'en' ? 'Real Estate Expert' : '房地产专家' },
  { name: 'Eric', title: currentLang === 'en' ? 'Insurance Sales Champion' : '寿险销售冠军' },
  { name: 'Jacky', title: currentLang === 'en' ? 'Education Business Owner' : 'EASY EDUCATION老板' },
  { name: 'Jeffrey', title: currentLang === 'en' ? 'Youngest TikTok Pilot' : '最年轻的TikTok飞行员' }
]
</script>

<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-4 text-center">
        {{ t("clients.title") }}
      </h2>
      <p class="text-lg text-gray-600 text-center mb-12">
        {{ t("clients.subtitle") }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="client in clients" :key="client.name" class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center border border-blue-200">
          <div class="text-4xl mb-4">⭐</div>
          <h3 class="text-lg font-bold text-blue-900 mb-2">{{ client.name }}</h3>
          <p class="text-sm text-gray-700">{{ client.title }}</p>
        </div>
      </div>

      <div class="mt-12 p-8 bg-blue-50 rounded-lg border-l-4 border-blue-900">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ t("clients.anotherTitle") }}</h3>
        <p class="text-lg text-gray-700 leading-relaxed">
          {{ t("clients.description") }}
        </p>
      </div>
    </div>
  </section>
</template>
