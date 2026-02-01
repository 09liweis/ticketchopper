<script setup>
defineProps({
  currentLang: {
    type: String,
    default: 'zh'
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16">
    <div class="absolute inset-0 bg-[url('/images/legal-bg.jpg')] opacity-10 bg-cover bg-center"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto">
        <nav class="mb-6 text-sm">
          <ol class="flex items-center space-x-2 text-blue-200">
            <li>
              <a :href="`/${currentLang}`" class="hover:text-white transition-colors">
                {{ currentLang === 'en' ? 'Home' : '首页' }}
              </a>
            </li>
            <li>/</li>
            <li>
              <a :href="`/${currentLang}/blog`" class="hover:text-white transition-colors">
                {{ currentLang === 'en' ? 'Blog' : '博文' }}
              </a>
            </li>
            <li>/</li>
            <li class="text-white">{{ category }}</li>
          </ol>
        </nav>

        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {{ title }}
        </h1>

        <div class="flex flex-wrap items-center gap-4 text-blue-100">
          <div class="flex items-center">
            <Icon name="mdi:calendar" class="w-5 h-5 mr-2" />
            {{ date }}
          </div>
          <div class="flex items-center">
            <Icon name="mdi:account" class="w-5 h-5 mr-2" />
            {{ author }}
          </div>
          <div class="flex items-center">
            <Icon name="mdi:folder" class="w-5 h-5 mr-2" />
            {{ category }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
