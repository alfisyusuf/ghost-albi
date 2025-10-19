# 7. Panduan Mengelola Testimoni

Section "Testimoni" adalah bagian yang menampilkan kutipan atau ulasan dari siswa dan orang tua untuk membangun kepercayaan. Bagian ini terdiri dari judul, deskripsi, latar belakang, dan kartu-kartu testimoni yang bisa di-scroll.

![Contoh Tampilan Section Testimoni](/gambar/section-testimoni-hasil.png)

Pengelolaan section ini terbagi menjadi dua bagian: (1) Mengubah judul utama dan gambar latar, dan (2) Mengelola isi dari masing-masing kartu testimoni.

---

## 1. Mengubah Judul & Latar Belakang Section

Judul, subjudul, dan gambar latar belakang untuk keseluruhan section ini diatur melalui satu halaman khusus.

1.  Dari menu utama di sebelah kiri, klik **Pages**.
2.  Cari dan klik halaman yang berjudul **Testimonials Section**.

    ![Daftar Pages dengan Halaman Testimonials Section](/gambar/ghost-pages-list-testimoni-section.png)

3.  Setelah masuk ke editor halaman:
    * **Gambar Latar**: Ganti `Featured Image` di bagian atas untuk mengubah gambar latar belakang seluruh section.
    * **Teks Kecil (Pre-title)**: Ubah teks di editor utama (contoh: "Apa Kata Mereka").
    * **Judul Utama & Deskripsi**: Buka panel **Settings** (ikon side panel) lalu klik **Meta data**.
        * **Meta title**: Teks di sini akan menjadi **judul utama** section (contoh: "Testimoni dari Siswa dan Orang Tua").
        * **Meta description**: Teks di sini akan menjadi **paragraf deskripsi** di bawah judul.

    ![Editor Halaman Testimonials Section dan Meta Data](/gambar/testimoni-title-editor.png)

> **PENTING: JANGAN UBAH PAGE URL** ⚠️  
> Tema ini secara khusus memanggil halaman dengan URL `testimonials-section`. Mengubahnya akan menyebabkan seluruh section ini **hilang** dari halaman depan.

![Pengaturan Page URL untuk Section Testimoni](/gambar/testimoni-section-url.png)

---

## 2. Mengelola Kartu Testimoni Individual

Setiap kartu testimoni dikontrol oleh halamannya sendiri: **Testimoni 1**, **Testimoni 2**, **Testimoni 3**, dan **Testimoni 4**.

1.  Kembali ke daftar **Pages**.
2.  Pilih salah satu halaman testimoni yang ingin Anda edit, misalnya **Testimoni 1**.

    ![Daftar Halaman Testimoni Individual](/gambar/ghost-pages-list-testimoni-card.png)

> **PENTING: JANGAN UBAH PAGE URL** ⚠️  
> Tema ini secara otomatis akan memanggil halaman dengan URL `testimoni-1`, `testimoni-2`, `testimoni-3`, dan `testimoni-4`. Pastikan URL ini tidak diubah.

![Pengaturan Page URL untuk Kartu Testimoni](/gambar/testimoni-card-url.png)

### Mengedit Konten Kartu

Setelah membuka halaman "Testimoni", Anda bisa mengubah kontennya:

1.  **Foto Profil**: Ganti `Featured Image` dengan mengunggah foto orang yang memberikan testimoni.
2.  Buka panel **Settings** (ikon side panel) dan klik **Meta data**.
    * **Meta title**: Isi dengan **nama lengkap** pemberi testimoni (contoh: "Mama Andra").
    * **Meta description**: Di sinilah semua detail testimoni diatur menggunakan kode JSON.

    ![Editor Meta Data untuk Kartu Testimoni](/gambar/testimoni-card-metadata.png)

    * `quote`: Kutipan atau ulasan lengkap dari orang tersebut.  
    * `role`: Peran atau status (contoh: "Orang Tua Siswa", "Siswa SMA ABBS Surakarta").  
    * `stars`: Rating bintang dalam bentuk angka (dari 1 sampai 5).  
    * `color`: Warna teks untuk nama dan peran (contoh: `"green-500"`).

### Contoh Kode Testimoni (untuk disalin)

Jika Anda tidak sengaja menghapus kode di `Meta description`, salin dan tempelkan template di bawah ini, lalu sesuaikan isinya.

```json
{
  "quote": "Sebuah keberuntungan dan tepat sekali saya menyekolahkan anak saya ke SDII Al Abidin Boyolali. Sekolah yang berbasis Islam dengan sistem pembelajaran yang menyenangkan didukung dengan pendidik yang baik, sabar dan komunikatif ditunjang dengan fasilitas sekolah yang lengkap serta lingkungan yang baik",
  "role": "Orang Tua Siswa",
  "stars": 5,
  "color": "green-500"
}
```

---

## Simpan Perubahan

Setelah selesai melakukan semua perubahan, jangan lupa klik tombol **Update** di pojok kanan atas untuk menyimpan.

Selesai! Ulangi langkah yang sama untuk halaman testimoni lainnya.
