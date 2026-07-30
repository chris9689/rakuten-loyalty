import type { Product } from '@/types';

/**
 * Real stock photo (Pexels CDN, reachable and free to use) for a given photo
 * id, sized for a product tile. Falls back to an emoji tile if unreachable.
 */
const stock = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop`;

/**
 * Illustrative home-electronics catalogue used for the browsing chapter.
 * Prices and point rates are for demonstration only. Product photos load from
 * a stock-photo service and gracefully fall back to an emoji tile if offline.
 */
export const products: Product[] = [
  {
    id: 'p-kettle',
    name: 'Precision Electric Kettle',
    category: 'Kitchen',
    price: 8980,
    pointRate: 10,
    emoji: '🫖',
    image: stock(324028),
    tag: 'Trending',
    rating: 4.7,
    intentSignal: true,
  },
  {
    id: 'p-tv',
    name: '40-inch Smart TV',
    category: 'Living',
    price: 54800,
    pointRate: 8,
    emoji: '📺',
    image: stock(1201996),
    tag: 'Home setup',
    rating: 4.6,
  },
  {
    id: 'p-rice',
    name: 'IH Rice Cooker 5.5 Go',
    category: 'Kitchen',
    price: 21800,
    pointRate: 7,
    emoji: '🍚',
    image: stock(5700180),
    rating: 4.8,
  },
  {
    id: 'p-air',
    name: 'Air Purifier Plus',
    category: 'Appliances',
    price: 18600,
    pointRate: 6,
    emoji: '🌬️',
    image: stock(4239013),
    rating: 4.5,
  },
  {
    id: 'p-lighting',
    name: 'Warm Lighting Set',
    category: 'Lighting',
    price: 12400,
    pointRate: 9,
    emoji: '💡',
    image: stock(112811),
    tag: 'Home setup',
    rating: 4.4,
  },
  {
    id: 'p-curtains',
    name: 'Blackout Curtains (Pair)',
    category: 'Home',
    price: 9800,
    pointRate: 6,
    emoji: '🪟',
    image: stock(1643384),
    rating: 4.3,
  },
  {
    id: 'p-cabinet',
    name: 'Modular Storage Cabinet',
    category: 'Home',
    price: 16800,
    pointRate: 7,
    emoji: '🗄️',
    image: stock(1571460),
    rating: 4.5,
  },
  {
    id: 'p-dishacc',
    name: 'Dishwasher Care Accessories',
    category: 'Appliances',
    price: 3480,
    pointRate: 5,
    emoji: '🧴',
    image: stock(4108275),
    rating: 4.2,
  },
];

export const productById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);
