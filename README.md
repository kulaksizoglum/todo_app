# 📝 Görev Yöneticisi (TODO App)

Modern React, Tailwind CSS ve LocalStorage kullanarak yapılmış tam işlevli bir TODO (Görev Yöneticisi) uygulaması.

## 🌟 Özellikler

### ✅ Temel Özellikler

- ➕ Yeni görev ekleme
- ✏️ Mevcut görevleri düzenleme
- 🗑️ Görev silme
- ☑️ Görevleri tamamlandı olarak işaretleme
- 🔍 Görevler arasında arama yapma

### 🎯 İleri Özellikler

- 📊 İstatistik paneli (Toplam, Beklemede, Tamamlandı, %)
- 🎯 Görev önceliklendirmesi (Yüksek, Orta, Düşük)
- 📅 Bitiş tarihi ekleme ve görüntüleme
- 📝 Görev açıklaması ekleme
- 🔄 Esnek filtreleme ve sıralama
- 💾 LocalStorage ile otomatik veri saklama

### 🎨 Stil ve Tasarım

- Tailwind CSS ile modern ve responsive tasarım
- Koyu ve açık tema desteği
- Emoji ikonları ile kullanıcı dostu arayüz
- Mobil uyumlu (responsive design)

## 📁 Proje Yapısı

```
todo-app/
├── src/
│   ├── Components/
│   │   ├── TodoItem.jsx          # Tek bir görev öğesini gösterir
│   │   ├── TodoForm.jsx          # Görev ekleme/düzenleme formu
│   │   ├── TodoFilter.jsx        # Filtreleme ve sıralama bileşeni
│   │   └── TodoStats.jsx         # İstatistik paneli
│   ├── Pages/
│   │   └── HomePage.jsx          # Ana sayfa (tüm uygulamanın merkezi)
│   ├── Interfaces/
│   │   └── Todo.ts               # TypeScript tip tanımlamaları
│   ├── App.jsx                   # Uygulama ana bileşeni
│   ├── main.jsx                  # React uygulamasının giriş noktası
│   └── index.css                 # Global stiller ve Tailwind CSS
├── public/                        # Statik dosyalar
├── index.html                    # HTML şablonu
├── package.json                  # Bağımlılıklar ve script'ler
├── vite.config.js               # Vite yapılandırması
├── tailwind.config.js           # Tailwind CSS yapılandırması
├── postcss.config.js            # PostCSS yapılandırması
├── .gitignore                   # Git ignore dosyası
└── README.md                    # Bu dosya
```

## 🚀 Başlangıç

### Gereksinimler

- Node.js 14+
- npm veya yarn

### Kurulum Adımları

1. **Proje klasörünü açın:**

```bash
cd todo-app
```

2. **Bağımlılıkları yükleyin:**

```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**

```bash
npm run dev
```

4. **Tarayıcıda açın:**
   Konsoldaki bağlantıya gidin (genellikle `http://localhost:5173`)

### Üretim İçin Derleme

```bash
npm run build
```

Derlenen dosyalar `dist/` klasöründe oluşturulur.

## 📝 Kullanım Kılavuzu

### 1. Görev Ekleme

1. Sayfanın üst kısmında "Yeni Görev Ekle" formunu bulun
2. Başlık girin (zorunlu)
3. İsteğe bağlı olarak açıklama, öncelik ve bitiş tarihi ekleyin
4. "Ekle" düğmesine tıklayın

### 2. Görev Düzenleme

1. Düzenlemek istediğiniz görevin yanında "Düzenle" düğmesini tıklayın
2. Form otomatik olarak görev verilerini yükler
3. İstediğiniz değişiklikleri yapın
4. "Güncelle" düğmesine tıklayın

### 3. Görev Silme

1. Silmek istediğiniz görevin yanında "Sil" düğmesini tıklayın
2. Onay iletişim kutusunda "Evet" seçeneğini seçin

### 4. Görev Tamamlama

1. Görev öğesinin sol tarafındaki checkbox'ı tıklayın
2. Görev tamamlandı olarak işaretlenir ve üstü çizilir

### 5. Filtreleme ve Arama

- **Durum Filtresi**: Tüm görevler, Beklemede, Tamamlandı
- **Öncelik Filtresi**: Tüm Öncelikler, Yüksek, Orta, Düşük
- **Sıralama**: Tarihe Göre, Önceliğe Göre, Başlığa Göre
- **Arama**: Başlık ve açıklamada arama yapın

## 💾 LocalStorage

Tüm görevler otomatik olarak tarayıcının LocalStorage'ında kaydedilir. Bu sayede:

- Sayfayı yenileseniz de görevleriniz kaybolmaz
- Tarayıcıyı kapatıp açsanız da görevleriniz korunur
- Tarayıcıyı temizleyene kadar veriler saklanır

**Not:** Farklı bir tarayıcı kullanırsanız görevleriniz görünmeyecektir.

## 🛠️ Teknolojiler

- **React 18**: UI kütüphanesi
- **Vite**: Hızlı derleme aracı
- **Tailwind CSS**: Utility-first CSS çerçevesi
- **JavaScript (ES6+)**: Modern JavaScript
- **LocalStorage API**: Veri saklama

## 🌐 Deployment

### Netlify'a Dağıtım

1. **GitHub'a yükleyin:**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-url>
git push -u origin main
```

2. **Netlify'a bağlanın:**
   - [Netlify.com](https://netlify.com) adresine gidin
   - "New site from Git" seçeneğini tıklayın
   - GitHub deposunu seçin
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Deploy seçeneğini tıklayın

3. **Canlı adresiniz:** Netlify size otomatik bir URL sağlayacaktır

### Alternatif Deployment Seçenekleri

- **Vercel**: [vercel.com](https://vercel.com)
- **GitHub Pages**: `npm run build` sonrası `dist` klasörünü dağıtın
- **Firebase**: [firebase.google.com](https://firebase.google.com)

## 📸 Ekran Görüntüleri

[İlk uygulamayı çalıştırdıktan sonra `npm run dev` ile ekran görüntüsü alabilirsiniz]

## 🤝 Katkıda Bulunma

Bu proje eğitim amaçlıdır ve katkılar hoş karşılanır!

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişiklikleri commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

Hazırlayan: Akademik Proje
Oluşturulma Tarihi: 2024

## ❓ Sık Sorulan Sorular

**S: Verileri silebilir miyim?**
C: Evet! Tarayıcı verilerini temizleyerek LocalStorage'ı silebilirsiniz.

**S: Çevrimdışı çalışır mı?**
C: Evet! Tüm veriler LocalStorage'da depolandığı için internet olmadığında bile çalışır.

**S: Verileri dışa aktarabilir miyim?**
C: Şu an için desteklenmiyor, ancak eklenebilir.

## 📞 Destek

Sorularınız veya sorunlarınız varsa, lütfen GitHub Issues aracılığıyla iletişime geçin.

---

**🎉 Uygulamayı kurup kullanmaya başlamak için `npm install` ve `npm run dev` komutlarını çalıştırın!**
