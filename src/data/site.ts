/**
 * Siteye ait sabit bilgiler (linkler, iletişim, şirket).
 * Değer değiştirmek için yalnızca bu dosyayı düzenlemeniz yeterlidir.
 */
export const site = {
  name: 'Hemi',
  tagline: 'Mahallenizin dayanışma ağı',
  domain: 'komsumnet.com',

  appStoreUrl: 'https://apps.apple.com/tr/app/id6756784030',
  /** Google Play bağlantısı hazır olduğunda buraya yazın; boş bırakılırsa "Yakında" rozeti gösterilir. */
  googlePlayUrl: '',

  privacyUrl: 'https://komsumnet.com/gizlilik-politikasi/',
  /** Sitedeki gizlilik politikası sayfası (gizlilik-politikasi/index.html). */
  privacyPath: '/gizlilik-politikasi/',
  /** KVKK aydınlatma metni sayfası (kvkk/index.html). */
  kvkkPath: '/kvkk/',

  // TODO: Gerçek iletişim adresiyle değiştirin (şu an örnek değerdir).
  contactEmail: 'destek@komsumnet.com',

  company: 'EYS Aydınlatma İthalat ve İhracat Ticaret Ltd. Şti.',
} as const
