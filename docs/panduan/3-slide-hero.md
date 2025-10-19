# 3. Panduan Mengubah Slide Hero

Bagian "Hero" adalah slider gambar besar yang pertama kali dilihat pengunjung di halaman depan website Anda. Tema ini mendukung hingga 4 slide yang bisa Anda kustomisasi.

![Contoh Slide 1 di Halaman Depan](/gambar/slide-hero-hasil-1.png)
![Contoh Slide 2 di Halaman Depan](/gambar/slide-hero-hasil-2.png)

Semua slide ini dikontrol melalui **Pages** di dalam dashboard Ghost.

## Langkah-langkah Mengedit Slide

1.  Dari menu utama di sebelah kiri, klik **Pages**. Anda akan melihat daftar halaman yang sudah ada, termasuk **Slide 1, Slide 2, Slide 3,** dan **Slide 4**.

    ![Daftar Pages di Dashboard Ghost](/gambar/ghost-pages-list.png)

2.  Klik salah satu slide (misalnya **Slide 1**) untuk mulai mengedit.

---

## Mengubah Komponen Slide

Setelah masuk ke editor halaman slide, Anda bisa mengubah gambar latar, judul, subjudul, dan tombol.

### 1. Mengubah Gambar Latar (Background)

Gambar latar adalah gambar utama yang Anda lihat di editor.

* Untuk menggantinya, arahkan kursor pada gambar, lalu akan muncul tombol hapus (di pojok kanan atas), klik hapus.
* Lalu pilih opsi untuk mengunggah gambar baru dari komputer Anda.
* Pastikan Anda menggunakan gambar berkualitas tinggi dengan orientasi lanskap (melebar).

    ![Editor Halaman untuk Slide](/gambar/slide-hero-editor.png)

### 2. Mengubah Judul, Subjudul, dan Tombol

Pengaturan ini tidak diubah di editor utama, melainkan di panel pengaturan halaman.

1.  Klik **ikon side panel (Settings)** di pojok kanan atas layar untuk membuka panel pengaturan.
2.  **PENTING**: ⚠️ Jangan pernah mengubah isi dari **Page URL**. Tema ini secara khusus memanggil `hero-1`, `hero-2`, dst. Mengubah URL ini akan membuat slide tersebut tidak muncul.

    ![Pengaturan Page URL yang tidak boleh diubah](/gambar/slide-hero-url.png)

3.  Isi konten untuk mengubah **subtitel** atau deskripsi singkat yang muncul di bawah judul utama.

    ![Slide Subtitel](/gambar/slide-subtitel.png)
    
4.  Klik pada **Meta data** untuk membuka pengaturan judul dan tombol.

    ![Panel Pengaturan Halaman](/gambar/slide-hero-settings-panel.png)

### 3. Pengisian Meta Data

Di sinilah Anda mengatur teks judul dan tombol-tombolnya.

![Contoh Pengisian Meta Data](/gambar/slide-hero-metadata.png)

* **Meta title (Judul Slide)**:
    * Ini adalah teks judul utama pada slide.
    * Anda bisa menggunakan HTML untuk styling. Contoh: `<span class="text-yellow-400">Teks Kuning</span>` untuk mewarnai sebagian teks, atau `<br />` untuk membuat baris baru.

* **Meta description (Tombol)**:
    * Bagian ini **harus diisi dengan kode JSON** untuk membuat tombol.
    * Anda bisa membuat satu atau dua tombol.

---

### Contoh Kode Tombol (untuk disalin)

Jika Anda tidak sengaja menghapus kode di `Meta description`, Anda bisa menyalin template di bawah ini.

#### Contoh 1: Dua Tombol

```json
{
  "buttons": [
    {
      "text": "Learn More",
      "icon": "fas fa-pencil-alt",
      "url": "#about",
      "style": "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
    },
    {
      "text": "Contact Us",
      "icon": "fas fa-phone-alt",
      "url": "#contact",
      "style": "glass-effect text-white border border-white"
    }
  ]
}
```

#### Contoh 2: Satu Tombol

```json
{
  "buttons": [
    {
      "text": "Learn More",
      "icon": "fas fa-child",
      "url": "#student-hub",
      "style": "bg-gradient-to-r from-pink-500 to-red-500 text-white"
    }
  ]
}
```

## Simpan Perubahan

Setelah selesai melakukan semua perubahan, jangan lupa untuk menyimpannya. Klik tombol **Update** di pojok kanan atas, atau tekan `Ctrl + S` di keyboard Anda.

Selesai! Ulangi langkah yang sama untuk mengedit **Slide 2, 3, dan 4**.
