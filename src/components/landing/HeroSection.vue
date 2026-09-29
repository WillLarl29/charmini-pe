<template>
  <section id="inicio" class="relative overflow-hidden py-12 lg:py-20 bg-gradient-to-b from-[#FFF8E7] via-[#CBE2E2]/30 to-[#FFF8E7]">
    
    <!-- Background Decorative Elements -->
    <div class="absolute top-10 left-10 w-24 h-24 bg-charmini-blue/40 rounded-full blur-2xl pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-32 h-32 bg-charmini-cream rounded-full blur-2xl pointer-events-none"></div>
    <div class="absolute top-1/2 right-1/4 text-4xl animate-float opacity-30 pointer-events-none">✨</div>
    <div class="absolute bottom-1/4 left-1/4 text-3xl animate-float-slow opacity-30 pointer-events-none">⭐</div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Hero Text -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <!-- Kawaii Tag Header -->
          <div class="inline-flex items-center gap-2 bg-charmini-cream px-4 py-2 rounded-full border-2 border-charmini-black shadow-sm">
            <span class="text-xl">🥟</span>
            <span class="font-bold text-sm text-charmini-black">Conoce a Dumi & sus coleccionables</span>
            <span class="bg-charmini-blue text-xs font-black px-2 py-0.5 rounded-full border border-charmini-black">ESAN 2026</span>
          </div>

          <!-- Main Title -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-charmini-black leading-[1.15]">
            Accesorios con <span class="bg-charmini-blue px-3 py-1 rounded-2xl border-2 border-charmini-black inline-block transform -rotate-1">identidad</span> y estilo <span class="text-charmini-black underline decoration-charmini-cream decoration-wavy">Kawaii</span>
          </h1>

          <!-- Subtitle / Value prop -->
          <p class="text-lg sm:text-xl text-charmini-gray font-medium max-w-2xl mx-auto lg:mx-0">
            Pequeños charms que cuentan grandes historias. Colecciona tus minifiguras y llaveros inspirados en las cuatro facultades de ESAN.
          </p>

          <!-- Price Highlight Banner -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <div class="bg-white p-3.5 rounded-2xl border-2 border-charmini-black shadow-pop flex items-center gap-3">
              <span class="text-2xl">✨</span>
              <div class="text-left">
                <span class="block text-xs font-bold text-charmini-gray uppercase tracking-wider">Dumi Charms</span>
                <span class="text-xl font-extrabold text-charmini-black">S/ 10.00</span>
              </div>
            </div>

            <div class="bg-charmini-cream p-3.5 rounded-2xl border-2 border-charmini-black shadow-pop flex items-center gap-3">
              <span class="text-2xl">🔑</span>
              <div class="text-left">
                <span class="block text-xs font-bold text-charmini-gray uppercase tracking-wider">Charmini Pals</span>
                <span class="text-xl font-extrabold text-charmini-black">S/ 5.00</span>
              </div>
            </div>
          </div>

          <!-- Faculty badges -->
          <div class="pt-2">
            <p class="text-xs font-bold uppercase tracking-wider text-charmini-gray mb-2">Representa a tu facultad:</p>
            <div class="flex flex-wrap justify-center lg:justify-start gap-2">
              <span class="bg-white px-3 py-1 rounded-full border border-charmini-black text-sm font-semibold flex items-center gap-1 shadow-sm">🐺 Lobo</span>
              <span class="bg-white px-3 py-1 rounded-full border border-charmini-black text-sm font-semibold flex items-center gap-1 shadow-sm">🦁 León</span>
              <span class="bg-white px-3 py-1 rounded-full border border-charmini-black text-sm font-semibold flex items-center gap-1 shadow-sm">🛡️ Vikingo</span>
              <span class="bg-white px-3 py-1 rounded-full border border-charmini-black text-sm font-semibold flex items-center gap-1 shadow-sm">🐂 Toro</span>
            </div>
          </div>

          <!-- Hero CTAs -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a 
              href="#catalogo"
              class="w-full sm:w-auto bg-charmini-blue hover:bg-charmini-blue-dark text-charmini-black font-extrabold px-8 py-4 rounded-2xl border-2 border-charmini-black shadow-pop transition-all text-center text-lg btn-kawaii flex items-center justify-center gap-2"
            >
              <span>Ver Colección</span>
              <Sparkles class="w-5 h-5" />
            </a>

            <button 
              @click="openWhatsAppDirect()"
              class="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-8 py-4 rounded-2xl border-2 border-charmini-black shadow-pop transition-all text-center text-lg btn-kawaii flex items-center justify-center gap-2"
            >
              <MessageCircle class="w-6 h-6 fill-current" />
              <span>Pedir por WhatsApp</span>
            </button>
          </div>

        </div>

        <!-- Hero Card Showcase -->
        <div class="lg:col-span-5 relative flex justify-center">
          
          <div class="relative w-full max-w-md">
            
            <!-- Background Frame -->
            <div class="absolute -inset-4 bg-charmini-blue/60 rounded-4xl border-2 border-charmini-black transform rotate-2"></div>
            
            <!-- Main Display Card -->
            <div class="relative bg-white rounded-3xl border-2 border-charmini-black p-6 shadow-pop space-y-4">
              
              <div class="flex justify-between items-center border-b-2 border-dashed border-charmini-blue/60 pb-3">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-red-400 border border-black"></span>
                  <span class="w-3 h-3 rounded-full bg-yellow-400 border border-black"></span>
                  <span class="w-3 h-3 rounded-full bg-green-400 border border-black"></span>
                </div>
                <span class="text-xs font-bold text-charmini-black bg-charmini-cream px-2.5 py-1 rounded-full border border-black">Edición Facultades</span>
              </div>

              <!-- Product Grid Cards Preview -->
              <div class="grid grid-cols-2 gap-3">
                
                <!-- Dumi Lobo Card -->
                <div class="bg-[#FAF8F5] p-3 rounded-2xl border border-charmini-black hover:border-2 transition-all">
                  <div class="aspect-square bg-charmini-cream/50 rounded-xl overflow-hidden mb-2 relative">
                    <img src="/images/products/dumi-lobo.jpg" alt="Dumi Lobo" class="w-full h-full object-cover" />
                    <span class="absolute top-1 right-1 bg-charmini-blue text-[10px] font-bold px-1.5 py-0.5 rounded border border-black">S/ 10</span>
                  </div>
                  <h4 class="font-bold text-xs truncate">Dumi Lobo</h4>
                  <p class="text-[10px] text-gray-500">Minifigura</p>
                </div>

                <!-- Charm León Card -->
                <div class="bg-[#FAF8F5] p-3 rounded-2xl border border-charmini-black hover:border-2 transition-all">
                  <div class="aspect-square bg-charmini-blue/40 rounded-xl overflow-hidden mb-2 relative">
                    <img src="/images/products/charm-leon.jpg" alt="Charm León" class="w-full h-full object-cover" />
                    <span class="absolute top-1 right-1 bg-charmini-cream text-[10px] font-bold px-1.5 py-0.5 rounded border border-black">S/ 5</span>
                  </div>
                  <h4 class="font-bold text-xs truncate">Charm León</h4>
                  <p class="text-[10px] text-gray-500">Llavero</p>
                </div>

              </div>

              <!-- Dumi Mascot Callout Footer -->
              <div class="bg-charmini-cream/60 rounded-2xl p-3.5 border border-charmini-black flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-2xl animate-bounce">🥟</span>
                  <div>
                    <span class="font-bold text-xs block">Dumi es tu compañero</span>
                    <span class="text-[11px] text-gray-600">Con su estrellita flotante ✨</span>
                  </div>
                </div>
                <a href="#sobre-dumi" class="text-xs font-extrabold underline text-charmini-black hover:opacity-80">Conocer más →</a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Sparkles, MessageCircle } from 'lucide-vue-next'
import { useCart } from '../../composables/useCart'

const { openWhatsAppDirect } = useCart()
</script>
