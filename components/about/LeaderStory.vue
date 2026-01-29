<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()
const currentLang = route.params.lang || 'zh'
</script>

<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            {{ currentLang === 'en' ? "Johnny's Story" : '领导者介绍：Johnny的故事' }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            {{ currentLang === 'en' 
              ? 'Welcome to our specialized legal practice, a team of experienced and diverse professionals dedicated to providing you with the highest quality legal services. Our team leader, Johnny, moved to Toronto in 1995 and graduated from the University of Toronto.' 
              : '欢迎来到我们的稳胜刑事、告票、车险专门店，一个由经验丰富、多元化的专业人士组成的团队，致力于为您提供最优质的法律服务。我们的团队领袖Johnny，自1995年移居多伦多，毕业于多伦多大学。' }}
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ currentLang === 'en'
              ? "With years of deep involvement in insurance business, Johnny understands the profound impact of criminal and traffic records on insurance premiums. His expertise and rich experience are the core strength of our team."
              : '凭借多年在保险业务的深入从事，Johnny深谙刑事和告票记录对保费所造成的深远影响，他的专业知识和丰富经验是我们团队的核心力量。' }}
          </p>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
          <h3 class="text-2xl font-bold text-blue-900 mb-8">{{ currentLang === 'en' ? 'Practice Areas' : '业务' }}</h3>
          <div class="space-y-6">
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-semibold text-gray-800">{{ currentLang === 'en' ? 'Criminal Law' : '刑事法' }}</span>
                <span class="text-blue-900 font-bold">50%</span>
              </div>
              <div class="w-full bg-gray-300 rounded-full h-3">
                <div class="bg-blue-900 h-3 rounded-full" style="width: 50%;"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-semibold text-gray-800">{{ currentLang === 'en' ? 'Traffic Law' : '交通法' }}</span>
                <span class="text-blue-900 font-bold">40%</span>
              </div>
              <div class="w-full bg-gray-300 rounded-full h-3">
                <div class="bg-blue-900 h-3 rounded-full" style="width: 40%;"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-semibold text-gray-800">{{ currentLang === 'en' ? 'Family Law' : '家庭法' }}</span>
                <span class="text-blue-900 font-bold">10%</span>
              </div>
              <div class="w-full bg-gray-300 rounded-full h-3">
                <div class="bg-blue-900 h-3 rounded-full" style="width: 10%;"></div>
              </div>
            </div>
          </div>

          <div class="mt-8 p-4 bg-white rounded border-l-4 border-blue-900">
            <p class="text-sm text-gray-700">
              {{ currentLang === 'en'
                ? 'If you want to know about traffic regulations and related fines and demerit points, or if you already have a ticket, contact us on WeChat: wenshenglegal'
                : '如果您想知道交通法规和相关罚款和扣分情况，或者您已经有告票，请马上加微信洽谈：wenshenglegal' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
