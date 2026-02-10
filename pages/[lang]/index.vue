<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const { locale } = useI18n()

const lang = route.params.lang || 'zh'
locale.value = lang
const currentLang = lang
</script>

<template>
  <!-- <HomeHeroCarousel /> -->
  <HomeHero />
  <HomeServices />
  <HomeTrafficViolations />
  <CaseGallery :current-lang="currentLang" />
  <HomeStats />
  <HomeContactForm />
</template>
