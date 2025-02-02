# React Native Login App
Bu proje, React Native kullanarak basit bir kullanıcı girişi (login) ekranı tasarımını içermektedir. Kullanıcılar, e-posta ve şifre bilgilerini girerek giriş yapabilirler.

## Özellikler

1) E-posta ve şifre girişi
2) Basit form doğrulaması (alanlar boş bırakılırsa kullanıcı uyarılır)
3) Stilize edilmiş buton ve input alanları
4) React Native useState Hook'u kullanımı

## Teknolojiler

1) React Native - Kullanıcı arayüzü geliştirmek için
2) useState Hook - State yönetimi için
3) StyleSheet - React Native stil düzenlemeleri için

## Gereksinimler
1) Node.js (en son LTS sürümü)
2) React Native Expo
3) npx veya yarn

## Kurulum

1) Projeyi klonlayın:
```bash
git clone <repo-url>
```
2) Proje dizinine gidin:
```bash
cd my-app-01
```
3) Gerekli bağımlılıkları yükleyin:
```bash
npm install veya yarn install
```
4) Projeyi başlatın:
```bash
npx expo start
```

## Kullanım

1) Uygulama açıldığında, kullanıcıdan bir e-posta ve şifre girmesi istenecektir.
2) Eğer her iki alan da doldurulmazsa, kullanıcıya bir uyarı gösterilir.
3) Giriş yapıldıktan sonra, girdiğiniz e-posta ve şifreyi ekranda gösterecek bir alert kutusu açılır.
4) Giriş butonunun rengi, butona basılıp basılmadığına göre değişir. ( mavi -> gri )

## Proje Yapısı

1) App.tsx: Uygulamanın ana bileşeni
2) assets/key.png: Giriş ekranında kullanılan görsel.
3) styles.js: Giriş ekranının oluştuğu ve style özelliklerinin uygulandığı dosya.

## Ekran Çıktısı 

## • Ana Ekran

![scshoots -1](https://github.com/user-attachments/assets/1c29d3fa-dc0f-4a0f-9e55-48ccb3e434c9)

## • Login -> Alert

![login - app 2 sc ](https://github.com/user-attachments/assets/0b618417-ce1f-49e5-97c7-adafffdb8751)

## • Login -> Alert -> Email & Password

![login-app 3 schoots](https://github.com/user-attachments/assets/f46732de-836c-4079-96b5-1a07fcb8ac68)


## Katkıda Bulunma

1) GitHub reposunu fork edin,
2) Kendi değişikliklerinizi yapın ve pull request gönderin.

