import React from 'react';
import { Users, MessageSquare, ThumbsUp, Calendar } from 'lucide-react';

export default function CollaborationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">Collaborate with Friends</h1>
        <p className="text-xl text-white/80 mb-12">
          Plan your perfect trip together. Share ideas, vote on activities, and keep everyone in sync.
        </p>

        <div className="grid gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold mb-4 text-white">Active Trip Plans</h2>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Summer in Paris</h3>
                    <p className="text-white/60">4 friends collaborating</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  Join Discussion
                </button>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Tokyo Adventure</h3>
                    <p className="text-white/60">6 friends collaborating</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  Join Discussion
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold mb-4 text-white">Collaboration Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-white/5 rounded-lg">
                <MessageSquare className="w-8 h-8 text-primary-500 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Group Chat</h3>
                <p className="text-white/60">Real-time discussions about trip plans and ideas</p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <ThumbsUp className="w-8 h-8 text-primary-500 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Voting System</h3>
                <p className="text-white/60">Democratic decision-making for activities and plans</p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <Calendar className="w-8 h-8 text-primary-500 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Shared Calendar</h3>
                <p className="text-white/60">Coordinate dates and schedules together</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold mb-4 text-white">Start a New Collaboration</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Trip Name"
                className="w-full px-4 py-2 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-accent-700 transition-colors">
                Create New Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}