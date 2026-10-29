<template>
  <section id="inicio" class="relative overflow-hidden py-12 lg:py-20 bg-starry">

    <!-- Background Decorative Elements -->
    <div class="absolute -top-16 right-10 w-56 h-56 bg-spooky-moon/30 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-spooky-cloud/20 to-transparent pointer-events-none"></div>
    <div class="absolute top-10 left-8 text-4xl animate-flutter opacity-70 pointer-events-none" aria-hidden="true">🦇</div>
    <div class="absolute top-24 right-1/3 text-2xl animate-flutter opacity-50 pointer-events-none" aria-hidden="true">🦇</div>
    <div class="absolute bottom-12 left-1/4 text-4xl animate-float opacity-60 pointer-events-none" aria-hidden="true">👻</div>
    <div class="absolute bottom-10 right-8 text-4xl animate-float-slow opacity-70 pointer-events-none" aria-hidden="true">🎃</div>
    <div class="absolute top-0 left-0 text-6xl opacity-30 pointer-events-none" aria-hidden="true">🕸️</div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <!-- Hero Text -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">

          <!-- Kawaii Tag Header -->
          <div class="inline-flex items-center gap-2 bg-spooky-moon px-4 py-2 rounded-full border-2 border-charmini-black shadow-sm">
            <span class="text-xl">🎃</span>
            <span class="font-bold text-sm text-charmini-black">Segunda Feria Charmini</span>
            <span class="bg-spooky-pumpkin text-xs font-black px-2 py-0.5 rounded-full border border-charmini-black">ESAN 2026</span>
          </div>

          <!-- Main Title -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-spooky-moon leading-[1.05] drop-shadow-[3px_3px_0_#000]">
            Charmi<span class="text-spooky-pumpkin">ween</span> 👻
          </h1>
          <p class="text-2xl sm:text-3xl font-display font-bold text-white">
            Una feria <span class="bg-charmini-blue text-charmini-black px-3 py-0.5 rounded-2xl border-2 border-charmini-black inline-block transform -rotate-1">spooky</span> y muy <span class="underline decoration-spooky-pumpkin decoration-wavy">kawaii</span>
          </p>

          <!-- Subtitle / Value prop -->
          <p class="text-lg sm:text-xl text-charmini-blue font-medium max-w-2xl mx-auto lg:mx-0">
            ¡Juegos, activaciones, premios y show! Ven por tu portalápices de Jake, joyeros, Peperos y polos de BTS.
          </p>

          <!-- Event Info Signs -->
          <div class="flex flex-wrap items-stretch justify-center lg:justify-start gap-4 pt-2">
            <div class="bg-spooky-moon p-3.5 rounded-2xl border-2 border-charmini-black shadow-pop flex items-center gap-3 -rotate-1">
              <CalendarDays class="w-7 h-7 text-charmini-black" />
              <div class="text-left">
                <span class="block text-xs font-bold text-charmini-gray uppercase tracking-wider">{{ storeConfig.event.date }}</span>
                <span class="text-lg font-extrabold text-charmini-black">{{ storeConfig.event.hours }}</span>
              </div>
            </div>

            <div class="bg-white p-3.5 rounded-2xl border-2 border-charmini-black shadow-pop flex items-center gap-3 rotate-1">
              <MapPin class="w-7 h-7 text-spooky-pumpkin-dark" />
              <div class="text-left">
                <span class="block text-xs font-bold text-charmini-gray uppercase tracking-wider">{{ storeConfig.event.entry }}</span>
                <span class="text-lg font-extrabold text-charmini-black">{{ storeConfig.event.place }}</span>
              </div>
            </div>
          </div>

          <!-- Product lines -->
          <div class="pt-2">
            <p class="text-xs font-bold uppercase tracking-wider text-charmini-blue/80 mb-2">Nuestras líneas:</p>
            <div class="flex flex-wrap justify-center lg:justify-start gap-2">
              <span
                v-for="line in lines"
                :key="line.id"
                class="bg-spooky-night-light text-white px-3 py-1 rounded-full border border-charmini-blue/60 text-sm font-semibold flex items-center gap-1 shadow-sm"
              >
                {{ line.icon }} {{ line.name }}
              </span>
            </div>
          </div>

          <!-- Hero CTAs -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#catalogo"
              class="w-full sm:w-auto bg-spooky-pumpkin hover:bg-spooky-pumpkin-dark text-charmini-black font-extrabold px-8 py-4 rounded-2xl border-2 border-charmini-black shadow-pop transition-all text-center text-lg btn-kawaii flex items-center justify-center gap-2"
            >
              <span>Ver Productos</span>
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

        <!-- Poster Showcase -->
        <div class="lg:col-span-5 relative flex justify-center">
          <div class="relative w-full max-w-sm">
            <!-- Background Frame -->
            <div class="absolute -inset-4 bg-spooky-pumpkin/70 rounded-4xl border-2 border-charmini-black transform rotate-3"></div>
            <div class="relative bg-white rounded-3xl border-2 border-charmini-black p-3 shadow-pop">
              <img
                src="/images/charmiween.jpeg"
                alt="Afiche Charmiween: 29 de octubre, 10:30 a.m. a 4:30 p.m., Explanada de Jacinto & Cornelia, ingreso libre"
                class="w-full rounded-2xl border border-charmini-black/30"
              />
              <span class="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-spooky-moon text-charmini-black text-sm font-black px-4 py-1.5 rounded-full border-2 border-charmini-black shadow-sm whitespace-nowrap">
                🎁 ¡Regalos en las activaciones!
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Sparkles, MessageCircle, CalendarDays, MapPin } from 'lucide-vue-next'
import { useCart } from '../../composables/useCart'
import { storeConfig } from '../../config/storeConfig'
import { productLines } from '../../data/products'

const { openWhatsAppDirect } = useCart()
const lines = productLines.filter(line => line.id !== 'all')
</script>
