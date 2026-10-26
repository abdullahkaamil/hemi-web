<script setup lang="ts">
import { reactive, ref } from 'vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import StoreBadges from '@/components/ui/StoreBadges.vue'
import { site } from '@/data/site'
import logo from '@/assets/images/hemi-logo.png'

/*
 * Form şu an kullanıcının e-posta uygulamasını hazır mesajla açar (mailto).
 * Bir backend / form servisi bağlanacaksa `submit` fonksiyonundaki mailto kısmını
 * bir fetch() isteğiyle değiştirmeniz yeterlidir.
 */
const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const sent = ref(false)

function validate(): boolean {
  errors.name = form.name.trim() ? '' : 'Adını yaz.'
  errors.email = /^\S+@\S+\.\S+$/.test(form.email.trim()) ? '' : 'Geçerli bir e-posta adresi yaz (ör. ad@ornek.com).'
  errors.message = form.message.trim().length >= 10 ? '' : 'Mesajın en az 10 karakter olmalı.'
  return !errors.name && !errors.email && !errors.message
}

function submit() {
  if (!validate()) return

  const subject = encodeURIComponent(`Hemi web sitesi – ${form.name.trim()}`)
  const body = encodeURIComponent(`${form.message.trim()}\n\n${form.name.trim()}\n${form.email.trim()}`)
  window.location.href = `mailto:${site.contactEmail}?subject=${subject}&body=${body}`
  sent.value = true
}
</script>

<template>
  <section id="iletisim" class="section contact" tabindex="-1" aria-labelledby="contact-title">
    <div class="container contact__inner">
      <div class="contact__download">
        <img :src="logo" alt="" width="64" height="64" />
        <h2 id="contact-title">Hemi’yi indir, mahallene katıl</h2>
        <p>Ücretsiz indir, konumunu doğrula ve komşularınla hemen tanışmaya başla.</p>
        <StoreBadges />

        <div class="contact__direct">
          <BaseIcon name="mail" :size="20" />
          <span>
            Soru, öneri ve iş birlikleri için:
            <a :href="`mailto:${site.contactEmail}`">{{ site.contactEmail }}</a>
          </span>
        </div>
      </div>

      <form class="contact__form" novalidate @submit.prevent="submit">
        <h3>Bize yaz</h3>

        <div class="field">
          <label for="contact-name">Adın</label>
          <input
            id="contact-name"
            v-model="form.name"
            type="text"
            autocomplete="name"
            :aria-invalid="!!errors.name"
            :aria-describedby="errors.name ? 'contact-name-error' : undefined"
          />
          <p v-if="errors.name" id="contact-name-error" class="field__error">{{ errors.name }}</p>
        </div>

        <div class="field">
          <label for="contact-email">E-posta adresin</label>
          <input
            id="contact-email"
            v-model="form.email"
            type="email"
            autocomplete="email"
            :aria-invalid="!!errors.email"
            :aria-describedby="errors.email ? 'contact-email-error' : undefined"
          />
          <p v-if="errors.email" id="contact-email-error" class="field__error">{{ errors.email }}</p>
        </div>

        <div class="field">
          <label for="contact-message">Mesajın</label>
          <textarea
            id="contact-message"
            v-model="form.message"
            rows="4"
            :aria-invalid="!!errors.message"
            :aria-describedby="errors.message ? 'contact-message-error' : undefined"
          ></textarea>
          <p v-if="errors.message" id="contact-message-error" class="field__error">{{ errors.message }}</p>
        </div>

        <button class="btn btn--primary" type="submit">Mesajı gönder</button>
        <p v-if="sent" class="contact__sent" role="status">
          E-posta uygulaman açıldı. Mesajı oradan gönderebilirsin.
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--c-turquoise-tint);
  outline: none;
}

.contact__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: 3rem clamp(2rem, 1rem + 5vw, 6rem);
}

.contact__download img {
  width: 64px;
  height: 64px;
  margin-bottom: 1.5rem;
}

.contact__download h2 {
  max-width: 14ch;
  font-size: var(--fs-xl);
}

.contact__download > p {
  max-width: 28rem;
  margin: 1rem 0 2rem;
  font-size: var(--fs-md);
}

.contact__direct {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin-top: 2.5rem;
  color: var(--c-muted);
}

.contact__direct svg {
  flex: none;
  margin-top: 0.2rem;
  color: var(--c-turquoise-deep);
}

.contact__direct a {
  color: var(--c-ink);
  font-weight: 700;
}

.contact__form {
  display: grid;
  gap: 1.1rem;
  padding: clamp(1.5rem, 1rem + 2vw, 2.5rem);
  border-radius: var(--radius-lg);
  background: var(--c-white);
}

.contact__form h3 {
  font-size: var(--fs-lg);
}

.field {
  display: grid;
  gap: 0.4rem;
}

.field label {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--c-ink);
}

.field input,
.field textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1.5px solid var(--c-violet-line);
  border-radius: var(--radius-sm);
  background: var(--c-white);
  font: inherit;
  color: var(--c-ink);
  transition: border-color 0.2s var(--ease);
}

.field textarea {
  resize: vertical;
}

.field input:focus,
.field textarea:focus {
  border-color: var(--c-violet);
  outline: none;
}

.field [aria-invalid='true'] {
  border-color: var(--c-sos);
}

.field__error {
  font-size: 0.875rem;
  color: var(--c-sos);
}

.contact__form .btn {
  justify-self: start;
  margin-top: 0.4rem;
}

.contact__sent {
  font-size: 0.95rem;
  color: var(--c-turquoise-deep);
  font-weight: 600;
}

@media (max-width: 900px) {
  .contact__inner {
    grid-template-columns: 1fr;
  }
}
</style>
