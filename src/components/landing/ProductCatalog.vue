<template>
  <section id="catalogo" class="py-16 bg-spooky-night-dark relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Title -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <span class="bg-spooky-pumpkin text-charmini-black font-bold px-4 py-1.5 rounded-full border-2 border-charmini-black text-sm inline-block shadow-sm">
          🎃 Catálogo Charmiween
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
          Productos de la <span class="bg-spooky-moon text-charmini-black px-3 py-1 rounded-2xl border-2 border-charmini-black">Segunda Feria</span>
        </h2>
        <p class="text-lg text-charmini-blue font-medium">
          Desde <strong class="text-spooky-moon">S/ 7.00</strong> hasta <strong class="text-spooky-moon">S/ 35.00</strong> · Pago con Yape, Plin o efectivo
        </p>
      </div>

      <!-- Filters & Search Bar -->
      <div class="bg-white rounded-3xl p-6 border-2 border-charmini-black shadow-pop mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">

        <!-- Line Selector -->
        <div>
          <label class="block text-xs font-black uppercase text-charmini-gray tracking-wider mb-2">Filtrar por Línea de Producto:</label>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="line in productLines"
              :key="line.id"
              @click="selectedLine = line.id"
              :class="[
                'px-4 py-2 rounded-2xl font-bold text-sm border-2 border-charmini-black transition-all btn-kawaii',
                selectedLine === line.id
                  ? 'bg-spooky-pumpkin text-charmini-black shadow-sm'
                  : 'bg-white hover:bg-spooky-pumpkin/20 text-charmini-black'
              ]"
            >
              {{ line.icon }} {{ line.name }}
            </button>
          </div>
        </div>

        <!-- Search Input -->
        <div class="w-full md:w-64">
          <label class="block text-xs font-black uppercase text-charmini-gray tracking-wider mb-2">Buscar:</label>
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Jake, joyero, BTS..."
              class="w-full px-4 py-2 pl-9 rounded-2xl border-2 border-charmini-black bg-[#FAF8F5] text-sm focus:outline-none focus:ring-2 focus:ring-spooky-pumpkin"
            />
            <Search class="w-4 h-4 absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

      </div>

      <!-- Products Carousel -->
      <div v-if="filteredProducts.length > 0" class="relative">

        <!-- Prev / Next Arrows -->
        <button
          type="button"
          @click="scrollByCard(-1)"
          :disabled="atStart"
          aria-label="Productos anteriores"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 hidden sm:flex w-12 h-12 rounded-full bg-spooky-pumpkin border-2 border-charmini-black shadow-pop items-center justify-center btn-kawaii disabled:opacity-0 disabled:pointer-events-none"
        >
          <ChevronLeft class="w-6 h-6 text-charmini-black" />
        </button>
        <button
          type="button"
          @click="scrollByCard(1)"
          :disabled="atEnd"
          aria-label="Productos siguientes"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 hidden sm:flex w-12 h-12 rounded-full bg-spooky-pumpkin border-2 border-charmini-black shadow-pop items-center justify-center btn-kawaii disabled:opacity-0 disabled:pointer-events-none"
        >
          <ChevronRight class="w-6 h-6 text-charmini-black" />
        </button>

        <!-- Track -->
        <div
          ref="track"
          @scroll.passive="updateScrollState"
          class="carousel-track flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 pt-2 pb-6"
        >
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="carousel-item snap-start flex-shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex"
          >
            <ProductCard :product="product" class="w-full" />
          </div>
        </div>

        <!-- Dots -->
        <div class="flex justify-center gap-2 mt-2">
          <button
            v-for="(product, index) in filteredProducts"
            :key="product.id"
            type="button"
            @click="scrollToIndex(index)"
            :aria-label="`Ir a ${product.name}`"
            :class="[
              'h-3 rounded-full border-2 border-charmini-black transition-all',
              index === activeIndex ? 'w-8 bg-spooky-pumpkin' : 'w-3 bg-spooky-moon/60 hover:bg-spooky-moon'
            ]"
          ></button>
        </div>

      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-16 bg-white rounded-3xl border-2 border-charmini-black shadow-pop p-8 space-y-4">
        <div class="text-5xl">👻❓</div>
        <h3 class="text-2xl font-display font-bold">No encontramos productos con esos filtros</h3>
        <p class="text-charmini-gray text-sm">Prueba cambiando tu búsqueda o seleccionando "Todos los Productos".</p>
        <button
          @click="resetFilters"
          class="bg-spooky-pumpkin text-charmini-black font-bold px-6 py-2.5 rounded-2xl border-2 border-charmini-black btn-kawaii inline-block"
        >
          Ver Todo el Catálogo
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { Search, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { products, productLines } from '../../data/products'
import ProductCard from './ProductCard.vue'

const selectedLine = ref('all')
const searchQuery = ref('')

const filteredProducts = computed(() => {
  return products.filter(product => {
    const matchesLine = selectedLine.value === 'all' || product.line === selectedLine.value
    const matchesSearch = searchQuery.value.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.value.toLowerCase())

    return matchesLine && matchesSearch
  })
})

const resetFilters = () => {
  selectedLine.value = 'all'
  searchQuery.value = ''
}

// Carousel state
const track = ref(null)
const activeIndex = ref(0)
const atStart = ref(true)
const atEnd = ref(false)

const cardStep = () => {
  const item = track.value?.querySelector('.carousel-item')
  if (!item) return 0
  const gap = parseFloat(getComputedStyle(track.value).columnGap) || 0
  return item.offsetWidth + gap
}

const updateScrollState = () => {
  const el = track.value
  if (!el) return
  const step = cardStep()
  activeIndex.value = step ? Math.round(el.scrollLeft / step) : 0
  atStart.value = el.scrollLeft <= 4
  atEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
  // On the last page several cards are visible; highlight the last dot
  if (atEnd.value) activeIndex.value = filteredProducts.value.length - 1
}

const scrollByCard = (direction) => {
  track.value?.scrollBy({ left: direction * cardStep(), behavior: 'smooth' })
}

const scrollToIndex = (index) => {
  track.value?.scrollTo({ left: index * cardStep(), behavior: 'smooth' })
}

// Restart the carousel whenever the filters change the product list
watch(filteredProducts, async () => {
  await nextTick()
  if (track.value) track.value.scrollLeft = 0
  updateScrollState()
})

onMounted(() => {
  updateScrollState()
  window.addEventListener('resize', updateScrollState)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScrollState)
})
</script>
