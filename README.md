# ott tv interface - TypeScript React Uygulaması

Bu proje, TypeScript kullanılarak geliştirilmiş bir React uygulamasıdır. Bu belgede, projenin nasıl kurulacağı ve başlatılacağı hakkında bilgi verilmektedir.

## Başlarken

Projeyi yerel ortamda çalıştırmak için aşağıdaki adımları takip ediniz.

### Gereksinimler

Bu projeyi çalıştırmak için bilgisayarınızda Node.js ve npm (Node Paket Yöneticisi) yüklü olmalıdır. Node.js'i [buradan](https://nodejs.org/) indirebilirsiniz.

### Kurulum

Projeyi klonladıktan sonra, terminalde aşağıdaki komutu çalıştırarak gerekli bağımlılıkları yükleyin:

```
npm install
```

### Çevre Değişkenleri

Projeyi başlatmadan önce, projenin kök dizininde bir `.env` dosyası oluşturmanız ve TMDB API anahtarını eklemeniz gerekmektedir.

`.env` dosyasına aşağıdaki satırı ekleyin:

```
REACT_APP_API_KEY=buraya_tmdb_api_anahtarınızı_girin
```

TMDB API anahtarını almak için [The Movie Database (TMDB)](https://www.themoviedb.org/) web sitesine gidip kayıt olmanız ve geliştirici hesabı oluşturarak API anahtarını almanız gerekmektedir.

### Projeyi Başlatma

Aşağıdaki komutu kullanarak uygulamayı geliştirme modunda başlatabilirsiniz:

```
npm start
```

Bu komut, uygulamayı `http://localhost:3000` adresinde çalıştırır. Tarayıcınızda bu adresi ziyaret ederek uygulamanızı görebilirsiniz.

## TMDB API Anahtarı Alma

1. [TMDB web sitesine](https://www.themoviedb.org/) gidin ve kayıt olun.
2. Hesabınıza giriş yapın ve "API" bölümüne gidin.
3. Yeni bir API anahtarı oluşturarak bu anahtarı `.env` dosyanıza ekleyin.

## Daha Fazla Bilgi

Projeye katkıda bulunmak veya herhangi bir sorunuz olursa lütfen geliştirici belgelerini inceleyin ya da bizimle iletişime geçin.