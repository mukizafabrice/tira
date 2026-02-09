// src/components/layout/Navbar.tsx
import { Link, useNavigate } from "react-router-dom";
import { Car, Search, User, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (location: string) => {
    navigate(`/search?location=${location}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container px-4 py-3 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-tira-primary" />
            <span className="text-2xl font-bold text-tira-dark">Tira</span>
          </Link>

          {/* Desktop Search Bar */}
          <div className="flex-1 hidden max-w-2xl mx-8 md:flex">
            <div className="relative flex-1">
              <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-tira-primary focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearch((e.target as HTMLInputElement).value);
                  }
                }}
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/host")}
              className="hidden font-medium md:block text-tira-dark hover:text-tira-primary"
            >
              List your car
            </button>

            {/* Login Button - Static */}
            <button
              title="Account menu"
              className="flex items-center px-4 py-2 space-x-2 transition-colors border border-gray-300 rounded-full hover:bg-gray-50"
            >
              <Menu className="w-5 h-5" />
              <User className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 md:hidden"
              title="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-tira-primary focus:border-transparent"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch((e.target as HTMLInputElement).value);
                }
              }}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="py-4 mt-4 border-t md:hidden">
            <Link
              to="/host"
              className="block py-2 font-medium text-tira-dark hover:text-tira-primary"
            >
              List your car
            </Link>
            <button className="w-full py-2 font-medium text-left text-tira-dark hover:text-tira-primary">
              Sign up
            </button>
            <button className="w-full py-2 font-medium text-left text-tira-dark hover:text-tira-primary">
              Log in
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
