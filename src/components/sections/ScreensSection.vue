<script setup lang="ts">
import IphoneMockup from '@/components/ui/IphoneMockup.vue'
import { screens } from '@/data/content'
</script>

<template>
  <section class="section screens" aria-labelledby="screens-title">
    <div class="container">
      <div class="section-head section-head--center">
        <h2 id="screens-title">Uygulamanın içinden</h2>
        <p>Hemi’yi açtığında seni karşılayan ekranlar: mahallenin akışı ve profilin.</p>
      </div>

      <ul class="screens__list">
        <li v-for="screen in screens" :key="screen.title" class="screen">
          <IphoneMockup :src="screen.image" :alt="screen.alt" :width="screen.width" :height="screen.height" />
          <div class="screen__caption">
            <h3>{{ screen.title }}</h3>
            <p>{{ screen.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.screens {
  position: relative;
  overflow: hidden;
  /* Sonraki "Neden Hemi" bölümü üst boşluğu önceki bölümden alır (padding-top: 0) */
  margin-bottom: var(--section-y);
  /* Telefonların arkasında yumuşak mor/turkuaz ışık */
  background:
    radial-gradient(40rem 26rem at 50% 58%, rgb(123 63 232 / 0.16), transparent 70%),
    radial-gradient(22rem 18rem at 78% 30%, rgb(126 223 213 / 0.28), transparent 70%),
    radial-gradient(22rem 18rem at 20% 75%, rgb(126 223 213 / 0.2), transparent 70%),
    var(--c-violet-tint);
}

.screens__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: clamp(2rem, 1rem + 4vw, 5rem);
  max-width: 40rem;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}

.screen {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.screen :deep(.iphone) {
  max-width: 17rem;
  transition: transform 0.5s var(--ease);
}

/* İlk telefon hafif eğik ve aşağıda, ikincisi (akış) önde ve büyük */
.screen:first-child {
  margin-top: 4rem;
}

.screen:first-child :deep(.iphone) {
  transform: rotate(-5deg);
}

.screen:last-child :deep(.iphone) {
  z-index: 1;
  transform: rotate(3deg) scale(1.08);
}

.screen:hover :deep(.iphone) {
  transform: translateY(-10px) rotate(0deg) scale(1.04);
}

.screen:last-child:hover :deep(.iphone) {
  transform: translateY(-10px) rotate(0deg) scale(1.1);
}

.screen__caption {
  max-width: 17rem;
  margin-top: 2.25rem;
  text-align: center;
}

.screen__caption h3 {
  font-size: var(--fs-md);
}

.screen__caption p {
  margin-top: 0.4rem;
  font-size: 0.975rem;
  color: var(--c-muted);
}

/* Mobil: iki telefon yan yana, daha sıkı ve eğimsiz */
@media (max-width: 640px) {
  .screens__list {
    gap: 1rem;
  }

  .screen:first-child {
    margin-top: 2rem;
  }

  .screen :deep(.iphone),
  .screen:first-child :deep(.iphone),
  .screen:last-child :deep(.iphone),
  .screen:hover :deep(.iphone) {
    transform: none;
  }

  .screen__caption {
    margin-top: 1.25rem;
  }

  .screen__caption p {
    font-size: var(--fs-sm);
  }
}
</style>
