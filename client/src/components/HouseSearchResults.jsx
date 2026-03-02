import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaMapMarkerAlt, FaStar, FaUser, FaPhone } from 'react-icons/fa';

import avatar from '../assets/images/avatar.png';
import houseAvatar from '../assets/images/houseAvatar.png';


const HouseSearchResults = () => {
  const location = useLocation();
  const { state } = location;
  const { location: userLocation, duration } = state || {};

  const houseSits = [
    { id: 1, name: 'Cozy Apartment in Downtown', description: 'Lovely apartment with city view', duration: '1 week', rating: 4.9, location: 'New York' },
    { id: 2, name: 'Peaceful Villa with Garden', description: 'Spacious villa with beautiful garden', duration: '2 months', rating: 4.7, location: 'Los Angeles' },
    { id: 3, name: 'Country House Retreat', description: 'Tranquil retreat in the countryside', duration: '3 days', rating: 4.8, location: 'Chicago' },
    { id: 4, name: 'Modern Loft near the Beach', description: 'Stylish loft just steps away from the beach', duration: '1 month', rating: 4.6, location: 'Miami' },
    { id: 5, name: 'Mountain Cabin Getaway', description: 'Cozy cabin nestled in the mountains', duration: '2 weeks', rating: 4.8, location: 'Denver' },
    { id: 6, name: 'Lakefront Cottage Escape', description: 'Charming cottage with lakefront views', duration: '1 week', rating: 4.9, location: 'New York' },
    { id: 7, name: 'Rural Farmhouse Retreat', description: 'Authentic farmhouse experience in the countryside', duration: '3 days', rating: 4.7, location: 'Nashville' },
    { id: 8, name: 'Luxury Penthouse in the Sky', description: 'Elegant penthouse with panoramic city views', duration: '2 months', rating: 4.8, location: 'San Francisco' },
    { id: 9, name: 'Historic Townhouse in the Heart of the City', description: 'Quaint townhouse with historic charm', duration: '1 month', rating: 4.9, location: 'Boston' },
    { id: 10, name: 'Serenity Cottage by the River', description: 'Tranquil cottage overlooking the river', duration: '2 weeks', rating: 4.6, location: 'Portland' },
  ];

  // Filter house sits based on user location and duration
  const filteredHouseSits = houseSits.filter(sit =>
    sit.location === userLocation && sit.duration === duration
  );

  return (
    <div className="p-6 m-6">
      <h1 className="text-4xl font-bold mb-4 flex justify-center mt-4">Search Results</h1>
      {filteredHouseSits.length > 0 ? (
        <p className="mb-2 flex justify-center">
          {filteredHouseSits.length} search results found in {' '}
          <strong className='px-2'>{userLocation}</strong> for <strong className='px-2'>{duration}</strong>.
        </p>
      ) : (
        <p className="mb-2 flex justify-center">
          No search results found in <strong className='px-2'>{userLocation}</strong> for <strong className='px-2'>{duration}</strong>.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredHouseSits.map((houseSit) => (
          <div
            key={houseSit.id}
            className="bg-white m-5 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="px-4 py-2 bg-gray-200 border-b border-gray-300 flex items-center">
              <img
                src={houseAvatar}
                alt={houseSit.name}
                className="w-12 h-12 rounded-full mr-2"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {houseSit.name}
              </h2>
            </div>
            <div className="p-4">
              <p className="text-gray-800">{houseSit.description}</p>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-500" />
                <span className="text-gray-700 ml-1">{houseSit.rating}</span>
              </div>
              <div className="flex items-center mt-2">
                <FaMapMarkerAlt className="text-gray-500" />
                <span className="text-gray-700 ml-1">
                  {houseSit.location}
                </span>
              </div>
              <div className="flex items-center mt-2">
                <FaUser className="text-gray-500" />
                <span className="text-gray-700 ml-1">
                  Duration: {houseSit.duration}
                </span>
              </div>
              <div className="flex items-center mt-4">
                <FaPhone className="text-gray-500" />
                <button className="text-purple-500 ml-2 font-semibold hover:underline">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseSearchResults;
