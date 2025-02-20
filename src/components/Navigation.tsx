import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-2 rounded-xl">
              <Plane className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 text-transparent bg-clip-text">Frido</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/explore" className="text-white/90 hover:text-white transition-colors">Explore</Link>
            <Link to="/trips" className="text-white/90 hover:text-white transition-colors">My Trips</Link>
            <Link to="/profile" className="text-white/90 hover:text-white transition-colors">Profile</Link>
            <Link 
              to="/signin"
              className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors border border-white/20"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link 
                to="/explore" 
                className="text-white/90 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Link>
              <Link 
                to="/trips" 
                className="text-white/90 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                My Trips
              </Link>
              <Link 
                to="/profile" 
                className="text-white/90 hover:text-white transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
              <Link 
                to="/signin"
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors border border-white/20 mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}