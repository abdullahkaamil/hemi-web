import { createApp } from 'vue'
import LegalPage from './pages/LegalPage.vue'
import { privacyIntro, privacySections } from './data/privacy'
import { site } from './data/site'
import './styles/tokens.css'
import './styles/base.css'

createApp(LegalPage, {
  eyebrow: 'KVKK · Gizlilik',
  title: 'Kişisel Verilerin Korunması ve Gizlilik Politikası',
  lead: `Web Sitesi Gizlilik Sözleşmesi — ${site.company}`,
  intro: privacyIntro,
  sections: privacySections,
}).mount('#app')
