<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-5xl font-bold mb-4">{{ currentLang === 'en' ? 'About Us' : '关于我们' }}</h1>
      <p class="text-xl text-blue-100">{{ currentLang === 'en' ? 'Welcome to Wensheng Legal Specialists' : '欢迎来到稳胜刑事、告票、车险专门店' }}</p>
    </div>
  </section>
</template>
