import { createApp } from 'vue'
import LegalPage from './pages/LegalPage.vue'
import { kvkkSections } from './data/kvkk'
import { site } from './data/site'
import './styles/tokens.css'
import './styles/base.css'

createApp(LegalPage, {
  eyebrow: 'KVKK',
  title: 'Kişisel Verilerin Korunması Kanunu Aydınlatma Metni',
  lead: site.company,
  sections: kvkkSections,
}).mount('#app')
