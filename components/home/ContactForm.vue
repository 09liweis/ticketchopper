<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const currentLang = route.params.lang || 'zh'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  // TODO: Add form submission logic
  setTimeout(() => {
    isSubmitting.value = false
    alert('Message sent! We will contact you soon.')
    form.value = { name: '', email: '', phone: '', subject: '', message: '' }
  }, 1000)
}
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">{{ t('contact.title') }}</h2>
        <p class="text-gray-600">{{ currentLang === 'en' ? 'Get your free consultation today' : '今天获取免费咨询' }}</p>
      </div>

      <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-lg shadow-md">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">
              {{ t('contact.form.name') }}
            </label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
              placeholder=""
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">
              {{ t('contact.form.email') }}
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
              placeholder=""
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">
              {{ t('contact.form.phone') }}
            </label>
            <input
              v-model="form.phone"
              type="tel"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
              placeholder=""
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">
              {{ t('contact.form.subject') }}
            </label>
            <input
              v-model="form.subject"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition"
              placeholder=""
            />
          </div>
        </div>

        <div class="mt-6">
          <label class="block text-sm font-semibold text-gray-900 mb-2">
            {{ t('contact.form.message') }}
          </label>
          <textarea
            v-model="form.message"
            required
            rows="5"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="mt-6 w-full px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 disabled:bg-gray-400 transition-colors"
        >
          {{ isSubmitting ? (currentLang === 'en' ? 'Submitting...' : '提交中...') : t('contact.form.submit') }}
        </button>
      </form>
    </div>
  </section>
</template>
