import React from 'react';
import { Brain, Map, Clock, Star } from 'lucide-react';

export default function SmartPlanningPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">Smart Planning</h1>
        <p className="text-xl text-white/80 mb-12">
          Let our AI help you create the perfect itinerary based on your preferences and travel style.
        </p>

        <div className="grid gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-white">Your Travel Style</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">Preferred Pace</label>
                <select className="w-full px-4 py-2 bg-white/90 rounded-lg">
                  <option>Relaxed</option>
                  <option>Moderate</option>
                  <option>Fast-paced</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white mb-2">Interest Focus</label>
                <select className="w-full px-4 py-2 bg-white/90 rounded-lg">
                  <option>Culture & History</option>
                  <option>Food & Dining</option>
                  <option>Nature & Adventure</option>
                  <option>Shopping & Entertainment</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-white">AI Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-lg">
                <Brain className="w-8 h-8 text-primary-500 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Personalized Recommendations</h3>
                <p className="text-white/60">Get suggestions tailored to your interests and preferences</p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <Map className="w-8 h-8 text-primary-500 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Optimal Routes</h3>
                <p className="text-white/60">Efficiently organized daily itineraries</p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <Clock className="w-8 h-8 text-primary-500 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Time Management</h3>
                <p className="text-white/60">Balanced schedules with proper time allocation</p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <Star className="w-8 h-8 text-primary-500 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Hidden Gems</h3>
                <p className="text-white/60">Discover unique local experiences</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold mb-4 text-white">Generate New Plan</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full px-4 py-2 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full px-4 py-2 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <select className="w-full px-4 py-2 bg-white/90 rounded-lg">
                  <option>2 Travelers</option>
                  <option>3 Travelers</option>
                  <option>4 Travelers</option>
                  <option>5+ Travelers</option>
                </select>
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-accent-700 transition-colors">
                Generate Smart Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}