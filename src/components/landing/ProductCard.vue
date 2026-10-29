<template>
  <div class="bg-white rounded-3xl border-2 border-charmini-black shadow-pop hover:shadow-kawaii-hover transition-all flex flex-col justify-between overflow-hidden group">

    <!-- Image Header -->
    <div class="relative bg-[#FAF8F5] p-4 border-b-2 border-charmini-black overflow-hidden">

      <!-- Top badges -->
      <div class="absolute top-3 left-3 z-10 flex flex-col gap-1">
        <span
          :class="lineBadgeClass"
          class="text-xs font-black px-2.5 py-1 rounded-full border border-charmini-black shadow-sm"
        >
          {{ product.lineName }}
        </span>
      </div>

      <!-- Price Badge Floating -->
      <div class="absolute top-3 right-3 z-10">
        <span class="bg-charmini-black text-white text-xs font-black px-3 py-1 rounded-full shadow-md">
          {{ product.formattedPrice }}
        </span>
      </div>

      <!-- Image -->
      <div class="aspect-square rounded-2xl overflow-hidden bg-white border border-charmini-black/20 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
        <img
          v-if="currentImage"
          :src="currentImage"
          :alt="cartProduct.name"
          class="w-full h-full object-cover rounded-xl"
          @error="handleImageError"
        />
        <!-- Placeholder while the product photo is pending -->
        <div
          v-else
          class="w-full h-full rounded-xl bg-starry flex flex-col items-center justify-center gap-2 text-center border-2 border-dashed border-spooky-moon/60"
        >
          <span class="text-5xl animate-float" aria-hidden="true">👻</span>
          <span class="text-spooky-moon font-display font-bold text-sm">Foto próximamente</span>
        </div>
      </div>

      <!-- Design Picker (BTS polos) -->
      <div v-if="product.designs" class="mt-3">
        <p class="text-[11px] font-black uppercase tracking-wider text-charmini-gray mb-1.5">
          Diseño: <span class="text-charmini-black">{{ selectedDesign.name }}</span>
        </p>
        <div class="grid grid-cols-4 gap-1.5">
          <button
            v-for="design in product.designs"
            :key="design.id"
            type="button"
            @click="selectedDesign = design"
            :title="design.name"
            :aria-label="`Diseño ${design.name}`"
            :aria-pressed="selectedDesign.id === design.id"
            :class="[
              'aspect-square rounded-lg overflow-hidden border-2 transition-all',
              selectedDesign.id === design.id
                ? 'border-spooky-pumpkin ring-2 ring-charmini-black'
                : 'border-charmini-black/20 hover:border-charmini-black'
            ]"
          >
            <img :src="design.image" :alt="design.name" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      <!-- Product Tag -->
      <div class="mt-3 flex items-center justify-between text-xs font-bold text-charmini-black">
        <span class="bg-white px-2.5 py-0.5 rounded-lg border border-charmini-black">
          {{ product.badge }}
        </span>
        <span class="text-charmini-gray/80 text-[11px]">SKU: {{ product.sku }}</span>
      </div>

    </div>

    <!-- Product Info -->
    <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
      <div>
        <h3 class="font-display font-extrabold text-xl text-charmini-black group-hover:text-charmini-gray transition-colors">
          {{ product.name }}
        </h3>
        <p class="text-xs text-charmini-gray mt-1.5 leading-relaxed line-clamp-2">
          {{ product.description }}
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="pt-2 space-y-2">
        <button
          @click="addToCart(cartProduct)"
          class="w-full bg-spooky-pumpkin hover:bg-spooky-pumpkin-dark text-charmini-black font-extrabold py-2.5 px-4 rounded-xl border-2 border-charmini-black shadow-sm flex items-center justify-center gap-2 btn-kawaii text-sm"
        >
          <ShoppingBag class="w-4 h-4" />
          <span>Agregar al Carrito ({{ product.formattedPrice }})</span>
        </button>

        <button
          @click="buyNowWhatsApp(cartProduct)"
          class="w-full bg-[#25D366] hover:bg-[#1faa53] text-white font-bold py-2 px-4 rounded-xl border-2 border-charmini-black shadow-sm flex items-center justify-center gap-2 text-xs transition-colors"
        >
          <MessageCircle class="w-4 h-4 fill-current" />
          <span>Comprar directo por WA</span>
        </button>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ShoppingBag, MessageCircle } from 'lucide-vue-next'
import { useCart } from '../../composables/useCart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const { addToCart, openWhatsAppDirect } = useCart()

// Products with several designs start on the design matching their cover image
const selectedDesign = ref(
  props.product.designs?.find(design => design.image === props.product.image) || props.product.designs?.[0] || null
)

const currentImage = computed(() => selectedDesign.value?.image || props.product.image)

// Each design is a separate cart line so the order says which one was chosen
const cartProduct = computed(() => {
  if (!selectedDesign.value) return props.product
  return {
    ...props.product,
    id: `${props.product.id}-${selectedDesign.value.id}`,
    name: `${props.product.name} - ${selectedDesign.value.name}`,
    image: selectedDesign.value.image
  }
})

const lineBadgeClass = computed(() => {
  const classes = {
    spooky: 'bg-spooky-pumpkin text-charmini-black',
    home: 'bg-charmini-cream text-charmini-black',
    kpop: 'bg-spooky-purple text-white',
    sorpresa: 'bg-charmini-blue text-charmini-black'
  }
  return classes[props.product.line] || 'bg-charmini-blue text-charmini-black'
})

const buyNowWhatsApp = (prod) => {
  const text = `¡Hola Charmini! 👋 Quisiera comprar directamente: *${prod.name}* (${prod.lineName} - ${prod.formattedPrice}). ¿Tienen disponibilidad para Charmiween en ESAN?`
  openWhatsAppDirect(text)
}

const handleImageError = (e) => {
  // Fallback if image path has encoding difference
  console.warn('Image fail, fallbacking:', e.target.src)
}
</script>
