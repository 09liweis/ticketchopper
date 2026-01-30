<script setup>
import { ref } from 'vue'

defineProps({
  currentLang: {
    type: String,
    default: 'zh'
  }
})

const openIndex = ref(null)

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqData = {
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Below are answers to some frequently asked questions about the criminal defense services provided by our lawyers and their associates. If you have other questions, please feel free to call us to discuss the specifics of your case.',
    items: [
      {
        question: 'Will a lawyer or paralegal handle my case?',
        answer: 'Your case will be handled by an experienced lawyer from our team. We believe in providing the highest quality legal representation, which is why licensed lawyers take the lead on all criminal defense matters. Our paralegals may assist with administrative tasks and case preparation, but all legal strategy and court appearances are managed by qualified lawyers.'
      },
      {
        question: 'How many criminal cases have we handled?',
        answer: 'Our firm has handled thousands of criminal cases over our 20 years of practice. Our extensive experience covers a wide range of criminal matters including DUI, assault, theft, dangerous driving, fraud, and mischief charges. This wealth of experience allows us to provide strategic defense tailored to your specific situation.'
      },
      {
        question: 'How long does the process take?',
        answer: 'The timeline varies significantly depending on the complexity of your case. Sometimes we can have charges withdrawn on the first court date (or within 2-3 appearances). Other cases may take months or even years to resolve. Before retention, we will always provide you with our best estimate of the completion timeline based on the specific circumstances of your case.'
      },
      {
        question: 'What should I do if I\'ve been charged with a criminal offense?',
        answer: 'If you\'ve been charged, it\'s crucial to contact a lawyer immediately. Do not make any statements to police without legal representation present. Gather all relevant documentation related to your case and prepare a timeline of events. Contact us for a free consultation where we can assess your situation and advise you on the best course of action.'
      },
      {
        question: 'How much do your services cost?',
        answer: 'Legal fees vary depending on the complexity of the case, the charges involved, and the expected time commitment. We offer transparent pricing and will provide you with a clear fee structure during your initial consultation. We also offer flexible payment plans to make quality legal representation accessible to our clients.'
      },
      {
        question: 'Can you guarantee the outcome of my case?',
        answer: 'No ethical lawyer can guarantee a specific outcome in a criminal case, as the results depend on many factors including the evidence, witnesses, and the court\'s discretion. However, we can guarantee that we will work tirelessly on your behalf, leveraging our 20 years of experience to achieve the best possible outcome for your situation.'
      },
      {
        question: 'Do you handle cases outside of Ontario?',
        answer: 'Yes, we have special expertise in handling traffic tickets in Alberta, Quebec, and New York State. For criminal matters outside Ontario, we can assess your case during a consultation and advise whether we can assist directly or refer you to trusted colleagues in other jurisdictions.'
      },
      {
        question: 'What is the difference between a criminal charge and a traffic violation?',
        answer: 'Criminal charges are more serious offenses under the Criminal Code of Canada and can result in a criminal record, jail time, and significant fines. Traffic violations are typically provincial offenses that result in fines and demerit points but don\'t create a criminal record. However, serious traffic offenses like impaired driving can be criminal charges.'
      }
    ]
  },
  zh: {
    title: '常见问题',
    subtitle: '以下是有关我们律师及其同事提供的刑事辩护服务的一些常见问题的解答。如果您有其他疑问，请随时致电我们讨论您案件的具体情况。',
    items: [
      {
        question: '律师或律师助理会处理我的案件吗？',
        answer: '您的案件将由我们团队中经验丰富的律师处理。我们相信提供最高质量的法律代理，这就是为什么所有刑事辩护事务都由持牌律师主导。我们的律师助理可能会协助处理行政任务和案件准备，但所有法律策略和出庭事宜均由合格的律师管理。'
      },
      {
        question: '我们办理了多少刑事案件？',
        answer: '我们的律师事务所在20年的执业过程中处理了数千起刑事案件。我们的丰富经验涵盖了广泛的刑事事务，包括醉驾、袭击、盗窃、危险驾驶、诈骗和恶作剧指控。这些丰富的经验使我们能够为您的具体情况提供量身定制的战略辩护。'
      },
      {
        question: '这个过程需要多长时间？',
        answer: '时间线因案件的复杂程度而有很大差异。有时我们可以在第一次开庭日期（或在2-3次出庭内）撤回案件。其他案件则需要数月甚至数年才能解决。在保留之前，我们将始终根据您案件的具体情况为您提供完成时间的最佳估计。'
      },
      {
        question: '如果我被指控犯罪，我应该怎么办？',
        answer: '如果您被指控，立即联系律师至关重要。在没有法律代表在场的情况下，不要向警方作任何陈述。收集与您案件相关的所有文件，并准备一份事件时间表。请联系我们进行免费咨询，我们可以评估您的情况并为您提供最佳行动方案的建议。'
      },
      {
        question: '你们的服务费用是多少？',
        answer: '法律费用因案件的复杂程度、涉及的指控以及预期的时间投入而异。我们提供透明的定价，并将在初次咨询期间为您提供明确的收费结构。我们还提供灵活的付款计划，使我们的客户能够获得高质量的法律代理。'
      },
      {
        question: '你们能保证我的案件结果吗？',
        answer: '没有任何有职业道德的律师可以保证刑事案件的具体结果，因为结果取决于许多因素，包括证据、证人和法院的自由裁量权。但是，我们可以保证我们会为您不懈努力，利用我们20年的经验为您的情况争取最好的结果。'
      },
      {
        question: '你们处理安大略省以外的案件吗？',
        answer: '是的，我们在处理艾伯塔省、魁北克省和纽约州的交通罚单方面具有特殊专长。对于安大略省以外的刑事事务，我们可以在咨询期间评估您的案件，并告知我们是否可以直接协助或将您推荐给其他司法管辖区值得信赖的同事。'
      },
      {
        question: '刑事指控和交通违规有什么区别？',
        answer: '刑事指控是《加拿大刑法典》规定的更严重的罪行，可能导致犯罪记录、监禁和重大罚款。交通违规通常是省级违法行为，会导致罚款和扣分，但不会产生犯罪记录。然而，严重的交通违法行为，如酒后驾驶，可能构成刑事指控。'
      }
    ]
  }
}
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ faqData[currentLang].title }}
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            {{ faqData[currentLang].subtitle }}
          </p>
        </div>

        <!-- FAQ Items -->
        <div class="space-y-4">
          <div
            v-for="(item, index) in faqData[currentLang].items"
            :key="index"
            class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span class="text-lg font-semibold text-gray-900 pr-8">
                {{ item.question }}
              </span>
              <svg
                :class="{ 'rotate-180': openIndex === index }"
                class="w-6 h-6 text-blue-600 transition-transform duration-300 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              :class="{ 'max-h-0': openIndex !== index, 'max-h-96': openIndex === index }"
              class="overflow-hidden transition-all duration-300"
            >
              <div class="px-6 pb-5 text-gray-700 leading-relaxed">
                {{ item.answer }}
              </div>
            </div>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="mt-12 text-center bg-blue-50 rounded-lg p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-3">
            {{ currentLang === 'en' ? 'Still Have Questions?' : '还有其他问题？' }}
          </h3>
          <p class="text-gray-700 mb-6">
            {{ currentLang === 'en' 
              ? 'Contact us today for a free consultation to discuss your case.' 
              : '立即联系我们进行免费咨询，讨论您的案件。' 
            }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:289-809-8899"
              class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              289-809-8899
            </a>
            <div class="text-gray-600">
              {{ currentLang === 'en' ? 'WeChat: ' : '微信：' }}
              <span class="font-semibold">1020613826</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth transitions */
.rotate-180 {
  transform: rotate(180deg);
}
</style>