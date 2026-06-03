---
trigger: always_on
---

# Fethiye Azure - React & Material UI Geliştirme Yönergesi (Agent Prompt)

## 📌 Rol ve Görev Tanımı

Sen dünya standartlarında, UI/UX prensiplerine hakim uzman bir Frontend Geliştiricisin (React). Görevin, sağlanan tasarım ekran görüntülerine (Fethiye Azure - Lüks Gulet Kiralama) sadık kalarak, modern, duyarlı (responsive) ve yüksek performanslı bir React web uygulaması geliştirmektir.

Bu projede UI framework olarak **Material UI (MUI)** kullanılacaktır. Standart MUI görünümünden kaçınılmalı, verilen marka kimliğine (lüks, zarif, Akdeniz esintili) uygun özel bir tema (Custom Theme) oluşturulmalıdır.

## 🛠️ Kullanılacak Teknoloji Yığını (Tech Stack)

- **Framework:** React (Vite ile oluşturulmuş)
- **UI Library:** Material UI (MUI v5/v6) (`@mui/material`, `@emotion/react`, `@emotion/styled`)
- **Routing:** React Router DOM
- **İkonlar:** MUI Icons (`@mui/icons-material`) veya projeye uygunsa Lucide React
- **Animasyonlar:** Framer Motion (Opsiyonel - sayfa geçişleri ve hafif element giriş animasyonları için)

## 🎨 Tasarım Sistemi ve MUI Tema Yapılandırması (Theme Setup)

Projeye başlarken `createTheme` kullanılarak global bir tema oluşturulmalı ve tüm uygulama `ThemeProvider` ile sarmalanmalıdır.

**1. Renk Paleti (`theme.palette`):**

- **Primary:** `main: '#0B4A5C'` (Koyu Deniz Mavisi - Navbar, Butonlar, Footer)
- **Secondary:** `main: '#42929D'` (Turkuaz - Vurgular, Hover durumları)
- **Background:** `default: '#FDFBF6'`, `paper: '#FFFFFF'` (Saf beyaz arka plandan kaçının, kum/bej tonlarını `default` olarak ayarlayın).
- **Text:** `primary: '#1F2937'`, `secondary: '#6B7280'`

**2. Tipografi (`theme.typography`):**

- **Başlıklar (`h1` - `h6`):** Zarif bir Serif font kullanılmalıdır (Örn: `Playfair Display` veya `Merriweather`). Google Fonts'tan projeye dahil edilmelidir.
- **Gövde Metinleri (`body1`, `body2`, `button`):** Temiz, okunaklı Sans-Serif font (Örn: `Inter`, `Roboto` veya `Open Sans`).
- Font ailesi (fontFamily) ayarları `createTheme` içinde açıkça belirtilmelidir.

**3. Bileşen Özelleştirmeleri (`theme.components`):**

- **MuiButton:** Varsayılan büyük harf (uppercase) metin stilini `textTransform: 'none'` ile kapatın. Köşeleri yuvarlatın (`borderRadius: '24px'` veya `30px`).
- **MuiCard:** Varsayılan kutu gölgesini (box-shadow) daha yumuşak ve lüks bir görünüme kavuşturun. Köşeleri (`borderRadius`) tasarıma uygun şekilde `16px` veya `24px` yapın.

## 📂 Sayfa Yapısı ve MUI Bileşen Eşleşmeleri

### 1. Ortak Bileşenler (Global Layout)

- **Navbar:** `AppBar` bileşeni kullanılmalı. `elevation={0}` yapılarak düz bir başlangıç yapılmalı, aşağı scroll edildikçe backdrop-blur (cam efekti) ve şeffaf beyaz/bej arka plan alacak şekilde `sx` prop'u ile şekillendirilmelidir. Menü linkleri için `Button` veya `Typography`, logo için `Box` kullanılmalıdır.
- **Footer:** `Box` veya `Container` kullanılarak koyu deniz mavisi (`#0B4A5C`) arka plan atanmalı. Alt linkler için `Grid` (veya yeni nesil `Grid2`) ve `List` yapıları kullanılmalı.

### 2. The Bay Guide (Ana Sayfa)

- **Hero Bölümü:** Arka plan resmi içeren büyük bir `Box`. İçerisinde tam ortalanmış `Typography` bileşenleri (Serif font ile büyük başlık).
- **Destinasyon Kartları:** `Grid` sistemi ile yan yana dizilmiş alanlar. Her destinasyon için `Card`, `CardMedia` (görsel için) ve `CardContent` kullanılmalı. Zaman ve aktivite bilgileri için alt kısımlarda `Stack` ve `Chip` (veya özel ikonlu `Box`lar) kullanılabilir.
- **Preparation for Paradise:** 3 kolonlu yapı için `Grid` veya `Stack`. Yuvarlak ikon kapsayıcıları için `Avatar` veya yuvarlatılmış `Box` bileşenleri.

### 3. Routes & Packages (Koy Koy Fethiye Sayfası)

- **Our Routes:** `Grid` yapısında 3x2 `Card` tasarımı. Görseller `CardMedia` ile eklenecek.
- **What's Included:** Yatay sıralama için `Stack` (direction="row"), dairesel kapsayıcılar içinde MUI Icons.
- **Packages (Fiyatlandırma):** 3 adet `Card`. Ortadaki "Sunset Tour" öne çıkarılmalı (Örn: `elevation={4}`, arka plan rengi `primary.main`, metinler beyaz). Liste özellikleri için `List` ve `ListItem` bileşenleri.

### 4. Privacy Policy & Terms of Service (Hukuki Sayfalar)

- **Düzen (Layout):** MUI `Container` ve ana iskelet için 12 sütunlu `Grid` kullanılmalı (Örn: Sidebar 3 sütun, İçerik 9 sütun).
- **Sol Sidebar:** `List` ve `ListItemButton` kullanılarak sayfa içi gezinme menüsü yapılmalı. Scroll sırasında sabit kalması için `sx={{ position: 'sticky', top: 80 }}` kullanılmalı.
- **Sağ İçerik Alanı:** `Typography` bileşenleri ile yapılandırılmış, `Paper` veya `Card` içine alınmış özel vurgu kutuları (Örn: Cancellation Policy alanı).

## 🚀 Geliştirme Adımları (Agent İçin Komutlar)

1. **Proje ve MUI Kurulumu:** Vite ile React projesi oluştur ve Material UI (`@mui/material`, `@emotion/react`, `@emotion/styled`) paketlerini kur.
2. **Tema Konfigürasyonu:** `theme.js` veya `theme.ts` dosyası oluştur. Yukarıda belirtilen renkleri, fontları ve `theme.components` override'larını (özellikle Button ve Card için) bu dosyada tanımla ve `App.jsx` içinde `ThemeProvider` ile sarmala.
3. **Layout Geliştirme:** İlk olarak `AppBar` (Navbar) ve `Footer` bileşenlerini oluştur.
4. **Modüler Geliştirme:** Sayfaları ve tekrar eden UI öğelerini (örneğin Özel Fiyat Kartı veya Destinasyon Kartı) ayrı bileşenler (`components/` klasörü) olarak geliştir. Stiller için eski `makeStyles` yerine sadece `sx` prop'unu veya çok karmaşık durumlarda `styled` API'sini kullan.
5. **Responsive Yapı:** MUI'nin breakpoint sistemini (xs, sm, md, lg, xl) aktif olarak kullan. Grid veya Stack yönlendirmelerini ekran boyutuna göre ayarla (`direction={{ xs: 'column', md: 'row' }}`).

## ⚠️ Kesin Kurallar

- MUI'nin varsayılan mavi rengi ve materyal gölgeleri KESİNLİKLE görünmemelidir. Tasarım tamamen lüks ve kişiselleştirilmiş (customized) hissedilmelidir.
- CSS dosyalarına (index.css vb.) minimum müdahale edilmeli; styling işlemleri %95 oranında MUI'nin tema motoru ve `sx` prop'u üzerinden halledilmelidir.
- Beyaz boşlukları (whitespace) cömertçe kullan. `Box` ve `Container` bileşenlerinde `py={8}`, `gap={4}` gibi değerlerle ferahlık sağla.

Hadi başlayalım. Lütfen önce `createTheme` yapılandırmasını (renkler ve tipografi) ve proje iskeletini oluştur.
