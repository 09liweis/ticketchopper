<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { locale, t } = useI18n()

const lang = (route.params.lang === 'en') ? 'en' : 'zh'
locale.value = lang

// Make currentLang available globally to components
const currentLang = lang
</script>

<template>
  <div class="bg-white">
    <Header />
    <Hero :current-lang="currentLang" />
    <Services :current-lang="currentLang" />
    <TrafficViolations />
    <Stats :current-lang="currentLang" />
    <ContactForm :current-lang="currentLang" />
    <Footer :current-lang="currentLang" />
  </div>
</template>
