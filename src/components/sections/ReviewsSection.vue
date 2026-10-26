<script setup lang="ts">
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { reviews } from '@/data/content'
import { site } from '@/data/site'
</script>

<template>
  <section id="yorumlar" class="section reviews" tabindex="-1" aria-labelledby="reviews-title">
    <div class="container reviews__inner">
      <div class="reviews__summary">
        <h2 id="reviews-title">Komşular ne diyor?</h2>
        <p class="reviews__score">
          <strong>5,0</strong>
          <span class="reviews__stars" aria-hidden="true">
            <BaseIcon v-for="n in 5" :key="n" name="star" :size="20" />
          </span>
        </p>
        <p class="reviews__note">App Store Türkiye’deki kullanıcı puanı</p>
        <a class="btn btn--ghost" :href="site.appStoreUrl" target="_blank" rel="noopener">
          Tüm yorumları App Store’da oku
        </a>
      </div>

      <ul class="reviews__list">
        <li v-for="review in reviews" :key="review.author">
          <figure class="review">
            <blockquote>
              <h3>{{ review.title }}</h3>
              <p>{{ review.body }}</p>
            </blockquote>
            <figcaption>
              {{ review.author }}, <time>{{ review.date }}</time>
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.reviews {
  background: var(--c-violet-tint);
  outline: none;
}

.reviews__inner {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.6fr);
  align-items: start;
  gap: 3rem 4rem;
}

.reviews__summary h2 {
  font-size: var(--fs-xl);
}

.reviews__score {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-top: 1.75rem;
}

.reviews__score strong {
  font-family: var(--font-display);
  font-size: 3.25rem;
  font-weight: 700;
  line-height: 1;
  color: var(--c-ink);
}

.reviews__stars {
  display: flex;
  gap: 2px;
  color: var(--c-violet);
}

.reviews__stars :deep(svg) {
  fill: currentColor;
}

.reviews__note {
  margin: 0.5rem 0 1.75rem;
  color: var(--c-muted);
  font-size: 0.95rem;
}

.reviews__list {
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.review {
  margin: 0;
  padding: 1.5rem 1.75rem;
  border-radius: var(--radius-md);
  background: var(--c-white);
}

.review blockquote {
  margin: 0;
}

.review h3 {
  font-size: 1.05rem;
}

.review p {
  margin-top: 0.4rem;
}

.review figcaption {
  margin-top: 0.9rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--c-turquoise-deep);
}

@media (max-width: 900px) {
  .reviews__inner {
    grid-template-columns: 1fr;
  }
}
</style>
