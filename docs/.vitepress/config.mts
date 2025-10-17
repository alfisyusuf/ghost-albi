import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tema Alabidin School",
  description: "Digunakan admin web albi sebagai panduan editing",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Panduan', link: '/panduan/1-mengubah-navbar' }
    ],

    sidebar: {
      '/panduan/': [
        {
          text: 'Elemen Utama Situs',
          items: [
            { text: '1. Mengubah Navbar', link: '/panduan/1-mengubah-navbar' },
            { text: '2. Mengubah Footer', link: '/panduan/2-mengubah-footer' }
          ]
        },
        {
          text: 'Konten Halaman Depan',
          items: [
            { text: '3. Slide di Hero', link: '/panduan/3-slide-hero' },
            { text: '4. Section About', link: '/panduan/4-section-about' },
            { text: '5. Section Feature Card', link: '/panduan/5-section-feature-card' },
            { text: '6. Section Postingan', link: '/panduan/6-section-post' },
            { text: '7. Mengelola Testimoni', link: '/panduan/7-mengelola-testimoni' },
            { text: '8. Section Sambutan', link: '/panduan/8-section-sambutan' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
