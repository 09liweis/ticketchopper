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
        <!-- Main Content -->
        <div class="prose prose-lg max-w-none" v-html="content"></div>

        <!-- Related Posts Section -->
        <div class="mt-16 pt-8 border-t border-gray-200">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">
            {{ currentLang === 'en' ? 'Related Articles' : '相关文章' }}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Placeholder for related posts -->
            <div class="text-gray-500 text-center col-span-2 py-8">
              {{ currentLang === 'en' 
                ? 'Related articles will appear here' 
                : '相关文章将在这里显示' 
              }}
            </div>
          </div>
        </div>

        <!-- Share Section -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <div class="flex items-center justify-between">
            <h4 class="text-lg font-semibold text-gray-900">
              {{ currentLang === 'en' ? 'Share this article' : '分享这篇文章' }}
            </h4>
            <div class="flex space-x-4">
              <!-- Social share buttons placeholder -->
              <button class="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button class="p-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button class="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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
/* Prose styles for blog content */
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