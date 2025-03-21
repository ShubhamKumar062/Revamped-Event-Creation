import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Star, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-indigo-600" />, 
      title: 'Easy Event Creation',
      description: 'Create and customize events in minutes with our intuitive interface.'
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />, 
      title: 'RSVP Management',
      description: 'Track attendees and manage responses with real-time updates.'
    },
    {
      icon: <Star className="h-8 w-8 text-indigo-600" />, 
      title: 'Smart Recommendations',
      description: 'Get personalized event suggestions based on your interests.'
    }
  ];

  const featuredEvents = [
    {
      id: 1,
      title: 'Summer Music Festival',
      description: 'Experience the best of indie music under the stars.',
      image: 'https://source.unsplash.com/random/800x600?music+festival'
    },
    {
      id: 2,
      title: 'Tech Innovation Summit',
      description: 'Join industry leaders in exploring cutting-edge technologies.',
      image: 'https://source.unsplash.com/random/800x600?technology+conference'
    },
    {
      id: 3,
      title: 'Food & Wine Expo',
      description: 'Savor exquisite cuisines and premium wines from around the world.',
      image: 'https://source.unsplash.com/random/800x600?food+wine'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative text-center py-20 px-4 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://source.unsplash.com/random/1920x1080?event+venue"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Create Memorable Events
            <span className="block text-indigo-400">Connect with People</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            The perfect platform for creating, managing, and discovering events that bring people together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/events/create"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              Create Event <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/events"
              className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Browse Events
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Featured Events Preview */}
      <section className="space-y-8 px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
          <Link to="/events" className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2">
            View all <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Link to={`/events/${event.id}`} className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2 group">
                  Learn more 
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Host Your Event?</h2>
        <p className="text-lg text-indigo-100 mb-8">Join thousands of successful event organizers on our platform.</p>
        <Link to="/events/create" className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
          Get Started Now
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
