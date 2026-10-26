# Hemi Web – Teknik Dokümantasyon

> **Hedef okuyucu:** Projeyi devralacak senior frontend geliştirici.
> **Amaç:** Projede neyin hazır olduğunu, neyin eksik ya da geçici (placeholder) olduğunu ve kodun nasıl organize edildiğini tek bir yerden anlatmak.
> **Durum tarihi:** 26 Ekim 2026 · **Sürüm:** 1.0.0

---

## İçindekiler

1. [Proje özeti](#1-proje-özeti)
2. [Hızlı başlangıç](#2-hızlı-başlangıç)
3. [Tech stack](#3-tech-stack)
4. [Mimari ve klasör yapısı](#4-mimari-ve-klasör-yapısı)
5. [Veri katmanı (içerik yönetimi)](#5-veri-katmanı-içerik-yönetimi)
6. [Bileşenler](#6-bileşenler)
7. [Composable'lar](#7-composablelar)
8. [Stil sistemi ve tema](#8-stil-sistemi-ve-tema)
9. [Görseller ve statik dosyalar](#9-görseller-ve-statik-dosyalar)
10. [Erişilebilirlik](#10-erişilebilirlik)
11. [Performans ve build çıktısı](#11-performans-ve-build-çıktısı)
12. [Tarayıcı desteği](#12-tarayıcı-desteği)
13. [Deploy](#13-deploy)
14. **[Neler var / neler yok – durum tablosu](#14-neler-var--neler-yok)**
15. [Bilinen sorunlar ve sınırlamalar](#15-bilinen-sorunlar-ve-sınırlamalar)
16. [İçerik kaynakları (hangi metin nereden geldi)](#16-içerik-kaynakları)
17. [Önerilen sonraki adımlar](#17-önerilen-sonraki-adımlar)
18. [Kod konvansiyonları](#18-kod-konvansiyonları)

---

## 1. Proje özeti

**Hemi**, komşuların konum doğrulamasıyla bir araya geldiği bir mahalle dayanışma uygulamasıdır (iOS, App Store ID `6756784030`, eski adı "KomşumNet"). Bu repo, ürünün **tek sayfalık (single-page) tanıtım / landing sitesidir**. Alan adı: `komsumnet.com`.

| Özellik       | Değer                                                                 |
| ------------- | --------------------------------------------------------------------- |
| Sayfa tipi    | Tek sayfa, anchor tabanlı navigasyon (router yok)                      |
| Render        | Client-side render (CSR) – SSR/SSG yok                                 |
| Backend       | Yok. Site tamamen statik                                               |
| Dil           | Yalnızca Türkçe (i18n altyapısı yok)                                   |
| Tema          | Yalnızca açık tema: beyaz zemin, logo moru, açık turkuaz               |
| Bağımlılık    | Runtime'da yalnızca `vue`. UI kütüphanesi, CSS framework, ikon paketi yok |

**Sayfa bölümleri (sırasıyla):**

| # | Menü etiketi  | `id`             | Bileşen                   |
| - | ------------- | ---------------- | ------------------------- |
| 1 | Ana Sayfa     | `ana-sayfa`      | `HeroSection.vue`         |
| 2 | Özellikler    | `ozellikler`     | `FeaturesSection.vue`     |
| 3 | Neden Hemi    | `neden-hemi`     | `WhySection.vue`          |
| 4 | Nasıl Çalışır | `nasil-calisir`  | `StepsSection.vue`        |
| 5 | Yorumlar      | `yorumlar`       | `ReviewsSection.vue`      |
| 6 | SSS           | `sss`            | `FaqSection.vue`          |
| 7 | İletişim      | `iletisim`       | `ContactSection.vue`      |

---

## 2. Hızlı başlangıç

**Gereksinim:** Node.js `^20.19.0` veya `>=22.12.0` (Vite 8 ve `@vitejs/plugin-vue` 6 bunu zorunlu kılar). Geliştirme Node 25.8 / npm 11.11 ile yapıldı.

```bash
npm install          # package-lock.json mevcut; CI'da `npm ci` kullanın
npm run dev          # http://localhost:5173 (HMR)
npm run build        # vue-tsc -b (tip kontrolü) && vite build → dist/
npm run preview      # dist/ klasörünü http://localhost:4173'te sunar
npm run typecheck    # yalnızca tip kontrolü
```

`npm run build` tip hatası varsa **başarısız olur**. Bu bilinçli bir tercih.

---

## 3. Tech stack

### Bağımlılıklar (kurulu sürümler)

| Paket                | Sürüm   | Tür  | Not |
| -------------------- | ------- | ---- | --- |
| `vue`                | 3.5.44  | prod | Composition API + `<script setup lang="ts">` |
| `vite`               | 8.3.5   | dev  | Dev server ve bundler |
| `@vitejs/plugin-vue` | 6.0.10  | dev  | SFC desteği |
| `typescript`         | 5.9.3   | dev  | **Bilinçli olarak `~5.9` sabitlendi** (aşağıya bakın) |
| `vue-tsc`            | 3.3.13  | dev  | `.vue` dosyaları için tip kontrolü |
| `@vue/tsconfig`      | 0.9.1   | dev  | Temel tsconfig (`tsconfig.dom.json`) |
| `@types/node`        | 26.6.5  | dev  | Yalnızca `vite.config.ts` için |

> **TypeScript neden 5.9'da?** `npm install typescript` şu an TypeScript 7'yi (native/Go portu) kuruyor. `vue-tsc`'nin TS 7 ile uyumu henüz olgun değil, bu yüzden stabil 5.9 hattına sabitlendi. TS 7'ye geçmeden önce `vue-tsc`'nin resmi desteğini kontrol edin.

### Bilinçli olarak KULLANILMAYANLAR

| Kullanılmayan                     | Neden |
| --------------------------------- | ----- |
| Vue Router                        | Tek sayfa; navigasyon `id` anchor'ları ile yapılıyor |
| Pinia / Vuex                      | Paylaşılan state yok. Tüm içerik statik `data/` dosyalarından geliyor |
| Tailwind / UnoCSS / Sass          | Sade CSS + CSS custom properties yeterli. Stiller bileşen başına `scoped` |
| UI kütüphanesi (Vuetify, PrimeVue…) | Bundle boyutu ve tasarım kontrolü |
| İkon paketi (lucide, heroicons…)  | 16 ikon, `icons.ts` içinde satır içi SVG path olarak tutuluyor |
| Animasyon kütüphanesi             | Yalnızca hero görselinde tek bir CSS keyframe var |
| Nuxt / SSR                        | Kapsam dışı (bkz. [§17](#17-önerilen-sonraki-adımlar)) |

### Kurulu OLMAYAN geliştirme araçları

ESLint, Prettier, Stylelint, Vitest, Playwright/Cypress, Husky/lint-staged ve CI pipeline **yok**. Kod, Prettier benzeri bir stile elle uyularak yazıldı (2 boşluk, tek tırnak, noktalı virgül yok, ~120 karakter satır). Bkz. [§17](#17-önerilen-sonraki-adımlar).

### TypeScript ayarları

- `tsconfig.json` → solution-style. `tsconfig.app.json` ve `tsconfig.node.json` dosyalarına referans verir.
- `tsconfig.app.json` → `@vue/tsconfig/tsconfig.dom.json`'dan türer:
  - `strict: true`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
  - `verbatimModuleSyntax: true` (miras). **Tip import'larında `import type` zorunlu**
  - Path alias: `@/*` → `src/*` (aynı alias `vite.config.ts`'te de tanımlı)
- `tsconfig.node.json` → yalnızca `vite.config.ts`.
- `src/env.d.ts` → `vite/client` tipleri (PNG import'ları `string` olarak tiplenir).

---

## 4. Mimari ve klasör yapısı

```
hemi-web/
├── index.html                  # HTML kabuğu: <head> meta/OG etiketleri, Google Fonts, favicon
├── vite.config.ts              # Vue plugin + '@' alias
├── package.json
├── tsconfig*.json
├── public/                     # Olduğu gibi kopyalanır (hash'lenmez)
│   ├── favicon.png             # 256×256
│   └── apple-touch-icon.png    # 180×180
├── docs/
│   └── TEKNIK-DOKUMANTASYON.md # Bu dosya
└── src/
    ├── main.ts                 # createApp + global CSS import'ları
    ├── App.vue                 # Header + 7 bölüm + Footer (yalnızca kompozisyon, mantık yok)
    ├── env.d.ts
    ├── assets/images/          # Vite tarafından hash'lenen marka görselleri
    ├── styles/
    │   ├── tokens.css          # Tasarım değişkenleri (renk, tipografi, boşluk, radius)
    │   └── base.css            # Reset, global elemanlar, .container/.section/.btn/.section-head
    ├── types/content.ts        # İçerik arayüzleri + SectionId union tipi
    ├── data/
    │   ├── site.ts             # Linkler, e-posta, şirket adı (tek kaynak)
    │   └── content.ts          # Menü, özellikler, adımlar, yorumlar, SSS metinleri
    ├── composables/
    │   ├── useScrollSpy.ts     # Aktif bölüm takibi (IntersectionObserver)
    │   └── useSmoothScroll.ts  # Bölüme kaydırma + URL hash + odak yönetimi
    └── components/
        ├── layout/             # AppHeader, AppFooter
        ├── sections/           # Sayfa bölümleri (her biri bir <section id>)
        └── ui/                 # BaseIcon, icons.ts, StoreBadges
```

### Akış

```
main.ts ──► App.vue ──► AppHeader ──(useScrollSpy, useSmoothScroll)
                  │
                  ├──► *Section.vue  ◄── data/content.ts, data/site.ts
                  │                          ▲
                  │                     types/content.ts
                  └──► AppFooter
```

- **Tek yönlü ve statik:** Bileşenler `data/` modüllerini doğrudan import eder. Props ile içerik geçirilmez, event bus ya da store yoktur.
- **Bölümler bağımsızdır:** Her `*Section.vue` kendi başına çalışır. Sıra yalnızca `App.vue`'da belirlenir.
- **Global CSS minimumda tutuldu:** Yalnızca token'lar ve birkaç yardımcı sınıf (`.container`, `.section`, `.btn`, `.btn--primary`, `.btn--ghost`, `.section-head`, `.visually-hidden`) globaldir. Geri kalan her şey `<style scoped>` içindedir.

---

## 5. Veri katmanı (içerik yönetimi)

Tüm metinler koddan ayrılmıştır. **İçerik değişikliği için yalnızca `src/data/` dosyalarına dokunmak yeterlidir.**

### `src/data/site.ts`

`as const` ile dondurulmuş tek nesne:

| Alan            | Değer                                         | Durum |
| --------------- | --------------------------------------------- | ----- |
| `name`          | `Hemi`                                        | ✅ |
| `tagline`       | `Mahallenizin dayanışma ağı`                  | ✅ (feature çarkı görselindeki slogan) |
| `domain`        | `komsumnet.com`                               | ✅ |
| `appStoreUrl`   | `https://apps.apple.com/tr/app/id6756784030`  | ✅ Gerçek |
| `googlePlayUrl` | `''`                                          | ⚠️ Boş. Boşken "Yakında" rozeti gösterilir |
| `privacyUrl`    | `https://komsumnet.com/gizlilik-politikasi/`  | ✅ App Store kaydından alındı |
| `contactEmail`  | `destek@komsumnet.com`                        | ❌ **PLACEHOLDER. Gerçek adres değil** |
| `company`       | `EYS Aydınlatma İthalat ve İhracat Ticaret Ltd. Şti.` | ✅ App Store "Seller" bilgisi |

### `src/data/content.ts`

| Export          | Tip          | Kullanan bileşen | Not |
| --------------- | ------------ | ---------------- | --- |
| `navItems`      | `NavItem[]`  | AppHeader, AppFooter | `id`'ler `SectionId` union tipine bağlı |
| `features`      | `Feature[]`  | FeaturesSection  | 8 öğe. Feature çarkı görseliyle aynı sıra |
| `extraFeatures` | `string[]`   | FeaturesSection  | App Store sürüm notlarından derlendi |
| `pillars`       | `Pillar[]`   | WhySection       | 3 temel. "Neden" görseliyle eşleşir |
| `steps`         | `Step[]`     | StepsSection     | Görseller bu dosyada import ediliyor |
| `reviews`       | `Review[]`   | ReviewsSection   | App Store TR'deki gerçek yorumlar |
| `faqs`          | `FaqItem[]`  | FaqSection       | 7 soru. **Ürün ekibi teyidi gerekli** |

### Tip güvenliği

- `SectionId` bir string literal union'dır. `navItems` içine olmayan bir id yazılırsa derleme hatası alınır.
- `Feature.icon` ve `Pillar.icon` alanları `IconName` tipindedir (`keyof typeof icons`). Olmayan bir ikon adı derleme hatası verir.

---

## 6. Bileşenler

### Layout

#### `AppHeader.vue`
- `position: fixed`, yükseklik `var(--header-h)` (72px), beyaz zemin. Sayfa kaydırılınca (`scrollY > 8`) alt çizgi görünür.
- Menü `navItems`'tan üretilir. Aktif link `useScrollSpy` ile belirlenir (`.is-active` + `aria-current="true"`).
- Linkler gerçek `href="#id"` taşır (JS kapalıyken de çalışır). Tıklamada `@click.prevent` → `scrollToSection`.
- **≤1080px:** Hamburger butonu (`aria-expanded`, `aria-controls="ana-menu"`). Menü açılır panele dönüşür. `Esc` ile kapanır. Açıkken `body` scroll kilitlenir.
- "Uygulamayı indir" CTA'sı App Store'a gider.

#### `AppFooter.vue`
- Açık tema (beyaz zemin, üstte ince mor çizgi). Üç kolon: marka, sayfa linkleri, dış bağlantılar. Mobilde iki kolon.
- Yıl `new Date().getFullYear()` ile dinamik.

### Sections

| Bileşen | İçerik / davranış |
| ------- | ----------------- |
| `HeroSection` | H1 + açıklama + `StoreBadges` + 3 kısa bilgi. Sağda hero görseli (`fetchpriority="high"`). Sayfadaki **tek otomatik animasyon** buradadır (`hero-in` keyframe). ≤900px tek kolon. |
| `FeaturesSection` | 8 özellik: 4/2/1 kolonlu grid (1000px / 520px kırılımları). SOS ikonu kırmızı zeminli. Altta turkuaz zeminli "Uygulamada ayrıca" çipleri. |
| `WhySection` | Turkuaz zeminli panel. Sol: başlık + metin. Sağ: `hemi-neden-gorseli.png` **mor zemin üzerinde** (görsel beyaz/şeffaf; açık zeminde görünmez, bu yüzden mor kutu şart). Altta 3 beyaz kart. |
| `StepsSection` | 3 adım. Görsellerin içinde numaralar zaten var. Masaüstünde adımlar arasında turkuaz kesikli çizgi (`::before`). Mobilde dikey sıralanır ve çizgi gizlenir. |
| `ReviewsSection` | Sol: 5,0 puan + yıldızlar + App Store linki. Sağ: `<figure><blockquote>` yapısında yorumlar. |
| `FaqSection` | Native `<details>/<summary>` akordeon (JS yok). İlk soru açık gelir. "Bize yaz" linki İletişim'e kaydırır. |
| `ContactSection` | Sol: indirme CTA + e-posta. Sağ: form (ad, e-posta, mesaj). İstemci tarafında doğrulama yapılır, hata mesajları `aria-invalid`/`aria-describedby` ile bağlanır. **Gönderim `mailto:` ile yapılır, backend yok** (bkz. §14). |

### UI

#### `BaseIcon.vue`
```ts
props: { name: IconName; size?: number /* 24 */; strokeWidth?: number /* 2 */ }
```
- 24×24 viewBox, `stroke="currentColor"`. Renk, kapsayıcının `color` değerinden gelir.
- `aria-hidden="true"`, yani dekoratiftir. Anlam taşıyan yerlerde yanında görünür metin ya da `visually-hidden` metin bulunur.

#### `icons.ts`
- `as const satisfies Record<string, readonly string[]>`: her ikon bir path dizisidir.
- Path'ler Lucide (ISC lisansı) ikon setinin geometrisi temel alınarak yazıldı. Mevcut ikonlar: `shield, megaphone, handHeart, fingerprint, bulb, coins, sos, lock, check, plus, menu, close, mail, pin, star`.
- **Yeni ikon eklemek:** Diziye yeni bir anahtar ekleyin. `IconName` tipi otomatik güncellenir.

#### `StoreBadges.vue`
```ts
props: { inverted?: boolean /* false */ }
```
- App Store butonu her zaman görünür. Google Play, `site.googlePlayUrl` doluysa link, boşsa kesikli çerçeveli "Yakında" rozeti olarak (`<span>`, tıklanamaz) gösterilir.
- `inverted` prop'u koyu zemin için tanımlı ama **şu an hiçbir yerde kullanılmıyor**.
- Not: Bunlar Apple/Google'ın **resmi badge görselleri değil**, CSS ile çizilmiş butonlardır. Marka yönergelerine tam uyum isteniyorsa resmi SVG badge'lerle değiştirin.

---

## 7. Composable'lar

### `useScrollSpy<T extends string>(ids: readonly T[]): Ref<T>`
- `onMounted`'ta her `id` için `document.getElementById` çağırır ve `IntersectionObserver` ile izler.
- `rootMargin: '-35% 0px -60% 0px'`: ekranın üstten %35–%40 arasındaki ince banda giren bölüm aktif sayılır.
- `onBeforeUnmount`'ta observer'ı `disconnect` eder.
- **Kısıt:** Bölümlerin DOM'da mount anında var olması gerekir. Lazy/async bölüm eklenirse yeniden gözlem gerekir.

### `useSmoothScroll(): { scrollToSection(id: string): void }`
- `scrollIntoView({ behavior: 'smooth' })`. `prefers-reduced-motion: reduce` açıksa `'auto'`.
- Header ofseti JS'te hesaplanmaz. `html { scroll-padding-top: var(--header-h) }` ile CSS'te çözülür. Bu sayede doğrudan `/#sss` URL'siyle açılışta da doğru çalışır.
- `history.replaceState` ile URL hash'ini günceller (history kaydı eklemez; `ana-sayfa` için hash temizlenir).
- Erişilebilirlik için hedef bölüme `focus({ preventScroll: true })` uygular. Bu yüzden **her `<section>` `tabindex="-1"` taşımalıdır** (odak halkası `outline: none` ile gizli).

---

## 8. Stil sistemi ve tema

### Token'lar – `src/styles/tokens.css`

**Renkler**

| Token                  | Hex       | Kullanım |
| ---------------------- | --------- | -------- |
| `--c-white`            | `#FFFFFF` | Ana zemin |
| `--c-violet`           | `#7B3FE8` | Logo moru: ana marka, butonlar, ikon kutuları |
| `--c-violet-deep`      | `#5B23C4` | Hover/pressed |
| `--c-violet-tint`      | `#F3EFFE` | Yorumlar zemini, aktif menü |
| `--c-violet-line`      | `#DDD2FB` | Çizgiler, input kenarları |
| `--c-turquoise`        | `#7EDFD5` | Açık turkuaz: dekoratif (kesikli çizgi). **Metin rengi olarak kullanmayın** (kontrast yetersiz) |
| `--c-turquoise-deep`   | `#1F9E93` | Turkuaz metin/ikon. Odak halkası |
| `--c-turquoise-tint`   | `#E7F9F6` | "Neden Hemi" ve İletişim zeminleri |
| `--c-ink`              | `#1F1B4D` | Başlıklar (marka görsellerindeki lacivert) |
| `--c-text`             | `#4A4766` | Gövde metni |
| `--c-muted`            | `#77738F` | İkincil metin |
| `--c-sos`              | `#E0322F` | SOS ve form hataları |

**Tipografi**

| Token            | Değer |
| ---------------- | ----- |
| `--font-display` | Poppins 500/600/700 (başlıklar, butonlar, menü). Marka görselleriyle aynı font |
| `--font-body`    | Nunito Sans 400/600/700 (gövde) |
| `--fs-*`         | `sm 0.875rem`, `base 1.0625rem`, `md 1.25rem`, `lg/xl/hero` → `clamp()` ile akışkan |

**Diğer:** `--container: 1180px`, `--gutter: clamp(1rem, 4vw, 2rem)`, `--header-h: 72px`, `--section-y` (akışkan dikey boşluk), `--radius-sm/md/lg/pill`, `--shadow-soft` (yalnızca mobil menü), `--ease`.

### Tasarım ilkeleri (değişiklik yaparken korunmalı)

Müşteri talebi: **"Yapay zekâ görünümlü, abartılı, koyu (dark) tasarımlardan uzak; insan yapımı, sade."**

- Koyu tema yok. Koyu zeminli bölüm yok (footer da açık).
- Gradyan, glow, glassmorphism/backdrop-blur, neon efekt yok.
- Kaydırmada her bölüme fade-in animasyonu **eklenmedi** (bilinçli). Tek animasyon hero görselinde.
- Gölge neredeyse hiç yok. Ayrım zemin renkleriyle (beyaz / turkuaz tint / mor tint) sağlanıyor.
- Başlıklarda tek kelimeyi renklendirme gibi süslemeler yok.

### Breakpoint'ler

Breakpoint'ler bileşen bazlıdır, global bir değişken yoktur:

| px    | Nerede | Ne olur |
| ----- | ------ | ------- |
| 1080  | AppHeader | Hamburger menüye geçiş |
| 1000  | FeaturesSection | 4 → 2 kolon |
| 900   | Hero, Why, Reviews, FAQ, Contact | 2 → 1 kolon |
| 800   | StepsSection | 3 → 1 kolon, çizgi gizlenir |
| 760   | FeaturesSection başlık, Footer | Başlık tek kolon, footer 3 → 2 kolon |
| 520   | FeaturesSection | 2 → 1 kolon |

Doğrulama: 1440px masaüstü ve 390px mobil genişlikte ekran görüntüsüyle kontrol edildi. Yatay taşma yok.

---

## 9. Görseller ve statik dosyalar

Kaynak görseller tasarım ekibinden geldi (repo dışındaki `Icons and pngs/` klasörü). Projeye kopyalanırken büyük olanlar 2160px'ten 1200px'e küçültüldü (macOS `sips`).

| Dosya (`src/assets/images/`) | Boyut | Ağırlık | Kullanım |
| --- | --- | --- | --- |
| `hemi-logo.png` | 426×436 | 197 KB | Header, footer, iletişim (40–64px'te gösteriliyor) |
| `hemi-hero-gorseli.png` | 1200² | 306 KB | Hero (şeffaf zemin) |
| `hemi-neden-gorseli.png` | 1200² | 160 KB | Neden Hemi (beyaz çizim, şeffaf zemin, **mor zemin ister**) |
| `hemi-adim-*.png` (3 adet) | 512² | 34–43 KB | Nasıl Çalışır |
| `hemi-ozellik-carki.png` | 1200² | 350 KB | ❌ **Kullanılmıyor.** Koyu lacivert tasarım, açık temaya uymadığı için çıkarıldı. Build'e dahil edilmez |
| `hemi-logo-white.png` | 600px | 38 KB | ❌ **Kullanılmıyor.** Footer açık temaya geçince gereksiz kaldı. Build'e dahil edilmez |

`public/`: `favicon.png` (256²), `apple-touch-icon.png` (180²).

> **Optimizasyon fırsatı:** `hemi-logo.png` 197 KB ama en fazla 64px gösteriliyor. 128px'lik bir sürüm ya da SVG logo ile ~190 KB kazanılır. Diğer büyük PNG'ler WebP/AVIF'e (`<picture>` ile) çevrilirse toplam ağırlık ~%60–70 düşer.

---

## 10. Erişilebilirlik

**Yapılanlar**

- `lang="tr"`, semantik landmark'lar (`header`, `nav[aria-label]`, `main`, `section[aria-labelledby]`, `footer`).
- Başlık hiyerarşisi: tek `h1` (hero), her bölümde `h2`, kartlarda `h3`.
- Tüm interaktif elemanlarda görünür `:focus-visible` halkası (3px turkuaz).
- Mobil menü: `aria-expanded`, `aria-controls`, `visually-hidden` buton etiketi, `Esc` ile kapanma. Kapalıyken `visibility: hidden`, yani klavye ile odaklanılamaz.
- Menü tıklamasında odak hedef bölüme taşınır.
- `prefers-reduced-motion`: smooth scroll ve tüm animasyon/geçişler kapanır.
- Form: `label[for]`, `aria-invalid`, `aria-describedby`, `role="status"` ile gönderim bildirimi, `autocomplete` öznitelikleri.
- İçerik görsellerinde açıklayıcı `alt`, dekoratif görsellerde `alt=""`.
- Kontrast: metinler `--c-ink`/`--c-text` ile beyaz/tint zeminde. Açık turkuaz (`#7EDFD5`) yalnızca dekoratif.

**Yapılmayanlar / test edilmeyenler**

- Gerçek ekran okuyucu testi (VoiceOver/NVDA) yapılmadı.
- Otomatik a11y denetimi (axe/Lighthouse) çalıştırılmadı.
- Mobil menü açıkken **odak tuzağı (focus trap) yok**. Tab ile menünün dışına çıkılabilir.
- "Skip to content" linki yok.

---

## 11. Performans ve build çıktısı

`npm run build` sonucu (gzip öncesi):

| Dosya | Boyut | gzip |
| ----- | ----- | ---- |
| `index.html` | 1.4 KB | 0.7 KB |
| JS (Vue runtime + uygulama) | 88.8 KB | 34.6 KB |
| CSS | 17.7 KB | 4.1 KB |
| Görseller (6 adet) | ~778 KB | – |
| **Toplam `dist/`** | **~1.0 MB** | |

- Tek JS chunk (code-splitting gerekmiyor).
- Hero görseli `fetchpriority="high"`. Ekran altındaki görseller `loading="lazy"`.
- Fontlar Google Fonts CDN'den `display=swap` + `preconnect` ile yükleniyor.
- **Ölçülmedi:** Lighthouse/Core Web Vitals skorları alınmadı. Ana LCP elemanı hero görseli (306 KB PNG). WebP'ye geçmek en büyük kazancı sağlar.
- CSR olduğu için JS yüklenmeden içerik görünmez. SEO etkisi için §17'ye bakın.

---

## 12. Tarayıcı desteği

- Vite 8'in varsayılan build hedefi (Baseline "widely available": yaklaşık Chrome/Edge 107+, Firefox 104+, Safari 16+) değiştirilmedi. Kesin liste için Vite dokümantasyonuna bakın.
- Kullanılan modern CSS: `clamp()`, `inset`, boşluklu `rgb()` sözdizimi, `:focus-visible`, `scroll-padding-top`, `<details>` stillemesi. Hepsi bu hedeflerde destekleniyor.
- **IE11 ve eski Safari (<15) desteklenmez.**
- Test: Yalnızca Chrome (masaüstü, 1440px ve 390px genişlikte) ile görsel kontrol yapıldı. **Safari/iOS, Firefox ve gerçek cihaz testi yapılmadı.**

---

## 13. Deploy

Çıktı tamamen statiktir. `dist/` klasörü olduğu gibi herhangi bir statik hosting'e yüklenebilir.

```bash
npm ci && npm run build   # → dist/
```

| Platform | Ayar |
| -------- | ---- |
| Netlify / Vercel / Cloudflare Pages | Build: `npm run build` · Output: `dist` · Node: 22 |
| Nginx / Apache / cPanel | `dist/` içeriğini web root'a kopyalayın |

- Router olmadığı için SPA fallback (`try_files … /index.html`) **gerekmez**.
- `assets/` altındaki dosyalar hash'li. `Cache-Control: public, max-age=31536000, immutable` verilebilir. `index.html` için `no-cache` önerilir.
- **Dikkat:** Mevcut `komsumnet.com` sitesinde `/gizlilik-politikasi/` sayfası var ve App Store kaydı bu URL'ye bağlı. Bu site domain köküne deploy edilirse **gizlilik politikası sayfası korunmalı veya yeniden oluşturulmalı**. Aksi halde App Store'daki link kırılır.
- Ayrıca geliştirme sırasında `komsumnet.com` bazı ağlarda "Unrated" kategoride engellendi ve HTTPS sertifika zinciri doğrulanamadı (`unable to get local issuer certificate`). Deploy sonrası SSL zincirinin (intermediate sertifika) eksiksiz kurulduğunu kontrol edin.

---

## 14. Neler var / neler yok

### ✅ Hazır ve çalışıyor

- [x] Vue 3 + TypeScript (strict) + Vite 8 kurulumu, tip kontrollü build
- [x] Sabit üst menü, 7 bölüm, tıklayınca yumuşak kaydırma (header ofseti dahil)
- [x] Scroll-spy ile aktif menü vurgusu
- [x] URL hash senkronizasyonu (`/#sss` ile doğrudan açılış çalışır)
- [x] Responsive tasarım (1440px → 390px doğrulandı), hamburger menü
- [x] Hero, Özellikler, Neden Hemi, Nasıl Çalışır, Yorumlar, SSS, İletişim bölümleri, footer
- [x] Marka görselleri entegre (logo, hero, neden, 3 adım)
- [x] Merkezi içerik yönetimi (`data/`) ve tiplenmiş içerik modelleri
- [x] Satır içi SVG ikon sistemi (bağımlılıksız)
- [x] İstemci tarafı form doğrulaması
- [x] Temel SEO etiketleri: `title`, `description`, `og:title/description/type/url`, `theme-color`
- [x] Favicon + apple-touch-icon
- [x] Reduced-motion desteği, klavye ile kullanılabilirlik
- [x] Türkçe README + bu doküman

### ⚠️ Var ama geçici / doğrulanmalı

- [ ] **`contactEmail` placeholder**: `destek@komsumnet.com` uydurma bir adres
- [ ] **Google Play linki yok**: "Yakında" rozeti gösteriliyor. SSS'de "Android üzerinde çalışıyoruz" yazıyor
- [ ] **İletişim formu `mailto:` ile çalışıyor**: Kullanıcının cihazında mail istemcisi yoksa işe yaramaz. Mesajlar hiçbir yerde saklanmıyor
- [ ] **SSS ve özellik metinleri** App Store verisinden ve görsellerden **yorumlanarak yazıldı**. Özellikle Güven Skoru hesaplaması, "açık adres asla paylaşılmaz / '2 sokak ötede' gösterimi" ve SOS akışı ürün ekibince teyit edilmeli (bkz. §16)
- [ ] **Yorum tarihleri** App Store'daki "3 Eyl", "19 Nis" gibi gösterimlerden yıl tahmin edilerek yazıldı (2026)
- [ ] **"App Store'da 5,0 puan"** ifadesi yalnızca TR mağazası için geçerli (15 değerlendirme, Ekim 2026). Puan değişirse güncellenmeli. Şu an statik metin
- [ ] Store butonları resmi Apple/Google badge'leri değil

### ❌ Yok (kapsam dışı bırakıldı)

| Eksik | Etki / not |
| ----- | ---------- |
| **Backend / form servisi** | Form gerçek gönderim yapmıyor |
| **Lint/format araçları** (ESLint, Prettier, Stylelint) | Kod stili elle tutarlı. Otomatik kontrol yok |
| **Testler** (unit, component, e2e) | Hiç test yok |
| **CI/CD** | Pipeline yok |
| **SSR / SSG / prerender** | İçerik JS ile render ediliyor. Arama motorları ve sosyal önizlemeler için zayıf |
| **OG görseli** (`og:image`) ve Twitter Card | Paylaşımda görsel çıkmaz |
| **`robots.txt`, `sitemap.xml`, canonical** | Yok |
| **Yapılandırılmış veri** (JSON-LD `MobileApplication`/`Organization`) | Yok |
| **Analitik** (GA4, Plausible vb.) | Yok |
| **Çerez / KVKK onay banner'ı** | Şu an çerez kullanılmıyor. Analitik eklenirse **gerekli**. Ayrıca Google Fonts CDN'i kullanıcı IP'sini Google'a iletir; KVKK/GDPR hassasiyeti varsa fontları self-host edin |
| **KVKK aydınlatma metni / kullanım koşulları sayfası** | Yok. Gizlilik linki mevcut siteye gidiyor |
| **i18n (çoklu dil)** | Yalnızca Türkçe. App Store kaydı İngilizce |
| **Koyu tema** | Bilinçli olarak yok (müşteri talebi) |
| **404 sayfası** | Tek sayfa olduğu için yok. Hosting varsayılanı devreye girer |
| **Smart App Banner** (`apple-itunes-app` meta) | iOS Safari'de üstte "Aç/İndir" bandı için eklenebilir |
| **Web app manifest / PWA** | Yok |
| **Özellik çarkı görseli** | Mevcut ama kullanılmıyor (koyu tasarım) |

---

## 15. Bilinen sorunlar ve sınırlamalar

1. **Mobil menü + pencere büyütme:** Menü açıkken pencere 1080px'in üstüne büyütülürse `menuOpen` `true` kalır ve `body { overflow: hidden }` masaüstünde de devam eder (sayfa kaydırılamaz). Gerçek kullanıcıda nadir görülür (tablet döndürme senaryosu). **Çözüm:** `AppHeader.vue` içinde `matchMedia('(min-width: 1081px)')` dinleyip menüyü kapatın.
2. **Mobil menüde focus trap yok** (bkz. §10).
3. **Scroll-spy ve kısa son bölüm:** İletişim bölümü sayfanın en sonunda olduğundan çok yüksek ekranlarda "-35%/-60%" bandına hiç girmeyebilir. Bu durumda menüde "İletişim" aktif görünmez. Gerekirse "sayfa sonuna ulaşıldıysa son id'yi aktif yap" kontrolü ekleyin.
4. **`hemi-logo.png` gereğinden büyük** (bkz. §9).
5. **Header'daki ilk boyama:** Fontlar `swap` ile yüklendiği için kısa bir FOUT (fallback font) görülebilir.
6. Headless test sırasında Chrome'un 500px altında pencere açamadığı görüldü. Mobil doğrulama 390px iframe ile yapıldı. **Gerçek cihaz testi yapılmadı.**

---

## 16. İçerik kaynakları

Geliştirme sırasında `komsumnet.com` ağ güvenlik duvarı (FortiGuard, "Unrated" kategori) nedeniyle **açılamadı**. Mevcut sitenin menü/metinleri incelenemedi. İçerik şu kaynaklardan derlendi:

| İçerik | Kaynak | Güvenilirlik |
| ------ | ------ | ------------ |
| Ürün tanımı, "Mahallenizle bağlanın, tanışın" alt başlığı, konum doğrulama, mesajlaşma | [App Store kaydı](https://apps.apple.com/tr/app/id6756784030) açıklaması | Yüksek |
| Ek özellikler (hikâye, canlı yayın, @/#, video, mesafe araması, SOS kişileri) | App Store sürüm notları (v1.0.0 – v2.4.2) | Yüksek |
| 8 özellik adı (Güven Skoru, Duyurular, Yardımlaşma, Doğrulama, SkillHub, Kazanç, SOS, Gizlilik) | `hemi-ozellik-carki.png` | Yüksek (adlar). **Açıklamalar yorum** |
| 3 temel (Güven / Fırsat / Dayanışma) | `hemi-neden-gorseli.png` | Yüksek (başlıklar). **Açıklamalar yorum** |
| 3 adım (İndir & kaydol, Doğrula & katıl, Keşfet & kazan) | Adım görsellerinin dosya adları | Yüksek (adlar). **Açıklamalar yorum** |
| Güven Skoru 92/100, "2 sokak ötede", "GPS ile güvenli kayıt", SkillHub rozetleri | `hemi-hero-gorseli.png` içindeki arayüz | Orta: tasarım mockup'ı, gerçek davranış olmayabilir |
| Kullanıcı yorumları ve 5,0 puan | App Store TR yorumları (Ekim 2026) | Yüksek. Metinlerde yazım düzeltmesi yapıldı |
| Şirket adı, gizlilik URL'si | App Store "Seller" ve "Privacy Policy" alanları | Yüksek |
| SSS cevapları, Güven Skoru hesaplama mantığı, adres gizliliği | **Yazılımcı tarafından yazıldı** | **Düşük: teyit edilmeli** |
| İletişim e-postası | **Uyduruldu** | **Placeholder** |

---

## 17. Önerilen sonraki adımlar

Öncelik sırasıyla:

**P0 – Yayından önce şart**
1. `contactEmail` gerçek adresle değiştirilsin. SSS ve özellik metinleri ürün ekibince onaylansın.
2. `/gizlilik-politikasi/` sayfasının deploy sonrası erişilebilir kaldığı garanti edilsin (App Store linki).
3. İletişim formu için karar verilsin: gerçek bir endpoint (Formspree, Netlify Forms, kendi API'niz) bağlansın ya da form kaldırılıp yalnızca e-posta linki bırakılsın. Bağlanırsa `ContactSection.vue` → `submit()` içinde `mailto` satırı `fetch` ile değiştirilir. Loading/error durumları eklenir.
4. SSL sertifika zinciri kontrol edilsin.

**P1 – Kalite**
5. ESLint (`eslint-plugin-vue`, `typescript-eslint`) + Prettier + Stylelint, `lint`/`format` script'leri.
6. SEO: `og:image` (1200×630), `robots.txt`, `sitemap.xml`, canonical, JSON-LD (`MobileApplication`), `apple-itunes-app` meta.
7. **Prerender/SSG:** İçerik tamamen statik olduğu için `vite-ssg` ya da Nuxt (`nuxi generate`) ile HTML önceden üretilmeli. SEO ve LCP için en etkili adım budur.
8. Görseller WebP/AVIF'e çevrilsin, logo küçültülsün ya da SVG yapılsın.
9. §15'teki bilinen sorunlar (menü + resize, focus trap, scroll-spy son bölüm).

**P2 – Büyüme**
10. Analitik + KVKK uyumlu çerez onayı. Fontları self-host etme (`@fontsource/poppins`, `@fontsource/nunito-sans`).
11. Vitest + Vue Test Utils (composable'lar ve form doğrulaması için), Playwright ile menü/scroll e2e testi.
12. CI (GitHub Actions: `npm ci → typecheck → lint → build`).
13. Gerekirse i18n (`vue-i18n`). `data/content.ts` yapısı dil başına bir dosyaya bölünebilir.
14. Google Play yayınlanınca `googlePlayUrl` doldurulsun, SSS'deki Android cevabı güncellensin.

---

## 18. Kod konvansiyonları

- **SFC sırası:** `<script setup lang="ts">` → `<template>` → `<style scoped>`.
- **İsimlendirme:** Bileşenler PascalCase (`AppHeader`, `*Section`, `Base*`). Composable'lar `useX`. CSS sınıfları BEM benzeri (`.block__element--modifier`), bileşen içinde `scoped`.
- **Import'lar:** Her zaman `@/` alias'ı. Tipler için `import type`.
- **Metin:** UI metinleri Türkçe, "sen" diliyle, cümle düzeninde (sentence case). Butonlar eylemi söyler ("Mesajı gönder", "Uygulamayı indir").
- **Yorumlar:** Kod yorumları Türkçe ve yalnızca "neden"i açıklamak için.
- **Stil:** Sabit renk/ölçü yazmak yerine `tokens.css` değişkenleri kullanılır. Yeni global sınıf eklemekten kaçının. Bileşen içinde `scoped` stil tercih edin.
- **Yeni bölüm ekleme:** README'deki 3 adımlı tarif (bileşen + `SectionId` + `navItems`/`App.vue`). Kök elemana `id` ve `tabindex="-1"` vermeyi unutmayın.
