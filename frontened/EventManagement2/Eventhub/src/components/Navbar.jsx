import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, PlusCircle, LogIn } from 'lucide-react';

const JNavbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Calendar className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">EventHub</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/events"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/events')
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Calendar className="h-5 w-5" />
              <span>Events</span>
            </Link>

            <Link
              to="/events/create"
              className="flex items-center space-x-2 px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <PlusCircle className="h-5 w-5" />
              <span>Create Event</span>
            </Link>

            <Link
              to="/auth"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogIn className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default JNavbar;
