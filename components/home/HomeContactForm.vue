<script setup>
defineProps({
  currentLang: {
    type: String,
    default: 'zh'
  }
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

const submitForm = () => {
  submitted.value = true
  setTimeout(() => {
    form.value = { name: '', email: '', phone: '', subject: '', message: '' }
    submitted.value = false
  }, 2000)
}
</script>

<template>
  <section class="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-center">
          {{ currentLang === 'en' ? 'Free Consultation' : '免费咨询' }}
        </h2>
        <p class="text-center text-blue-100 mb-8">
          {{ currentLang === 'en'
            ? 'Contact us today to discuss your case'
            : '今天联系我们讨论您的案件'
          }}
        </p>

        <form @submit.prevent="submitForm" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              v-model="form.name"
              type="text"
              :placeholder="currentLang === 'en' ? 'Your Name *' : '您的名字 *'"
              required
              class="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              v-model="form.email"
              type="email"
              :placeholder="currentLang === 'en' ? 'Your Email *' : '您的电子邮件 *'"
              required
              class="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <input
            v-model="form.phone"
            type="tel"
            :placeholder="currentLang === 'en' ? 'Your Phone *' : '您的电话 *'"
            required
            class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            v-model="form.subject"
            type="text"
            :placeholder="currentLang === 'en' ? 'Subject' : '主题'"
            class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            v-model="form.message"
            :placeholder="currentLang === 'en' ? 'Message *' : '信息 *'"
            rows="5"
            required
            class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            {{ currentLang === 'en' ? 'Submit Now' : '现在提交' }}
          </button>

          <div v-if="submitted" class="text-center text-green-300">
            {{ currentLang === 'en' ? 'Thank you! We will contact you soon.' : '谢谢！我们很快会与您联系。' }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
