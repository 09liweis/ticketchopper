<script setup>
import { useI18n } from 'vue-i18n'
import { COMPANY_ADDRESS, PHONE_NUMBER, WECHAT_NUMBER } from '../constant/text';

const { t, locale } = useI18n()
</script>

<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Company Info -->
        <div>
          <h3 class="text-xl font-bold mb-4">{{ t('footer.companyName') }}</h3>
          <p class="text-gray-400 text-sm">{{ t('footer.description') }}</p>
        </div>

        <!-- Services Links -->
        <div>
          <h4 class="font-semibold mb-4">{{ t('nav.services') }}</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><NuxtLink :to="`/${locale}/services#dui`" class="hover:text-white transition">{{ t('services.items.dui.title') }}</NuxtLink></li>
            <li><NuxtLink :to="`/${locale}#traffic`" class="hover:text-white transition">{{ t('traffic.title') }}</NuxtLink></li>
            <li><NuxtLink :to="`/${locale}/services`" class="hover:text-white transition">{{ t('services.typesTitle') }}</NuxtLink></li>
            <li><NuxtLink :to="`/${locale}/contact`" class="hover:text-white transition">{{ t('contact.freeConsultation') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-4">{{ t('common.home') }}</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><NuxtLink :to="`/${locale}/about-us`" class="hover:text-white transition">{{ t('nav.about') }}</NuxtLink></li>
            <li><NuxtLink :to="`/${locale}/blogs`" class="hover:text-white transition">{{ t('nav.blog') }}</NuxtLink></li>
            <li><NuxtLink :to="`/${locale}/faq`" class="hover:text-white transition">{{ t('nav.faq') }}</NuxtLink></li>
            <li><NuxtLink :to="`/${locale}/contact`" class="hover:text-white transition">{{ t('nav.contact') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-semibold mb-4">{{ t('nav.contact') }}</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li class="flex items-center">
              <span class="mr-2">📞</span>
              <a :href="`tel:${PHONE_NUMBER}`" class="hover:text-white transition">{{ PHONE_NUMBER }}</a>
            </li>
            <li class="flex items-start">
              <span class="mr-2">📍</span>
              <span>{{ COMPANY_ADDRESS }}</span>
            </li>
            <li class="flex items-center">
              <span class="mr-2">WeChat</span>
              <span>{{ WECHAT_NUMBER }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; {{new Date().getFullYear()}} {{ t('footer.companyName') }}. {{ t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>
