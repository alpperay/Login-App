## React Native Login Ekranı

Bu proje, React Native kullanılarak geliştirilen basit bir giriş ekranını içermektedir. Kullanıcı, e-posta ve şifre girerek giriş yapabilir veya alternatif giriş yöntemlerini kullanabilir.

### Kullanılan Teknolojiler
- React Native
- React Hooks (useState)
- React Native Bileşenleri (View, Text, TextInput, TouchableOpacity, Image, Alert)
- StyleSheet ile stillendirme

### Özellikler
- Kullanıcıdan e-posta ve şifre bilgileri alınır.
- "Login" butonuna tıklanarak giriş işlemi simüle edilir.
- "Forgot Password?" ve "Sign Up!" butonları eklenmiştir.
- Google, Facebook, Microsoft ve telefon ile giriş yapma seçenekleri bulunmaktadır.
- Butona tıklanınca butonun rengi değişmektedir.
- Kullanıcı girişi boş bıraktığında uyarı mesajı verilir.

### Dosya Yapısı
```
project-folder/
│── assets/
│   ├── images/
│   │   ├── google-icon.png
│   │   ├── facebook-icon.png
│   │   ├── microsoft-icon.png
│   │   ├── telefon-icon.png
│── components/
│   ├── Login.js
│── App.js
│── package.json
│── README.md
```

### Kurulum ve Çalıştırma
1. Projeyi klonlayın:
   ```sh
   git clone <repository-url>
   cd project-folder
   ```
2. Gerekli bağımlılıkları yükleyin:
   ```sh
   npm install
   ```
3. Uygulamayı çalıştırın:
   ```sh
   npx expo start
   ```

### Geliştirme Notları

- Proje Expo kullanılarak çalıştırılabilir.
- UI tasarımı için temel React Native bileşenleri kullanılmıştır.
- Kullanıcı girişi doğrulama ve backend entegrasyonu eklenebilir.
- Stil geliştirmeleri yapılarak daha modern bir görünüm sağlanabilir.

### Ekran Görüntüsü
Uygulama ekranı aşağıdaki gibidir:

![Login Ekranı](./assets/images/screenshot.png)

### Yazar

Alp Eray Taşçı

## Katkıda Bulunma

1. Projeyi fork edin,
2. Değişikliklerinizi yapın ve pull request gönderin.

