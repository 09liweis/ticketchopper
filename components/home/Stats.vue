<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const { t } = useI18n()
const route = useRoute()
const currentLang = computed(() => route.params.lang || 'zh')

const stats = [
  { key: 'years', value: '20+' },
  { key: 'completed', value: '1825' },
  { key: 'happyClients', value: '98%' },
  { key: 'team', value: '10+' }
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
        <NuxtLink :to="`/${currentLang}/contact`" class="inline-block px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-100 transition-colors">
          {{ t('stats.freeConsult') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
