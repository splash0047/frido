import React, { useState } from 'react';
import { Globe, MapPin, Star, Users } from 'lucide-react';

const popularDestinations = [
  {
    id: 1,
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80',
    description: 'The City of Light beckons with iconic landmarks and romantic ambiance',
    rating: 4.8,
    popularFor: 'Culture, Food, Architecture'
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80',
    description: 'Tropical paradise with stunning beaches and rich cultural heritage',
    rating: 4.7,
    popularFor: 'Beaches, Temples, Nature'
  },
  {
    id: 3,
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80',
    description: 'Modern meets traditional in this vibrant metropolis',
    rating: 4.9,
    popularFor: 'Technology, Food, Culture'
  }
];

const categories = [
  { name: 'Beach Getaways', icon: Globe },
  { name: 'City Breaks', icon: MapPin },
  { name: 'Adventure Tours', icon: Users },
  { name: 'Cultural Experiences', icon: Star }
];

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Explore Destinations</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`p-4 rounded-lg flex flex-col items-center gap-2 transition-colors ${
                selectedCategory === category.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {popularDestinations.map((destination) => (
          <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${destination.image})` }}
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{destination.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{destination.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Globe className="w-4 h-4" />
                <span>{destination.popularFor}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}