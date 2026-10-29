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

      <!-- Products Grid -->
      <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
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
import { ref, computed } from 'vue'
import { Search } from 'lucide-vue-next'
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
</script>
