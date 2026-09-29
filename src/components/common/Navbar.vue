<template>
  <header class="sticky top-0 z-40 bg-[#FFF8E7]/90 backdrop-blur-md border-b-2 border-charmini-blue/40 shadow-sm transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- Logo & Brand -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="w-12 h-12 rounded-full bg-charmini-blue flex items-center justify-center border-2 border-charmini-black shadow-pop group-hover:scale-105 transition-transform overflow-hidden p-1">
            <img src="/images/logo.ico" alt="Charmini Logo" class="w-full h-full object-contain" />
          </div>
          <div>
            <span class="font-display font-bold text-2xl tracking-wide text-charmini-black flex items-center gap-1">
              Charmini<span class="text-charmini-black text-sm bg-charmini-blue px-2 py-0.5 rounded-full border border-charmini-black">.pe</span>
            </span>
            <p class="text-xs text-charmini-gray/70 font-medium">Pequeños charms, grandes historias</p>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8 font-semibold text-charmini-black">
          <a href="#inicio" class="hover:text-charmini-black hover:bg-charmini-blue/30 px-3 py-1.5 rounded-full transition-all">Inicio</a>
          <a href="#sobre-dumi" class="hover:text-charmini-black hover:bg-charmini-blue/30 px-3 py-1.5 rounded-full transition-all">Sobre Dumi</a>
          <a href="#catalogo" class="hover:text-charmini-black hover:bg-charmini-blue/30 px-3 py-1.5 rounded-full transition-all flex items-center gap-1">
            Catálogo
            <span class="bg-charmini-cream border border-charmini-black text-[10px] px-1.5 py-0.5 rounded-full font-bold">S/5 - S/10</span>
          </a>
          <a href="#combos" class="hover:text-charmini-black hover:bg-charmini-blue/30 px-3 py-1.5 rounded-full transition-all">Combos</a>
          <a href="#contacto" class="hover:text-charmini-black hover:bg-charmini-blue/30 px-3 py-1.5 rounded-full transition-all">Contacto</a>
        </nav>

        <!-- Action Buttons -->
        <div class="flex items-center gap-3">
          
          <!-- Cart Button -->
          <button 
            @click="isCartOpen = true"
            class="relative p-2.5 rounded-2xl bg-charmini-cream border-2 border-charmini-black shadow-pop hover:bg-charmini-cream-dark transition-all btn-kawaii"
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
    <div v-if="mobileMenuOpen" class="md:hidden bg-[#FFF8E7] border-b-2 border-charmini-black px-4 pt-2 pb-6 space-y-3">
      <a 
        @click="mobileMenuOpen = false" 
        href="#inicio" 
        class="block px-4 py-2 font-semibold text-lg hover:bg-charmini-blue/30 rounded-xl"
      >
        Inicio
      </a>
      <a 
        @click="mobileMenuOpen = false" 
        href="#sobre-dumi" 
        class="block px-4 py-2 font-semibold text-lg hover:bg-charmini-blue/30 rounded-xl"
      >
        Sobre Dumi 🥟
      </a>
      <a 
        @click="mobileMenuOpen = false" 
        href="#catalogo" 
        class="block px-4 py-2 font-semibold text-lg hover:bg-charmini-blue/30 rounded-xl flex items-center justify-between"
      >
        <span>Catálogo</span>
        <span class="text-xs bg-charmini-cream px-2 py-0.5 rounded-full border border-charmini-black">Dumis S/10 | Charms S/5</span>
      </a>
      <a 
        @click="mobileMenuOpen = false" 
        href="#combos" 
        class="block px-4 py-2 font-semibold text-lg hover:bg-charmini-blue/30 rounded-xl"
      >
        Combos Especiales 🎁
      </a>
      <a 
        @click="mobileMenuOpen = false" 
        href="#contacto" 
        class="block px-4 py-2 font-semibold text-lg hover:bg-charmini-blue/30 rounded-xl"
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

const { totalItems, isCartOpen, openWhatsAppDirect } = useCart()
const mobileMenuOpen = ref(false)
</script>
