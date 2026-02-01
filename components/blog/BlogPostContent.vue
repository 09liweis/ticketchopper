<script setup>
defineProps({
  currentLang: {
    type: String,
    default: 'zh'
  },
  content: {
    type: String,
    required: true
  }
})
</script>

<template>
  <article class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="prose prose-lg max-w-none" v-html="content"></div>

        <div class="mt-16 pt-8 border-t border-gray-200">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">
            {{ currentLang === 'en' ? 'Related Articles' : '相关文章' }}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="text-gray-500 text-center col-span-2 py-8">
              {{ currentLang === 'en'
                ? 'Related articles will appear here'
                : '相关文章将在这里显示'
              }}
            </div>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200">
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-semibold text-gray-900">
              {{ currentLang === 'en' ? 'Share this article' : '分享这篇文章' }}
            </h4>
            <div class="flex space-x-4">
              <button class="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <Icon name="mdi:facebook" class="w-5 h-5" />
              </button>
              <button class="p-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors">
                <Icon name="mdi:twitter" class="w-5 h-5" />
              </button>
              <button class="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
                <Icon name="mdi:whatsapp" class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
:deep(.prose) {
  color: #374151;
}

:deep(.prose h2) {
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #111827;
}

:deep(.prose h3) {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #1f2937;
}

:deep(.prose h4) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  color: #374151;
}

:deep(.prose p) {
  margin-bottom: 1.25rem;
  line-height: 1.75;
}

:deep(.prose ul) {
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
  list-style-type: disc;
}

:deep(.prose li) {
  margin-bottom: 0.5rem;
  line-height: 1.75;
}

:deep(.prose strong) {
  font-weight: 600;
  color: #111827;
}
</style>
