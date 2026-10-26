<script setup lang="ts">
import { site } from '@/data/site'

withDefaults(defineProps<{ inverted?: boolean }>(), { inverted: false })
</script>

<template>
  <div class="badges" :class="{ 'badges--inverted': inverted }">
    <a class="badge" :href="site.appStoreUrl" target="_blank" rel="noopener">
      <svg class="badge__logo" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.37 12.62c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-2.99-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.39-.92-2.41-3.66ZM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.28Z"
        />
      </svg>
      <span class="badge__text">
        <small>App Store’dan</small>
        <strong>İndir</strong>
      </span>
    </a>

    <a v-if="site.googlePlayUrl" class="badge" :href="site.googlePlayUrl" target="_blank" rel="noopener">
      <svg class="badge__logo" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M4 2.5v19l10-9.5L4 2.5Zm11.4 8.2 2.6-2.5-11-6.2 8.4 8.7Zm0 2.6L7 22l11-6.2-2.6-2.5Zm4.9-3.4L18.9 9l-2.8 2.7 2.8 2.7 1.4-.8c.9-.5.9-1.3 0-1.7Z" />
      </svg>
      <span class="badge__text">
        <small>Google Play’den</small>
        <strong>İndir</strong>
      </span>
    </a>
    <span v-else class="badge badge--soon" aria-label="Google Play sürümü yakında">
      <svg class="badge__logo" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M4 2.5v19l10-9.5L4 2.5Zm11.4 8.2 2.6-2.5-11-6.2 8.4 8.7Zm0 2.6L7 22l11-6.2-2.6-2.5Zm4.9-3.4L18.9 9l-2.8 2.7 2.8 2.7 1.4-.8c.9-.5.9-1.3 0-1.7Z" />
      </svg>
      <span class="badge__text">
        <small>Google Play</small>
        <strong>Yakında</strong>
      </span>
    </span>
  </div>
</template>

<style scoped>
.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 56px;
  padding: 0.5rem 1.25rem 0.5rem 1rem;
  border-radius: var(--radius-sm);
  background: var(--c-ink);
  color: var(--c-white);
  text-decoration: none;
  transition: background-color 0.2s var(--ease);
}

a.badge:hover {
  background: var(--c-violet-deep);
}

.badge__logo {
  width: 26px;
  height: 26px;
  flex: none;
}

.badge__text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.badge__text small {
  font-size: 0.72rem;
  opacity: 0.8;
}

.badge__text strong {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
}

.badge--soon {
  background: transparent;
  border: 2px dashed var(--c-violet-line);
  color: var(--c-muted);
}

.badges--inverted .badge {
  background: var(--c-white);
  color: var(--c-ink);
}

.badges--inverted a.badge:hover {
  background: var(--c-turquoise-tint);
}

.badges--inverted .badge--soon {
  background: transparent;
  border-color: rgb(255 255 255 / 0.45);
  color: var(--c-white);
}
</style>
