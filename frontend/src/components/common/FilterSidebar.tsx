import { X } from "lucide-react";
import type { FilterOptions } from "../../data/interfaces";

interface FilterSidebarProps {
  filters: FilterOptions;
  onFilterChange: (filters: Partial<FilterOptions>) => void;
  onClearFilters: () => void;
  carTypes: string[];
  cities: string[];
  features: string[];
}

const FilterSidebar = ({
  filters,
  onFilterChange,
  onClearFilters,
  carTypes,
  cities,
  features,
}: FilterSidebarProps) => {
  const handleTypeToggle = (type: string) => {
    const newTypes = filters.selectedTypes.includes(type)
      ? filters.selectedTypes.filter((t) => t !== type)
      : [...filters.selectedTypes, type];
    onFilterChange({ selectedTypes: newTypes });
  };

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = filters.selectedFeatures.includes(feature)
      ? filters.selectedFeatures.filter((f) => f !== feature)
      : [...filters.selectedFeatures, feature];
    onFilterChange({ selectedFeatures: newFeatures });
  };

  const handleCityToggle = (city: string) => {
    const newCities = filters.selectedCities.includes(city)
      ? filters.selectedCities.filter((c) => c !== city)
      : [...filters.selectedCities, city];
    onFilterChange({ selectedCities: newCities });
  };

  return (
    <div className="p-6 mb-6 bg-white shadow-md rounded-xl lg:mb-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Filters</h2>
        <button
          onClick={onClearFilters}
          className="text-sm text-tira-primary hover:text-teal-600"
          title="Clear all filters"
        >
          Clear all
        </button>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="mb-4 font-semibold">Price range (per day)</h3>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm text-gray-600">
              Min: ${filters.minPrice}
            </label>
            <input
              type="range"
              min="0"
              max="200"
              step="5"
              value={filters.minPrice}
              onChange={(e) =>
                onFilterChange({ minPrice: parseInt(e.target.value) })
              }
              className="w-full"
              title="Minimum price range"
              placeholder="Minimum price"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-600">
              Max: ${filters.maxPrice}
            </label>
            <input
              type="range"
              min="0"
              max="200"
              step="5"
              value={filters.maxPrice}
              onChange={(e) =>
                onFilterChange({ maxPrice: parseInt(e.target.value) })
              }
              className="w-full"
              title="Maximum price range"
              placeholder="Maximum price"
            />
          </div>
        </div>
      </div>

      {/* Car Types */}
      <div className="mb-8">
        <h3 className="mb-4 font-semibold">Car Type</h3>
        <div className="space-y-2">
          {carTypes.map((type) => (
            <label
              key={type}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.selectedTypes.includes(type)}
                onChange={() => handleTypeToggle(type)}
                className="w-4 h-4 rounded text-tira-primary focus:ring-tira-primary"
              />
              <span className="text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Cities */}
      <div className="mb-8">
        <h3 className="mb-4 font-semibold">City</h3>
        <div className="space-y-2">
          {cities.map((city) => (
            <label
              key={city}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.selectedCities.includes(city)}
                onChange={() => handleCityToggle(city)}
                className="w-4 h-4 rounded text-tira-primary focus:ring-tira-primary"
              />
              <span className="text-gray-700">{city}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h3 className="mb-4 font-semibold">Features</h3>
        <div className="space-y-2">
          {features.map((feature) => (
            <label
              key={feature}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.selectedFeatures.includes(feature)}
                onChange={() => handleFeatureToggle(feature)}
                className="w-4 h-4 rounded text-tira-primary focus:ring-tira-primary"
              />
              <span className="text-gray-700">{feature}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Active Filters */}
      {(filters.selectedTypes.length > 0 ||
        filters.selectedFeatures.length > 0 ||
        filters.selectedCities.length > 0) && (
        <div className="pt-6 mt-6 border-t">
          <h4 className="mb-3 font-semibold">Active Filters</h4>
          <div className="flex flex-wrap gap-2">
            {filters.selectedTypes.map((type) => (
              <span
                key={type}
                className="inline-flex items-center px-3 py-1 text-sm text-gray-800 bg-gray-100 rounded-full"
              >
                {type}
                <button
                  onClick={() => handleTypeToggle(type)}
                  className="ml-2 hover:text-red-500"
                  title="Remove car type filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {filters.selectedCities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center px-3 py-1 text-sm text-gray-800 bg-gray-100 rounded-full"
              >
                {city}
                <button
                  type="button"
                  onClick={() => handleCityToggle(city)}
                  className="ml-2 hover:text-red-500"
                  title="Remove city filter"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSidebar;
