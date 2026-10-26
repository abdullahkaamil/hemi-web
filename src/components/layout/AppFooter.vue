<script setup lang="ts">
import { navItems } from '@/data/content'
import { site } from '@/data/site'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import logo from '@/assets/images/hemi-logo.png'

const { scrollToSection } = useSmoothScroll()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <a class="footer__logo" href="#ana-sayfa" @click.prevent="scrollToSection('ana-sayfa')">
          <img :src="logo" alt="" width="36" height="36" />
          <span>{{ site.name }}</span>
        </a>
        <p>{{ site.tagline }}. Komşularını tanı, yardımlaş, mahallene sahip çık.</p>
      </div>

      <nav aria-label="Alt menü">
        <h3 class="footer__title">Sayfa</h3>
        <ul class="footer__links">
          <li v-for="item in navItems" :key="item.id">
            <a :href="`#${item.id}`" @click.prevent="scrollToSection(item.id)">{{ item.label }}</a>
          </li>
        </ul>
      </nav>

      <div>
        <h3 class="footer__title">Bağlantılar</h3>
        <ul class="footer__links">
          <li><a :href="site.appStoreUrl" target="_blank" rel="noopener">App Store</a></li>
          <li><a :href="site.privacyPath">Gizlilik politikası</a></li>
          <li><a :href="site.kvkkPath">KVKK aydınlatma metni</a></li>
          <li><a :href="`mailto:${site.contactEmail}`">{{ site.contactEmail }}</a></li>
        </ul>
      </div>
    </div>

    <div class="container footer__bottom">
      <p>© {{ year }} {{ site.name }}. Tüm hakları saklıdır.</p>
      <p>{{ site.company }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--c-white);
  border-top: 1px solid var(--c-violet-line);
  padding-top: clamp(3rem, 2.5rem + 3vw, 4.5rem);
  font-size: 0.975rem;
}

.footer__inner {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr;
  gap: 2.5rem;
}

.footer__logo {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: var(--c-ink);
  text-decoration: none;
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.footer__brand p {
  max-width: 22rem;
  margin-top: 0.9rem;
  color: var(--c-muted);
}

.footer__title {
  margin-bottom: 0.9rem;
  font-size: 0.95rem;
  font-weight: 600;
}

.footer__links {
  display: grid;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer__links a {
  color: var(--c-text);
  text-decoration: none;
  transition: color 0.2s var(--ease);
}

.footer__links a:hover {
  color: var(--c-violet);
}

.footer__bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 2rem;
  margin-top: 3rem;
  padding-block: 1.5rem;
  /* Ayırıcı çizgi container'ın iç boşluğu kadar içeride başlasın */
  background: linear-gradient(var(--c-violet-tint), var(--c-violet-tint)) center top / calc(100% - 2 * var(--gutter)) 1px
    no-repeat;
  font-size: var(--fs-sm);
  color: var(--c-muted);
}

@media (max-width: 760px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}
</style>
