import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

/**
 * Ekranda o an hangi bölümün görüntülendiğini takip eder.
 * Üst menüde aktif bağlantıyı vurgulamak için kullanılır.
 *
 * Bölümlerin hiçbiri sayfada yoksa (ör. gizlilik politikası) aktif bölüm `undefined` olur.
 *
 * @param ids Takip edilecek <section> id'leri (sayfadaki sırayla)
 */
export function useScrollSpy<T extends string>(ids: readonly T[]): Ref<T | undefined> {
  const active = ref(ids[0]) as Ref<T | undefined>
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    // Ekranın üst-orta bandına giren bölüm "aktif" sayılır.
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) active.value = entry.target.id as T
        }
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )

    let found = false
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
        found = true
      }
    }
    if (!found) active.value = undefined
  })

  onBeforeUnmount(() => observer?.disconnect())

  return active
}
