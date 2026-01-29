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
        {{ currentLang === 'en' ? 'Our Valued Clients' : '我们的客户：名人与VVIP' }}
      </h2>
      <p class="text-lg text-gray-600 text-center mb-12">
        {{ currentLang === 'en'
          ? 'We serve a diverse clientele of celebrities and VVIP clients across multiple industries'
          : '我们服务众多名人和VVIP客户，涵盖多个行业' }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="client in clients" :key="client.name" class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center border border-blue-200">
          <div class="text-4xl mb-4">⭐</div>
          <h3 class="text-lg font-bold text-blue-900 mb-2">{{ client.name }}</h3>
          <p class="text-sm text-gray-700">{{ client.title }}</p>
        </div>
      </div>

      <div class="mt-12 p-8 bg-blue-50 rounded-lg border-l-4 border-blue-900">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ currentLang === 'en' ? 'Cross-Border Expertise' : '专业优势：跨区域服务能力' }}</h3>
        <p class="text-lg text-gray-700 leading-relaxed">
          {{ currentLang === 'en'
            ? 'Our company has unique advantages in handling traffic tickets across multiple jurisdictions. We can simultaneously handle cases in Alberta, Quebec, and New York State - a capability that is extremely rare in the industry, demonstrating our professional expertise and broad influence.'
            : '我们公司在处理交通告票方面具有独特优势，能够同时处理阿尔伯塔省、魁北克省和纽约州的案件。这一点在业内极为罕见，展示了我们的专业能力和广泛影响力。' }}
        </p>
      </div>
    </div>
  </section>
</template>
