import { useHead } from '#app'
import type { BlogPost } from './useBlogPosts'

interface MetaOptions {
  title: string
  description: string
  image?: string
  blogPost?: BlogPost
}

export const useSeo = (options: MetaOptions) => {
  const { title, description, image, blogPost } = options
  const url = 'https://www.ticketchopper.ca'

  const meta = [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image || `${url}/images/favicon.png` },
    { property: 'og:url', content: url },
    { property: 'og:type', content: blogPost ? 'article' : 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image || `${url}/images/favicon.png` },
  ]

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ticket Chopper',
    url: url,
    logo: `${url}/images/favicon.png`,
    sameAs: [
      // Add social media links here if available
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ticket Chopper',
    url: url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
  
  const scripts = [
    {
      type: 'application/ld+json',
      children: JSON.stringify(organizationSchema),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify(websiteSchema),
    },
  ]

  if (blogPost) {
    const blogPostingSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: blogPost.title,
      description: blogPost.excerpt,
      image: image || `${url}/images/favicon.png`,
      author: {
        '@type': 'Person',
        name: blogPost.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Ticket Chopper',
        logo: {
          '@type': 'ImageObject',
          url: `${url}/images/favicon.png`,
        },
      },
      datePublished: new Date().toISOString(), // Placeholder, ideally from blog post data
    }
    scripts.push({
      type: 'application/ld+json',
      children: JSON.stringify(blogPostingSchema),
    })
  }

  useHead({
    title,
    meta,
    script: scripts,
    link: [
        {
            rel: 'canonical',
            href: url
        }
    ]
  })
}
