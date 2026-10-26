import type { IconName } from '@/components/ui/icons'

/** Üst menüdeki bir bağlantı. `id`, sayfadaki <section id="..."> ile birebir eşleşmelidir. */
export interface NavItem {
  id: SectionId
  label: string
}

export type SectionId = 'ana-sayfa' | 'ozellikler' | 'neden-hemi' | 'nasil-calisir' | 'yorumlar' | 'sss' | 'iletisim'

export interface Feature {
  icon: IconName
  title: string
  description: string
}

export interface Pillar {
  icon: IconName
  title: string
  description: string
  points: string[]
}

export interface Step {
  image: string
  title: string
  description: string
}

export interface Review {
  title: string
  body: string
  author: string
  date: string
}

/** "Uygulamanın içinden" bölümündeki bir ekran görüntüsü. */
export interface AppScreen {
  title: string
  description: string
  image: string
  alt: string
  width: number
  height: number
}

export interface FaqItem {
  question: string
  answer: string
}

/** Gizlilik politikası metnindeki bir içerik bloğu. */
export type PolicyBlock =
  | { type: 'p'; text: string }
  /** ✓ işaretli madde listesi */
  | { type: 'check'; items: string[] }
  /** Sade madde listesi */
  | { type: 'list'; items: string[] }
  /** a), b), c)… şeklinde harfli liste; `labels` verilmezse a, b, c… kullanılır (ör. Türkçe a, b, c, ç… için verin) */
  | { type: 'alpha'; items: string[]; labels?: string[] }
  /** Terim: açıklama şeklinde tanım listesi */
  | { type: 'defs'; items: { term: string; text: string }[] }

export interface PolicySubsection {
  title: string
  blocks: PolicyBlock[]
}

/** Gizlilik politikasında içindekiler listesinde görünen ana başlık. */
export interface PolicySection {
  id: string
  title: string
  blocks?: PolicyBlock[]
  subsections?: PolicySubsection[]
}
