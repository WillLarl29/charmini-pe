<template>
  <Teleport to="body">
    <!-- Backdrop overlay -->
    <Transition name="fade">
      <div 
        v-if="isCartOpen" 
        @click="isCartOpen = false"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
      ></div>
    </Transition>

    <!-- Drawer Panel -->
    <Transition name="slide">
      <div 
        v-if="isCartOpen"
        class="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-[#FFF8E7] border-l-4 border-spooky-pumpkin z-50 flex flex-col justify-between shadow-2xl overflow-hidden"
      >
        <!-- Header -->
        <div class="p-6 bg-spooky-pumpkin border-b-2 border-charmini-black flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🎃</span>
            <div>
              <h3 class="font-display font-extrabold text-xl text-charmini-black">Tu Carrito Charmini</h3>
              <p class="text-xs font-semibold text-charmini-black/70">{{ totalItems }} producto(s) seleccionados</p>
            </div>
          </div>
          <button 
            @click="isCartOpen = false"
            class="p-2 rounded-xl bg-white border-2 border-charmini-black hover:bg-gray-100 transition-colors"
          >
            <X class="w-5 h-5 text-charmini-black" />
          </button>
        </div>

        <!-- Cart Content -->
        <div class="flex-1 overflow-y-auto p-6 space-y-4">
          
          <!-- Empty Cart State -->
          <div v-if="cartItems.length === 0" class="text-center py-16 space-y-4">
            <div class="text-6xl animate-bounce">👻</div>
            <h4 class="font-display font-bold text-xl">Tu carrito está vacío</h4>
            <p class="text-sm text-charmini-gray">Elige tus productos de Charmiween en el catálogo: portalápices, joyeros, Peperos, polos BTS y blind boxes.</p>
            <button 
              @click="isCartOpen = false"
              class="bg-charmini-cream text-charmini-black font-extrabold px-6 py-2.5 rounded-2xl border-2 border-charmini-black btn-kawaii text-sm inline-block"
            >
              Explorar productos
            </button>
          </div>

          <!-- Items List -->
          <div v-else class="space-y-3">
            <div 
              v-for="item in cartItems" 
              :key="item.id"
              class="bg-white rounded-2xl p-4 border-2 border-charmini-black shadow-sm flex items-center gap-4"
            >
              <img
                v-if="item.image"
                :src="item.image"
                :alt="item.name"
                class="w-16 h-16 object-cover rounded-xl border border-charmini-black/30"
              />
              <div
                v-else
                class="w-16 h-16 rounded-xl border border-charmini-black/30 bg-starry flex items-center justify-center text-2xl flex-shrink-0"
                aria-hidden="true"
              >
                👻
              </div>
              <div class="flex-1 min-w-0">
                <h5 class="font-bold text-sm text-charmini-black truncate">{{ item.name }}</h5>
                <p class="text-[11px] font-semibold text-charmini-gray">{{ item.lineName }}</p>
                <div class="text-sm font-extrabold text-charmini-black mt-1">S/ {{ item.price.toFixed(2) }}</div>
              </div>

              <!-- Quantity Controls -->
              <div class="flex flex-col items-end gap-2">
                <button 
                  @click="removeFromCart(item.id)" 
                  class="text-red-500 hover:text-red-700 text-xs font-bold"
                  title="Eliminar"
                >
                  <Trash2 class="w-4 h-4" />
                </button>
                <div class="flex items-center border border-charmini-black rounded-lg bg-[#FAF8F5]">
                  <button 
                    @click="updateQuantity(item.id, item.quantity - 1)" 
                    class="px-2 py-0.5 text-xs font-bold hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span class="px-2 text-xs font-bold">{{ item.quantity }}</span>
                  <button 
                    @click="updateQuantity(item.id, item.quantity + 1)" 
                    class="px-2 py-0.5 text-xs font-bold hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Notes input -->
          <div v-if="cartItems.length > 0" class="pt-4 border-t-2 border-dashed border-charmini-black/20">
            <label class="block text-xs font-black uppercase text-charmini-gray mb-1.5">Nota para tu pedido (opcional):</label>
            <textarea 
              v-model="customerNotes" 
              placeholder="Ej: Talla M para el polo BTS / Deseo empaque para regalo..."
              rows="2"
              class="w-full p-3 rounded-xl border-2 border-charmini-black bg-white text-xs focus:outline-none focus:ring-2 focus:ring-charmini-blue resize-none"
            ></textarea>
          </div>

        </div>

        <!-- Footer Checkout -->
        <div v-if="cartItems.length > 0" class="p-6 bg-white border-t-2 border-charmini-black space-y-4">
          
          <!-- Payment methods info -->
          <div class="flex items-center justify-between text-xs font-bold text-charmini-gray bg-charmini-cream/40 p-2.5 rounded-xl border border-charmini-black">
            <span>Aceptamos:</span>
            <div class="flex gap-2">
              <span class="bg-purple-100 text-purple-800 px-2 py-0.5 rounded border border-purple-300">Yape</span>
              <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded border border-blue-300">Plin</span>
              <span class="bg-green-100 text-green-800 px-2 py-0.5 rounded border border-green-300">Efectivo</span>
            </div>
          </div>

          <!-- Total Calculation -->
          <div class="flex items-center justify-between">
            <span class="font-display font-extrabold text-lg text-charmini-black">Total Estimado:</span>
            <span class="font-display font-black text-2xl text-charmini-black">S/ {{ totalPrice.toFixed(2) }}</span>
          </div>

          <!-- WhatsApp Submit Button -->
          <a 
            :href="generateWhatsAppUrl(customerNotes)" 
            target="_blank"
            rel="noopener"
            class="w-full bg-[#25D366] hover:bg-[#1faa53] text-white font-extrabold py-4 px-6 rounded-2xl border-2 border-charmini-black shadow-pop btn-kawaii text-center flex items-center justify-center gap-3 text-base"
          >
            <MessageCircle class="w-6 h-6 fill-current" />
            <span>Enviar Pedido a WhatsApp</span>
          </a>

          <p class="text-[10px] text-center text-gray-500 font-semibold">
            Te redirigirá a WhatsApp con tu pedido ya redactado 📲
          </p>
        </div>

      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import { X, Trash2, MessageCircle } from 'lucide-vue-next'
import { useCart } from '../../composables/useCart'

const { cartItems, isCartOpen, removeFromCart, updateQuantity, totalItems, totalPrice, generateWhatsAppUrl } = useCart()
const customerNotes = ref('')
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
