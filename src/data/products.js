export const faculties = [
  { id: 'all', name: 'Todas las Facultades', icon: '✨' },
  { id: 'lobo', name: 'Lobo', icon: '🐺' },
  { id: 'leon', name: 'León', icon: '🦁' },
  { id: 'vikingo', name: 'Vikingo', icon: '🛡️' },
  { id: 'toro', name: 'Toro', icon: '🐂' }
]

export const productLines = [
  { id: 'all', name: 'Todos los Productos' },
  { id: 'dumi', name: 'Dumi Charms (Minifiguras - S/ 10)' },
  { id: 'pals', name: 'Charmini Pals (Llaveros - S/ 5)' }
]

export const products = [
  {
    id: 'dum-001',
    sku: 'DUM-001',
    name: 'Dumi Lobo',
    line: 'dumi',
    lineName: 'Dumi Charms',
    faculty: 'lobo',
    facultyName: 'Facultad Lobo',
    price: 10,
    formattedPrice: 'S/ 10.00',
    description: 'Minifigura coleccionable con diseño exclusivo de la Facultad Lobo. Ideal para tu celular, laptop o escritorio estilo Sonny Angels.',
    image: '/images/products/dumi-lobo.jpg',
    badge: 'Popular 🔥',
    inStock: true
  },
  {
    id: 'dum-002',
    sku: 'DUM-002',
    name: 'Dumi León',
    line: 'dumi',
    lineName: 'Dumi Charms',
    faculty: 'leon',
    facultyName: 'Facultad León',
    price: 10,
    formattedPrice: 'S/ 10.00',
    description: 'Minifigura coleccionable Kawaii de la Facultad León. El compañero perfecto para darle vida a tu espacio favorito.',
    image: '/images/products/dumi-leon.jpg',
    badge: 'Nuevo ✨',
    inStock: true
  },
  {
    id: 'dum-003',
    sku: 'DUM-003',
    name: 'Dumi Vikingo',
    line: 'dumi',
    lineName: 'Dumi Charms',
    faculty: 'vikingo',
    facultyName: 'Facultad Vikingo',
    price: 10,
    formattedPrice: 'S/ 10.00',
    description: 'Minifigura coleccionable con espíritu guerrero y estética kawaii de la Facultad Vikingo.',
    image: '/images/products/dumi-vikingo.jpg',
    badge: 'Edición Feria',
    inStock: true
  },
  {
    id: 'dum-004',
    sku: 'DUM-004',
    name: 'Dumi Toro',
    line: 'dumi',
    lineName: 'Dumi Charms',
    faculty: 'toro',
    facultyName: 'Facultad Toro',
    price: 10,
    formattedPrice: 'S/ 10.00',
    description: 'Minifigura coleccionable de la Facultad Toro. Pequeño compañero con actitud imparable y mucha ternura.',
    image: '/images/products/dumi-toro.jpg',
    badge: 'Recomendado ⭐',
    inStock: true
  },
  {
    id: 'pal-001',
    sku: 'PAL-001',
    name: 'Charm Lobo',
    line: 'pals',
    lineName: 'Charmini Pals',
    faculty: 'lobo',
    facultyName: 'Facultad Lobo',
    price: 5,
    formattedPrice: 'S/ 5.00',
    description: 'Llavero coleccionable de la Facultad Lobo. Ideal para mochilas, llaves o cartucheras para llevar el orgullo ESAN.',
    image: '/images/products/charm-lobo.jpg',
    badge: 'S/ 5.00',
    inStock: true
  },
  {
    id: 'pal-002',
    sku: 'PAL-002',
    name: 'Charm León',
    line: 'pals',
    lineName: 'Charmini Pals',
    faculty: 'leon',
    facultyName: 'Facultad León',
    price: 5,
    formattedPrice: 'S/ 5.00',
    description: 'Llavero coleccionable de la Facultad León con detalles Kawaii excepcionales.',
    image: '/images/products/charm-leon.jpg',
    badge: 'S/ 5.00',
    inStock: true
  },
  {
    id: 'pal-003',
    sku: 'PAL-003',
    name: 'Charm Vikingo',
    line: 'pals',
    lineName: 'Charmini Pals',
    faculty: 'vikingo',
    facultyName: 'Facultad Vikingo',
    price: 5,
    formattedPrice: 'S/ 5.00',
    description: 'Llavero coleccionable de la Facultad Vikingo. Dale personalidad a tus pertenencias diarias.',
    image: '/images/products/charm-vikingo.jpg',
    badge: 'S/ 5.00',
    inStock: true
  },
  {
    id: 'pal-004',
    sku: 'PAL-004',
    name: 'Charm Toro',
    line: 'pals',
    lineName: 'Charmini Pals',
    faculty: 'toro',
    facultyName: 'Facultad Toro',
    price: 5,
    formattedPrice: 'S/ 5.00',
    description: 'Llavero coleccionable de la Facultad Toro. Resistente, tierno y con personalidad propia.',
    image: '/images/products/charm-toro.jpg',
    badge: 'S/ 5.00',
    inStock: true
  }
]

export const combos = [
  {
    id: 'combo-facultad',
    name: 'Combo Facultad 🎓',
    price: 14,
    originalPrice: 15,
    discountBadge: 'Ahorras S/ 1.00',
    description: '1 Dumi Charm (Minifigura S/10) + 1 Charmini Pal (Llavero S/5) de la misma facultad.',
    includes: ['1 Dumi Charm a elección', '1 Charmini Pal a elección'],
    icon: '✨',
    highlight: true
  },
  {
    id: 'combo-coleccionista',
    name: 'Combo Coleccionista 🏆',
    price: 18,
    originalPrice: 20,
    discountBadge: 'Ahorras S/ 2.00',
    description: 'Pack completo de los 4 llaveros Charmini Pals (Lobo + León + Vikingo + Toro).',
    includes: ['Lobo', 'León', 'Vikingo', 'Toro'],
    icon: '⭐',
    highlight: false
  }
]
