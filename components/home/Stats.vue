<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stats = [
  { key: 'years', value: '20+' },
  { key: 'completed', value: '1825' },
  { key: 'happyClients', value: '532' },
  { key: 'team', value: '27' }
]
</script>

<template>
  <section class="py-16 bg-blue-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.key" class="border-l-2 border-blue-400 pl-4">
          <p class="text-4xl font-bold mb-2">{{ stat.value }}</p>
          <p class="text-blue-100 text-sm">{{ t(`stats.${stat.key}`) }}</p>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p class="text-xl text-blue-100 mb-6">{{ t('stats.cases') }}</p>
        <a href="#" class="inline-block px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-100 transition-colors">
          {{ t('stats.freeConsult') }}
        </a>
      </div>
    </div>
  </section>
</template>
