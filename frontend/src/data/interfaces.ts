// src/data/interfaces.ts
export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  pricePerDay: number;
  rating: number;
  reviewCount: number;
  location: string;
  city: string;
  features: string[];
  images: string[];
  type: 'SUV' | 'Sedan' | 'Coupe' | 'Convertible' | 'Hatchback' | 'Truck' | 'Van' | 'Luxury';
  transmission: 'Automatic' | 'Manual';
  seats: number;
  host: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    responseRate: number;
    isSuperhost: boolean;
  };
  tripsCompleted: number;
}

export interface FilterOptions {
  minPrice: number;
  maxPrice: number;
  selectedTypes: string[];
  selectedFeatures: string[];
  selectedCities: string[];
  sortBy: 'price-asc' | 'price-desc' | 'rating' | 'popularity';
}