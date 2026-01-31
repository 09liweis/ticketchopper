<script setup>
defineProps({
  currentLang: {
    type: String,
    default: 'zh'
  }
})
</script>

<template>
  <section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
    <div class="absolute inset-0 bg-[url('/images/legal-bg.jpg')] opacity-10 bg-cover bg-center"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          {{ currentLang === 'en' ? 'Legal Insights & Updates' : '法律见解与更新' }}
        </h1>
        <p class="text-xl text-blue-100">
          {{ currentLang === 'en' 
            ? 'Stay informed about criminal law, traffic violations, and legal defense strategies' 
            : '了解最新的刑法、交通违规和法律辩护策略' 
          }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional styles if needed */
</style>