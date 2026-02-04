import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'York Consulting',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Expert legal representation for criminal defense, DUI, traffic violations, and more.' 
        },
        { name: 'format-detection', content: 'telephone=no' },
        
        // Theme colors for mobile browsers
        { name: 'theme-color', content: '#1e40af' },
        { name: 'msapplication-TileColor', content: '#1e40af' },
        
        // Open Graph / Social Media
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Your Law Firm Name' },
        { property: 'og:description', content: 'Professional legal services' },
        { property: 'og:image', content: '/og-image.png' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Your Law Firm Name' },
        { name: 'twitter:description', content: 'Professional legal services' },
      ],
      link:[
        {
          rel: 'icon', href: '/images/favicon.png', type: 'image/png', 
        }
      ]
    }
  }
})
