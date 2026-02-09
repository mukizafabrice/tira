// src/components/common/CarCard.tsx
import { Link } from "react-router-dom";
import { Star, MapPin, Users, Fuel } from "lucide-react";
import type { Car } from "../../data/interfaces"; // This should be correct

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Link to={`/car/${car.id}`} className="group">
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-xl shadow-turo-card hover:shadow-lg">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={car.images[0]}
            alt={`${car.make} ${car.model}`}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute px-2 py-1 bg-white rounded-md top-3 right-3">
            <span className="text-sm font-semibold text-tira-primary">
              ${car.pricePerDay}
              <span className="text-xs text-gray-600">/day</span>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold">
                {car.year} {car.make} {car.model}
              </h3>
              <div className="flex items-center mt-1 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{car.location}</span>
              </div>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 font-semibold">{car.rating}</span>
              <span className="ml-1 text-sm text-gray-500">
                ({car.reviewCount})
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="flex items-center mt-3 space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{car.seats} seats</span>
            </div>
            <div className="flex items-center">
              <Fuel className="w-4 h-4 mr-1" />
              <span>{car.transmission}</span>
            </div>
            <span className="capitalize">{car.type}</span>
          </div>

          {/* Host */}
          <div className="flex items-center pt-4 mt-4 border-t">
            <img
              src={car.host.avatar}
              alt={car.host.name}
              className="w-8 h-8 mr-3 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">{car.host.name}</p>
              {car.host.isSuperhost && (
                <span className="text-xs bg-tira-primary text-white px-2 py-0.5 rounded-full">
                  Superhost
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
