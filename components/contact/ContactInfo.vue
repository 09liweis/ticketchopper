<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  currentLang: {
    type: String,
    default: 'zh'
  }
})

const { t } = useI18n()
</script>

<template>
  <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Contact Information -->
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            {{ currentLang === 'en' ? 'Contact Information' : '联系信息' }}
          </h2>
          <p class="text-gray-600 text-lg mb-12">
            {{ currentLang === 'en'
              ? 'Reach out to us through any of these channels'
              : '通过以下任何渠道与我们联系'
            }}
          </p>

          <div class="space-y-6">
            <!-- Phone -->
            <div class="group">
              <div class="flex items-start p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300">
                <div class="flex-shrink-0 mr-5">
                  <div class="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-900 text-white shadow-lg">
                    <span class="text-2xl">📞</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">
                    {{ currentLang === 'en' ? 'Phone' : '电话' }}
                  </h3>
                  <a href="tel:289-809-8899" class="text-blue-900 hover:text-blue-700 font-semibold text-lg transition-colors">
                    289-809-8899
                  </a>
                  <p class="text-gray-600 text-sm mt-1">
                    {{ currentLang === 'en' ? 'Available 24/7' : '全天24小时可用' }}
                  </p>
                </div>
              </div>
            </div>

            <!-- WeChat -->
            <div class="group">
              <div class="flex items-start p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300">
                <div class="flex-shrink-0 mr-5">
                  <div class="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-900 text-white shadow-lg">
                    <span class="text-2xl">💬</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">
                    {{ currentLang === 'en' ? 'WeChat' : '微信' }}
                  </h3>
                  <p class="text-blue-900 font-semibold text-lg">1020613826</p>
                  <p class="text-gray-600 text-sm mt-1">
                    {{ currentLang === 'en' ? 'Preferred for Chinese clients' : '受中文客户欢迎' }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Address -->
            <div class="group">
              <div class="flex items-start p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300">
                <div class="flex-shrink-0 mr-5">
                  <div class="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-red-500 to-red-900 text-white shadow-lg">
                    <span class="text-2xl">📍</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">
                    {{ currentLang === 'en' ? 'Office Address' : '办公地址' }}
                  </h3>
                  <p class="text-gray-700 font-semibold leading-relaxed">203-1943 Ironoak Way<br />Oakville, ON L6H 3V7<br />Canada</p>
                </div>
              </div>
            </div>

            <!-- Office Hours -->
            <div class="group">
              <div class="flex items-start p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300">
                <div class="flex-shrink-0 mr-5">
                  <div class="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-purple-500 to-purple-900 text-white shadow-lg">
                    <span class="text-2xl">🕐</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">
                    {{ currentLang === 'en' ? 'Office Hours' : '办公时间' }}
                  </h3>
                  <p class="text-gray-700 font-medium leading-relaxed">
                    {{ currentLang === 'en' ? 'Mon - Fri: 9:00 AM - 6:00 PM' : '周一至周五：上午9:00 - 下午6:00' }}<br />
                    {{ currentLang === 'en' ? 'Sat - Sun: By Appointment' : '周六至周日：预约制' }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Google Map -->
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            {{ currentLang === 'en' ? 'Our Location' : '我们的位置' }}
          </h2>
          <p class="text-gray-600 text-lg mb-8">
            {{ currentLang === 'en'
              ? 'Find us on the map'
              : '在地图上找到我们'
            }}
          </p>
          <div class="rounded-2xl overflow-hidden shadow-2xl h-96 md:h-full md:min-h-96 border-4 border-gray-200">
            <iframe
              class="w-full h-full"
              loading="lazy"
              allowfullscreen=""
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.3887826463837!2d-79.8527!3d43.4516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b1e6c0b0b0b0b%3A0x0!2s203-1943%20Ironoak%20Way%2C%20Oakville%2C%20ON%20L6H%203V7!5e0!3m2!1sen!2sca!4v1675000000000"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
