// src/components/pages/SearchResultsPage.tsx
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Sliders, Star } from "lucide-react";
import CarCard from "../common/CarCard";
import FilterSidebar from "../common/FilterSidebar";

import { cars, carTypes, cities, features } from "../../data/mockData";
import type { FilterOptions } from "../../data/interfaces";
import { applyFilters } from "../../utils/filters";

const SearchResultsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchLocation = queryParams.get("location") || "";

  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    minPrice: 0,
    maxPrice: 200,
    selectedTypes: [],
    selectedFeatures: [],
    selectedCities: [],
    sortBy: "popularity",
  });

  const filteredCars = applyFilters(cars, filters, searchLocation);

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 200,
      selectedTypes: [],
      selectedFeatures: [],
      selectedCities: [],
      sortBy: "popularity",
    });
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Filter Sidebar - Desktop */}
        <div className="flex-shrink-0 hidden w-64 lg:block">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={clearFilters}
            carTypes={carTypes}
            cities={cities}
            features={features}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-8">
            <h1 className="mb-2 text-2xl font-bold">
              {searchLocation
                ? `Cars available in ${searchLocation}`
                : "All available cars"}
            </h1>
            <p className="text-gray-600">
              {filteredCars.length} {filteredCars.length === 1 ? "car" : "cars"}{" "}
              available
            </p>
          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center w-full p-3 mb-4 space-x-2 border rounded-lg lg:hidden"
          >
            <Sliders className="w-5 h-5" />
            <span>Filters</span>
          </button>

          {/* Mobile Filter Sidebar */}
          {showFilters && (
            <div className="mb-6 lg:hidden">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={clearFilters}
                carTypes={carTypes}
                cities={cities}
                features={features}
              />
            </div>
          )}

          {/* Sort Options */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleFilterChange({ sortBy: "price-asc" })}
                className={`px-4 py-2 rounded-full ${filters.sortBy === "price-asc" ? "bg-gray-900 text-white" : "bg-gray-100"}`}
              >
                Price: Low to High
              </button>
              <button
                onClick={() => handleFilterChange({ sortBy: "price-desc" })}
                className={`px-4 py-2 rounded-full ${filters.sortBy === "price-desc" ? "bg-gray-900 text-white" : "bg-gray-100"}`}
              >
                Price: High to Low
              </button>
              <button
                onClick={() => handleFilterChange({ sortBy: "rating" })}
                className={`px-4 py-2 rounded-full ${filters.sortBy === "rating" ? "bg-gray-900 text-white" : "bg-gray-100"}`}
              >
                <Star className="inline w-4 h-4 mr-1" />
                Rating
              </button>
            </div>
          </div>

          {/* Results Grid */}
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <h3 className="mb-2 text-xl font-semibold">
                No cars match your filters
              </h3>
              <p className="mb-4 text-gray-600">
                Try adjusting your search criteria
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 text-white rounded-lg bg-tira-primary"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
