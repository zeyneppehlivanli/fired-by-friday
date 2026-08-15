# 🏭 Fired by Friday: Bir Endüstri Mühendisliği Simülasyonu

**Fired by Friday**, teorik Endüstri Mühendisliği kavramlarını pratik ve interaktif bir oyun modeliyle sunan web tabanlı bir üretim hattı simülasyonudur. 

*Kovulmadan önce hattı optimize edip, darboğazları çözüp akıl sağlığınızı koruyabilecek misiniz?*

🎮 **[Oyunu Hemen Tarayıcınızda Oynayın](https://zeyneppehlivanli.github.io/fired-by-friday/)**

---

## 📚 Teoriden Pratiğe: Oyunun Arkasındaki Mühendislik

Bu proje sadece eğlenceli bir oyun değil. Aynı zamanda GEOTEK Medikal'deki stajım sırasında fabrikada bizzat gözlemlediğim gerçek sistem dinamiklerinin bir dijital ikizidir. 

Gerçek bir üretim sahasında ara stoklar (buffer) için ayrılan fiziksel alan kısıtlıdır. Makine parkurunda yaşanacak tek bir arıza veya yığılma, sadece o istasyonu değil, tüm siparişin teslimatını tehlikeye atan bir zincirleme reaksiyon yaratır. Bu yüzden kısıtlı kaynaklarla doğru önceliklendirme yapmak hayati önem taşır.

İşte "Fired by Friday" mekaniklerinin karşılık geldiği akademik konseptler:

*   **Kısıtlar Teorisi (Theory of Constraints) & Darboğaz (Bottleneck) Yönetimi**
    *   **Mekanik:** 3 Numaralı Makine (M-3) sistemdeki en yavaş ve en çok kriz çıkaran istasyondur.
    *   **Konsept:** Bir sistemin maksimum hızı, en yavaş parçasının hızı kadardır. Darboğaz olan M-3 optimize edilmeden, diğer istasyonların hızının genel verimliliğe hiçbir katkısı olmaz.

*   **Kuyruk Teorisi (Queueing Theory) & Ara Stok Limitleri**
    *   **Mekanik:** Makinelerin önünde birikebilecek ürün sayısının katı bir sınırı vardır. Bantta alan dolduğunda üretim hattı kilitlenir.
    *   **Konsept:** Fabrikalardaki kısıtlı fiziksel alanı simüle eder. Yığılma kontrol altına alınamazsa üretim durmak zorunda kalır ve siparişler gecikir.

*   **Kapasite Planlaması (Upgrade Sistemi)**
    *   **Mekanik:** Oyuncu kısıtlı bütçesiyle stratejik geliştirmeler satın almak zorundadır (M-3 Turbo, Bant Hızı, Kahve Makinesi).
    *   **Konsept:** Kısıtlı sermayenin geri dönüşü en yüksek alana yatırılması. Bütçeyi doğrudan darboğazı çözmek için mi, genel akış hızını artırmak için mi, yoksa yönetici performansını korumak için mi kullanmalısınız?

*   **İnsan Faktörleri ve Ergonomi**
    *   **Mekanik:** Tıkanan makineyi manuel olarak eritmek (Overdrive) bütçe harcatmaz ancak Akıl Sağlığını (-10) tüketir.
    *   **Konsept:** Üretim sahasında kalıcı sistemler kurmak yerine sürekli "yangın söndürme" ve manuel müdahale yaklaşımı benimsemek, uzun vadede yöneticinin tükenmişlik sendromuna (Burnout) girmesine neden olur.

---

## 🛠️ Teknolojiler
- **Oyun Motoru:** Phaser.js
- **Diller:** JavaScript, HTML5, CSS3
- **Özellikler:** Çoklu dil desteği (TR/EN), mobil uyumluluk, dinamik zorluk ölçekleme.
- **Yayınlama:** GitHub Pages.

---

## 💡 Geliştirici Notu
*"Fired by Friday", Hat Dengeleme (Line Balancing) ve Sistem Optimizasyonu gibi karmaşık mühendislik problemlerini herkesin deneyimleyebileceği interaktif bir ürüne dönüştürme vizyonuyla kodlanmıştır.*

**Zeynep Pehlivanlı**
*Endüstri Mühendisliği, ODTÜ*