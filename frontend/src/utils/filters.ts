// src/utils/filters.ts
import type { Car, FilterOptions } from '../data/interfaces';

export const applyFilters = (
  cars: Car[],
  filters: FilterOptions,
  searchLocation: string = ''
): Car[] => {
  let filtered = [...cars];

  // Location search
  if (searchLocation) {
    filtered = filtered.filter(car =>
      car.city.toLowerCase().includes(searchLocation.toLowerCase()) ||
      car.location.toLowerCase().includes(searchLocation.toLowerCase())
    );
  }

  // Price filter
  filtered = filtered.filter(car =>
    car.pricePerDay >= filters.minPrice && car.pricePerDay <= filters.maxPrice
  );

  // Car type filter
  if (filters.selectedTypes.length > 0) {
    filtered = filtered.filter(car => filters.selectedTypes.includes(car.type));
  }

  // Features filter
  if (filters.selectedFeatures.length > 0) {
    filtered = filtered.filter(car =>
      filters.selectedFeatures.every(feature => car.features.includes(feature))
    );
  }

  // City filter
  if (filters.selectedCities.length > 0) {
    filtered = filtered.filter(car => filters.selectedCities.includes(car.city));
  }

  // Sorting
  filtered.sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-asc':
        return a.pricePerDay - b.pricePerDay;
      case 'price-desc':
        return b.pricePerDay - a.pricePerDay;
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return b.reviewCount - a.reviewCount;
      default:
        return 0;
    }
  });

  return filtered;
};