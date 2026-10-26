# Hemi – Tanıtım Sitesi

Hemi mahalle dayanışma uygulamasının (komsumnet.com) tek sayfalık tanıtım sitesi.
**Vue 3 + TypeScript + Vite** ile yazılmıştır; harici UI kütüphanesi kullanılmaz.

> Detaylı teknik doküman (tech stack, mimari, neler var / neler yok, bilinen sorunlar): **[docs/TEKNIK-DOKUMANTASYON.md](docs/TEKNIK-DOKUMANTASYON.md)**

## Kurulum

Node.js 20.19+ (veya 22.12+) gerekir.

```bash
npm install
npm run dev        # geliştirme sunucusu → http://localhost:5173
npm run build      # tip kontrolü + üretim çıktısı → dist/
npm run preview    # dist/ klasörünü yerelde sunar
```

`dist/` klasörü statik dosyalardan oluşur; herhangi bir statik hosting'e (Netlify, Vercel, Nginx, cPanel vb.) doğrudan yüklenebilir.

## Klasör yapısı

```
src/
├── App.vue                     # Bölümlerin sırası burada belirlenir
├── main.ts
├── assets/images/              # Logo ve marka görselleri
├── styles/
│   ├── tokens.css              # Renk, yazı tipi, boşluk değişkenleri (tema buradan değişir)
│   └── base.css                # Genel stiller, buton ve container sınıfları
├── data/
│   ├── site.ts                 # Linkler, e-posta, şirket bilgisi
│   └── content.ts              # Menü, özellikler, adımlar, yorumlar, SSS metinleri
├── types/content.ts            # İçerik tipleri
├── composables/
│   ├── useScrollSpy.ts         # Ekrandaki bölüme göre menüde aktif linki işaretler
│   └── useSmoothScroll.ts      # Menü tıklamasında ilgili bölüme yumuşak kaydırma
└── components/
    ├── layout/                 # AppHeader (sabit üst menü + mobil menü), AppFooter
    ├── sections/               # Hero, Özellikler, Neden Hemi, Nasıl Çalışır, Yorumlar, SSS, İletişim
    └── ui/                     # BaseIcon (satır içi SVG ikonlar), StoreBadges
```

## Menü ve otomatik kaydırma

Üst menü `src/data/content.ts` içindeki `navItems` dizisinden üretilir. Her `id`, ilgili bölümün
`<section id="...">` değeriyle aynıdır. Yeni bölüm eklemek için:

1. `src/components/sections/` altına bileşeni oluşturun ve kök elemana `id` + `tabindex="-1"` verin.
2. `types/content.ts` içindeki `SectionId` tipine id'yi ekleyin.
3. `navItems` dizisine ekleyin ve `App.vue` içinde bileşeni yerleştirin.

Sabit header yüksekliği `--header-h` değişkenindedir; kaydırma ofseti (`scroll-padding-top`) bu değeri kullanır.

## Tema

| Değişken             | Renk      | Kullanım                     |
| -------------------- | --------- | ---------------------------- |
| `--c-violet`         | `#7B3FE8` | Logo moru – ana marka rengi  |
| `--c-turquoise`      | `#7EDFD5` | Açık turkuaz – ikincil vurgu |
| `--c-turquoise-tint` | `#E7F9F6` | Açık turkuaz zeminler        |
| `--c-ink`            | `#1F1B4D` | Başlıklar (görsellerdeki lacivert) |
| Zemin                | `#FFFFFF` | Beyaz                        |

Yazı tipleri: başlıklar **Poppins** (marka görselleriyle aynı), metinler **Nunito Sans** (Google Fonts, `index.html`).

## Yayından önce yapılacaklar

- [ ] `src/data/site.ts` → `contactEmail` şu an **örnek** değerdir (`destek@komsumnet.com`); gerçek adresle değiştirin.
- [ ] Android sürümü yayınlanınca `googlePlayUrl` alanını doldurun; "Yakında" rozeti otomatik olarak indirme butonuna dönüşür.
      SSS'deki "Android sürümü var mı?" cevabını da güncelleyin.
- [ ] SSS ve özellik metinlerini (özellikle Güven Skoru hesaplaması, adres gizliliği, SOS akışı) ürün ekibiyle teyit edin.
- [ ] İletişim formu şu an kullanıcının e-posta uygulamasını açar (`mailto`). Bir backend / form servisi
      bağlanacaksa `ContactSection.vue` içindeki `submit()` fonksiyonunu güncelleyin.
- [ ] Yorumlar App Store Türkiye sayfasından alınmıştır; yenileri için `content.ts` → `reviews`.

## Notlar

- Kaynak görsellerden `hemi-ozellik-carki.png` (koyu lacivert özellik çarkı), açık temayla uyum için kullanılmadı;
  özellikler bölümü aynı sekiz başlıkla HTML olarak kurgulandı. İstenirse `FeaturesSection.vue` içine eklenebilir.
- Hero, adım ve "Neden Hemi" görselleri 1200px'e küçültülmüş PNG'lerdir. Daha da hafifletmek için WebP/AVIF'e çevrilebilir.
- Erişilebilirlik: klavye odağı görünür, `prefers-reduced-motion` desteklenir, mobil menü `Esc` ile kapanır.
