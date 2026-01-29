<script setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { locale, t } = useI18n()

const lang = (route.params.lang === 'en') ? 'en' : 'zh'
locale.value = lang
</script>

<template>
  <main>
    <header>
      <div>{{ t('site.quote') }}</div>
      <div>
        <strong>{{ t('site.phone') }}</strong>
      </div>
      <nav>
        <ul>
          <li>{{ t('nav.home') }}</li>
          <li>{{ t('nav.about') }}</li>
          <li>{{ t('nav.services') }}</li>
          <li>{{ t('nav.blog') }}</li>
          <li>{{ t('nav.faq') }}</li>
          <li>{{ t('nav.contact') }}</li>
        </ul>
      </nav>
    </header>

    <section>
      <h1>{{ t('services.title') }}</h1>
      <p>{{ t('intro.paragraph') }}</p>

      <h2>{{ t('services.typesTitle') }}</h2>
      <div>
        <div v-for="(svc, key) in t('services.items')" :key="key">
          <!-- t() returns plain strings for nested objects; we use keys explicitly in template below -->
        </div>
        <div>
          <h3>{{ t('services.items.dui.title') }}</h3>
          <p>{{ t('services.items.dui.desc') }}</p>
        </div>
        <div>
          <h3>{{ t('services.items.domestic.title') }}</h3>
          <p>{{ t('services.items.domestic.desc') }}</p>
        </div>
        <div>
          <h3>{{ t('services.items.theft.title') }}</h3>
          <p>{{ t('services.items.theft.desc') }}</p>
        </div>
        <div>
          <h3>{{ t('services.items.dangerous.title') }}</h3>
          <p>{{ t('services.items.dangerous.desc') }}</p>
        </div>
        <div>
          <h3>{{ t('services.items.fraud.title') }}</h3>
          <p>{{ t('services.items.fraud.desc') }}</p>
        </div>
        <div>
          <h3>{{ t('services.items.mischief.title') }}</h3>
          <p>{{ t('services.items.mischief.desc') }}</p>
        </div>
      </div>
    </section>

    <section>
      <h2>{{ t('traffic.title') }}</h2>
      <ul>
        <li>{{ t('traffic.items.speed.title') }} - {{ t('traffic.items.speed.desc') }}</li>
        <li>{{ t('traffic.items.sign.title') }} - {{ t('traffic.items.sign.desc') }}</li>
        <li>{{ t('traffic.items.handheld.title') }} - {{ t('traffic.items.handheld.desc') }}</li>
        <li>{{ t('traffic.items.seatbelt.title') }} - {{ t('traffic.items.seatbelt.desc') }}</li>
        <li>{{ t('traffic.items.suspension.title') }} - {{ t('traffic.items.suspension.desc') }}</li>
        <li>{{ t('traffic.items.noInsurance.title') }} - {{ t('traffic.items.noInsurance.desc') }}</li>
      </ul>
    </section>

    <aside>
      <h3>{{ t('contact.title') }}</h3>
      <p>{{ t('site.address') }}</p>
      <p>{{ t('site.phone') }}</p>
      <form>
        <label>{{ t('contact.form.name') }}</label>
        <input />
        <label>{{ t('contact.form.email') }}</label>
        <input />
        <label>{{ t('contact.form.phone') }}</label>
        <input />
        <button>{{ t('contact.form.submit') }}</button>
      </form>
    </aside>

    <footer>
      <div>{{ t('stats.years') }} • {{ t('stats.cases') }}</div>
      <div>{{ t('subscribe.title') }}</div>
    </footer>
  </main>
</template>
