<template>
  <section id="contacto" class="py-16 bg-[#FFF8E7] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Title -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <span class="bg-charmini-blue text-charmini-black font-bold px-4 py-1.5 rounded-full border-2 border-charmini-black text-sm inline-block shadow-sm">
          📸 Comunidad en Instagram
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charmini-black">
          Síguenos en <span class="bg-charmini-cream px-3 py-1 rounded-2xl border-2 border-charmini-black">@charmini.pe</span>
        </h2>
        <p class="text-lg text-charmini-gray font-medium">
          Entérate de lanzamientos, nuevas facultades y eventos en el campus ESAN.
        </p>
      </div>

      <!-- Instagram Mockup Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <a 
          v-for="(img, index) in instaPosts" 
          :key="index"
          :href="storeConfig.instagramUrl"
          target="_blank"
          rel="noopener"
          class="group relative aspect-square rounded-3xl overflow-hidden border-2 border-charmini-black shadow-pop hover:-translate-y-1 transition-transform"
        >
          <img :src="img.src" :alt="img.caption" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div class="absolute inset-0 bg-charmini-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center text-white font-bold text-xs">
            <span>{{ img.caption }}</span>
          </div>
        </a>
      </div>

      <!-- Follow Button -->
      <div class="text-center">
        <a 
          :href="storeConfig.instagramUrl"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-extrabold px-8 py-4 rounded-2xl border-2 border-charmini-black shadow-pop btn-kawaii text-lg"
        >
          <Instagram class="w-6 h-6" />
          <span>Ver Instagram (@charmini.pe)</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Instagram } from 'lucide-vue-next'
import { storeConfig } from '../../config/storeConfig'

const instaPosts = [
  { src: '/images/products/dumi-lobo.jpg', caption: 'Dumi Lobo 🐺 ¡Colección ESAN!' },
  { src: '/images/products/dumi-leon.jpg', caption: 'Dumi León 🦁 Estética Kawaii' },
  { src: '/images/products/dumi-vikingo.jpg', caption: 'Dumi Vikingo 🛡️ Minifiguras S/10' },
  { src: '/images/products/dumi-toro.jpg', caption: 'Dumi Toro 🐂 Charmini Pals S/5' }
]
</script>
