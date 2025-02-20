import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Users, Calendar, DollarSign, Linkedin, Github, Instagram } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ResultsPage from './pages/ResultsPage';
import ExplorePage from './pages/ExplorePage';
import MyTripsPage from './pages/MyTripsPage';
import ProfilePage from './pages/ProfilePage';
import SignInPage from './pages/SignInPage';
import CollaborationPage from './pages/CollaborationPage';
import SmartPlanningPage from './pages/SmartPlanningPage';
import BudgetTrackingPage from './pages/BudgetTrackingPage';
import InspirationPage from './pages/InspirationPage';
import sandhayaImage from '../assets/team/sandhaya.jpg';

// Helper function to convert Google Drive link to direct image URL
const getDriveImageUrl = (driveId: string) => {
  return `https://drive.google.com/uc?export=view&id=${driveId}`;
};

// Add an ImageWithFallback component
const ImageWithFallback = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  const fallbackImage = "https://ui-avatars.com/api/?name=" + alt.replace(" ", "+");

  return (
    <img
      src={error ? fallbackImage : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

// Add this team data
const teamMembers = [
  {
    name: "Pinak Chimurkar",
    role: "Team Lead & Full Stack Developer",
    image: "public/team/pinak.jpg",
    linkedin: "https://www.linkedin.com/in/pinak-chimurkar-5414a4279/",
    github: "https://github.com/your-github",
    instagram: "https://instagram.com/your-instagram"
  },
  {
    name: "Akshat",
    role: "Assistant Project Manager",
    image: getDriveImageUrl("YOUR_DRIVE_ID"),
    linkedin: "https://www.linkedin.com/in/akshat-kulkarni-8321572a4/",
    github: "https://github.com/akshat",
    instagram: "https://instagram.com/akshat"
  },
  {
    name: "Sandhya",
    role: "HTML & CSS Developer",
    image: "public/team/sandhaya.jpg",
    linkedin: "https://www.linkedin.com/in/sandhya-borade-203a372a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/sandhaya",
    instagram: "https://instagram.com/sandhaya"
  },
  {
    name: "Vedant",
    role: "PROJECT MANAGER",
    image: "public/team/vedant.jpg",
    linkedin: "https://www.linkedin.com/in/vedant-ahire-7a7117327/",
    github: "https://github.com/vedant",
    instagram: "https://instagram.com/vedant"
  }
];

function HomePage() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-600 to-accent-600 text-transparent bg-clip-text">
          Discover Incredible India
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="group relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80" 
              alt="Taj Mahal"
              className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Agra, Uttar Pradesh</h3>
                <p className="text-white/80">From ₹25,999 per person</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&q=80" 
              alt="Kerala Backwaters"
              className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Kerala Backwaters</h3>
                <p className="text-white/80">From ₹32,999 per person</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80" 
              alt="Rajasthan"
              className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Jaipur, Rajasthan</h3>
                <p className="text-white/80">From ₹28,999 per person</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="group hover:transform hover:scale-105 transition-all duration-300">
            <a href="/collaborate" className="block">
              <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Plan Together</h3>
                <p className="text-white/80">Plan your Indian adventure with friends and family in real-time.</p>
              </div>
            </a>
          </div>
          
          <div className="group hover:transform hover:scale-105 transition-all duration-300">
            <a href="/smart-planning" className="block">
              <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Smart Planning</h3>
                <p className="text-white/80">Get AI-powered suggestions for your perfect Indian itinerary.</p>
              </div>
            </a>
          </div>
          
          <div className="group hover:transform hover:scale-105 transition-all duration-300">
            <a href="/budget-tracking" className="block">
              <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Budget Tracking</h3>
                <p className="text-white/80">Track expenses in rupees and split costs easily.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/trips" element={<MyTripsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/collaborate" element={<CollaborationPage />} />
          <Route path="/smart-planning" element={<SmartPlanningPage />} />
          <Route path="/budget-tracking" element={<BudgetTrackingPage />} />
          <Route path="/inspiration" element={<InspirationPage />} />
        </Routes>
        
        {/* Team Section */}
        <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 mt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Amazing Team</h2>
              <p className="text-white/60">The talented minds behind Frido's success</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative group">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-primary-500 group-hover:border-accent-500 transition-colors"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-white/60 mb-4">{member.role}</p>
                    
                    <div className="flex gap-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-[#0077b5] transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-[#333] transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-[#E4405F] transition-colors"
                        title="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-white/40 text-sm">© 2024 Frido. All rights reserved.</p>
              <p className="text-white/40 text-sm mt-2">Made with ❤️ by Team Frido</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;