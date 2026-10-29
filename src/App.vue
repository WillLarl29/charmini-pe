<template>
  <div class="min-h-screen flex flex-col bg-spooky-night text-charmini-black selection:bg-spooky-pumpkin">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-grow">
      <HeroSection />
      <AboutSection />
      <ProductCatalog />
      <CombosSection />
      <InstagramSection />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Shopping Cart Drawer Modal -->
    <CartDrawer />
  </div>
</template>

<script setup>
import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'
import HeroSection from './components/landing/HeroSection.vue'
import AboutSection from './components/landing/AboutSection.vue'
import ProductCatalog from './components/landing/ProductCatalog.vue'
import CombosSection from './components/landing/CombosSection.vue'
import InstagramSection from './components/landing/InstagramSection.vue'
import CartDrawer from './components/landing/CartDrawer.vue'
</script>
