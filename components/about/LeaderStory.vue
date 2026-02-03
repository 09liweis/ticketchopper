<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            {{ t('leaderStory.title') }}
          </h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            {{ t('leaderStory.intro') }}
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t('leaderStory.experience') }}
          </p>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
          <h3 class="text-2xl font-bold text-blue-900 mb-8">{{ t('leaderStory.practiceAreas') }}</h3>
          <div class="space-y-6">
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-semibold text-gray-800">{{ t('leaderStory.criminalLaw') }}</span>
                <span class="text-blue-900 font-bold">50%</span>
              </div>
              <div class="w-full bg-gray-300 rounded-full h-3">
                <div class="bg-blue-900 h-3 rounded-full" style="width: 50%;"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-semibold text-gray-800">{{ t('leaderStory.trafficLaw') }}</span>
                <span class="text-blue-900 font-bold">40%</span>
              </div>
              <div class="w-full bg-gray-300 rounded-full h-3">
                <div class="bg-blue-900 h-3 rounded-full" style="width: 40%;"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-semibold text-gray-800">{{ t('leaderStory.familyLaw') }}</span>
                <span class="text-blue-900 font-bold">10%</span>
              </div>
              <div class="w-full bg-gray-300 rounded-full h-3">
                <div class="bg-blue-900 h-3 rounded-full" style="width: 10%;"></div>
              </div>
            </div>
          </div>

          <div class="mt-8 p-4 bg-white rounded border-l-4 border-blue-900">
            <p class="text-sm text-gray-700">
              {{ t('leaderStory.contact') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
