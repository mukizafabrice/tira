// src/components/pages/CarDetailsPage.tsx
import { useParams } from 'react-router-dom';
import { Star, MapPin, Users, Fuel, Shield, Check, Calendar } from 'lucide-react';
import { cars } from '../../data/mockData';

const CarDetailsPage = () => {
  const { id } = useParams();
  const car = cars.find(c => c.id === id) || cars[0];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Car Title and Rating */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{car.year} {car.make} {car.model}</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 font-semibold">{car.rating}</span>
            <span className="text-gray-600 ml-1">({car.reviewCount} reviews)</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-1" />
            <span>{car.location}, {car.city}</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="lg:col-span-2">
          <img
            src={car.images[0]}
            alt={`${car.make} ${car.model}`}
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {car.images.slice(1, 5).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${car.make} ${car.model}`}
              className="w-full h-44 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Car Details */}
        <div className="lg:w-2/3">
          {/* Host Info */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={car.host.avatar}
                  alt={car.host.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Hosted by {car.host.name}</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1">{car.host.rating} rating</span>
                    </div>
                    <span>{car.host.responseRate}% response rate</span>
                    <span>{car.tripsCompleted} trips completed</span>
                  </div>
                </div>
              </div>
              {car.host.isSuperhost && (
                <div className="bg-tira-primary text-white px-4 py-2 rounded-full">
                  Superhost
                </div>
              )}
            </div>
          </div>

          {/* Car Features */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About this car</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-500 mr-3" />
                <div>
                  <div className="font-medium">{car.seats} seats</div>
                  <div className="text-sm text-gray-600">Passenger capacity</div>
                </div>
              </div>
              <div className="flex items-center">
                <Fuel className="h-5 w-5 text-gray-500 mr-3" />
                <div>
                  <div className="font-medium">{car.transmission}</div>
                  <div className="text-sm text-gray-600">Transmission</div>
                </div>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-gray-500 mr-3" />
                <div>
                  <div className="font-medium">{car.type}</div>
                  <div className="text-sm text-gray-600">Car type</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <div className="grid grid-cols-2 gap-3">
              {car.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className="lg:w-1/3">
          <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6 border">
            <div className="mb-6">
              <div className="text-3xl font-bold mb-2">${car.pricePerDay}<span className="text-gray-600 text-lg font-normal">/day</span></div>
              <div className="text-sm text-gray-600">Prices may vary depending on trip length</div>
            </div>

            {/* Date Selection */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Pick-up date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    placeholder="Pick-up date"
                    className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-tira-primary focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Return date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    placeholder="Return date"
                    className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-tira-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Protection Plan */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-tira-primary mt-0.5 mr-3" />
                <div>
                  <h4 className="font-semibold mb-1">Protection included</h4>
                  <p className="text-sm text-gray-600">$1M third-party liability insurance included</p>
                </div>
              </div>
            </div>

            {/* Book Button */}
            <button className="w-full bg-tira-primary hover:bg-teal-600 text-white font-bold py-4 rounded-lg text-lg transition-colors">
              Book Now
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              You won't be charged yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;