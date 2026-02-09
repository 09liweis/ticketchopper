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
        {{ t("team.title") }}
      </h2>

      <div class="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-900">
        <p class="text-lg text-gray-700 leading-relaxed">
          {{ t("team.subtitle") }}
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
