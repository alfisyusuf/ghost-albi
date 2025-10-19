# 5. Panduan Mengubah Section Feature Card

Section "Feature Card" atau "Keunggulan Kami" adalah bagian yang menampilkan tiga pilar program atau keunggulan utama sekolah dalam format kartu yang detail.

![Contoh Tampilan Section Feature Card](/gambar/section-feature-hasil.png)

Pengeditan section ini terbagi menjadi dua bagian: (1) Mengubah judul utama section, dan (2) Mengubah isi dari masing-masing tiga kartu keunggulan. Keduanya diatur melalui **Pages**.

## 1. Mengubah Judul & Subjudul Section

Judul utama (contoh: "Mengapa Memilih TKII Al-Abidin Boyolali?") dan subjudulnya diatur melalui satu halaman khusus.

1.  Dari menu utama di sebelah kiri, klik **Pages**.
2.  Cari dan klik halaman yang berjudul **Keunggulan**.

    ![Daftar Pages dengan Halaman Keunggulan](/gambar/ghost-pages-list-features.png)

3.  Untuk mengubah judul dan subjudul, buka panel **Settings** (ikon side panel di pojok kanan atas) lalu klik **Meta data**.
    * **Meta title**: Teks di sini akan menjadi **judul utama** section.
    * **Meta description**: Teks di sini akan menjadi **subjudul** atau paragraf deskripsi di bawah judul utama.

    ![Editor Halaman Keunggulan dan Meta Data](/gambar/feature-title-editor.png)


## 2. Mengubah Isi Masing-Masing Kartu Fitur

Setiap kartu keunggulan (ada 3) dikontrol oleh halamannya sendiri-sendiri: **Fitur 1**, **Fitur 2**, dan **Fitur 3**.

1.  Kembali ke daftar **Pages**.
2.  Pilih salah satu halaman fitur yang ingin Anda edit, misalnya **Fitur 3**.

    ![Daftar Pages dengan Halaman Fitur](/gambar/ghost-pages-list-fitur-3.png)

> **PENTING: JANGAN UBAH PAGE URL** ⚠️  
> Tema ini secara otomatis akan memanggil halaman dengan URL `feature-1`, `feature-2`, dan `feature-3` untuk ditampilkan sebagai kartu. Mengubah URL ini akan membuat kartu tersebut **hilang** dari halaman depan. Jika Anda membutuhkan lebih banyak kartu, Anda bisa membuat halaman baru dengan URL `feature-4`, `feature-5`, hingga `feature-6`.

![Pengaturan Page URL untuk Kartu Fitur](/gambar/feature-card-url.png)

### Mengedit Konten Kartu

Setelah membuka halaman "Fitur", Anda bisa mengubah kontennya:

1.  **Judul Kartu**: Teks yang Anda tulis di editor utama akan menjadi **judul kartu** (contoh: "Global & Future Skills").
2.  **Ikon, Deskripsi & Poin-Poin**: Buka panel **Settings** (ikon gerigi) dan klik **Meta data**. Seluruh konten detail kartu, termasuk ikonnya, ada di dalam **Meta description** dalam format kode JSON.

    ![Editor Meta Data untuk Kartu Fitur](/gambar/feature-card-metadata.png)

    * `icon`: **Ini adalah kelas ikon dari Font Awesome**. Untuk mencari ikon lain, kunjungi situs [Font Awesome (Solid, Free)](https://fontawesome.com/search?m=free&s=solid). Cari ikon yang Anda suka, klik, lalu salin kelasnya (contoh: `fas fa-globe`, `fas fa-book`, `fas fa-school`).
    * `bgColor`: Warna latar belakang untuk lingkaran ikon (contoh: `"bg-yellow-600"`).
    * `desc`: Paragraf deskripsi utama untuk kartu tersebut.
    * `points`: Daftar poin-poin keunggulan yang akan ditampilkan dengan tanda centang. Setiap poin diapit oleh tanda kutip ganda.

---

### Contoh Kode Kartu (untuk disalin)

Jika Anda tidak sengaja menghapus kode di `Meta description`, salin dan tempelkan template di bawah ini, lalu sesuaikan isinya.

```json
{
  "icon": "fas fa-globe",
  "bgColor": "bg-yellow-600",
  "desc": "Pembelajaran yang mempersiapkan siswa menghadapi dunia global melalui teknologi, bahasa, dan kepemimpinan.",
  "points": [
    "Program bilingual dan literasi digital",
    "Pelatihan kepemimpinan dan kewirausahaan",
    "Eksposur budaya dan komunikasi global",
    "Kegiatan inovatif berbasis STEAM"
  ]
}
```

## Simpan Perubahan

Setelah selesai melakukan semua perubahan, jangan lupa klik tombol **Update** di pojok kanan atas untuk menyimpan.

Selesai! Ulangi langkah yang sama untuk halaman **Fitur 1** dan **Fitur 2** untuk melengkapi ketiga kartu keunggulan.
