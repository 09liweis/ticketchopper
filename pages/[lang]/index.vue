<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const { locale } = useI18n()

const lang = (route.params.lang === 'en') ? 'en' : 'zh'
locale.value = lang
</script>

<template>
  <div>
    <HomeHero />
    <HomeServices />
    <HomeTrafficViolations />
    <HomeStats />
    <HomeContactForm />
  </div>
</template>
