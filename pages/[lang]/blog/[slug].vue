<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const { locale } = useI18n()

const lang = (route.params.lang === 'en') ? 'en' : 'zh'
locale.value = lang
const currentLang = lang

// This would ideally come from a blog data store or API
// For now, it's a placeholder showing how the page would work
const blogSlug = route.params.slug

const placeholderPost = computed(() => ({
  title: currentLang === 'en' ? 'Blog Post Title' : '博客文章标题',
  date: '06 Jan 2026',
  author: 'seagod',
  category: currentLang === 'en' ? 'Canadian Law' : '加拿大法',
  content: currentLang === 'en' 
    ? '<p>Blog post content would be rendered here...</p>' 
    : '<p>博客文章内容将在这里显示...</p>'
}))
</script>

<template>
  <div>
    <BlogPostHero 
      :current-lang="currentLang"
      :title="placeholderPost.title"
      :date="placeholderPost.date"
      :author="placeholderPost.author"
      :category="placeholderPost.category"
    />
    <BlogPostContent 
      :current-lang="currentLang"
      :content="placeholderPost.content"
    />
    <HomeContactForm :current-lang="currentLang" />
  </div>
</template>