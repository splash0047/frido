import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Cache for storing previous suggestions
const suggestionCache = new Map();

export async function getTripSuggestions(preferences: string) {
  try {
    // Check cache first
    const cacheKey = JSON.stringify(preferences);
    if (suggestionCache.has(cacheKey)) {
      return suggestionCache.get(cacheKey);
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `As a travel expert, create a detailed travel itinerary for the following preferences: ${preferences}

Please format the response in the following sections:

1. Overview
- Brief description of the destination
- Best time to visit
- Weather during selected dates

2. Accommodations
- 3 hotel recommendations with price ranges
- Location highlights
- Amenities

3. Activities & Attractions
- Day-by-day itinerary suggestions
- Must-see attractions
- Estimated costs for activities
- Local transportation options

4. Dining
- Restaurant recommendations for different meals
- Local cuisine highlights
- Estimated dining costs

5. Budget Breakdown
- Accommodation costs
- Activities and attractions
- Food and dining
- Transportation
- Estimated total cost per person

Please provide specific details, prices, and practical tips within the specified budget range.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    // Cache the result
    suggestionCache.set(cacheKey, response.text());
    
    return response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw new Error('Failed to get travel suggestions. Please try again.');
  }
}

// Predefined list of Indian destinations for quick suggestions
export const indianDestinations = [
  {
    name: 'Agra',
    state: 'Uttar Pradesh',
    description: 'Home of the Taj Mahal',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80'
  },
  {
    name: 'Jaipur',
    state: 'Rajasthan',
    description: 'The Pink City',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80'
  },
  {
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    description: 'The Spiritual Capital',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80'
  },
  {
    name: 'Kerala',
    state: 'Kerala',
    description: 'Gods Own Country',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&q=80'
  },
  {
    name: 'Goa',
    state: 'Goa',
    description: 'Beach Paradise',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80'
  },
  {
    name: 'Udaipur',
    state: 'Rajasthan',
    description: 'City of Lakes',
    image: 'https://images.unsplash.com/photo-1585136917972-7697e9b19d89?w=800&q=80'
  },
  {
    name: 'Manali',
    state: 'Himachal Pradesh',
    description: 'Himalayan Resort Town',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80'
  },
  {
    name: 'Darjeeling',
    state: 'West Bengal',
    description: 'Queen of Hills',
    image: 'https://images.unsplash.com/photo-1544634076-a90160ddf434?w=800&q=80'
  },
  {
    name: 'Amritsar',
    state: 'Punjab',
    description: 'Golden Temple City',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&q=80'
  },
  {
    name: 'Mysore',
    state: 'Karnataka',
    description: 'City of Palaces',
    image: 'https://images.unsplash.com/photo-1628097220587-3c5cd3b15bfe?w=800&q=80'
  }
];

// Function to get destination suggestions based on search term
export function getDestinationSuggestions(searchTerm: string) {
  const term = searchTerm.toLowerCase().trim();
  if (!term) return [];
  
  return indianDestinations.filter(dest => 
    dest.name.toLowerCase().includes(term) ||
    dest.state.toLowerCase().includes(term) ||
    dest.description.toLowerCase().includes(term)
  ).slice(0, 5); // Limit to 5 suggestions for better performance
}