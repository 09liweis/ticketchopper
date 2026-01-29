<script setup>
import { onMounted } from 'vue'
const router = useRouter()
definePageMeta({ middleware: [] })

onMounted(() => {
  router.replace('/zh')
})
</script>

<template>
  <div></div>
</template>
