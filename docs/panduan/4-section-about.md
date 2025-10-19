# 4. Panduan Mengubah Section About

Section "About" atau "Tentang Kami" adalah bagian di halaman depan yang menjelaskan secara singkat keunggulan atau pilar utama dari sekolah Anda. Bagian ini terdiri dari gambar, judul, deskripsi, tiga poin keunggulan, dan sebuah tombol.

![Contoh Tampilan Section About](/gambar/section-about-hasil.png)

Seluruh bagian ini dikontrol melalui satu halaman khusus di dalam menu **Pages**.

## Langkah-langkah Mengedit Section About

1.  Dari menu utama di sebelah kiri, klik **Pages**.
2.  Cari dan klik halaman yang berjudul **About Section** untuk membukanya di editor.

    ![Editor Halaman About Section](/gambar/section-about-editor-utama.png)

---

## Mengubah Komponen Utama

Bagian utama seperti gambar, judul, dan paragraf deskripsi dapat diubah dengan mudah.

1.  **Mengubah Gambar**: Klik pada gambar utama di bagian atas editor (`Featured Image`) untuk menggantinya dengan gambar baru.
2.  **Mengubah Judul & Tagline**: Klik pada kartu judul di bawah gambar untuk mengubah teks judul utama ("About Section") dan tagline-nya.
3.  **Mengubah Paragraf Deskripsi**: Buka panel **Settings** (ikon gerigi di pojok kanan atas), lalu isi atau ubah teks di dalam kolom **Excerpt**. Teks inilah yang akan muncul sebagai paragraf utama di halaman depan.

---

## Mengubah Tiga Poin Keunggulan & Tombol

Tiga poin keunggulan dan tombol di bawahnya diatur menggunakan kode khusus di dalam editor. Anda akan melihat dua blok **Embedded JavaScript**.

![Dua Blok Embedded JavaScript di Editor](/gambar/section-about-js-blocks.png)

### 1. Mengubah Tiga Poin Keunggulan

1.  Arahkan mouse Anda ke blok JavaScript yang **pertama**, lalu klik **ikon pensil (Edit)** yang muncul.

    ![Klik Ikon Edit pada Blok JavaScript](/gambar/section-about-js-edit-icon.png)

2.  Sebuah jendela editor kode akan muncul. Di sinilah Anda bisa mengubah isi dari ketiga poin tersebut.

    ![Editor Kode untuk Tiga Poin Keunggulan](/gambar/section-about-js-editor-features.png)

    * Ubah nilai `title` untuk judul poin.
    * Ubah nilai `description` untuk deskripsi singkatnya.
    * Ubah nilai `icon` dengan kelas ikon dari Font Awesome (contoh: `fas fa-quran`, `fas fa-globe`).

### 2. Mengubah Tombol "Selengkapnya"

1.  Klik ikon pensil pada blok JavaScript yang **kedua**.
2.  Ubah nilai `label` untuk mengubah teks tombol, dan `link` untuk menentukan URL tujuan saat tombol diklik.

---

### Contoh Kode (untuk disalin)

Jika Anda tidak sengaja menghapus kode di dalam blok JavaScript, Anda bisa menyalin template di bawah ini dan menempelkannya kembali.

#### Kode untuk Tiga Poin Keunggulan (Blok Pertama)

```json
<script id="about-features-data" type="application/json">
  [
    {
      "title": "Pendidikan Qur'ani dan Berkarakter",
      "description": "Pembiasaan nilai-nilai Islam dan akhlak mulia dalam setiap aktivitas peserta didik.",
      "icon": "fas fa-quran",
      "bgColor": "bg-green-100",
      "textColor": "text-green-600"
    },
    {
      "title": "Wawasan Global & Pembelajaran Menyenangkan",
      "description": "Pembelajaran bilingual, tematik, dan interaktif dengan pengalaman berstandar internasional.",
      "icon": "fas fa-globe",
      "bgColor": "bg-blue-100",
      "textColor": "text-blue-600"
    },
    {
      "title": "Lingkungan Islami & Ramah Anak",
      "description": "Suasana belajar yang aman, nyaman, serta guru yang peduli dan profesional.",
      "icon": "fas fa-child",
      "bgColor": "bg-yellow-100",
      "textColor": "text-yellow-600"
    }
  ]
</script>
```

#### Kode untuk Tombol (Blok Kedua)

```json
<script id="about-link-data" type="application/json">
  {
    "link": "#features",
    "label": "Selengkapnya"
  }
</script>
```

## Simpan Perubahan

Setelah selesai melakukan semua perubahan, klik tombol **Update** di pojok kanan atas, atau tekan `Ctrl + S` di keyboard Anda.

Selesai! Section "Tentang Kami" di halaman depan Anda telah berhasil diperbarui.

---

