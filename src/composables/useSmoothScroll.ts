/**
 * Menüden tıklanan bölüme yumuşak kaydırma yapar.
 * Sabit header yüksekliği CSS'teki `scroll-padding-top` ile dengelenir;
 * "hareketi azalt" tercihi açık olan kullanıcılar için animasyon kapanır.
 * Bölüm bu sayfada yoksa (ör. gizlilik politikası sayfası) ana sayfadaki bölüme gider.
 */
export function useSmoothScroll() {
  function scrollToSection(id: string) {
    const target = document.getElementById(id)
    if (!target) {
      const home = import.meta.env.BASE_URL
      location.href = id === 'ana-sayfa' ? home : `${home}#${id}`
      return
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })

    // Adres çubuğunu güncelle (sayfa zıplamadan) ve klavye odağını bölüme taşı.
    history.replaceState(null, '', id === 'ana-sayfa' ? location.pathname : `#${id}`)
    target.focus({ preventScroll: true })
  }

  return { scrollToSection }
}
