// src/components/pages/HostLandingPage.tsx
import { useState } from 'react';
import { Shield, TrendingUp, DollarSign, Users, Star, Check } from 'lucide-react';

const HostLandingPage = () => {
  const [carValue, setCarValue] = useState(30000);
  const [usageDays, setUsageDays] = useState(10);

  const calculateEarnings = () => {
    // Static calculation for demo purposes
    const dailyRate = carValue * 0.001; // 0.1% of car value per day
    return Math.round(dailyRate * usageDays);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tira-primary to-blue-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Earn extra income by sharing your car
          </h1>
          <p className="text-xl mb-8">Join thousands of hosts earning with Tira in Rwanda</p>
          <button className="bg-white text-tira-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Host with Tira?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <div className="bg-tira-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Earn Serious Money</h3>
              <p className="text-gray-600">Top hosts in Rwanda earn over $1,000 per month</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <div className="bg-tira-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Full Protection</h3>
              <p className="text-gray-600">$1M liability insurance and 24/7 roadside assistance</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50">
              <div className="bg-tira-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Schedule</h3>
              <p className="text-gray-600">Share your car when it works for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Earnings Calculator</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inputs */}
              <div>
                <div className="mb-6">
                  <label htmlFor="carValue" className="block text-sm font-medium mb-3">
                    Your car's approximate value
                  </label>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      id="carValue"
                      type="range"
                      min="10000"
                      max="100000"
                      step="5000"
                      value={carValue}
                      onChange={(e) => setCarValue(parseInt(e.target.value))}
                      className="flex-1"
                      title="Your car's approximate value in dollars"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-2xl font-bold">${carValue.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="usageDays" className="block text-sm font-medium mb-3">
                    Days per month you can share
                  </label>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      id="usageDays"
                      type="range"
                      min="1"
                      max="30"
                      value={usageDays}
                      onChange={(e) => setUsageDays(parseInt(e.target.value))}
                      className="flex-1"
                      title="Days per month you can share your car"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-2xl font-bold">{usageDays} days</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-r from-tira-primary to-blue-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Your estimated monthly earnings</h3>
                <div className="text-5xl font-bold mb-6">${calculateEarnings().toLocaleString()}</div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-3" />
                    <span>Protection included</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-3" />
                    <span>Flexible schedule</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 mr-3" />
                    <span>Fast payouts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Hosts Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Jean Paul',
                location: 'Kigali',
                earnings: '$1,200/month',
                text: 'Tira has helped me earn extra income while my car sits idle during work hours.',
              },
              {
                name: 'Marie Claire',
                location: 'Musanze',
                earnings: '$850/month',
                text: 'The insurance and support give me peace of mind. Highly recommended!',
              },
              {
                name: 'Thomas',
                location: 'Rubavu',
                earnings: '$950/month',
                text: 'Perfect way to offset car maintenance costs. The platform is very user-friendly.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.location} • {testimonial.earnings}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Earning?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of hosts across Rwanda</p>
          <button className="bg-tira-primary hover:bg-teal-600 text-white font-bold py-4 px-12 rounded-lg text-lg transition-colors">
            List Your Car for Free
          </button>
          <p className="text-gray-600 mt-4">No sign-up fee • Free listing • Get started in minutes</p>
        </div>
      </section>
    </div>
  );
};

export default HostLandingPage;