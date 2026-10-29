<template>
  <header class="sticky top-0 z-40 bg-spooky-night-dark/90 backdrop-blur-md border-b-2 border-spooky-pumpkin/50 shadow-sm transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">

        <!-- Logo & Brand -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="relative w-12 h-12 rounded-full bg-charmini-blue flex items-center justify-center border-2 border-charmini-black shadow-pop group-hover:scale-105 transition-transform p-1">
            <img src="/images/logo.ico" alt="Charmini Logo" class="w-full h-full object-contain rounded-full" />
            <span class="absolute -top-2 -right-2 text-lg" aria-hidden="true">🎃</span>
          </div>
          <div>
            <span class="font-display font-bold text-2xl tracking-wide text-spooky-moon flex items-center gap-1">
              Charmini<span class="text-charmini-black text-sm bg-spooky-pumpkin px-2 py-0.5 rounded-full border border-charmini-black">.pe</span>
            </span>
            <p class="text-xs text-charmini-blue/80 font-medium">Pequeños charms, grandes historias</p>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8 font-semibold text-white">
          <a href="#inicio" class="hover:text-spooky-moon hover:bg-white/10 px-3 py-1.5 rounded-full transition-all">Inicio</a>
          <a href="#sobre-dumi" class="hover:text-spooky-moon hover:bg-white/10 px-3 py-1.5 rounded-full transition-all">Sobre Dumi</a>
          <a href="#catalogo" class="hover:text-spooky-moon hover:bg-white/10 px-3 py-1.5 rounded-full transition-all flex items-center gap-1">
            Catálogo
            <span class="bg-spooky-pumpkin text-charmini-black border border-charmini-black text-[10px] px-1.5 py-0.5 rounded-full font-bold">{{ storeConfig.priceRange }}</span>
          </a>
          <a href="#promos" class="hover:text-spooky-moon hover:bg-white/10 px-3 py-1.5 rounded-full transition-all">Promos</a>
          <a href="#contacto" class="hover:text-spooky-moon hover:bg-white/10 px-3 py-1.5 rounded-full transition-all">Contacto</a>
        </nav>

        <!-- Action Buttons -->
        <div class="flex items-center gap-3">

          <!-- Cart Button -->
          <button
            @click="isCartOpen = true"
            class="relative p-2.5 rounded-2xl bg-spooky-pumpkin border-2 border-charmini-black shadow-pop hover:bg-spooky-pumpkin-dark transition-all btn-kawaii"
            aria-label="Ver carrito"
          >
            <ShoppingBag class="w-6 h-6 text-charmini-black" />
            <span
              v-if="totalItems > 0"
              class="absolute -top-2 -right-2 bg-charmini-black text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white animate-bounce"
            >
              {{ totalItems }}
            </span>
          </button>

          <!-- WhatsApp Direct Button -->
          <button
            @click="openWhatsAppDirect()"
            class="hidden sm:flex items-center gap-2 bg-[#25D366] text-white font-bold px-4 py-2.5 rounded-2xl border-2 border-charmini-black shadow-pop hover:brightness-105 transition-all btn-kawaii"
          >
            <MessageCircle class="w-5 h-5 fill-current" />
            <span>WhatsApp</span>
          </button>

          <!-- Mobile Menu Trigger -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-xl bg-charmini-blue border-2 border-charmini-black"
          >
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown Navigation -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-spooky-night-dark text-white border-b-2 border-spooky-pumpkin px-4 pt-2 pb-6 space-y-3">
      <a
        @click="mobileMenuOpen = false"
        href="#inicio"
        class="block px-4 py-2 font-semibold text-lg hover:bg-white/10 rounded-xl"
      >
        Inicio 🎃
      </a>
      <a
        @click="mobileMenuOpen = false"
        href="#sobre-dumi"
        class="block px-4 py-2 font-semibold text-lg hover:bg-white/10 rounded-xl"
      >
        Sobre Dumi 🥟
      </a>
      <a
        @click="mobileMenuOpen = false"
        href="#catalogo"
        class="block px-4 py-2 font-semibold text-lg hover:bg-white/10 rounded-xl flex items-center justify-between"
      >
        <span>Catálogo</span>
        <span class="text-xs bg-spooky-pumpkin text-charmini-black px-2 py-0.5 rounded-full border border-charmini-black">{{ storeConfig.priceRange }}</span>
      </a>
      <a
        @click="mobileMenuOpen = false"
        href="#promos"
        class="block px-4 py-2 font-semibold text-lg hover:bg-white/10 rounded-xl"
      >
        Promos Charmiween 🎁
      </a>
      <a
        @click="mobileMenuOpen = false"
        href="#contacto"
        class="block px-4 py-2 font-semibold text-lg hover:bg-white/10 rounded-xl"
      >
        Contacto & Redes 📱
      </a>

      <button
        @click="openWhatsAppDirect(); mobileMenuOpen = false"
        class="w-full mt-4 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-2xl border-2 border-charmini-black shadow-pop"
      >
        <MessageCircle class="w-5 h-5 fill-current" />
        <span>Pedir por WhatsApp</span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { ShoppingBag, MessageCircle, Menu, X } from 'lucide-vue-next'
import { useCart } from '../../composables/useCart'
import { storeConfig } from '../../config/storeConfig'

const { totalItems, isCartOpen, openWhatsAppDirect } = useCart()
const mobileMenuOpen = ref(false)
</script>
