<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale: currentLang } = useI18n()
</script>

<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Company Info -->
        <div>
          <h3 class="text-xl font-bold mb-4">Ticketchopper</h3>
          <p class="text-gray-400 text-sm">Professional legal services for traffic violations and criminal defense.</p>
        </div>

        <!-- Services Links -->
        <div>
          <h4 class="font-semibold mb-4">{{ currentLang === 'en' ? 'Services' : '服务' }}</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="#" class="hover:text-white transition">{{ currentLang === 'en' ? 'DUI Defense' : '醉驾辩护' }}</a></li>
            <li><a href="#" class="hover:text-white transition">{{ currentLang === 'en' ? 'Traffic Tickets' : '交通罚单' }}</a></li>
            <li><a href="#" class="hover:text-white transition">{{ currentLang === 'en' ? 'Criminal Defense' : '刑事辩护' }}</a></li>
            <li><a href="#" class="hover:text-white transition">{{ currentLang === 'en' ? 'Free Consultation' : '免费咨询' }}</a></li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-4">{{ currentLang === 'en' ? 'Quick Links' : '快速链接' }}</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="#" class="hover:text-white transition">{{ t('nav.about') }}</a></li>
            <li><a href="#" class="hover:text-white transition">{{ t('nav.blog') }}</a></li>
            <li><a href="#" class="hover:text-white transition">{{ t('nav.faq') }}</a></li>
            <li><a href="#" class="hover:text-white transition">{{ t('nav.contact') }}</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-semibold mb-4">{{ currentLang === 'en' ? 'Contact' : '联系方式' }}</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li class="flex items-center">
              <span class="mr-2">📞</span>
              <a href="tel:2898098899" class="hover:text-white transition">{{ t('site.phone') }}</a>
            </li>
            <li class="flex items-start">
              <span class="mr-2">📍</span>
              <span>{{ t('site.address') }}</span>
            </li>
            <li class="flex items-center">
              <span class="mr-2">WeChat</span>
              <span>{{ t('site.wechat') }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 Ticketchopper. {{ currentLang === 'en' ? 'All rights reserved.' : '版权所有。' }}</p>
      </div>
    </div>
  </footer>
</template>
