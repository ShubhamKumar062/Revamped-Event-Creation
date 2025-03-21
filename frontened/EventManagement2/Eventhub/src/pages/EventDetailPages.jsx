import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, Share2 } from 'lucide-react';

const EventDetailsPage = () => {
  const { id } = useParams();

  // Mock event data
  const event = {
    id,
    title: 'Tech Conference 2025',
    description: 'Join us for an amazing tech conference featuring industry leaders and innovative discussions about the future of technology.',
    date: '2025-04-15',
    time: '09:00 AM',
    location: 'Tech Hub, New York, NY',
    category: 'Tech',
    attendees: 156,
    maxAttendees: 200,
    organizer: 'TechConF.',
    image: `https://source.unsplash.com/random/1200x600?technology&sig=${id}`
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4">
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
            <Share2 className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
            <span className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              {event.category}
            </span>
          </div>
          <p className="text-gray-600 text-lg">{event.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="text-gray-900 font-medium">{event.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p className="text-gray-900 font-medium">{event.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-900 font-medium">{event.location}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="text-sm text-gray-500">Attendees</p>
                <p className="text-gray-900 font-medium">{event.attendees} / {event.maxAttendees}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="text-sm text-gray-500">Organizer</p>
                <p className="text-gray-900 font-medium">{event.organizer}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
            RSVP to Event
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Schedule</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="w-24 text-right text-sm text-gray-500">9:00 AM</div>
            <div>
              <h3 className="font-medium text-gray-900">Registration & Breakfast</h3>
              <p className="text-gray-600">Check-in and enjoy complimentary breakfast</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-24 text-right text-sm text-gray-500">10:00 AM</div>
            <div>
              <h3 className="font-medium text-gray-900">Keynote Speaker</h3>
              <p className="text-gray-600">Opening remarks and main presentation</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-24 text-right text-sm text-gray-500">12:00 PM</div>
            <div>
              <h3 className="font-medium text-gray-900">Networking Lunch</h3>
              <p className="text-gray-600">Connect with other attendees over lunch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
