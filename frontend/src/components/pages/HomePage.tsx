// src/components/pages/HomePage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Search, Shield, Car, CreditCard } from 'lucide-react';
import CarCard from '../common/CarCard';
import { cars } from '../../data/mockData';

const HomePage = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = () => {
    if (location.trim()) {
      navigate(`/search?location=${location}&pickup=${pickupDate}&return=${returnDate}`);
    }
  };

  const featuredCars = cars.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tira-primary to-blue-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find the perfect car for your Rwanda adventure
          </h1>
          <p className="text-xl mb-8">Rent unique cars from local hosts across Rwanda</p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-2 md:p-4 shadow-xl max-w-4xl">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <div className="flex-1 mb-4 md:mb-0">
                <label htmlFor="location" className="sr-only">Location</label>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 ml-3" />
                  <input
                    id="location"
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full px-4 py-3 text-gray-900 focus:outline-none"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:space-x-4 md:items-center mb-4 md:mb-0">
                <div className="flex items-center mb-4 md:mb-0">
                  <label htmlFor="pickupDate" className="sr-only">Pickup Date</label>
                  <Calendar className="h-5 w-5 text-gray-400 ml-3" />
                  <input
                    id="pickupDate"
                    type="date"
                    className="w-full px-4 py-3 text-gray-900 focus:outline-none"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="returnDate" className="sr-only">Return Date</label>
                  <Calendar className="h-5 w-5 text-gray-400 ml-3" />
                  <input
                    id="returnDate"
                    type="date"
                    className="w-full px-4 py-3 text-gray-900 focus:outline-none"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
                </div>
              </div>
              
              <button
                onClick={handleSearch}
                className="bg-tira-primary hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Featured Cars in Rwanda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* How Tira Works */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">How Tira Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-tira-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find the Perfect Car</h3>
              <p className="text-gray-600">Browse thousands of cars from local hosts across Rwanda</p>
            </div>
            
            <div className="text-center">
              <div className="bg-tira-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book with Confidence</h3>
              <p className="text-gray-600">Secure booking and 24/7 customer support for peace of mind</p>
            </div>
            
            <div className="text-center">
              <div className="bg-tira-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hit the Road</h3>
              <p className="text-gray-600">Pick up your car and start your Rwandan adventure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action for Hosts */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-tira-primary to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl font-bold mb-4">List your car on Tira</h2>
                <p className="text-lg mb-6">Earn extra income by sharing your car when you're not using it.</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 mr-3" />
                    <span>$1M liability insurance included</span>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-3" />
                    <span>Get paid quickly and securely</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate('/host')}
                className="bg-white text-tira-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-colors whitespace-nowrap"
              >
                Start Earning Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;