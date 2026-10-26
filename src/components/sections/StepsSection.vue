<script setup lang="ts">
import { steps } from '@/data/content'
</script>

<template>
  <section id="nasil-calisir" class="section steps" tabindex="-1" aria-labelledby="steps-title">
    <div class="container">
      <div class="section-head section-head--center">
        <h2 id="steps-title">Üç adımda mahallene katıl</h2>
        <p>Kayıttan ilk komşu sohbetine kadar birkaç dakika yeterli.</p>
      </div>

      <ol class="steps__list">
        <li v-for="step in steps" :key="step.title" class="step">
          <img :src="step.image" width="512" height="512" alt="" loading="lazy" />
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.steps {
  padding-top: 0;
  outline: none;
}

.steps__list {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Adımları birbirine bağlayan kesikli çizgi – hero görselindeki "mahalle çapı" halkasına gönderme */
.steps__list::before {
  content: '';
  position: absolute;
  top: 90px;
  left: calc(100% / 6);
  right: calc(100% / 6);
  border-top: 2px dashed var(--c-turquoise);
}

.step {
  position: relative;
  text-align: center;
}

.step img {
  width: 180px;
  height: 180px;
  margin: 0 auto 1.5rem;
}

.step h3 {
  font-size: var(--fs-md);
}

.step p {
  max-width: 20rem;
  margin: 0.6rem auto 0;
}

@media (max-width: 800px) {
  .steps__list {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .steps__list::before {
    display: none;
  }

  .step img {
    width: 150px;
    height: 150px;
  }
}
</style>
