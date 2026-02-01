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
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.26c0-.85.63-1.63 1.67-1.63.98 0 1.56.71 1.56 1.63v4.26h2.5M6.5 8.5a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3m-1 12h2.5V9.5h-2.5v11z"/>
                </svg>
              </button>
              <button class="p-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.15 1.1C7.7 9.86 4.1 7.84 1.64 4.77c-.42.72-.66 1.56-.66 2.46 0 1.67.85 3.14 2.14 4.01-.79-.03-1.54-.24-2.19-.59v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.63 1.91 2.4 3.3 4.5 3.34-1.65 1.29-3.73 2.06-5.99 2.06-.39 0-.77-.02-1.15-.07 2.14 1.37 4.68 2.17 7.39 2.17 8.87 0 13.7-7.35 13.7-13.7 0-.21 0-.41-.01-.62.94-.68 1.76-1.53 2.41-2.5z"/>
                </svg>
              </button>
              <button class="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a3.426 3.426 0 0 0-3.422 3.426c0 .955.388 1.844 1.013 2.465a3.427 3.427 0 0 0 2.409 1.02h.004a3.427 3.427 0 0 0 3.422-3.422 3.426 3.426 0 0 0-1.013-2.465 3.426 3.426 0 0 0-2.409-1.024m0-2a5.43 5.43 0 0 1 5.422 5.423c0 2.997-2.425 5.422-5.423 5.422h-.006a5.42 5.42 0 0 1-3.809-1.588 5.432 5.432 0 0 1-1.613-3.834 5.43 5.43 0 0 1 5.429-5.423M3.21 0a3.207 3.207 0 0 0-3.206 3.21v17.58A3.207 3.207 0 0 0 3.21 24h17.58a3.207 3.207 0 0 0 3.21-3.21V3.21A3.207 3.207 0 0 0 20.79 0H3.21z"/>
                </svg>
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
