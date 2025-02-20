import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Sun, Moon, Utensils, Car, Loader2, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { getTripSuggestions } from '../lib/gemini';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { suggestions, searchParams, destinationImage } = location.state || {};

  const getBudgetLabel = (budget) => {
    const labels = {
      low: 'Budget Friendly',
      medium: 'Moderate',
      high: 'Luxury'
    };
    return labels[budget] || budget;
  };

  if (!suggestions) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No results found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{
            backgroundImage: `url(https://source.unsplash.com/1600x900/?${searchParams?.destination})`,
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10"
        >
          <button
            onClick={() => navigate('/')}
            className="absolute top-8 left-4 text-white hover:text-gray-200 flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm transition-all hover:bg-black/30"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Search
          </button>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">
            {searchParams?.destination}
          </h1>
          <p className="text-xl text-white/90 font-light">
            {searchParams?.duration} Days • {searchParams?.travelers} Travelers
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10 pb-12">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Activity Categories */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Sun, label: 'Morning Activities', type: 'morning', color: 'text-yellow-500' },
                { icon: Utensils, label: 'Dining Spots', type: 'dining', color: 'text-red-500' },
                { icon: Moon, label: 'Evening Plans', type: 'evening', color: 'text-blue-500' },
                { icon: Car, label: 'Transportation', type: 'transport', color: 'text-green-500' }
              ].map((category) => (
                <motion.button
                  key={category.type}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(category.type)}
                  className={`bg-white p-6 rounded-xl shadow-lg transition-all ${
                    selectedCategory === category.type 
                      ? 'ring-2 ring-primary-500 transform scale-105' 
                      : 'hover:shadow-xl'
                  }`}
                >
                  <category.icon className={`w-8 h-8 ${category.color} mb-3`} />
                  <h4 className="font-semibold text-gray-800">{category.label}</h4>
                </motion.button>
              ))}
            </div>

            {/* Trip Details */}
            {loading ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-xl shadow-lg p-12 flex flex-col items-center"
              >
                <Loader2 className="w-10 h-10 animate-spin text-primary-500 mb-4" />
                <p className="text-gray-600 text-lg">Crafting your perfect itinerary...</p>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {tripDays.map((day, dayIndex) => (
                  <motion.div 
                    key={dayIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: dayIndex * 0.1 }}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-primary-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 font-serif">{day.title}</h3>
                      </div>

                      <div className="space-y-4 ml-16">
                        {filterActivitiesByCategory(day.activities).map((activity, actIndex) => (
                          <motion.div 
                            key={actIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: actIndex * 0.1 }}
                            className="relative pl-8"
                          >
                            <div className="flex items-start gap-4">
                              <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary-500" />
                              <div className="flex-1">
                                {activity.time && (
                                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                    <Clock className="w-4 h-4" />
                                    <span className="font-medium">{activity.time}</span>
                                  </div>
                                )}
                                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                                  <p className="text-gray-700 leading-relaxed">{activity.description}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4"
            >
              <button className="flex-1 bg-primary-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg">
                <Heart className="w-5 h-5" />
                Save Trip
              </button>
              <button className="flex-1 bg-accent-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-accent-700 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg">
                <Share2 className="w-5 h-5" />
                Share with Friends
              </button>
            </motion.div>
          </motion.div>

          {/* Trip Summary Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h3 className="text-2xl font-bold mb-6 font-serif">Trip Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <div>
                    <h4 className="font-medium text-gray-500">Destination</h4>
                    <p className="text-gray-900 font-semibold capitalize">{searchParams?.destination}</p>
                  </div>
                </div>
                {/* Add other summary items as needed */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}