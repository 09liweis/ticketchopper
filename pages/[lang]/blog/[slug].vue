<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useBlogPosts } from '~/composables/useBlogPosts'

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const { locale } = useI18n()
const { getPostBySlug } = useBlogPosts()

const lang = (route.params.lang === 'en') ? 'en' : 'zh'
locale.value = lang
const currentLang = lang

const blogSlug = route.params.slug

const currentPost = computed(() => {
  const post = getPostBySlug(String(blogSlug), currentLang)
  return post || {
    title: currentLang === 'en' ? 'Blog Post Not Found' : '博客文章未找到',
    date: '01 Jan 2026',
    author: 'seagod',
    category: currentLang === 'en' ? 'General' : '通用',
    fullContent: currentLang === 'en' 
      ? '<p>This blog post could not be found.</p>' 
      : '<p>找不到此博客文章。</p>'
  }
})
</script>

<template>
  <div>
    <BlogPostHero 
      :current-lang="currentLang"
      :title="currentPost.title"
      :date="`${currentPost.date.day} ${currentPost.date.month}`"
      :author="currentPost.author"
      :category="currentPost.category"
    />
    <BlogPostContent 
      :current-lang="currentLang"
      :content="currentPost.fullContent"
    />
    <HomeContactForm :current-lang="currentLang" />
  </div>
</template>