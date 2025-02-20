import React from 'react';
import { Compass, Map, Camera, Globe, Heart, Star, Coffee, Mountain } from 'lucide-react';

const categories = [
  {
    title: 'Heritage Sites',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
    icon: Mountain,
    description: 'Explore India\'s magnificent historical monuments'
  },
  {
    title: 'Cultural Experiences',
    image: 'https://images.unsplash.com/photo-1545350028-a1c1ce19cc2e?w=800&q=80',
    icon: Coffee,
    description: 'Immerse yourself in India\'s rich traditions and festivals'
  },
  {
    title: 'Nature Retreats',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&q=80',
    icon: Camera,
    description: 'Discover serene landscapes and natural wonders'
  },
  {
    title: 'Hidden Gems',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
    icon: Compass,
    description: 'Explore off-beat destinations in India'
  }
];

const destinations = [
  {
    name: 'Taj Mahal, Agra',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
    description: 'Symbol of eternal love and architectural marvel',
    rating: 4.9,
    price: '₹25,999'
  },
  {
    name: 'Varanasi Ghats',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
    description: 'Spiritual capital of India on the banks of Ganges',
    rating: 4.8,
    price: '₹22,999'
  },
  {
    name: 'Hawa Mahal, Jaipur',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
    description: 'Pink City\'s iconic palace of winds',
    rating: 4.7,
    price: '₹28,999'
  },
  {
    name: 'Kerala Backwaters',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&q=80',
    description: 'Serene waterways and houseboat experiences',
    rating: 4.9,
    price: '₹32,999'
  },
  {
    name: 'Golden Temple, Amritsar',
    image: 'https://images.unsplash.com/photo-1514222788835-3a1a1d5b32f8?w=800&q=80',
    description: 'Spiritual heart of Sikhism with golden architecture',
    rating: 4.9,
    price: '₹24,999'
  },
  {
    name: 'Hampi Ruins',
    image: 'https://images.unsplash.com/photo-1628097220587-3c5cd3b15bfe?w=800&q=80',
    description: 'Ancient ruins of Vijayanagara Empire',
    rating: 4.8,
    price: '₹27,999'
  }
];

export default function InspirationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-white">Discover India</h1>
      <p className="text-xl text-white/80 mb-12">
        Explore the diverse beauty and rich cultural heritage of Incredible India
      </p>

      {/* Categories */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-6 h-6 text-white" />
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    </div>
                    <p className="text-white/80">{category.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Featured Destinations */}
      <h2 className="text-3xl font-bold mb-8 text-white">Featured Indian Destinations</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {destinations.map((destination) => (
          <div key={destination.name} className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10">
            <div className="relative overflow-hidden">
              <img 
                src={destination.image}
                alt={destination.name}
                className="w-full h-64 object-cover"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                <Heart className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white">{destination.rating}</span>
                </div>
              </div>
              <p className="text-white/80 mb-2">{destination.description}</p>
              <p className="text-lg font-semibold text-primary-400 mb-4">From {destination.price}</p>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-accent-700 transition-colors">
                Explore More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Travel Tips */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-8 h-8 text-primary-500" />
          <h2 className="text-3xl font-bold text-white">India Travel Tips</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Best Time to Visit</h3>
            <p className="text-white/80">October to March is ideal for most regions with pleasant weather</p>
          </div>
          <div className="p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Cultural Etiquette</h3>
            <p className="text-white/80">Respect local customs, dress modestly, and remove shoes at temples</p>
          </div>
          <div className="p-6 bg-white/5 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Travel Documents</h3>
            <p className="text-white/80">E-visa required for most international visitors</p>
          </div>
        </div>
      </div>
    </div>
  );
}