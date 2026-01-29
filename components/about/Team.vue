<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const currentLang = route.params.lang || 'zh'
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">
        {{ currentLang === 'en' ? 'Our Diverse Legal Team' : '律师团队：多元化的专业背景' }}
      </h2>

      <div class="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-900">
        <p class="text-lg text-gray-700 leading-relaxed">
          {{ currentLang === 'en'
            ? 'Our legal team consists of professionals from different backgrounds, including local, Jewish, and Irish-Canadian paralegals and criminal lawyers. These team members not only possess extensive legal knowledge but also bring invaluable experience from former OPP officers, police officers, prosecutors, and judges. This diverse background makes our team adept at handling various cases.'
            : '我们的律师团队由来自不同背景的专业人士组成，包括本地、犹太、爱尔兰裔的paralegal和criminal lawyers。这些团队成员不仅拥有丰富的法律知识，还具备前任OPP、警察、检控官、法官的宝贵经验。这样多元化的背景使我们的团队在处理各种案件时更加得心应手。' }}
        </p>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center p-4 bg-blue-50 rounded">
            <div class="text-4xl mb-2">👨‍⚖️</div>
            <h3 class="font-bold text-gray-900 mb-2">{{ currentLang === 'en' ? 'Criminal Lawyers' : '刑事律师' }}</h3>
            <p class="text-sm text-gray-600">{{ currentLang === 'en' ? 'Experienced in criminal defense' : '刑事辩护专家' }}</p>
          </div>
          <div class="text-center p-4 bg-blue-50 rounded">
            <div class="text-4xl mb-2">🚗</div>
            <h3 class="font-bold text-gray-900 mb-2">{{ currentLang === 'en' ? 'Traffic Law' : '交通法' }}</h3>
            <p class="text-sm text-gray-600">{{ currentLang === 'en' ? 'Traffic ticket specialists' : '交通罚单专家' }}</p>
          </div>
          <div class="text-center p-4 bg-blue-50 rounded">
            <div class="text-4xl mb-2">👮</div>
            <h3 class="font-bold text-gray-900 mb-2">{{ currentLang === 'en' ? 'Law Enforcement' : '执法背景' }}</h3>
            <p class="text-sm text-gray-600">{{ currentLang === 'en' ? 'Former OPP, police, prosecutors' : 'OPP、警察、检控官背景' }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
