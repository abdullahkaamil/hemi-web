import type { AppScreen, FaqItem, Feature, NavItem, Pillar, Review, Step } from '@/types/content'
import stepDownload from '@/assets/images/hemi-adim-indir-kaydol.png'
import stepVerify from '@/assets/images/hemi-adim-dogrula-katil.png'
import stepExplore from '@/assets/images/hemi-adim-kesfet-kazan.png'
import screenProfile from '@/assets/images/hemi-ekran-profil.jpg'
import screenFeed from '@/assets/images/hemi-ekran-akis.jpg'

export const navItems: NavItem[] = [
  { id: 'ana-sayfa', label: 'Ana Sayfa' },
  { id: 'ozellikler', label: 'Özellikler' },
  { id: 'neden-hemi', label: 'Neden Hemi' },
  { id: 'nasil-calisir', label: 'Nasıl Çalışır' },
  { id: 'yorumlar', label: 'Yorumlar' },
  { id: 'sss', label: 'SSS' },
  { id: 'iletisim', label: 'İletişim' },
]

/** Özellik çarkındaki sekiz dilim (hemi-ozellik-carki.png ile aynı sıra). */
export const features: Feature[] = [
  {
    icon: 'shield',
    title: 'Güven Skoru',
    description:
      'Her komşunun 100 üzerinden bir Güven Skoru var. Yardım ettikçe, doğrulandıkça ve olumlu geri bildirim aldıkça skorun yükselir.',
  },
  {
    icon: 'megaphone',
    title: 'Duyurular',
    description:
      'Su kesintisi, kayıp kedi, sokak şenliği… Mahallende olan biteni gerçek zamanlı akıştan takip et.',
  },
  {
    icon: 'handHeart',
    title: 'Yardımlaşma',
    description:
      'Bir matkap mı lazım, köpeğini gezdirecek biri mi? İsteğini paylaş, yakınındaki komşular “Yardım et” ile dönsün.',
  },
  {
    icon: 'fingerprint',
    title: 'Doğrulama',
    description:
      'Konum tabanlı doğrulama sayesinde platformdaki herkesin gerçekten senin mahallende yaşadığından emin olursun.',
  },
  {
    icon: 'bulb',
    title: 'SkillHub',
    description:
      'Komşularından yeni beceriler öğren, bildiklerini öğret. Tamamladığın eğitimlerle profiline rozet ekle.',
  },
  {
    icon: 'coins',
    title: 'Kazanç',
    description:
      'Hizmet Pazarı ve İlanlar ile mesleğini mahallene tanıt, ikinci el eşyalarını sat, yakınında iş bul.',
  },
  {
    icon: 'sos',
    title: 'SOS',
    description:
      'Acil bir durumda tek dokunuşla SOS gönder; yakınındaki komşular ve belirlediğin kişiler anında haberdar olsun.',
  },
  {
    icon: 'lock',
    title: 'Gizlilik',
    description:
      'Adresin hiçbir zaman açıkça paylaşılmaz. Kimin seni görebileceğini, takip edebileceğini sen belirlersin; istemediğin kişiyi engelleyebilirsin.',
  },
]

/** Uygulamadaki diğer modüller – özellikler bölümünün altında küçük liste olarak gösterilir. */
export const extraFeatures: string[] = [
  'Birebir ve grup mesajlaşma',
  '24 saatlik hikâyeler',
  'Canlı yayın',
  'Video akışı',
  '@bahsetme ve #etiketler',
  'Mesafeye göre komşu arama',
]

export const pillars: Pillar[] = [
  {
    icon: 'shield',
    title: 'Doğrulanmış komşular ve Güven Skoru',
    description: 'Aynı sokakta yaşayıp birbirini hiç tanımamak yerine, kim olduğunu bildiğin insanlarla bağ kur.',
    points: ['GPS ile güvenli kayıt', 'Doğrulanmış komşu rozeti', 'Davranışla yükselen Güven Skoru'],
  },
  {
    icon: 'coins',
    title: 'Hizmet Pazarı, İlanlar ve SkillHub',
    description: 'Mahalle ekonomisi: ihtiyacını iki sokak öteden karşıla, bildiğin işi komşularına sun.',
    points: ['Mahalleye özel hizmet ilanları', 'İkinci el ve kiralık ilanlar', 'Beceri eğitimleri ve rozetler'],
  },
  {
    icon: 'handHeart',
    title: 'SOS ve Sosyal Dayanışma',
    description: 'Eski mahalle kültürünün sıcaklığı: zor anında yanında olan, yardım isteyince koşan komşular.',
    points: ['Tek dokunuşla SOS', 'Acil durum kişileri yönetimi', 'Yardım istekleri ve geri dönüşler'],
  },
]

export const steps: Step[] = [
  {
    image: stepDownload,
    title: 'İndir ve kaydol',
    description: 'Hemi’yi App Store’dan ücretsiz indir; e-posta, telefon ya da sosyal hesabınla birkaç saniyede kaydol.',
  },
  {
    image: stepVerify,
    title: 'Doğrula ve katıl',
    description: 'Konumunu doğrula, mahallene katıl. Doğrulanmış komşu rozetin ve ilk Güven Skorun hemen oluşur.',
  },
  {
    image: stepExplore,
    title: 'Keşfet ve kazan',
    description: 'Akışı takip et, yardım iste ya da yardım et, ilan ver, beceri öğren. Katkı sağladıkça skorun ve rozetlerin artar.',
  },
]

/** App Store (Türkiye) kullanıcı yorumlarından alınmıştır. */
export const reviews: Review[] = [
  {
    title: 'Gerçekten bu kadarını beklemiyordum',
    body: 'Uygulamanın tasarımı, içerikleri gayet kullanışlı. Mesleğimi yazmam yeni iş bulmama yaradı, teşekkürler Hemi 💪',
    author: 'xJakal7',
    date: 'Eylül 2026',
  },
  {
    title: 'Harika bir uygulama',
    body: 'Mahalleni tanı, ağını genişlet, eski zamanlara ufak bir dönüş yap :)',
    author: 'TuğçeBayramm6161',
    date: 'Mart 2026',
  },
  {
    title: 'Maşallah!',
    body: 'Kültürümüz, mahremiyetimiz ve maneviyatımızı harmanlayan, ülkemizdeki sosyal mecra ihtiyacımızı karşılayan bir uygulama. Teşekkürler.',
    author: 'vPolatv',
    date: 'Nisan 2026',
  },
]

export const faqs: FaqItem[] = [
  {
    question: 'Hemi nedir?',
    answer:
      'Hemi, mahallenin dijital meydanıdır. Konum doğrulamasıyla yalnızca gerçekten aynı mahallede yaşayan insanları bir araya getirir; duyuruları, yardım isteklerini, ilanları ve sohbetleri tek bir yerde toplar.',
  },
  {
    question: 'Hemi ücretli mi?',
    answer: 'Hayır. Hemi’yi App Store’dan ücretsiz indirip kullanabilirsin.',
  },
  {
    question: 'Komşularımın gerçekten mahallemde yaşadığından nasıl emin olabilirim?',
    answer:
      'Kayıt sırasında konum tabanlı doğrulama yapılır. Doğrulanan kullanıcılar “Doğrulanmış komşu” rozeti alır ve Güven Skoru ile platformdaki davranışları görünür olur.',
  },
  {
    question: 'Güven Skoru nasıl hesaplanır?',
    answer:
      'Skor 100 üzerinden hesaplanır. Doğrulama adımlarını tamamlamak, komşulara yardım etmek, olumlu geri bildirim almak ve SkillHub eğitimlerini bitirmek skorunu artırır.',
  },
  {
    question: 'Adresim diğer kullanıcılara görünür mü?',
    answer:
      'Hayır. Açık adresin hiçbir zaman paylaşılmaz; diğer komşular yalnızca yaklaşık mesafeyi (ör. “2 sokak ötede”) görür. Gizlilik ayarlarından seni kimlerin takip edebileceğini de belirleyebilirsin.',
  },
  {
    question: 'SOS özelliği nasıl çalışır?',
    answer:
      'SOS butonuna dokunduğunda yakınındaki doğrulanmış komşulara ve önceden eklediğin acil durum kişilerine bildirim gider. Hayati tehlike durumlarında lütfen önce 112’yi ara.',
  },
  {
    question: 'Android sürümü var mı?',
    answer: 'Hemi şu an iPhone için App Store’da yayında. Android sürümü üzerinde çalışıyoruz.',
  },
]

/** "Uygulamanın içinden" bölümündeki iPhone mockup'ları (ikincisi öne çıkar). */
export const screens: AppScreen[] = [
  {
    title: 'Profilin',
    description: 'Gönderilerin, takipçilerin ve doğrulanmış komşu rozetin tek ekranda.',
    image: screenProfile,
    alt: 'Hemi profil ekranı: kullanıcı adı, doğrulama rozeti, gönderi ve takipçi sayıları, fotoğraf ızgarası',
    width: 946,
    height: 2048,
  },
  {
    title: 'Mahalle Akışı',
    description: 'Mahallem, İlçem ve Şehrim filtreleriyle yakınında olanı gör; canlı yayınları ve hikâyeleri kaçırma.',
    image: screenFeed,
    alt: 'Hemi mahalle akışı ekranı: canlı yayın ve hikâye halkaları, Mahallem filtresi seçili, komşunun fotoğraflı gönderisi',
    width: 946,
    height: 2048,
  },
]
