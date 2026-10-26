import type { PolicyBlock, PolicySection } from '@/types/content'

/**
 * Kişisel Verilerin Korunması ve Gizlilik Politikası metni.
 * Metin şirketin verdiği haliyle korunmuştur; yalnızca başlıklara bölünmüştür.
 * Paragraflardaki http(s) adresleri sayfada otomatik olarak bağlantıya dönüştürülür.
 */

const COMPANY = 'EYS AYDINLATMA İTHALAT VE İHRACAT TİCARET LİMİTED ŞİRKETİ'

export const privacyIntro: PolicyBlock[] = [
  {
    type: 'p',
    text: 'Bu web sitesini ziyaret etmeniz ve bu site vasıtasıyla sunduğumuz hizmetlerden yararlanmanız sırasında, size ve talep ettiğiniz hizmetlere ilişkin olarak elde ettiğimiz bilgilerin ne şekilde kullanılacağı ve korunacağı, işbu "Gizlilik Politikası"nda belirtilen şartlara tabidir. Bu web sitesini ziyaret etmekle ve bu site vasıtasıyla sunduğumuz hizmetlerden yararlanmayı talep etmekle işbu "Gizlilik Politikası"nda belirtilen şartları kabul etmektesiniz.',
  },
]

export const privacySections: PolicySection[] = [
  {
    id: 'amac',
    title: 'Kişisel Verilerin Korunması ve İşlenmesi Politikasının Amacı',
    blocks: [
      {
        type: 'p',
        text: 'Web sitemize gösterdiğiniz ilgi için teşekkür ederiz. Verilerin güvenliği bizim için son derece önemli olup bu verilerinizin korunması için gereken her türlü tedbiri almaktayız. Web sitemiz genel olarak herhangi bir kişisel veri verilmeden kullanılabilir. Ancak web sitemizde belirtilen ürün ve hizmetlerin sitemiz aracılığıyla kullanılmak istenilmesi halinde kişisel verilerinizin işlenmesi gerekebilmektedir. 6698 Sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) 7 Nisan 2016 tarihinde Resmî Gazete yayınlanarak yürürlüğe girmiştir. Kanun, kişisel verilerin “veri sorumlusu” olarak sınıflandırılan ve kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan gerçek veya tüzel kişilerce kişisel verilerin işlenmesine ilişkin usul ve esasları ortaya koymaktadır.',
      },
      {
        type: 'p',
        text: 'Kişisel veriler, kimliği belirli veya belirlenebilir bir gerçek kişiyle ilgili tüm bilgilerdir. Bir gerçek kişi, doğrudan veya dolaylı olarak, özellikle bir ad, kimlik numarası, konum verileri, çevrimiçi bir tanımlayıcı veya fiziksel, fizyolojik, bu gerçek kişinin genetik, psikolojik, ekonomik, kültürel veya sosyal kimliği belirlenebilir. Veri sorumlusu ise kişisel verilerin işlenme amaçlarına ve araçlarına tek başına veya başkalarıyla birlikte belirleyen gerçek veya tüzel kişi, makam, kurum veya diğer organdır. Veri sorumluları, gerçek kişiye ait verileri elde ederken verisi işlenen gerçek kişileri aydınlatmak ve bilgilendirmekle yükümlüdür. Bu yükümlülük kapsamında veri sorumluları veri sahiplerini;',
      },
      {
        type: 'check',
        items: [
          'Veri sorumlusunun ve varsa temsilcisinin kimliği,',
          'Kişisel verilerin hangi amaçla işleneceği,',
          'İşlenen kişisel verilerin kimlere ve hangi amaçla aktarılabileceği,',
          'Kişisel veri toplamanın yöntemi ve hukuki sebebi,',
          'Kanun’un 11. maddesinde sayılan diğer hakları,',
        ],
      },
      {
        type: 'p',
        text: 'Konularında bilgilendirmekle yükümlüdür. Bu Politikanın konusu Şirketimiz ’in gerçek ve tüzel kişi müşterileri, tüzel kişi müşterilerinin gerçek kişi yetkilileri, hissedarları ve çalışanları, aday müşterileri, grup şirketlerimiz, iş ortaklarımızın ve tedarikçilerimizin gerçek kişi yetkilileri, ortakları, ve çalışanları ile çalışan adaylarımız, geçmişten bugüne şirketimizde çalışmış kişiler ile stajyer kişiler, ziyaretçilerimiz, şirket yetkilileri ile ortaklarımız, iş ortağı ve aday tedarikçilerimiz ve sair üçüncü kişiler olup şirket çalışanlarına ilişkin kişisel verilerin işlenmesine ilişkin hususlar yasal mevzuata uygun şekilde şirket çalışanlarına verilen çalışan kişisel verilerinin korunmasına ilişkin politika kapsamında düzenlenmektedir.',
      },
    ],
  },
  {
    id: 'kapsam',
    title: 'Kişisel Verilerin Korunması ve İşlenmesi Politikasının Kapsamı ve Değiştirilmesi',
    blocks: [
      {
        type: 'p',
        text: 'Şirketimiz tarafından hazırlanan bu Politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu’na (“KVKK”) uygun olarak hazırlanmıştır. Kanun, bugün itibariyle bütün hükümleri ile yürürlüğe girmiştir. Sizlerden rızanızla ya da Kanunda sayılan diğer hukuka uygunluk gereği elde edilmiş veriler, sunmuş olduğumuz hizmetlerin daha kaliteli hale getirilmesi, sizlere sunulan hizmetlerin ve kalite politikamızın iyileştirilmesi amacıyla kullanılacaktır. Yine elimizdeki bazı veriler ise, kişisel olmaktan çıkarılmakta ve anonimleştirilmektedir. Bu veriler, istatistiki amaçlarla kullanılan verilerdir ve Kanun uygulamasına ve Politikamıza tabi değildir.',
      },
      {
        type: 'p',
        text: `${COMPANY} Kişisel Verilerin Korunması ve İşlenmesi Politikası, müşterilerimizin, müşteri adaylarımızın, çalışanlarımız ile bizimle çözüm ortaklığı içinde çalışan şirketlerin müşterileri ve çalışanlarının ya da diğer kişilerin otomatik olarak elde edilen verilerinin korunmasını amaçlar ve bunlara ilişkin düzenlemeleri içerir. Şirketimiz, politikamızı ve Yönetmeliğimizi -Kanuna uygun olmak ve kişisel verilerin daha iyi korunması şartı ile değiştirme hakkına sahiptir.`,
      },
    ],
  },
  {
    id: 'temel-kurallar',
    title: 'Kişisel Verilerin İşlenmesi ile İlgili Temel Kurallar',
    subsections: [
      {
        title: 'Kişisel Verilerin İşlenmesine İlişkin Genel İlkeler',
        blocks: [
          {
            type: 'p',
            text: 'KVKK m.4. gereğince kişisel veriler, yasal mevzuatta belirtilen usul ve esaslar doğrultusunda işlenmelidir. Bu kapsamda veri sorumluları, aydınlatma yükümlülüğünü yerine getirmekle birlikte KVKK m.4’te belirtilen ve aşağıda ifade edilen genel ilkelere uymak zorundadır:',
          },
          {
            type: 'check',
            items: [
              'Hukuka ve dürüstlük kurallarına uygun olma.',
              'Doğru ve gerektiğinde güncel olma.',
              'Belirli, açık ve meşru amaçlar için işlenme.',
              'İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma.',
              'İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilme.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'isleme-ve-aktarma-amaclari',
    title: 'Kanun Kapsamında Kişisel Veri İşleme ve Aktarma Amaçları',
    subsections: [
      {
        title: 'Kişisel Verilerin İşlenmesine İlişkin Amaçlar',
        blocks: [
          {
            type: 'p',
            text: 'Kişisel veriler, veri sahibi gerçek kişinin onayı olmaksızın işlenememektedir. Ancak bazı hallerde (KVKK m.5 ve 6) kişisel veriler açık rıza bulunmaksızın veri işlenebilecektir. KVKK m.5 uyarınca kişisel veriler,',
          },
          {
            type: 'check',
            items: [
              'Veri işlemenin yasalarda açıkça öngörülmesi,',
              'Fiili imkânsızlık nedeniyle rızasını açıklayamayacak durumda bulunan veya rızasına hukuki geçerlilik tanınmayan kişinin kendisinin ya da bir başkasının hayatı veya beden bütünlüğünün korunması için ilgili verilerin işlenmesinin zorunlu olması,',
              'Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması,',
              'Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için veri işlemenin zorunlu olması,',
              'Kişisel verilerin ilgili kişinin kendisi tarafından alenileştirilmiş olması,',
              'Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması,',
              'İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması,',
            ],
          },
          {
            type: 'p',
            text: 'gibi durumlarda verisi işlenen gerçek kişinin rızası alınmaksızın verisi işlenebilecektir. Ayrıca, öğrenilmesi durumunda kişinin ayrımcılığa maruz kalacağı düşüncesiyle sağlık, cinsel hayat, cinsel tercih, etnik köken, ırk, siyasi düşünce, inanç, mezhep, kılık kıyafet, vakıf veya sendika üyeliği, ceza mahkûmiyeti ve güvenlik tedbirleriyle ilgili veriler ile biyometrik ve genetik veriler kanunda “özel nitelikli” veri olarak belirlenmiş ve bu verilerin işlenme şartlarını ağırlaştırmıştır. Buna göre, özel nitelikli veriler, açık rıza alınana haller dışında aşağıda belirtilen şartlarda işlenebilecektir:',
          },
          {
            type: 'check',
            items: [
              'Veri sahibini dini, mezhebi veya diğer inançları, etnik kökeni, ırkı, felsefi inancı, siyasi düşüncesi, ceza mahkûmiyeti ve güvenlik tedbirleriyle ilgili verileri, kılık ve kıyafeti, dernek, vakıf ya da sendika üyeliğiyle ilgili verileri ile biyometrik ve genetik verileri, kanunlarda belirlenen durumlarda işlenebilecektir.',
              'Sağlık ve cinsel hayata ilişkin veriler, kamu sağlığının korunması, tıbbı teşhis, sağlık görevleri ile finansmanının planlanması, koruyucu hekimlik, tedavi ve bakım süreçlerinin sürdürülmesi ve idaresi maksadıyla, sır saklama sorumluluğu bulunan kişi, kurum ve kuruluşlar tarafından işlenebilecektir.',
            ],
          },
        ],
      },
      {
        title: 'Kişisel Verilerin Paylaşımının Amaçları',
        blocks: [
          {
            type: 'p',
            text: 'Elde edilen kişisel verilerin üçüncü bir kişi veya kurum ile paylaşılması içinde ilgili veri sahibinden bu doğrultuda açık rıza alınması gerekmektedir. Ancak KVKK m.8’e göre veri işlemeye müsaade edilen koşullarda veri transferi de sağlanabilmekte olup bu cihette yukarıda Bölüm 2.II. a’da belirtilen koşulların bulunması durumunda veri sahibinin açık rızası bulunmasa dahi kişisel veri transferi yapılabilecektir.',
          },
          {
            type: 'p',
            text: 'Kişisel verilerin yurt içinde veya yurt dışında üçüncü kişilere aktarımı özel şartlara bağlanmıştır. Kişisel veriler; veri sahibi gerçek kişinin açık rızasının varlığı halinde, veya veri sahibi gerçek kişinin açık rızasının olmadığı ancak yukarıda belirtilen diğer koşullardan bir veya birkaçının varlığı halinde; ilgili verilerin aktarıldığı ülkede gerekli koruma tedbirlerinin alınması ve ilgili verilerin aktarıldığı ülkede gerekli koruma tedbirinin bulunmaması halinde veri sorumlusunun veri aktarılan ülkedeki veri sorumlusu ile birlikte gerekli korumayı taahhüt etmesi ve kuruldan izin alınması şartıyla yurtdışına veri aktarılabilmektedir.',
          },
        ],
      },
      {
        title: 'Kapsam Dışı Durumlar',
        blocks: [
          { type: 'p', text: 'KVKK m.28 uyarınca aşağıdaki durumlarda yasal hükümler uygulanmayacaktır:' },
          {
            type: 'check',
            items: [
              'Kişisel verilerin, üçüncü kişilere verilmemek ve veri güvenliğine ilişkin yükümlülüklere uyulmak kaydıyla gerçek kişiler tarafından tamamen kendisiyle veya aynı konutta yaşayan aile fertleriyle ilgili faaliyetler kapsamında işlenmesi.',
              'Kişisel verilerin resmi istatistik ile anonim hâle getirilmek suretiyle araştırma, planlama ve istatistik gibi amaçlarla işlenmesi.',
              'Kişisel verilerin millî savunmayı, millî güvenliği, kamu güvenliğini, kamu düzenini, ekonomik güvenliği, özel hayatın gizliliğini veya kişilik haklarını ihlal etmemek ya da suç teşkil etmemek kaydıyla, sanat, tarih, edebiyat veya bilimsel amaçlarla ya da ifade özgürlüğü kapsamında işlenmesi.',
              'Kişisel verilerin millî savunmayı, millî güvenliği, kamu güvenliğini, kamu düzenini veya ekonomik güvenliği sağlamaya yönelik olarak kanunla görev ve yetki verilmiş kamu kurum ve kuruluşları tarafından yürütülen önleyici, koruyucu ve istihbarı faaliyetler kapsamında işlenmesi. Kişisel verilerin soruşturma, kovuşturma, yargılama veya infaz işlemlerine ilişkin olarak yargı makamları veya infaz mercileri tarafından işlenmesi.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'silinme',
    title: 'Kişisel Verilerin Silinmesi',
    blocks: [
      {
        type: 'p',
        text: `Kanunen saklanması gereken sürelerin dolması, yargı süreçlerinin tamamlanması ya da diğer gereklilikler ortadan kalktığında şirketimiz tarafından bu veriler kendiliğinden ya da ilgili kişinin talebi üzerine kişisel veriler silinir, yok edilir ya da anonim hale getirilir. ${COMPANY} bünyesinde bulunan veriler, kural olarak ilgili kişilerin beyanı üzerine beyan ettiği şekilde işlenir. ${COMPANY}, müşteriler ya da ${COMPANY} ile temas kuran kişilerin beyan ettiği verilerin doğruluğunu araştırmak zorunda olmadığı gibi bu hukuken ve çalışma ilkelerimiz nedeniyle de yapılmaz. Beyan edilen veriler, doğru kabul edilir. Kişisel verilerin doğruluğu ve güncelliği ilkesi ${COMPANY} tarafından da benimsenmiştir. Şirketimizin kendisine ulaşan resmî belgelerden veya ilgilisinin talebi üzerine işlemiş olduğu kişisel verileri günceller. Bunun için gerekli önlemleri alır.`,
      },
    ],
  },
  {
    id: 'veri-guvenligi',
    title: 'Gizlilik ve Veri Güvenliği',
    blocks: [
      {
        type: 'p',
        text: `Kişisel veriler gizlidir ve ${COMPANY} de bu gizliliğe riayet etmektedir. Kişisel verilere şirket içinde ancak yetki verilmiş kişiler ulaşabilir. ${COMPANY} tarafından toplanan kişisel verilerin korunması ve yetkisiz kişilerin eline geçmemesi ve müşterilerimizin ve müşteri adaylarımızın mağdur olmaması için gerekli teknik ve idari bütün tedbirler alınmaktadır. Bu çerçevede yazılımların standartlara uygun olması, üçüncü partilerin özenle seçilmesi ve şirket içinde de veri koruma politikasına riayet edilmesi sağlanmaktadır.`,
      },
    ],
  },
  {
    id: 'veri-isleme-amaclari',
    title: 'Veri İşleme Amaçları',
    blocks: [
      {
        type: 'p',
        text: 'EYS AYDINLATMA İTHALAT VE İHRACAT TİCARET LİMİTED Şirketi’nin kişisel verileri toplanması ve işlenmesi aydınlatma metninde belirtilen amaçlar doğrultusunda icra edilecektir. Veriler, sözleşmenin kurulması ve KULLANICILARA daha iyi hizmet sağlanması amacıyla toplanmakta ve işlenmektedir. Şirketimiz, yukarıda belirtilen kapsamda kişisel verileri aşağıdaki amaçlarla işlemektedir:',
      },
      {
        type: 'check',
        items: [
          'Veri güvenliği süreçlerinin planlanması, denetlenmesi ve yürütülmesi,',
          'Veri teknolojileri alt yapısının oluşturulması ve uygulanması,',
          'Kullanıcıların hak ve avantaj sağlanma faaliyetlerinin planlanması ve icrası,',
          'Kullanıcılara dönük haberleşme ve/veya kullanıcıların iştirak ettiği kurumsal sosyal sorumluluk ve/veya sivil toplum kurumlarının faaliyetlerinin planlanması ve/veya icrası,',
          'Kullanıcıların veriye erişim yetkiliklerinin denetimi, planlanması ve icrası,',
          'Kullanıcıların faaliyetlerinin denetimi ve takibi,',
          'İş ortakları ve/veya tedarikçilerin veriye erişim yetkilerinin planlanması ve icrası,',
          'İş ortakları ve/veya tedarikçilerle olan ilişkilerin yönetimi,',
          'Kullanıcı sürekliliğinin sağlanması faaliyetlerinin planlanması ve/veya icrası,',
          'Kurumsal iletişim faaliyetlerinin planlanması ve icrası,',
          'Kurumsal yönetim faaliyetlerin planlanması ve icrası,',
          'Kullanıcı Müşteri ilişkileri yönetimi süreçlerinin planlanması ve icrası,',
          'Kullanıcı memnuniyeti aktivitelerinin planlanması ve/veya icrası,',
          'Kullanıcı talep ve şikayetlerinin takibi,',
          'Personel ve hizmet tedariği temin süreçlerinin yürütülmesi,',
          'Kullanıcı için iş akdi ve/veya mevzuattan kaynaklı yükümlülüklerin yerine getirilmesi,',
          'Kullanıcı eğitim faaliyetlerinin planlanması ve icrası,',
          'Şirket faaliyetlerinin şirket prosedürleri ve/veya yasal mevzuata uygun biçimde yürütülmesinin temini için gerekli operasyonel faaliyetlerinin planlanması ve icrası,',
          'Kullanıcılara sunulan Şirketin sunduğu ürün ve/veya hizmetlere bağlılık oluşturulması ve/veya arttırılması süreçlerinin planlanması ve/veya icrası,',
          'Stratejik planlama faaliyetlerinin icrası,',
          'Tedarik zinciri yönetimi süreçlerinin planlanması ve icrası,',
          'Ürün ve hizmetlerin satış ve pazarlaması için pazar araştırması faaliyetlerinin planlanması ve icrası,',
          'Ürün ve/veya hizmetlerin pazarlama süreçlerinin planlanması ve icrası,',
          'Ürün ve/veya hizmetlerin satış süreçlerinin planlanması ve icrası,',
          'Verilerin doğru ve güncel olmasının sağlanması,',
          'Yetkili kuruluşlara mevzuattan kaynaklı bilgi verilmesi,',
          'Ziyaretçi kayıtlarının oluşturulması ve takibi',
        ],
      },
    ],
  },
  // TODO: Orijinal metindeki "Şirketimiz Tarafından İşlenen Kişisel Verilerin Kategorizasyonu" başlığının
  // altı boş geldi ("…aşağıdaki gibidir:" sonrası içerik yok). Kategori listesi gelince buraya bölüm olarak ekleyin.
  {
    id: 'musteri-ve-is-ortaklari',
    title: 'Müşteri, Muhtemel Müşteri ve İş ve Çözüm Ortakları Verisi',
    subsections: [
      {
        title: 'Sözleşme İlişkisi İçin Verinin Toplanması ve İşlenmesi',
        blocks: [
          {
            type: 'p',
            text: 'Müşterilerimiz ve muhtemel müşterilerimizle bir sözleşme ilişkisi kurulmuş ise, toplanmış olan kişisel veriler, müşterinin onayı alınmaksızın kullanılabilir. Ancak bu kullanım, sözleşme amacı doğrultusunda gerçekleşir. Sözleşmenin daha iyi icrası ve hizmetin gereklilikleri ölçüsünde veriler kullanılır ve gerektiğinde müşterilerle irtibata geçilerek güncellenir. Buna karşın müşteri adaylarımızın (muhtemel müşteri) bize kendileri tarafından bırakmış olduğu veriler, onlara sonrasında daha kolay ve kaliteli hizmet sunmak için işlenir. Bu veriler talepleri halinde bir sözleşme ilişkisine dönüşmemişse silinir.',
          },
        ],
      },
      {
        title: 'İş ve Çözüm Ortakları Verileri',
        blocks: [
          {
            type: 'p',
            text: `${COMPANY} gerek iş gerekse çözüm ortakları ile veri paylaşımı yaparken hukuka uygun davranmayı ilke edinir. İş ve çözüm ortakları ile veri gizliliği taahhüdü ile ve ancak hizmetin gerektirdiği kadar veri paylaşılmakta ve bu taraflardan mutlaka veri güvenliğinin alınmasına ilişkin tedbirleri almaya zorlanmaktadır.`,
          },
        ],
      },
      {
        title: 'Reklam Amaçlı Veri İşleme',
        blocks: [
          {
            type: 'p',
            text: `E-Ticaretin Düzenlenmesi Hak. Kanun ile Ticari İletişim ve Ticari Elektronik İletiler Hak. Yönetmeliğe uygun olarak ancak önceden onay alınan kişilere reklam amaçlı elektronik ileti gönderilebilir. Reklamın gönderileceği kişinin onayının açık bir şekilde mevcudiyeti şarttır. Yine aynı mevzuat uyarınca belirlenen “onayın detaylarına ${COMPANY} riayet etmektedir.`,
          },
        ],
      },
      {
        title: 'Şirketin Hukuki Yükümlülüğü veya Kanunda Açıkça Öngörülmesi Sebebiyle Yapılan Veri İşlemleri',
        blocks: [
          {
            type: 'p',
            text: 'Kişisel veriler, işlemenin ilgili mevzuatta açıkça belirtilmesi veya mevzuatla belirlenen bir hukuki yükümlülüğün yerine getirilmesi amacıyla ayrıca onay alınmadan işlenebilir. Veri işlemlerinin tür ve kapsamı, yasal olarak izin verilen veri işleme faaliyeti için gerekli olmalı ve ilgili yasal hükümlere uygun olmalıdır.',
          },
        ],
      },
      {
        title: 'Şirketin Veri İşlemesi',
        blocks: [
          {
            type: 'p',
            text: 'Şirketin sunduğu hizmet ve meşru amaçları doğrultusunda kişisel veriler işlenebilir. Ancak veriler hiçbir şekilde hukuka aykırı hizmetler için kullanılamaz.',
          },
        ],
      },
      {
        title: 'Özel Nitelikli Verilerin İşlenmesi',
        blocks: [
          {
            type: 'p',
            text: `Kanun’a göre Kişilerin ırkı, etnik kökeni, siyasi düşüncesi, felsefi inancı, dini, mezhebi veya diğer inançları, kılık ve kıyafeti, dernek, vakıf ya da sendika üyeliği, sağlığı, cinsel hayatı, ceza mahkûmiyeti ve güvenlik tedbirleriyle ilgili verileri ile biyometrik ve genetik verileri özel nitelikli kişisel veridir. ${COMPANY} ayrıca, özel nitelikli kişisel verilerin işlenmesinde, ayrıca Kurul tarafından belirlenen yeterli önlemleri alır. ${COMPANY}, hizmetlerin daha iyi verilebilmesi için kişilerin onayı ile özel nitelikli verileri ancak toplandıkları amaç için işleyebilir.`,
          },
        ],
      },
      {
        title: 'Üyelik İşlemleri Yolu ile Elde Edilen Veriler',
        blocks: [
          {
            type: 'p',
            text: `${COMPANY}’ne üye olmanız halinde, üyelik işlemi için bizimle paylaştığınız kişisel verileriniz sistemlerimizde işlenir. Şayet bizim sistemimize Facebook, Google ya da başka sosyal medya araçları ile üye olursanız; adınız, soyadınız, profil resminiz ve e-posta adresiniz gibi, ilgili sosyal medya aracının partnerlerine sağladığı bilgilerinize erişilmekte ve bu bilgiler ${COMPANY} sistemlerine aktarılmaktadır.`,
          },
        ],
      },
      {
        title: 'Otomatik Sistemlerle İşlenen Veriler',
        blocks: [
          {
            type: 'p',
            text: `Otomatik sistemler aracılığı ile işlenen veriler konusunda ${COMPANY}, Kanuna uygun davranır. Kişilerin açık rızası olmaksızın bu verilerden elde edilen bilgiler kişi aleyhine kullanılamaz. Ancak ${COMPANY}, kendi sistemindeki verileri kullanarak işlem yapacağı kişilerle ilgili kararlar alabilir.`,
          },
        ],
      },
    ],
  },
  {
    id: 'cerezler',
    title: 'Çerezler',
    subsections: [
      {
        title: 'İşlevsel ve Analitik Çerezler',
        blocks: [
          {
            type: 'p',
            text: 'Tercihlerinizi hatırlamak, internet sitesinin etkin şekilde kullanılması, sitenin kullanıcı isteklerine cevap verecek şekilde optimize edilmesi ve ziyaretçilerin siteyi nasıl kullandığı hakkında verileri içerir. Niteliği gereği bu türdeki çerezler kullanıcı adı vb. kişisel bilgilerinizi içerebilir.',
          },
        ],
      },
      {
        title: 'Üçüncü Taraf Çerezler',
        blocks: [
          {
            type: 'p',
            text: `${COMPANY} internet siteleri/mobil uygulamaları/mobil internet siteleri üçüncü parti güvenilir, tanınmış reklam sağlayıcılarıyla çalışmaktadır. Üçüncü parti hizmet sağlayıcılar size özel reklamları sunabilmek için kendi çerezlerini yerleştirmektedirler. Üçüncü parti tarafından yerleştirilen çerezler internet sitelerinde ziyaretçilerin gezinme bilgilerini toplar, işler ve nasıl kullandıklarını analiz eder.`,
          },
        ],
      },
      {
        title: 'Ticari Çerezler',
        blocks: [
          {
            type: 'p',
            text: 'İlgi alanlarınız ve seçimleriniz doğrultusunda hedeflediğiniz ürün/içeriğe benzer nitelikli olanların sunulması ve daha gelişmiş, kişiselleştirilmiş bir reklam portföyü sunarak kullanım deneyiminizi artırmaya yarar. Yukarıda ifade edilen oturum, kalıcı, işlevsel ve analitik ve ticari çerezlerin arka planda tutulma süresi yaklaşık 2 (iki) ay olup şahıs internet tarayıcısı ayarlarından bunda gerekli ayarlamaları yapılabilir. İşbu ayarlardan kaldırılma işlemi internet tarayıcısı bazlı değişebilmektedir.',
          },
        ],
      },
      {
        title: 'Çerezleri nasıl silebilirim?',
        blocks: [
          {
            type: 'p',
            text: 'Pek çok internet tarayıcısı, bilgisayarınıza ilk kurulumundan itibaren çerezleri otomatik olarak kabul etmeye ve kullanmaya ayarlıdır. İnternet tarayıcınızın yardım ya da ayarlar menülerini kullanarak, çerezlerin engellenmesini veya cihazınıza çerez gönderildiğinde uyarı verilmesini sağlayabilirsiniz. Çerezleri yönetmenin farklı yollarını öğrenmek ve kullandığınız tarayıcının ayarlarını nasıl düzenleyeceğiniz hakkında ayrıntılı bilgi almak için tarayıcınızın talimat veya yardım seçenekleri ekranından yararlanabilirsiniz.',
          },
        ],
      },
    ],
  },
  {
    id: 'telekomunikasyon',
    title: 'Telekomünikasyon ve İnternet',
    blocks: [
      {
        type: 'p',
        text: 'Şirket içinde çalışanlara tahsis edilen bilgisayar, telefon, e-posta ve diğer uygulamalar çalışana sadece iş amacı ile tahsis edilmiştir. Çalışan şirketin kendisine tahsis ettiği bu vasıtaların hiçbirini özel amaçları ve iletişimi için kullanamaz. Şirket bu araçlar üzerindeki bütün verileri kontrol edebilir ve denetleyebilir. Çalışan, işe başladığı andan itibaren kendisine tahsis edilen bilgisayarda, telefonlarda ya da diğer araçlarda iş dışında başka bir veri ya da bilgi bulundurmayacağını taahhüt etmektedir.',
      },
    ],
  },
  {
    id: 'aktarim',
    title: 'Kişisel Verilerin Yurt İçi ve Dışına Aktarılması',
    blocks: [
      {
        type: 'p',
        text: `Kişisel veriler Bilgisayar Ticaret VE İHRACAT Sanayi Anonim Şirketi tarafından hizmetin görülebilmesi amacıyla iş ve çözüm ortakları ile ve ${COMPANY} iştirakleri ile paylaşılabilir. ${COMPANY}, kişisel verileri aşağıda belirtilen kişi ve kurumlara belirli amaçlarla aktarabilecektir;`,
      },
      {
        type: 'list',
        items: [
          'İş ortaklığının kurulma amaçlarının yerine getirilmesini temin etmek amacıyla sınırlı olarak EYS AYDINLATMA İTHALAT VE İHRACAT TİCARET LİMİTED Şirketi’nin iş ortaklarına,',
          `Şirketimizin tedarikçiden dış kaynaklı olarak temin ettiği ve Şirketimizin ticari faaliyetlerini yerine getirmek için gerekli hizmetlerin Şirketimize sunulmasını sağlamak amacıyla sınırlı olarak ${COMPANY}’nin tedarikçilerine,`,
          `Şirketimizin iştiraklerin de katılımını gerektiren ticari faaliyetlerinin yürütülmesini temin etmekle sınırlı olarak ${COMPANY}’nin çözüm ortaklarına,`,
          `${COMPANY} iştiraklerine.`,
        ],
      },
      {
        type: 'p',
        text: `${COMPANY}, kanunda Kurul tarafından belirlenen şartlar dahilinde kişisel verileri Kanundaki diğer şartlara uygun olarak ve kişinin onayına bağlı olarak yurt içi ve yurt dışına aktarma yetkisine sahiptir.`,
      },
    ],
  },
  {
    id: 'ilgili-kisinin-haklari',
    title: 'İlgili Kişinin Hakları',
    blocks: [
      {
        type: 'p',
        text: `${COMPANY}, Kanun kapsamında ilgili kişinin veri işlenmeden önce onayını alma hakkının olduğunu, verinin işlenmesinden sonra ise verisinin kaderini tayin etme hakkına sahip olduğunu kabul etmektedir. ${COMPANY} tarafından web sayfamızda duyurulan ilgilimize başvurarak kişisel verilerle ilgili olarak;`,
      },
      {
        type: 'alpha',
        items: [
          'Kişisel verilerinin işlenip işlenmediğini öğrenme,',
          'Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,',
          'Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,',
          'Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,',
          'Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,',
          '7 nci maddede öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,',
          '(d) ve (e) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,',
          'İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,',
          'Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme, hakkına sahiptir.',
          `Buna karşın, Şirket içinde anonimleştirilmiş verilerle ilgili olarak kişilerin bir hakkı bulunmamaktadır. ${COMPANY}, kişisel verileri, iş ve sözleşme ilişkisi gereğince, bir yargısal görevin ya da devlet otoritesinin Kanuni yetkilerini kullanması amacıyla ilgili kurum ve kuruluşlarca paylaşabilir.`,
        ],
      },
      {
        type: 'p',
        text: 'Verisi işlenen gerçek kişiler, yukarıda belirtilen hakları kullanmak için web sitemizde yayınlanan Başvuru Formu ’nu kullanabileceklerdir. Başvurular, ilgili veri sahibi gerçek kişinin kimliğini tespitini sağlayacak belgelerle birlikte, formun ıslak imzalı bir kopyasının elden veya noter vasıtasıyla ya da mevzuatta belirtilen diğer yöntemler ile Karayolları Mah. Cebeci Cad.No:178/A Gaziosmanpaşa / /İstanbul adresine iletilmesi veya 5070 sayılı Elektronik İmza Kanunu gereğince güvenli elektronik imza ile imzalanarak Şirketimize daha önce belirtilen ve Şirketimiz e-posta adresinden gönderilecek e-mail ile gerçekleştirilebilmektedir. Kişisel Verileri Koruma Kurulu tarafından başkaca bir yöntem belirlenmesi halinde başvurular bu yöntemle de iletilebilecektir.',
      },
      {
        type: 'p',
        text: 'Yukarıda belirtilen yöntemler ile talebinizin iletilmesinden itibaren talepleriniz azami otuz gün içerisinde değerlendirilmekte ve cevaplanmaktadır. Bu kapsamda şirketimizin, başvuru sahibi gerçek kişinin ilgili veri sahibi olup olmadığının değerlendirilmesi ve tespiti amacıyla başvuru sahibinden ek bilgi ve belgeleri talep etme hakkı saklıdır. Kural olarak başvurular şirketimiz tarafından ücretsiz olarak değerlendirilmektedir. Ancak kurulca veri sahibinin başvurusuna dair bir ücret tespit edilmiş ise, şirketimiz bu tespit edilen rakam üzerinden ücret talep etme hakkına sahip olacaktır.',
      },
    ],
  },
  {
    id: 'gizlilik-ilkesi',
    title: 'Gizlilik İlkesi',
    blocks: [
      {
        type: 'p',
        text: 'İster çalışanlar isterse diğer kişilerin EYS AYDINLATMA İTHALAT VE İHRACAT TİCARET LİMİTED Şirketi’ndeki verileri gizlidir. Hiç kimse sözleşme ya da kanuna uygunluk olmaksızın başkaca hiçbir amaç için bu verileri kullanamaz, kopyalayamaz, çoğaltamaz, başkalarına aktaramaz, iş amaçları dışında kullanamaz.',
      },
    ],
  },
  {
    id: 'islem-guvenligi',
    title: 'İşlem Güvenliği',
    blocks: [
      {
        type: 'p',
        text: `${COMPANY} tarafından toplanan kişisel verilerin korunması ve yetkisiz kişilerin eline geçmemesi ve müşterilerimizin ve müşteri adaylarımızın mağdur olmaması için gerekli teknik ve idari bütün tedbirler alınmaktadır. Bu çerçevede yazılımların standartlara uygun olması, üçüncü partilerin özenle seçilmesi ve şirket içinde de veri koruma politikasına riayet edilmesi sağlanmaktadır. Güvenliğe ilişkin önlemler, sürekli olarak yenilenmekte ve geliştirilmektedir.`,
      },
    ],
  },
  {
    id: 'denetim',
    title: 'Denetim',
    blocks: [
      {
        type: 'p',
        text: `${COMPANY}, kişisel verilerin korunması konusunda gerekli iç ve dış denetimleri yaptırır.`,
      },
    ],
  },
  {
    id: 'ihlallerin-bildirimi',
    title: 'İhlallerin Bildirimi',
    blocks: [
      {
        type: 'p',
        text: `${COMPANY}, kişisel verilerle ilgili herhangi bir ihlal olduğu kendisine bildirildiğinde söz konusu ihlali gidermek için derhal harekete geçer. İlgilinin zararını en aza indirir ve zararı telafi eder. Kişisel verilerin dışarıdan yetkisiz kimselerce ele geçirildiğinde durumu derhal Kişisel Verileri Koruma Kurulu’na bildirir. İhlallerin bildirimi ile ilgili https://www.komsumnet.com adreslerinde belirtilen usullere göre de başvurular yapılabilir.`,
      },
    ],
  },
]
