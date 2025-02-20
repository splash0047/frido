import React, { useState, useEffect, useMemo } from 'react';
import { Search, Calendar, Users, DollarSign, Loader2, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getTripSuggestions, getDestinationSuggestions } from '../lib/gemini';
import toast from 'react-hot-toast';
import _ from 'lodash';

export default function Hero() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState('2 Travelers');
  const [budget, setBudget] = useState('medium');
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedImage, setSelectedImage] = useState('https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80');
  const [showBudgetCustomization, setShowBudgetCustomization] = useState(false);
  const [customBudget, setCustomBudget] = useState({
    accommodation: 40,
    activities: 30,
    food: 20,
    transport: 10
  });

  // Debounced search function
  const debouncedSearch = useMemo(
    () =>
      _.debounce((searchTerm) => {
        const results = getDestinationSuggestions(searchTerm);
        setSuggestions(results);
      }, 300),
    []
  );

  useEffect(() => {
    if (destination) {
      setShowSuggestions(true);
      debouncedSearch(destination);
    } else {
      setShowSuggestions(false);
      setSuggestions([]);
    }

    return () => {
      debouncedSearch.cancel();
    };
  }, [destination, debouncedSearch]);

  const handleDestinationSelect = (dest) => {
    setDestination(dest.name);
    setSelectedImage(dest.image);
    setShowSuggestions(false);
  };

  const handleBudgetChange = (category: string, value: number) => {
    setCustomBudget(prev => {
      const newBudget = { ...prev, [category]: value };
      const total = Object.values(newBudget).reduce((sum, val) => sum + val, 0);
      if (total > 100) {
        return prev;
      }
      return newBudget;
    });
  };

  const handleSearch = async () => {
    if (!destination) {
      toast.error('Please enter a destination');
      return;
    }

    setLoading(true);
    try {
      const budgetRanges = {
        low: 'budget-friendly (under ₹20,000 per person)',
        medium: 'moderate (₹20,000-₹50,000 per person)',
        high: 'luxury (over ₹50,000 per person)'
      };
      
      const preferences = `Destination: ${destination}, Date: ${date}, Group Size: ${travelers}, Budget Range: ${budgetRanges[budget]}, Budget Distribution: Accommodation: ${customBudget.accommodation}%, Activities: ${customBudget.activities}%, Food: ${customBudget.food}%, Transport: ${customBudget.transport}%`;
      const suggestions = await getTripSuggestions(preferences);
      
      navigate('/results', { 
        state: { 
          suggestions, 
          searchParams: { 
            destination, 
            date, 
            travelers, 
            budget,
            customBudget 
          },
          destinationImage: selectedImage
        } 
      });
    } catch (error) {
      toast.error('Failed to get suggestions. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8">
      <div 
        className="absolute inset-0 z-0 bg-hero-pattern transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url("${selectedImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-accent-900/90 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto z-10 w-full max-w-7xl">
        <div className="max-w-3xl">
          <div className="animate-float">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Discover Incredible
              <br />
              <span className="text-accent-300">India</span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl">
            Create unforgettable journeys with AI-powered recommendations tailored to your preferences. Plan, collaborate, and explore with confidence.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="relative">
                <div className="flex items-center gap-3 bg-white/90 rounded-xl px-4 py-3 focus-within:bg-white transition-colors">
                  <Search className="text-primary-600 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Where in India?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full outline-none bg-transparent placeholder-gray-500"
                  />
                </div>
                
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute w-full mt-2 bg-white rounded-xl shadow-xl overflow-hidden z-50">
                    {suggestions.map((dest, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => handleDestinationSelect(dest)}
                      >
                        <img
                          src={dest.image}
                          alt={dest.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{dest.name}</div>
                          <div className="text-sm text-gray-500">{dest.state} - {dest.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div>
                <div className="flex items-center gap-3 bg-white/90 rounded-xl px-4 py-3 focus-within:bg-white transition-colors">
                  <Calendar className="text-primary-600 flex-shrink-0" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-3 bg-white/90 rounded-xl px-4 py-3 focus-within:bg-white transition-colors">
                  <Users className="text-primary-600 flex-shrink-0" />
                  <select 
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full outline-none bg-transparent"
                  >
                    <option>2 Travelers</option>
                    <option>3 Travelers</option>
                    <option>4 Travelers</option>
                    <option>5+ Travelers</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 bg-white/90 rounded-xl px-4 py-3 focus-within:bg-white transition-colors">
                  <DollarSign className="text-primary-600 flex-shrink-0" />
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full outline-none bg-transparent"
                  >
                    <option value="low">Budget Friendly</option>
                    <option value="medium">Moderate</option>
                    <option value="high">Luxury</option>
                  </select>
                  <button
                    onClick={() => setShowBudgetCustomization(!showBudgetCustomization)}
                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Settings className="w-5 h-5 text-primary-600" />
                  </button>
                </div>

                {showBudgetCustomization && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl p-4 z-50">
                    <h4 className="font-semibold mb-3">Customize Budget Distribution</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-600">Accommodation ({customBudget.accommodation}%)</label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={customBudget.accommodation}
                          onChange={(e) => handleBudgetChange('accommodation', parseInt(e.target.value))}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Activities ({customBudget.activities}%)</label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={customBudget.activities}
                          onChange={(e) => handleBudgetChange('activities', parseInt(e.target.value))}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Food ({customBudget.food}%)</label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={customBudget.food}
                          onChange={(e) => handleBudgetChange('food', parseInt(e.target.value))}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Transport ({customBudget.transport}%)</label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={customBudget.transport}
                          onChange={(e) => handleBudgetChange('transport', parseInt(e.target.value))}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <button 
              className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-accent-700 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg flex items-center justify-center gap-2"
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Planning Your Perfect Trip...</span>
                </>
              ) : (
                'Start Your Journey'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}