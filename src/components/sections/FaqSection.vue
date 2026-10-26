<script setup lang="ts">
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { faqs } from '@/data/content'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

const { scrollToSection } = useSmoothScroll()
</script>

<template>
  <section id="sss" class="section faq" tabindex="-1" aria-labelledby="faq-title">
    <div class="container faq__inner">
      <div class="faq__intro">
        <h2 id="faq-title">Sık sorulan sorular</h2>
        <p>
          Aradığın cevabı bulamadın mı?
          <a href="#iletisim" @click.prevent="scrollToSection('iletisim')">Bize yaz</a>, en kısa sürede dönelim.
        </p>
      </div>

      <div class="faq__list">
        <details v-for="(item, index) in faqs" :key="item.question" class="faq__item" :open="index === 0">
          <summary>
            <span>{{ item.question }}</span>
            <BaseIcon name="plus" :size="20" class="faq__toggle" />
          </summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  outline: none;
}

.faq__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.6fr);
  align-items: start;
  gap: 2rem 4rem;
}

.faq__intro h2 {
  font-size: var(--fs-xl);
}

.faq__intro p {
  margin-top: 1rem;
  color: var(--c-muted);
}

.faq__intro a {
  color: var(--c-violet);
  font-weight: 700;
}

.faq__item {
  border-bottom: 1px solid var(--c-violet-line);
}

.faq__item:first-child {
  border-top: 1px solid var(--c-violet-line);
}

.faq__item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.35rem 0;
  font-family: var(--font-display);
  font-size: 1.075rem;
  font-weight: 500;
  color: var(--c-ink);
  cursor: pointer;
  list-style: none;
}

.faq__item summary::-webkit-details-marker {
  display: none;
}

.faq__item summary:hover {
  color: var(--c-violet);
}

.faq__toggle {
  flex: none;
  color: var(--c-violet);
  transition: transform 0.25s var(--ease);
}

.faq__item[open] .faq__toggle {
  transform: rotate(45deg);
}

.faq__item p {
  max-width: 44rem;
  padding-bottom: 1.5rem;
}

@media (max-width: 900px) {
  .faq__inner {
    grid-template-columns: 1fr;
  }
}
</style>
