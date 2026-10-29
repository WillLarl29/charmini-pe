export const productLines = [
  { id: 'all', name: 'Todos los Productos', icon: '🎃' },
  { id: 'spooky', name: 'Spooky Charms', icon: '👻' },
  { id: 'home', name: 'Charmini Home', icon: '💍' },
  { id: 'kpop', name: 'K-Pop Corner', icon: '💜' },
  { id: 'sorpresa', name: 'Sorpresas', icon: '🎁' }
]

export const products = [
  {
    id: 'spooky-001',
    sku: 'SPOOKY-001',
    name: 'Portalápices Jake',
    line: 'spooky',
    lineName: 'Spooky Charms',
    price: 15,
    formattedPrice: 'S/ 15.00',
    description: 'Portalápices de Jake el Perro (Hora de Aventura) impreso en 3D. Ordena tus lápices con el perro más elástico de Ooo.',
    image: '/images/products/segunda-feria/portalapices-jake.png',
    badge: 'Más pedido 🔥',
    inStock: true
  },
  {
    id: 'home-001',
    sku: 'HOME-001',
    name: 'Joyero Bandeja',
    line: 'home',
    lineName: 'Charmini Home',
    price: 10,
    formattedPrice: 'S/ 10.00',
    description: 'Bandeja ondulada para organizar anillos, collares y aretes. Decora tu escritorio o tocador con estilo minimalista.',
    image: '/images/products/segunda-feria/joyero-bandeja.jpeg',
    badge: 'Nuevo ✨',
    inStock: true
  },
  {
    id: 'home-002',
    sku: 'HOME-002',
    name: 'Joyero Concha',
    line: 'home',
    lineName: 'Charmini Home',
    price: 15,
    formattedPrice: 'S/ 15.00',
    description: 'Joyero en forma de concha marina para guardar tus accesorios favoritos. Funcional y decorativo.',
    image: '/images/products/segunda-feria/joyero-concha.jpeg',
    badge: 'Nuevo ✨',
    inStock: true
  },
  {
    id: 'kpop-001',
    sku: 'KPOP-001',
    name: 'Peperos',
    line: 'kpop',
    lineName: 'K-Pop Corner',
    price: 7,
    formattedPrice: 'S/ 7.00',
    description: 'Palitos Pepero coreanos en sabores surtidos. El snack perfecto para compartir (o no) en la feria.',
    image: '/images/products/segunda-feria/peperos.jpg',
    badge: 'Snack 🍫',
    inStock: true
  },
  {
    id: 'kpop-002',
    sku: 'KPOP-002',
    name: 'Polo BTS Oversize',
    line: 'kpop',
    lineName: 'K-Pop Corner',
    price: 35,
    formattedPrice: 'S/ 35.00',
    description: 'Polo oversize con diseño de BTS. Corte holgado y cómodo para lucir tu lado ARMY en el campus.',
    image: null,
    badge: 'ARMY 💜',
    inStock: true
  },
  {
    id: 'kpop-003',
    sku: 'KPOP-003',
    name: 'Polo BTS Regular',
    line: 'kpop',
    lineName: 'K-Pop Corner',
    price: 30,
    formattedPrice: 'S/ 30.00',
    description: 'Polo corte regular con diseño de BTS. Disponible en tallas S y M.',
    image: null,
    badge: 'Tallas S y M',
    inStock: true
  },
  {
    id: 'box-001',
    sku: 'BOX-001',
    name: 'Blind Box',
    line: 'sorpresa',
    lineName: 'Sorpresas',
    price: 18,
    formattedPrice: 'S/ 18.00',
    description: 'Caja sorpresa con una figura coleccionable. ¡No sabrás cuál te toca hasta abrirla!',
    image: '/images/products/segunda-feria/blind-box.jpeg',
    badge: 'Misterio 🎁',
    inStock: true
  }
]

export const promos = [
  {
    id: 'promo-ruleta',
    icon: '🎡',
    title: 'Ruleta Charmiween',
    description: 'Por compras mayores a S/ 15 gira la ruleta y gana premios y stickers spooky.',
    tag: 'Compras +S/ 15'
  },
  {
    id: 'promo-instagram',
    icon: '📸',
    title: 'Sticker por seguirnos',
    description: 'Sigue a @charmini.pe en Instagram o @charminii.pe en TikTok y llévate un sticker temático de regalo.',
    tag: 'Gratis'
  },
  {
    id: 'promo-cierre',
    icon: '🕒',
    title: 'Promo de Cierre',
    description: '15% de descuento en los productos restantes desde las 3:00 p.m. ¡Ven antes de que se acaben!',
    tag: '-15% desde 3 p.m.'
  }
]
