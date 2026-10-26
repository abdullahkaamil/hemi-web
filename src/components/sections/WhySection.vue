<script setup lang="ts">
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { pillars } from '@/data/content'
import whyImage from '@/assets/images/hemi-neden-gorseli.png'
</script>

<template>
  <section id="neden-hemi" class="section why" tabindex="-1" aria-labelledby="why-title">
    <div class="container">
      <div class="why__panel">
        <div class="why__intro">
          <div class="why__copy">
            <h2 id="why-title">Eski mahalle sıcaklığı, bugünün güvenliğiyle</h2>
            <p>
              Aynı sokakta yaşayıp birbirini hiç tanımamak artık olağan hale geldi. Hemi bu kopukluğu aşmak için var:
              sabah kahvesine eşlik edecek birini, köpeğini gezdirecek bir komşuyu ya da acil anında yanına koşacak
              birini iki sokak öteden bulabilirsin.
            </p>
          </div>
          <div class="why__visual">
            <img
              class="why__image"
              :src="whyImage"
              width="1200"
              height="1200"
              alt="Hemi’nin üç temeli: doğrulanmış komşular ve Güven Skoru; Hizmet Pazarı, İlanlar ve SkillHub; SOS ve sosyal dayanışma"
              loading="lazy"
            />
          </div>
        </div>

        <ul class="why__pillars">
          <li v-for="pillar in pillars" :key="pillar.title" class="pillar">
            <span class="pillar__icon">
              <BaseIcon :name="pillar.icon" :size="22" />
            </span>
            <h3>{{ pillar.title }}</h3>
            <p>{{ pillar.description }}</p>
            <ul class="pillar__points">
              <li v-for="point in pillar.points" :key="point">
                <BaseIcon name="check" :size="16" :stroke-width="2.75" />
                {{ point }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why {
  padding-top: 0;
  outline: none;
}

.why__panel {
  padding: clamp(2rem, 1rem + 4vw, 4.5rem);
  border-radius: var(--radius-lg);
  background: var(--c-turquoise-tint);
}

.why__intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
  align-items: center;
  gap: 2rem 4rem;
}

.why__copy h2 {
  max-width: 15ch;
  font-size: var(--fs-xl);
}

.why__copy p {
  max-width: 34rem;
  margin-top: 1.25rem;
  font-size: var(--fs-md);
}

.why__visual {
  width: 100%;
  max-width: 440px;
  margin-inline: auto;
  border-radius: var(--radius-lg);
  background: var(--c-violet);
}

.why__image {
  width: 100%;
}

.why__pillars {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  margin: clamp(2rem, 1rem + 3vw, 3.5rem) 0 0;
  padding: 0;
  list-style: none;
}

.pillar {
  padding: 1.75rem;
  border-radius: var(--radius-md);
  background: var(--c-white);
}

.pillar__icon {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  margin-bottom: 1rem;
  border-radius: 12px;
  background: var(--c-violet);
  color: var(--c-white);
}

.pillar h3 {
  font-size: 1.15rem;
}

.pillar > p {
  margin-top: 0.6rem;
  font-size: 0.975rem;
}

.pillar__points {
  display: grid;
  gap: 0.4rem;
  margin: 1.1rem 0 0;
  padding: 1.1rem 0 0;
  border-top: 1px solid var(--c-violet-tint);
  list-style: none;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--c-ink);
}

.pillar__points li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.pillar__points svg {
  flex: none;
  margin-top: 0.3rem;
  color: var(--c-turquoise-deep);
}

@media (max-width: 900px) {
  .why__intro,
  .why__pillars {
    grid-template-columns: 1fr;
  }

  .why__visual {
    max-width: 360px;
  }
}
</style>
