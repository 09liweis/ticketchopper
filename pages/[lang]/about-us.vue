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
const currentLang = lang
</script>

<template>
  <div>
    <AboutHero :current-lang="currentLang" />
    <AboutLeaderStory :current-lang="currentLang" />
    <AboutTeam :current-lang="currentLang" />
    <AboutClients :current-lang="currentLang" />
    <AboutWhyChooseUs :current-lang="currentLang" />
    <HomeContactForm :current-lang="currentLang" />
  </div>
</template>
