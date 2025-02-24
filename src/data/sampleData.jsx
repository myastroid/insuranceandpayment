import { Tv, Car, Bike, Smartphone, Watch, Laptop } from 'lucide-react';

export const categories = [
  { id: 'electronics', name: 'Electronics', icon: Tv },
  { id: 'cars', name: 'Cars', icon: Car },
  { id: 'bikes', name: 'Bikes', icon: Bike },
  { id: 'phones', name: 'Phones', icon: Smartphone },
  { id: 'watches', name: 'Watches', icon: Watch },
  { id: 'laptops', name: 'Laptops', icon: Laptop },
];

export const products = [
  {
    id: 1,
    category: 'electronics',
    name: 'Samsung 65" QLED TV',
    brand: 'Samsung',
    description: 'Premium 4K QLED TV with smart features and stunning picture quality.',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069533cd?auto=format&fit=crop&q=80&w=1000',
    pricePerHour: 100,
    features: [
      '4K QLED Display',
      'Smart TV Features',
      'HDR Support',
      'Gaming Mode'
    ],
    insurancePlans: [
      {
        id: 'tv-basic',
        name: 'Basic Coverage',
        description: 'Covers accidental damage',
        price: 500
      },
      {
        id: 'tv-premium',
        name: 'Premium Coverage',
        description: 'Covers all damages including water damage',
        price: 1000
      }
    ]
  },
  // ... (rest of the products array remains the same)
];