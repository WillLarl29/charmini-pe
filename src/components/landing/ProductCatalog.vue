<template>
  <section id="catalogo" class="py-16 bg-[#FFF8E7] relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Title -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <span class="bg-charmini-blue text-charmini-black font-bold px-4 py-1.5 rounded-full border-2 border-charmini-black text-sm inline-block shadow-sm">
          🛍️ Catálogo Oficial
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charmini-black">
          Colecciona tus <span class="bg-charmini-cream px-3 py-1 rounded-2xl border-2 border-charmini-black">Charmini</span>
        </h2>
        <p class="text-lg text-charmini-gray font-medium">
          <strong>Dumi Charms</strong> a <strong>S/ 10.00</strong> | <strong>Charmini Pals</strong> a <strong>S/ 5.00</strong>
        </p>
      </div>

      <!-- Filters & Search Bar -->
      <div class="bg-white rounded-3xl p-6 border-2 border-charmini-black shadow-pop mb-10 space-y-6">
        
        <!-- Filter Row 1: Line Selector -->
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
                  ? 'bg-charmini-blue text-charmini-black shadow-sm' 
                  : 'bg-white hover:bg-charmini-blue/20 text-charmini-black'
              ]"
            >
              {{ line.name }}
            </button>
          </div>
        </div>

        <!-- Filter Row 2: Faculty Selector & Search -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t-2 border-dashed border-charmini-blue/50 pt-4">
          
          <div>
            <label class="block text-xs font-black uppercase text-charmini-gray tracking-wider mb-2">Facultad ESAN:</label>
            <div class="flex flex-wrap gap-2">
              <button 
                v-for="fac in faculties" 
                :key="fac.id"
                @click="selectedFaculty = fac.id"
                :class="[
                  'px-3 py-1.5 rounded-xl font-bold text-xs border border-charmini-black transition-all',
                  selectedFaculty === fac.id 
                    ? 'bg-charmini-cream text-charmini-black ring-2 ring-black' 
                    : 'bg-[#FAF8F5] hover:bg-charmini-cream/50 text-charmini-black'
                ]"
              >
                <span>{{ fac.icon }} {{ fac.name }}</span>
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
                placeholder="Lobo, León, Dumi..." 
                class="w-full px-4 py-2 pl-9 rounded-2xl border-2 border-charmini-black bg-[#FAF8F5] text-sm focus:outline-none focus:ring-2 focus:ring-charmini-blue"
              />
              <Search class="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            </div>
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
        <div class="text-5xl">🥟❓</div>
        <h3 class="text-2xl font-display font-bold">No encontramos productos con esos filtros</h3>
        <p class="text-charmini-gray text-sm">Prueba cambiando tu búsqueda o seleccionando "Todas las Facultades".</p>
        <button 
          @click="resetFilters" 
          class="bg-charmini-cream text-charmini-black font-bold px-6 py-2.5 rounded-2xl border-2 border-charmini-black btn-kawaii inline-block"
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
import { products, faculties, productLines } from '../../data/products'
import ProductCard from './ProductCard.vue'

const selectedLine = ref('all')
const selectedFaculty = ref('all')
const searchQuery = ref('')

const filteredProducts = computed(() => {
  return products.filter(product => {
    const matchesLine = selectedLine.value === 'all' || product.line === selectedLine.value
    const matchesFaculty = selectedFaculty.value === 'all' || product.faculty === selectedFaculty.value
    const matchesSearch = searchQuery.value.trim() === '' || 
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    return matchesLine && matchesFaculty && matchesSearch
  })
})

const resetFilters = () => {
  selectedLine.value = 'all'
  selectedFaculty.value = 'all'
  searchQuery.value = ''
}
</script>
