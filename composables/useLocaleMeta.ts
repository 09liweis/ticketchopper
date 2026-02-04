import { useI18n } from 'vue-i18n'
import { useHead } from '#app'
import { watch } from 'vue'

export const useLocaleMeta = () => {
  const { locale } = useI18n()

  const metaData = {
    en: {
      title: 'York Consulting - Criminal Defense & Traffic Violations',
      description: 'Expert legal representation for criminal defense, DUI, traffic violations, impaired driving, domestic violence, assault, fraud, and dangerous driving cases in Toronto.',
      keywords: 'criminal defense lawyer, DUI lawyer Toronto, traffic violations, impaired driving defense, domestic violence lawyer, assault defense, fraud cases, dangerous driving, legal services Toronto, traffic ticket defense, criminal law attorney',
      ogTitle: 'York Consulting - Professional Legal Services',
      ogDescription: 'Expert legal representation for criminal defense, DUI, traffic violations, and more in Toronto.',
      lang: 'en',
      ogLocale: 'en_CA'
    },
    zh: {
      title: '稳胜刑事，告票，车险专门店 - 刑事辩护与交通违章',
      description: '专业的刑事辩护、醉驾、交通违规、酒后驾车、家暴、袭击、诈骗和危险驾驶案件的法律代理服务，服务多伦多地区。',
      keywords: '刑事辩护律师, 多伦多醉驾律师, 交通违章, 酒后驾车辩护, 家暴律师, 袭击辩护, 诈骗案件, 危险驾驶, 多伦多法律服务, 交通罚单辩护, 刑事法律师',
      ogTitle: '稳胜刑事，告票，车险专门店 - 专业法律服务',
      ogDescription: '专业的刑事辩护、醉驾、交通违规等法律代理服务，服务多伦多地区。',
      lang: 'zh',
      ogLocale: 'zh_CN'
    }
  }

  const updateMeta = () => {
    const currentLocale = locale.value as 'en' | 'zh'
    const meta = metaData[currentLocale]

    useHead({
      htmlAttrs: {
        lang: meta.lang
      },
      title: meta.title,
      meta: [
        { name: 'description', content: meta.description },
        { name: 'keywords', content: meta.keywords },
        { property: 'og:title', content: meta.ogTitle },
        { property: 'og:description', content: meta.ogDescription },
        { property: 'og:locale', content: meta.ogLocale },
        { property: 'og:locale:alternate', content: currentLocale === 'en' ? 'zh_CN' : 'en_CA' }
      ]
    })
  }

  // Update meta on initial load
  updateMeta()

  // Watch for locale changes and update meta accordingly
  watch(locale, () => {
    updateMeta()
  })

  return {
    updateMeta
  }
}