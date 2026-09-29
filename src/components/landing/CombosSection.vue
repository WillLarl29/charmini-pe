<template>
  <section id="combos" class="py-16 bg-white relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <span class="bg-charmini-cream text-charmini-black font-bold px-4 py-1.5 rounded-full border-2 border-charmini-black text-sm inline-block shadow-sm">
          🎁 Promociones & Packs
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charmini-black">
          Combos Especiales para <span class="bg-charmini-blue px-3 py-1 rounded-2xl border-2 border-charmini-black">Estudiantes</span>
        </h2>
        <p class="text-lg text-charmini-gray font-medium">
          Lleva más charms a un super precio y ahorra en tu colección.
        </p>
      </div>

      <!-- Combos Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        <!-- Combo 1: Combo Facultad -->
        <div class="bg-charmini-cream/40 rounded-3xl p-8 border-2 border-charmini-black shadow-pop relative overflow-hidden flex flex-col justify-between">
          <div class="absolute -top-3 -right-3 bg-charmini-blue text-charmini-black text-xs font-black px-4 py-1.5 rounded-full border-2 border-charmini-black shadow-sm transform rotate-6">
            Ahorras S/ 1.00 ✨
          </div>

          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="text-4xl">🎓</span>
              <div>
                <h3 class="font-display font-extrabold text-2xl text-charmini-black">Combo Facultad</h3>
                <span class="text-xs font-bold text-gray-600">1 Dumi Charm (S/10) + 1 Charmini Pal (S/5)</span>
              </div>
            </div>

            <p class="text-charmini-gray text-sm leading-relaxed">
              Consigue la minifigura y el llavero coleccionable de tu facultad favorita (Lobo, León, Vikingo o Toro) juntos en una sola compra.
            </p>

            <div class="bg-white p-4 rounded-2xl border border-charmini-black space-y-2">
              <span class="text-xs font-bold text-charmini-black block uppercase tracking-wider">Incluye:</span>
              <ul class="text-xs space-y-1 font-semibold text-charmini-gray">
                <li class="flex items-center gap-2">✅ 1 Minifigura Dumi Charm de tu facultad</li>
                <li class="flex items-center gap-2">✅ 1 Llavero Charmini Pal de tu facultad</li>
                <li class="flex items-center gap-2">🎁 Empaque kraft especial con sticker</li>
              </ul>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-between border-t-2 border-dashed border-charmini-black/30 pt-4">
            <div>
              <span class="text-xs text-gray-500 line-through font-bold">Precio normal: S/ 15.00</span>
              <div class="text-2xl font-extrabold text-charmini-black">S/ 14.00</div>
            </div>
            <button 
              @click="orderCombo('Combo Facultad (S/14.00)')"
              class="bg-charmini-black text-white hover:bg-gray-800 font-extrabold px-6 py-3 rounded-2xl border-2 border-black shadow-sm btn-kawaii text-sm flex items-center gap-2"
            >
              <MessageCircle class="w-4 h-4 fill-current text-green-400" />
              <span>Pedir Combo</span>
            </button>
          </div>
        </div>

        <!-- Combo 2: Combo Coleccionista -->
        <div class="bg-charmini-blue/30 rounded-3xl p-8 border-2 border-charmini-black shadow-pop relative overflow-hidden flex flex-col justify-between">
          <div class="absolute -top-3 -right-3 bg-charmini-cream text-charmini-black text-xs font-black px-4 py-1.5 rounded-full border-2 border-charmini-black shadow-sm transform -rotate-3">
            Ahorras S/ 2.00 ⭐
          </div>

          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="text-4xl">🏆</span>
              <div>
                <h3 class="font-display font-extrabold text-2xl text-charmini-black">Combo Coleccionista</h3>
                <span class="text-xs font-bold text-gray-600">Las 4 Charmini Pals (Llaveros)</span>
              </div>
            </div>

            <p class="text-charmini-gray text-sm leading-relaxed">
              ¡Colección completa! El pack definitivo con los 4 llaveros de todas las facultades: Lobo, León, Vikingo y Toro.
            </p>

            <div class="bg-white p-4 rounded-2xl border border-charmini-black space-y-2">
              <span class="text-xs font-bold text-charmini-black block uppercase tracking-wider">Incluye los 4 modelos:</span>
              <div class="grid grid-cols-2 gap-2 text-xs font-semibold text-charmini-gray">
                <span class="bg-charmini-cream/60 px-2 py-1 rounded border border-black/30">🐺 Charm Lobo</span>
                <span class="bg-charmini-cream/60 px-2 py-1 rounded border border-black/30">🦁 Charm León</span>
                <span class="bg-charmini-cream/60 px-2 py-1 rounded border border-black/30">🛡️ Charm Vikingo</span>
                <span class="bg-charmini-cream/60 px-2 py-1 rounded border border-black/30">🐂 Charm Toro</span>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-between border-t-2 border-dashed border-charmini-black/30 pt-4">
            <div>
              <span class="text-xs text-gray-500 line-through font-bold">Precio normal: S/ 20.00</span>
              <div class="text-2xl font-extrabold text-charmini-black">S/ 18.00</div>
            </div>
            <button 
              @click="orderCombo('Combo Coleccionista (S/18.00)')"
              class="bg-charmini-blue text-charmini-black hover:bg-charmini-blue-dark font-extrabold px-6 py-3 rounded-2xl border-2 border-charmini-black shadow-sm btn-kawaii text-sm flex items-center gap-2"
            >
              <MessageCircle class="w-4 h-4 fill-current text-green-600" />
              <span>Pedir Pack</span>
            </button>
          </div>
        </div>

      </div>

      <!-- Social Interaction Promo Banner -->
      <div class="bg-gradient-to-r from-charmini-cream to-charmini-blue rounded-3xl p-6 sm:p-8 border-2 border-charmini-black shadow-pop flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-2xl bg-white border-2 border-charmini-black flex items-center justify-center text-3xl shadow-sm">
            📸
          </div>
          <div>
            <h4 class="font-display font-extrabold text-xl text-charmini-black">
              Descuento por Interacción en Instagram
            </h4>
            <p class="text-sm text-charmini-gray mt-1">
              Sigue a <strong>@charmini.pe</strong> en Instagram y sube una historia etiquetándonos para recibir un regalo o descuento especial.
            </p>
          </div>
        </div>
        <a 
          href="https://www.instagram.com/charmini.pe/" 
          target="_blank" 
          rel="noopener"
          class="bg-charmini-black text-white hover:bg-gray-800 font-extrabold px-6 py-3 rounded-2xl border-2 border-black btn-kawaii text-sm whitespace-nowrap flex items-center gap-2"
        >
          <Instagram class="w-4 h-4 text-pink-400" />
          <span>Seguir @charmini.pe</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { MessageCircle, Instagram } from 'lucide-vue-next'
import { useCart } from '../../composables/useCart'

const { openWhatsAppDirect } = useCart()

const orderCombo = (comboName) => {
  const text = `¡Hola Charmini! 👋 Quisiera pedir la promoción especial: *${comboName}*. ¿Me ayudan a confirmar disponibilidad?`
  openWhatsAppDirect(text)
}
</script>
