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
  {
    id: 2,
    category: 'electronics',
    name: 'LG OLED C1 55"',
    brand: 'LG',
    description: 'Perfect blacks and infinite contrast with OLED technology.',
    image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=1000',
    pricePerHour: 90,
    features: [
      'OLED Display',
      'G-SYNC Compatible',
      'Dolby Vision IQ',
      'WebOS Smart TV'
    ],
    insurancePlans: [
      {
        id: 'lg-basic',
        name: 'Basic Coverage',
        description: 'Covers accidental damage',
        price: 450
      },
      {
        id: 'lg-premium',
        name: 'Premium Coverage',
        description: 'Full coverage including burn-in protection',
        price: 900
      }
    ]
  },
  {
    id: 3,
    category: 'cars',
    name: 'Tesla Model 3',
    brand: 'Tesla',
    description: 'All-electric sedan with advanced autopilot features.',
    image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=1000',
    pricePerHour: 500,
    features: [
      'All-Electric',
      'Autopilot',
      'Long Range Battery',
      'Premium Interior'
    ],
    insurancePlans: [
      {
        id: 'car-basic',
        name: 'Basic Coverage',
        description: 'Third-party liability',
        price: 2000
      },
      {
        id: 'car-premium',
        name: 'Premium Coverage',
        description: 'Comprehensive coverage',
        price: 4000
      }
    ]
  },
  {
    id: 4,
    category: 'cars',
    name: 'BMW 5 Series',
    brand: 'BMW',
    description: 'Luxury sedan with powerful performance and elegant design.',
    image: 'https://images.unsplash.com/photo-1523983254932-c7e6571c9d60?auto=format&fit=crop&q=80&w=1000',
    pricePerHour: 450,
    features: [
      'Sport Mode',
      'Leather Interior',
      'Premium Sound System',
      'Advanced Safety Features'
    ],
    insurancePlans: [
      {
        id: 'bmw-basic',
        name: 'Basic Coverage',
        description: 'Third-party liability',
        price: 1800
      },
      {
        id: 'bmw-premium',
        name: 'Premium Coverage',
        description: 'Comprehensive coverage with zero deductible',
        price: 3500
      }
    ]
  },
  {
    id: 5,
    category: 'bikes',
    name: 'Royal Enfield Classic 350',
    brand: 'Royal Enfield',
    description: 'Classic motorcycle with modern features.',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000',
    pricePerHour: 200,
    features: [
      '350cc Engine',
      'ABS',
      'Electric Start',
      'Classic Design'
    ],
    insurancePlans: [
      {
        id: 'bike-basic',
        name: 'Basic Coverage',
        description: 'Third-party liability',
        price: 500
      },
      {
        id: 'bike-premium',
        name: 'Premium Coverage',
        description: 'Comprehensive coverage',
        price: 1000
      }
    ]
  },
  {
    id: 6,
    category: 'bikes',
    name: 'Kawasaki Ninja ZX-6R',
    brand: 'Kawasaki',
    description: 'High-performance sports bike with aggressive styling.',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=1000',
    pricePerHour: 300,
    features: [
      '636cc Engine',
      'Traction Control',
      'Quick Shifter',
      'Race-Ready Design'
    ],
    insurancePlans: [
      {
        id: 'ninja-basic',
        name: 'Basic Coverage',
        description: 'Third-party liability with theft protection',
        price: 800
      },
      {
        id: 'ninja-premium',
        name: 'Premium Coverage',
        description: 'Full coverage with track day insurance',
        price: 1500
      }
    ]
  },
  {
    id: 7,
    category: 'phones',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    description: 'Latest iPhone with pro camera system.',
    image: 'https://images.unsplash.com/photo-1696423736792-886c89750c85?auto=format&fit=crop&q=80&w=1000',
    pricePerHour: 50,
    features: [
      'Pro Camera System',
      '5G Capable',
      'A17 Pro Chip',
      'Face ID'
    ],
    insurancePlans: [
      {
        id: 'phone-basic',
        name: 'Basic Coverage',
        description: 'Screen damage protection',
        price: 300
      },
      {
        id: 'phone-premium',
        name: 'Premium Coverage',
        description: 'Complete device protection',
        price: 600
      }
    ]
  },
  {
    id: 8,
    category: 'phones',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    description: 'Premium Android flagship with S Pen support.',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=1000',
    pricePerHour: 45,
    features: [
      '200MP Camera',
      'S Pen Included',
      'Snapdragon 8 Gen 3',
      '5G Connectivity'
    ],
    insurancePlans: [
      {
        id: 'samsung-basic',
        name: 'Basic Coverage',
        description: 'Screen and battery protection',
        price: 250
      },
      {
        id: 'samsung-premium',
        name: 'Premium Coverage',
        description: 'Full device coverage with theft protection',
        price: 500
      }
    ]
  }
];