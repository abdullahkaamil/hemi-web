<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import BaseIcon from '@/components/ui/BaseIcon.vue'
import { navItems } from '@/data/content'
import { site } from '@/data/site'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import type { SectionId } from '@/types/content'
import logo from '@/assets/images/hemi-logo.png'

const active = useScrollSpy(navItems.map((item) => item.id))
const { scrollToSection } = useSmoothScroll()

const menuOpen = ref(false)
const scrolled = ref(false)

function go(id: SectionId) {
  menuOpen.value = false
  scrollToSection(id)
}

function onScroll() {
  scrolled.value = window.scrollY > 8
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') menuOpen.value = false
}

// Mobil menü açıkken arka plan kaymasın
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': scrolled || menuOpen }">
    <div class="container header__inner">
      <a class="brand" href="#ana-sayfa" @click.prevent="go('ana-sayfa')">
        <img :src="logo" alt="" width="40" height="40" />
        <span>{{ site.name }}</span>
      </a>

      <nav id="ana-menu" class="nav" :class="{ 'nav--open': menuOpen }" aria-label="Ana menü">
        <ul>
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              :class="{ 'is-active': active === item.id }"
              :aria-current="active === item.id ? 'true' : undefined"
              @click.prevent="go(item.id)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
        <a class="btn btn--primary nav__cta" :href="site.appStoreUrl" target="_blank" rel="noopener">
          Uygulamayı indir
        </a>
      </nav>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="ana-menu"
        @click="menuOpen = !menuOpen"
      >
        <BaseIcon :name="menuOpen ? 'close' : 'menu'" />
        <span class="visually-hidden">{{ menuOpen ? 'Menüyü kapat' : 'Menüyü aç' }}</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  height: var(--header-h);
  background: var(--c-white);
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s var(--ease);
}

.header--scrolled {
  border-bottom-color: var(--c-violet-line);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  height: 100%;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--c-ink);
}

.brand img {
  width: 40px;
  height: 40px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.nav ul {
  display: flex;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav ul a {
  position: relative;
  display: block;
  padding: 0.5rem 0.7rem;
  font-family: var(--font-display);
  font-size: 0.925rem;
  font-weight: 500;
  color: var(--c-text);
  text-decoration: none;
  border-radius: var(--radius-pill);
  transition:
    color 0.2s var(--ease),
    background-color 0.2s var(--ease);
}

.nav ul a:hover {
  color: var(--c-violet);
}

.nav ul a.is-active {
  color: var(--c-violet);
  background: var(--c-violet-tint);
}

.nav__cta {
  min-height: 42px;
  padding-inline: 1.15rem;
  font-size: 0.9rem;
}

.menu-toggle {
  display: none;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--c-violet-line);
  border-radius: var(--radius-sm);
  background: var(--c-white);
  color: var(--c-ink);
  cursor: pointer;
}

@media (max-width: 1080px) {
  .menu-toggle {
    display: grid;
  }

  .nav {
    position: fixed;
    inset: var(--header-h) 0 auto;
    flex-direction: column;
    align-items: stretch;
    gap: 1.25rem;
    padding: 1rem var(--gutter) 1.75rem;
    background: var(--c-white);
    border-bottom: 1px solid var(--c-violet-line);
    box-shadow: var(--shadow-soft);
    transform: translateY(-8px);
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.2s var(--ease),
      transform 0.2s var(--ease),
      visibility 0.2s;
  }

  .nav--open {
    transform: none;
    opacity: 1;
    visibility: visible;
  }

  .nav ul {
    flex-direction: column;
  }

  .nav ul a {
    padding: 0.8rem 1rem;
    font-size: 1.05rem;
    border-radius: var(--radius-sm);
  }

  .nav__cta {
    min-height: 50px;
  }
}
</style>
