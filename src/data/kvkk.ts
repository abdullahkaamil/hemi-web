import type { PolicySection } from '@/types/content'

/**
 * KVKK Aydınlatma Metni.
 * Metin şirketin verdiği haliyle korunmuştur; yalnızca başlıklara bölünmüştür.
 */
export const kvkkSections: PolicySection[] = [
  {
    id: 'tanimlar',
    title: 'Tanımlar',
    blocks: [
      { type: 'p', text: 'İşbu aydınlatma metninde geçen;' },
      {
        type: 'defs',
        items: [
          {
            term: 'Kişisel Veri',
            text: 'Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi,',
          },
          {
            term: 'Kişisel Verilerin Korunması Kanunu (“KVKK”)',
            text: '7 Nisan 2016 tarihinde Resmi Gazete’de yayınlanarak yürürlüğe giren 6698 sayılı Kişisel Verilerin Korunması Kanunu’nu,',
          },
          {
            term: 'Komşumnet.com',
            text: 'Karayolları Mahallesi Cebeci Cad. No:178/A Gaziosmanpaşa İstanbul Türkiye adresinde mukim Eys Aydınlatma İth.İhr.San.Tic.Ltd.Şti.’ni,',
          },
          {
            term: 'Veri İşleyen',
            text: 'Veri sorumlusunun verdiği yetkiye dayanarak onun adına Kişisel Verileri işleyen gerçek veya tüzel kişiyi,',
          },
          {
            term: 'Veri Sorumlusu',
            text: 'Kişisel Verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan gerçek veya tüzel kişiyi, ifade eder.',
          },
        ],
      },
    ],
  },
  {
    id: 'veri-sorumlusu',
    title: 'Veri Sorumlusu',
    blocks: [
      {
        type: 'p',
        text: 'Veri Sorumlusu KVKK uyarınca muhatap, üye, katılımcı,paylaşımcı, bağışçı, stajyer, usta, tedarikçi, ziyaretçi, hibe alan, ödül alan, desteklenen, Fark Yaratan, yarışmacı, program ortağı ve/veya çalışanı/yöneticisi sıfatıyla paylaştığınız kişisel verileriniz; veri sorumlusu olarak belirlenen Komşumnet tüzel kişiliği tarafından aşağıda belirtilen kapsamda değerlendirilecektir.',
      },
    ],
  },
  {
    id: 'isleme-amaci',
    title: 'Kişisel Verilerin İşlenme Amacı',
    blocks: [
      { type: 'p', text: 'KVKK’nın 4., 5. ve 6. maddeleri uyarınca kişisel verileriniz;' },
      {
        type: 'list',
        items: [
          'Hukuka ve dürüstlük kurallarına uygun',
          'Doğru ve gerektiğinde güncel',
          'Belirli, açık ve meşru amaçlar için',
          'İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü',
          'İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilme',
        ],
      },
      { type: 'p', text: 'kurallarına uygun bir şekilde Faaliyetlere ait iletişimi sağlamak ve yürütmek' },
    ],
  },
  {
    id: 'aktarim',
    title: 'Kişisel Verilerin Aktarımı',
    blocks: [
      {
        type: 'p',
        text: 'KVKK’nın 8. ve 9. maddeleri uyarınca kişisel verileriniz yukarıda sayılan amaçlar dahilinde, EYS faaliyetlerinin sürdürülebilmesi için Kişisel Veri işleme şartları ve amaçları çerçevesinde gerekli görülen üçüncü kişilere (program ortağı, işbirliği yapılan kurum, tedarikçi, bağışçı, komşumnet yöneticileri/çalışanları, EYS Topluluğu şirketleri, EYS yönetimi/güvenlik birimi, hukuken yetkili kamu kurumu ve kuruluşları, hukuken yetkili özel hukuk kişileri ya da yurt dışı ülkeler) aktarılabilecektir.',
      },
    ],
  },
  {
    id: 'toplanma-yontemi',
    title: 'Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi',
    blocks: [
      {
        type: 'p',
        text: 'Kişisel verileriniz, KOMŞUMNET tarafından KVKK tarafından öngörülen temel ilkelere uygun olarak, KVKK’nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları kapsamında işbu Aydınlatma Metninde belirtilen amaçlarla da toplanabilmekte, işlenebilmekte ve aktarılabilmektedir.',
      },
    ],
  },
  {
    id: 'haklar',
    title: 'Kişisel Veri Sahibinin Hakları',
    blocks: [
      { type: 'p', text: 'KVKK’nın 11. maddesi uyarınca herkes, veri sorumlusuna başvurarak kendisiyle ilgili;' },
      {
        type: 'alpha',
        labels: ['a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'ğ'],
        items: [
          'Kişisel verilerinin işlenip işlenmediğini öğrenme,',
          'Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,',
          'Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,',
          'Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,',
          'Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,',
          'KVKK 7. maddede öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,',
          '(d) ve (e) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,',
          'İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,',
          'Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme,',
        ],
      },
      { type: 'p', text: 'haklarına sahiptir.' },
      {
        type: 'p',
        text: 'Yukarıda belirtilen haklarınız ile ilgili KOMŞUMNET’e yazılı olarak başvurmanız halinde, talebinizin niteliğine göre en geç 30 (otuz) gün içerisinde ücretsiz olarak yanıt verilecektir.',
      },
      {
        type: 'p',
        text: 'Başvurunuzu açık, anlaşır bir şekilde ve kimlik ve adres bilgilerinizi tespit edici belgeleri de ekleyerek, yazılı ve ıslak imzalı olarak elden, postayla ya da noter kanalıyla EYS AYDINLATMA İTH. İHR.SAN.TİC.LTD.ŞTİ. Karayolları Mah.Cebeci Cad. No:178/A Gaziosmanpaşa İstanbul Türkiye adresine ulaştırmanız gerekmektedir.',
      },
    ],
  },
]
