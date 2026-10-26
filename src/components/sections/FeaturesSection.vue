<script setup lang="ts">
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { extraFeatures, features } from '@/data/content'
</script>

<template>
  <section id="ozellikler" class="section features" tabindex="-1" aria-labelledby="features-title">
    <div class="container">
      <div class="features__head">
        <h2 id="features-title">Mahallen için gereken her şey, tek uygulamada</h2>
        <p>
          Komşunu tanımaktan acil durumda yardım çağırmaya kadar, mahalle hayatının her anı için düşünülmüş sekiz
          temel özellik.
        </p>
      </div>

      <ul class="features__grid">
        <li v-for="feature in features" :key="feature.title" class="feature">
          <span class="feature__icon" :class="{ 'feature__icon--sos': feature.icon === 'sos' }">
            <BaseIcon :name="feature.icon" :size="24" />
          </span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </li>
      </ul>

      <div class="features__extra">
        <h3>Uygulamada ayrıca</h3>
        <ul>
          <li v-for="item in extraFeatures" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding-top: clamp(2rem, 1rem + 3vw, 4rem);
  outline: none;
}

.features__head {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  align-items: end;
  gap: 1rem 4rem;
  margin-bottom: clamp(2.5rem, 2rem + 2vw, 4rem);
}

.features__head h2 {
  max-width: 16ch;
  font-size: var(--fs-xl);
}

.features__head p {
  max-width: 30rem;
  font-size: var(--fs-md);
  color: var(--c-muted);
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 3rem 2.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.feature {
  padding-top: 1.5rem;
  border-top: 1px solid var(--c-violet-line);
}

.feature__icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  margin-bottom: 1.1rem;
  border-radius: 14px;
  background: var(--c-violet);
  color: var(--c-white);
}

.feature__icon--sos {
  background: var(--c-sos);
}

.feature h3 {
  font-size: 1.15rem;
}

.feature p {
  margin-top: 0.5rem;
  font-size: 0.975rem;
}

.features__extra {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;
  margin-top: clamp(3rem, 2rem + 3vw, 4.5rem);
  padding: 1.5rem 1.75rem;
  border-radius: var(--radius-md);
  background: var(--c-turquoise-tint);
}

.features__extra h3 {
  font-size: 1rem;
  color: var(--c-turquoise-deep);
}

.features__extra ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.features__extra li {
  padding: 0.35rem 0.9rem;
  border-radius: var(--radius-pill);
  background: var(--c-white);
  color: var(--c-ink);
  font-size: 0.925rem;
  font-weight: 600;
}

@media (max-width: 1000px) {
  .features__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .features__head {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .features__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
