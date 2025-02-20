import React from 'react';
import { Calendar, MapPin, Users, DollarSign, Trash2, Share2, Edit } from 'lucide-react';

const trips = [
  {
    id: 1,
    destination: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80',
    date: '2024-06-15',
    travelers: '2 Travelers',
    budget: 'Moderate',
    status: 'Upcoming'
  },
  {
    id: 2,
    destination: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80',
    date: '2024-08-20',
    travelers: '3 Travelers',
    budget: 'Luxury',
    status: 'Planning'
  }
];

export default function MyTripsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">My Trips</h1>
        <div className="flex gap-4">
          <select className="px-4 py-2 border rounded-lg">
            <option>All Trips</option>
            <option>Upcoming</option>
            <option>Past</option>
            <option>Planning</option>
          </select>
        </div>
      </div>

      <div className="grid gap-8">
        {trips.map((trip) => (
          <div key={trip.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-3">
              <div
                className="h-48 md:h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${trip.image})` }}
              />
              <div className="p-6 md:col-span-2">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{trip.destination}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      trip.status === 'Upcoming' ? 'bg-green-100 text-green-800' :
                      trip.status === 'Planning' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {trip.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Edit className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span>{trip.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span>{trip.travelers}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-gray-400" />
                    <span>{trip.budget}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span>View Map</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}