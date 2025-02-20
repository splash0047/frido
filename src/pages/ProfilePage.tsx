import React from 'react';
import { Mail, Phone, MapPin, Globe, Camera, LogOut } from 'lucide-react';

export default function ProfilePage() {
  const user = {
    name: 'Pinak Chimurkar',
    email: 'pinakchimurkar@gmail.com',
    phone: '+91 7397921974',
    location: 'Pune,India',
    avatar: 'data:image/jpeg;base64,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',
    bio: 'Adventure seeker and photography enthusiast. Love exploring new cultures and creating memories around the world.',
    travelPreferences: ['Beach', 'Cultural', 'Food & Wine', 'Adventure'],
    stats: {
      tripsPlanned: 12,
      countriesVisited: 8,
      tripPhotos: 243,
      reviews: 15
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 bg-blue-600">
            <button className="absolute top-4 right-4 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg flex items-center gap-2 hover:bg-white/20 transition-colors">
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
          
          <div className="relative px-6 pb-6">
            <div className="flex flex-col md:flex-row gap-6 -mt-16">
              <div className="flex-shrink-0">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{user.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{user.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {user.travelPreferences.map((pref) => (
                    <span
                      key={pref}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {pref}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">{user.stats.tripsPlanned}</div>
                <div className="text-sm text-gray-600">Trips Planned</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">{user.stats.countriesVisited}</div>
                <div className="text-sm text-gray-600">Countries Visited</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">{user.stats.tripPhotos}</div>
                <div className="text-sm text-gray-600">Trip Photos</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">{user.stats.reviews}</div>
                <div className="text-sm text-gray-600">Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}