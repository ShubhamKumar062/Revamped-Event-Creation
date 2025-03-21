import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'All', 'Music', 'Tech', 'Sports', 'Arts', 'Food'
  ];

  // Mock events data
  const events = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Event ${i + 1}`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    date: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    location: 'New York, NY',
    attendees: Math.floor(Math.random() * 100) + 20,
  }));

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory.toLowerCase() === 'all' || event.category.toLowerCase() === selectedCategory.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Search and Filter Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search events..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                selectedCategory.toLowerCase() === category.toLowerCase()
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category.toLowerCase())}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <Link
            key={event.id}
            to={`/events/${event.id}`}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
          >
            <img
              src={`https://source.unsplash.com/random/800x600?${event.category}&sig=${event.id}`}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                  {event.category}
                </span>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{event.attendees} attending</span>
                </div>
              </div>
              <div className="flex justify-end">
                <span className="text-indigo-600 flex items-center gap-1">
                  View details <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
