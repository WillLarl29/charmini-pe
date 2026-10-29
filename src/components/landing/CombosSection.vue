<template>
  <section id="promos" class="py-16 bg-starry relative overflow-hidden">
    <div class="absolute top-8 right-10 text-4xl animate-flutter opacity-60 pointer-events-none" aria-hidden="true">🦇</div>
    <div class="absolute bottom-8 left-8 text-4xl animate-float opacity-60 pointer-events-none" aria-hidden="true">🎃</div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <span class="bg-spooky-moon text-charmini-black font-bold px-4 py-1.5 rounded-full border-2 border-charmini-black text-sm inline-block shadow-sm">
          🎁 Promociones Charmiween
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
          ¡Juegos, premios y <span class="bg-spooky-pumpkin text-charmini-black px-3 py-1 rounded-2xl border-2 border-charmini-black">regalos</span>!
        </h2>
        <p class="text-lg text-charmini-blue font-medium">
          Visítanos en el stand el {{ storeConfig.event.date }} y llévate más que un producto.
        </p>
      </div>

      <!-- Promo Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div
          v-for="(promo, index) in promos"
          :key="promo.id"
          :class="index % 2 === 0 ? 'bg-spooky-moon' : 'bg-charmini-blue'"
          class="rounded-3xl p-8 border-2 border-charmini-black shadow-pop relative flex flex-col justify-between hover:-translate-y-1 transition-transform"
        >
          <div class="absolute -top-3 -right-3 bg-spooky-pumpkin text-charmini-black text-xs font-black px-4 py-1.5 rounded-full border-2 border-charmini-black shadow-sm transform rotate-6">
            {{ promo.tag }}
          </div>

          <div class="space-y-4">
            <div class="w-16 h-16 rounded-2xl bg-white border-2 border-charmini-black flex items-center justify-center text-3xl shadow-sm">
              {{ promo.icon }}
            </div>
            <h3 class="font-display font-extrabold text-2xl text-charmini-black">{{ promo.title }}</h3>
            <p class="text-charmini-gray text-sm leading-relaxed">{{ promo.description }}</p>
          </div>
        </div>
      </div>

      <!-- Social Interaction Promo Banner -->
      <div class="bg-gradient-to-r from-spooky-pumpkin to-spooky-moon rounded-3xl p-6 sm:p-8 border-2 border-charmini-black shadow-pop flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-2xl bg-white border-2 border-charmini-black flex items-center justify-center text-3xl shadow-sm flex-shrink-0">
            📍
          </div>
          <div>
            <h4 class="font-display font-extrabold text-xl text-charmini-black">
              {{ storeConfig.event.place }} · {{ storeConfig.event.hours }}
            </h4>
            <p class="text-sm text-charmini-black/80 mt-1">
              {{ storeConfig.event.entry }}. ¿Quieres separar tu producto antes de que se agote? Escríbenos y te lo guardamos.
            </p>
          </div>
        </div>
        <button
          @click="reserve()"
          class="bg-charmini-black text-white hover:bg-gray-800 font-extrabold px-6 py-3 rounded-2xl border-2 border-black btn-kawaii text-sm whitespace-nowrap flex items-center gap-2"
        >
          <MessageCircle class="w-4 h-4 fill-current text-green-400" />
          <span>Separar por WhatsApp</span>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { MessageCircle } from 'lucide-vue-next'
import { useCart } from '../../composables/useCart'
import { storeConfig } from '../../config/storeConfig'
import { promos } from '../../data/products'

const { openWhatsAppDirect } = useCart()

const reserve = () => {
  const text = `¡Hola Charmini! 👋 Quisiera separar productos para recogerlos en *Charmiween* (${storeConfig.event.date}). ¿Me ayudan a confirmar disponibilidad?`
  openWhatsAppDirect(text)
}
</script>
