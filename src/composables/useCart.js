import { ref, computed } from 'vue'
import { storeConfig } from '../config/storeConfig'

const cartItems = ref([])
const isCartOpen = ref(false)

export function useCart() {
  const addToCart = (product, quantity = 1) => {
    const existingIndex = cartItems.value.findIndex(item => item.id === product.id)
    if (existingIndex > -1) {
      cartItems.value[existingIndex].quantity += quantity
    } else {
      cartItems.value.push({
        ...product,
        quantity
      })
    }
    isCartOpen.value = true
  }

  const removeFromCart = (productId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== productId)
  }

  const updateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId)
    } else {
      const item = cartItems.value.find(item => item.id === productId)
      if (item) {
        item.quantity = newQty
      }
    }
  }

  const clearCart = () => {
    cartItems.value = []
  }

  const totalItems = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const totalPrice = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  })

  const generateWhatsAppUrl = (customerNotes = '') => {
    if (cartItems.value.length === 0) {
      const defaultText = `¡Hola! 👋 Vengo de la página web de *Charmini.pe*. Me gustaría consultar sobre sus accesorios coleccionables.`
      return `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(defaultText)}`
    }

    let text = `¡Hola *Charmini.pe*! ✨ Quiero realizar un pedido desde la web:\n\n`
    text += `🛒 *DETALLE DEL PEDIDO:*\n`
    
    cartItems.value.forEach((item, index) => {
      text += `${index + 1}. *${item.name}* (${item.lineName})\n`
      text += `   - Cantidad: ${item.quantity}\n`
      text += `   - Precio unitario: S/ ${item.price.toFixed(2)}\n`
      text += `   - Subtotal: S/ ${(item.price * item.quantity).toFixed(2)}\n\n`
    })

    text += `💰 *TOTAL ESTIMADO: S/ ${totalPrice.value.toFixed(2)}*\n\n`
    
    if (customerNotes.trim()) {
      text += `📝 *Nota adicional:* ${customerNotes.trim()}\n\n`
    }

    text += `💳 *Medio de pago preferido:* Yape / Plin / Efectivo\n`
    text += `📍 *Entrega:* Charmiween - Explanada de Jacinto & Cornelia (ESAN) / Coordinar`

    return `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(text)}`
  }

  const openWhatsAppDirect = (customText = '') => {
    const text = customText || `¡Hola *Charmini.pe*! ✨ Quisiera más información sobre los productos de Charmiween 🎃.`
    const url = `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    generateWhatsAppUrl,
    openWhatsAppDirect
  }
}
