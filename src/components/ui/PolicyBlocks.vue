<script setup lang="ts">
import BaseIcon from '@/components/ui/BaseIcon.vue'
import type { PolicyBlock } from '@/types/content'

defineProps<{ blocks: PolicyBlock[] }>()

const URL_PATTERN = /(https?:\/\/[^\s]+)/
const LATIN_LETTERS = 'abcdefghijklmnopqrstuvwxyz'

/** Metni düz yazı ve bağlantı parçalarına böler (v-html kullanmadan link göstermek için). */
function parts(text: string) {
  return text
    .split(URL_PATTERN)
    .filter(Boolean)
    .map((value) => ({ value, isLink: URL_PATTERN.test(value) }))
}
</script>

<template>
  <template v-for="(block, index) in blocks" :key="index">
    <p v-if="block.type === 'p'" class="policy-p">
      <template v-for="part in parts(block.text)" :key="part.value">
        <a v-if="part.isLink" :href="part.value" rel="noopener">{{ part.value }}</a>
        <template v-else>{{ part.value }}</template>
      </template>
    </p>

    <ul v-else-if="block.type === 'check'" class="policy-check">
      <li v-for="item in block.items" :key="item">
        <span class="policy-check__icon"><BaseIcon name="check" :size="14" :stroke-width="3" /></span>
        <span>{{ item }}</span>
      </li>
    </ul>

    <ul v-else-if="block.type === 'list'" class="policy-list">
      <li v-for="item in block.items" :key="item">{{ item }}</li>
    </ul>

    <ol v-else-if="block.type === 'alpha'" class="policy-alpha">
      <li v-for="(item, i) in block.items" :key="item">
        <span class="policy-alpha__label" aria-hidden="true">{{ block.labels?.[i] ?? LATIN_LETTERS[i] }})</span>
        {{ item }}
      </li>
    </ol>

    <dl v-else class="policy-defs">
      <div v-for="item in block.items" :key="item.term">
        <dt>{{ item.term }}</dt>
        <dd>{{ item.text }}</dd>
      </div>
    </dl>
  </template>
</template>

<style scoped>
.policy-p + .policy-p {
  margin-top: 1rem;
}

.policy-check,
.policy-list,
.policy-alpha {
  display: grid;
  gap: 0.6rem;
  margin: 1.1rem 0;
  padding: 0;
}

.policy-check {
  list-style: none;
}

.policy-check li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.policy-check__icon {
  display: grid;
  flex: none;
  place-items: center;
  width: 22px;
  height: 22px;
  margin-top: 0.2rem;
  border-radius: 50%;
  background: var(--c-turquoise-tint);
  color: var(--c-turquoise-deep);
}

.policy-list {
  padding-left: 1.25rem;
}

.policy-list li::marker {
  color: var(--c-violet);
}

.policy-alpha {
  padding-left: 1.75rem;
  list-style: none;
}

.policy-alpha li {
  position: relative;
}

.policy-alpha__label {
  position: absolute;
  left: -1.75rem;
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--c-violet);
}

.policy-defs {
  display: grid;
  gap: 0.75rem;
  margin: 1.1rem 0;
}

.policy-defs > div {
  padding: 1rem 1.25rem;
  border-left: 3px solid var(--c-violet-line);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  background: var(--c-violet-tint);
}

.policy-defs dt {
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--c-ink);
}

.policy-defs dd {
  margin: 0.2rem 0 0;
}

a {
  color: var(--c-violet);
  font-weight: 600;
  overflow-wrap: anywhere;
}

a:hover {
  color: var(--c-violet-deep);
}
</style>
