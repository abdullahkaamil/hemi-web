<script setup lang="ts">
import BaseIcon from '@/components/ui/BaseIcon.vue'
import StoreBadges from '@/components/ui/StoreBadges.vue'
import heroImage from '@/assets/images/hemi-hero-gorseli.png'

const facts = ['Ücretsiz', 'Konumla doğrulanmış komşular', 'App Store’da 5,0 puan']
</script>

<template>
  <section id="ana-sayfa" class="hero" tabindex="-1" aria-labelledby="hero-title">
    <div class="container hero__inner">
      <div class="hero__copy">
        <p class="hero__place">
          <BaseIcon name="pin" :size="18" />
          Mahallenin dijital meydanı
        </p>
        <h1 id="hero-title">Mahallenle bağlan, komşularınla tanış.</h1>
        <p class="hero__lead">
          Hemi, aynı mahallede yaşayan ve konumla doğrulanmış komşuları bir araya getirir. Yardım iste, ilan ver,
          duyuruları takip et; acil bir durumda tek dokunuşla SOS gönder.
        </p>

        <StoreBadges class="hero__badges" />

        <ul class="hero__facts">
          <li v-for="fact in facts" :key="fact">
            <BaseIcon name="check" :size="18" :stroke-width="2.5" />
            {{ fact }}
          </li>
        </ul>
      </div>

      <div class="hero__visual">
        <img
          :src="heroImage"
          width="1200"
          height="1200"
          alt="Hemi uygulamasında Mahalle Akışı ekranı: Güven Skoru 92/100, yakındaki komşulardan yardım istekleri ve SOS butonu"
          fetchpriority="high"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: calc(var(--header-h) + clamp(2rem, 1rem + 4vw, 4.5rem));
  padding-bottom: clamp(3rem, 2rem + 4vw, 5.5rem);
  outline: none;
}

.hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  align-items: center;
  gap: clamp(2rem, 1rem + 4vw, 4.5rem);
}

.hero__place {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
  padding: 0.35rem 0.9rem 0.35rem 0.7rem;
  border-radius: var(--radius-pill);
  background: var(--c-turquoise-tint);
  color: var(--c-turquoise-deep);
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 500;
}

.hero h1 {
  max-width: 16ch;
  font-size: var(--fs-hero);
  font-weight: 700;
  line-height: 1.06;
  letter-spacing: -0.035em;
}

.hero__lead {
  max-width: 34rem;
  margin-top: 1.5rem;
  font-size: clamp(1.075rem, 1rem + 0.3vw, 1.2rem);
}

.hero__badges {
  margin-top: 2.25rem;
}

.hero__facts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  margin: 1.75rem 0 0;
  padding: 0;
  list-style: none;
  font-size: 0.95rem;
  color: var(--c-muted);
}

.hero__facts li {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.hero__facts svg {
  color: var(--c-turquoise-deep);
}

.hero__visual img {
  width: 100%;
  max-width: 620px;
  margin-inline: auto;
  animation: hero-in 0.9s var(--ease) both;
}

@keyframes hero-in {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.98);
  }
}

@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    max-width: 16ch;
  }

  .hero__visual img {
    max-width: 480px;
  }
}
</style>
