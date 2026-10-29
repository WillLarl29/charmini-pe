<template>
  <footer class="bg-charmini-black text-white pt-16 pb-12 border-t-4 border-spooky-pumpkin">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        <!-- Brand Info -->
        <div class="md:col-span-5 space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-charmini-blue flex items-center justify-center border-2 border-charmini-black overflow-hidden p-1">
              <img src="/images/logo.ico" alt="Charmini Logo" class="w-full h-full object-contain" />
            </div>
            <span class="font-display font-extrabold text-2xl tracking-wide text-white">
              Charmini<span class="text-charmini-blue text-sm">.pe</span>
            </span>
          </div>
          <p class="text-gray-300 text-sm max-w-sm leading-relaxed">
            Marca de accesorios coleccionables y funcionales nacida en ESAN. Pequeños charms que cuentan grandes historias. 🎃 Charmiween 2026.
          </p>
          <div class="flex items-center gap-2 pt-2">
            <span class="bg-spooky-pumpkin text-charmini-black text-xs font-bold px-3 py-1 rounded-full border border-white">
              🎃 Charmiween
            </span>
            <span class="bg-charmini-blue text-charmini-black text-xs font-bold px-3 py-1 rounded-full border border-white">
              {{ storeConfig.priceRange }}
            </span>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="md:col-span-3 space-y-3">
          <h4 class="font-display font-bold text-lg text-charmini-cream">Navegación</h4>
          <ul class="space-y-2 text-sm text-gray-300 font-medium">
            <li><a href="#inicio" class="hover:text-charmini-blue transition-colors">Inicio</a></li>
            <li><a href="#sobre-dumi" class="hover:text-charmini-blue transition-colors">Sobre Dumi 🥟</a></li>
            <li><a href="#catalogo" class="hover:text-charmini-blue transition-colors">Catálogo de Productos</a></li>
            <li><a href="#promos" class="hover:text-charmini-blue transition-colors">Promociones Charmiween</a></li>
          </ul>
        </div>

        <!-- Team & University -->
        <div class="md:col-span-4 space-y-3">
          <h4 class="font-display font-bold text-lg text-charmini-cream">Equipo Creador - ESAN</h4>
          <p class="text-xs text-gray-400">Emprendimientos Familiares Innovadores 2026</p>
          <div class="grid grid-cols-2 gap-1 text-xs text-gray-300">
            <span>• Brigitte Vicente</span>
            <span>• Nadine Jauregui</span>
            <span>• Saida Valencia</span>
            <span>• Ingrith Contreras</span>
            <span>• Willman Alca</span>
          </div>
          
          <div class="pt-4 flex items-center gap-3">
            <a 
              :href="storeConfig.instagramUrl" 
              target="_blank" 
              rel="noopener"
              class="w-9 h-9 rounded-xl bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors border border-gray-700"
              title="Instagram"
            >
              <Instagram class="w-5 h-5 text-white" />
            </a>
            <button 
              @click="openWhatsAppDirect()"
              class="w-9 h-9 rounded-xl bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors border border-gray-700"
              title="WhatsApp"
            >
              <MessageCircle class="w-5 h-5 text-white fill-current" />
            </button>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <p>© 2026 Charmini.pe - Todos los derechos reservados. Hecho con ❤️ para la comunidad ESAN.</p>
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1">📍 {{ storeConfig.event.place }} - ESAN</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { Instagram, MessageCircle } from 'lucide-vue-next'
import { storeConfig } from '../../config/storeConfig'
import { useCart } from '../../composables/useCart'

const { openWhatsAppDirect } = useCart()
</script>
