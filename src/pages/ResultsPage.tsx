import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, DollarSign } from 'lucide-react';

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
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Search
      </button>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div 
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: `url('${destinationImage}')` }}
            />
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">{searchParams.destination}</h2>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{searchParams.date || 'Flexible Dates'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{searchParams.travelers}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{getBudgetLabel(searchParams.budget)}</span>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                {suggestions.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  )
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => {/* TODO: Implement save trip functionality */}}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Trip
                </button>
                <button
                  onClick={() => {/* TODO: Implement share functionality */}}
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Share with Friends
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
            <h3 className="text-xl font-bold mb-4">Trip Summary</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700">Destination</h4>
                <p>{searchParams.destination}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">When</h4>
                <p>{searchParams.date || 'Flexible Dates'}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Group Size</h4>
                <p>{searchParams.travelers}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Budget Level</h4>
                <p>{getBudgetLabel(searchParams.budget)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}