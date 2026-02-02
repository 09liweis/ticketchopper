<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-5xl font-bold mb-4">{{ t('common.aboutUs') }}</h1>
      <p class="text-xl text-blue-100">{{ t('common.welcome') }}</p>
    </div>
  </section>
</template>
