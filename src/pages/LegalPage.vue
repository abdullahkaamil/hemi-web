<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import PolicyBlocks from '@/components/ui/PolicyBlocks.vue'
import type { PolicyBlock, PolicySection } from '@/types/content'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

/** Hukuki metin sayfası düzeni (gizlilik politikası, KVKK aydınlatma metni). */
const props = defineProps<{
  eyebrow: string
  title: string
  lead: string
  intro?: PolicyBlock[]
  sections: PolicySection[]
}>()

const active = useScrollSpy(props.sections.map((section) => section.id))
const { scrollToSection } = useSmoothScroll()
</script>

<template>
  <AppHeader />
  <main class="policy">
    <header class="policy__hero">
      <div class="container">
        <p class="policy__eyebrow">{{ eyebrow }}</p>
        <h1>{{ title }}</h1>
        <p class="policy__lead">{{ lead }}</p>
      </div>
    </header>

    <div class="container policy__layout">
      <nav class="policy__toc" aria-label="İçindekiler">
        <h2 class="policy__toc-title">İçindekiler</h2>
        <ol>
          <li v-for="section in sections" :key="section.id">
            <a
              :href="`#${section.id}`"
              :class="{ 'is-active': active === section.id }"
              :aria-current="active === section.id ? 'true' : undefined"
              @click.prevent="scrollToSection(section.id)"
            >
              {{ section.title }}
            </a>
          </li>
        </ol>
      </nav>

      <article class="policy__body">
        <div v-if="intro" class="policy__intro">
          <PolicyBlocks :blocks="intro" />
        </div>

        <section v-for="section in sections" :id="section.id" :key="section.id" class="policy__section" tabindex="-1">
          <h2>{{ section.title }}</h2>
          <PolicyBlocks v-if="section.blocks" :blocks="section.blocks" />
          <div v-for="sub in section.subsections" :key="sub.title" class="policy__sub">
            <h3>{{ sub.title }}</h3>
            <PolicyBlocks :blocks="sub.blocks" />
          </div>
        </section>
      </article>
    </div>
  </main>
  <AppFooter />
</template>

<style scoped>
.policy__hero {
  padding: calc(var(--header-h) + clamp(2.5rem, 1.5rem + 4vw, 4.5rem)) 0 clamp(2.5rem, 2rem + 2vw, 3.5rem);
  background: var(--c-violet-tint);
}

.policy__eyebrow {
  margin-bottom: 0.9rem;
  font-family: var(--font-display);
  font-size: var(--fs-sm);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-violet);
}

.policy__hero h1 {
  max-width: 22ch;
  font-size: var(--fs-xl);
}

.policy__lead {
  margin-top: 1rem;
  font-size: var(--fs-md);
  color: var(--c-muted);
}

.policy__layout {
  display: grid;
  grid-template-columns: 17rem minmax(0, 1fr);
  gap: clamp(2rem, 1rem + 4vw, 4.5rem);
  align-items: start;
  padding-block: clamp(2.5rem, 2rem + 3vw, 4.5rem) var(--section-y);
}

.policy__toc {
  position: sticky;
  top: calc(var(--header-h) + 1.5rem);
  max-height: calc(100vh - var(--header-h) - 3rem);
  overflow-y: auto;
}

.policy__toc-title {
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
}

.policy__toc ol {
  display: grid;
  gap: 0.15rem;
  margin: 0;
  padding: 0;
  list-style: none;
  border-left: 2px solid var(--c-violet-line);
}

.policy__toc a {
  display: block;
  margin-left: -2px;
  padding: 0.35rem 0 0.35rem 0.9rem;
  border-left: 2px solid transparent;
  font-size: var(--fs-sm);
  line-height: 1.4;
  color: var(--c-text);
  text-decoration: none;
  transition:
    color 0.2s var(--ease),
    border-color 0.2s var(--ease);
}

.policy__toc a:hover {
  color: var(--c-violet);
}

.policy__toc a.is-active {
  border-left-color: var(--c-violet);
  color: var(--c-violet);
  font-weight: 600;
}

.policy__body {
  max-width: 46rem;
}

.policy__intro {
  padding: 1.5rem 1.75rem;
  border: 1px solid var(--c-violet-line);
  border-radius: var(--radius-md);
  color: var(--c-ink);
}

.policy__section {
  padding-top: clamp(2.25rem, 1.75rem + 1.5vw, 3rem);
  outline: none;
}

/* Giriş kutusu olmayan sayfalarda ilk başlık içindekiler ile hizalı başlasın */
.policy__section:first-child {
  padding-top: 0;
}

.policy__section h2 {
  margin-bottom: 1rem;
  font-size: var(--fs-lg);
}

.policy__sub {
  margin-top: 1.75rem;
}

.policy__sub h3 {
  margin-bottom: 0.65rem;
  font-size: var(--fs-md);
}

@media (max-width: 960px) {
  .policy__layout {
    grid-template-columns: 1fr;
  }

  .policy__toc {
    position: static;
    max-height: none;
    padding: 1.25rem 1.25rem 1rem;
    border-radius: var(--radius-md);
    background: var(--c-violet-tint);
  }

  .policy__toc ol {
    border-left: 0;
  }

  .policy__toc a {
    margin-left: 0;
    padding-left: 0;
    border-left: 0;
  }

  .policy__toc a.is-active {
    font-weight: inherit;
  }
}
</style>
