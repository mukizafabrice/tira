import { Search, MapPin, Calendar } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSearch = () => {
    if (location.trim()) {
      navigate(
        `/search?location=${location}&pickup=${pickupDate}&return=${returnDate}`,
      );
    }
  };

  return (
    <div className="w-full max-w-4xl p-2 bg-white shadow-xl rounded-2xl md:p-4">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <div className="flex-1 mb-4 md:mb-0">
          <div className="flex items-center border-r md:border-r-0 md:border-b-0">
            <MapPin className="w-5 h-5 ml-3 text-gray-400" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full px-4 py-3 text-gray-900 focus:outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
          </div>
        </div>

        <div className="flex flex-col mb-4 md:flex-row md:space-x-4 md:items-center md:mb-0">
          <div className="flex items-center mb-4 md:mb-0">
            <Calendar className="w-5 h-5 ml-3 text-gray-400" />
            <input
              type="date"
              title="Pickup Date"
              placeholder="Pickup date"
              className="w-full px-4 py-3 text-gray-900 focus:outline-none"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 ml-3 text-gray-400" />
            <input
              type="date"
              title="Return Date"
              placeholder="Return date"
              className="w-full px-4 py-3 text-gray-900 focus:outline-none"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="flex items-center justify-center px-8 py-3 space-x-2 font-semibold text-white transition-colors rounded-lg bg-tira-primary hover:bg-teal-600"
        >
          <Search className="w-5 h-5" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
