<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'

const route = useRoute()
const { t } = useI18n()
const router = useRouter()
const currentLang = route.params.lang || 'zh'
const mobileMenuOpen = ref(false)

const navLinks = computed(() => [
  { key: 'nav.home', path: '/' },
  { key: 'nav.about', path: '/about-us' },
  { key: 'nav.services', path: '/services' },
  { key: 'nav.blog', path: '/blog' },
  { key: 'nav.faq', path: '/faq' },
  { key: 'nav.contact', path: '/contact' }
])

const toggleLang = () => {
  const newLang = currentLang === 'en' ? 'zh' : 'en'
  router.push(`/${newLang}`)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <NuxtLink :to="`/${currentLang}`" class="block">
            <h1 class="text-2xl font-bold text-blue-900">Ticketchopper</h1>
            <p class="text-xs text-gray-600">{{ currentLang === 'en' ? 'Legal Services' : '法律服务' }}</p>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.key"
            :to="`/${currentLang}${link.path}`"
            class="text-gray-700 hover:text-blue-900 font-medium text-sm transition-colors"
          >
            {{ t(link.key) }}
          </NuxtLink>
        </nav>

        <!-- Language Switcher & Phone & Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <button
            @click="toggleLang"
            class="px-3 py-1 text-sm font-medium rounded-md bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors"
          >
            {{ currentLang === 'en' ? '中文' : 'EN' }}
          </button>
          <a href="tel:2898098899" class="hidden sm:inline-block text-blue-900 font-semibold hover:text-blue-700 transition-colors">
            {{ t('site.phone') }}
          </a>
          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <nav
        v-if="mobileMenuOpen"
        class="md:hidden border-t border-gray-200 bg-white"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.key"
            :to="`/${currentLang}${link.path}`"
            class="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-900 font-medium transition-colors"
            @click="closeMobileMenu"
          >
            {{ t(link.key) }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>
