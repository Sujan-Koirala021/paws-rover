import React from 'react';
import { useLocation } from 'react-router-dom';
// import { FaMapMarkerAlt, FaStar, FaUser } from 'react-icons/fa';
import { FaMapMarkerAlt, FaStar, FaUser, FaPhone } from 'react-icons/fa';

import avatar from '../assets/images/avatar.png'
const PetSearchResults = () => {
  const location = useLocation();
  const { state } = location;
  const { location: userLocation, selectedPets } = state || {};

  const personnel = [
    { id: 1, name: 'John Doe', description: 'Experienced pet sitter for cats and dogs', pets: ['Cat', 'Dog'], rating: 4.9, location: 'New York' },
    { id: 2, name: 'Jane Smith', description: 'Loves taking care of birds and rabbits', pets: ['Bird', 'Rabbit'], rating: 4.7, location: 'Los Angeles' },
    { id: 3, name: 'Alex Johnson', description: 'Professional sitter for exotic pets', pets: ['Snake', 'Fish'], rating: 4.8, location: 'Chicago' },
    { id: 4, name: 'Emily Davis', description: 'Passionate about small mammals', pets: ['Hamster', 'Guinea Pig'], rating: 4.6, location: 'Houston' },
    { id: 5, name: 'Michael Brown', description: 'Experienced with farm animals', pets: ['Horse', 'Goat'], rating: 4.8, location: 'Phoenix' },
    { id: 6, name: 'Sarah Wilson', description: 'Great with reptiles and amphibians', pets: ['Turtle', 'Lizard'], rating: 4.9, location: 'Philadelphia' },
    { id: 7, name: 'Chris Lee', description: 'Birds and small animals enthusiast', pets: ['Bird', 'Hamster'], rating: 4.7, location: 'San Antonio' },
    { id: 8, name: 'Jessica Martinez', description: 'Cat lover and experienced sitter', pets: ['Cat'], rating: 4.8, location: 'San Diego' },
    { id: 9, name: 'David Anderson', description: 'Dog trainer and sitter', pets: ['Dog'], rating: 4.9, location: 'Dallas' },
    { id: 10, name: 'Laura Thomas', description: 'Specializes in aquatic pets', pets: ['Fish'], rating: 4.6, location: 'San Jose' },
    { id: 11, name: 'James Garcia', description: 'Experienced with exotic pets', pets: ['Snake', 'Lizard'], rating: 4.8, location: 'Austin' },
    { id: 12, name: 'Karen Rodriguez', description: 'Caring for small and furry pets', pets: ['Rabbit', 'Guinea Pig'], rating: 4.7, location: 'Jacksonville' },
    { id: 13, name: 'Matthew Clark', description: 'Dogs and birds expert', pets: ['Dog', 'Bird'], rating: 4.8, location: 'Fort Worth' },
    { id: 14, name: 'Linda Lewis', description: 'Cats and reptiles sitter', pets: ['Cat', 'Snake'], rating: 4.9, location: 'Columbus' },
    { id: 15, name: 'Robert Walker', description: 'Passionate about amphibians', pets: ['Turtle', 'Frog'], rating: 4.6, location: 'San Francisco' },
    { id: 16, name: 'Susan Hall', description: 'Experienced with farm animals', pets: ['Horse', 'Goat'], rating: 4.8, location: 'Charlotte' },
    { id: 17, name: 'Paul Allen', description: 'Bird watcher and sitter', pets: ['Bird'], rating: 4.7, location: 'Indianapolis' },
    { id: 18, name: 'Lisa Young', description: 'Dog and cat care expert', pets: ['Dog', 'Cat'], rating: 4.9, location: 'Seattle' },
    { id: 19, name: 'Mark Hernandez', description: 'Specializes in exotic animals', pets: ['Snake', 'Lizard'], rating: 4.8, location: 'Denver' },
    { id: 20, name: 'Patricia King', description: 'Small mammals and birds', pets: ['Hamster', 'Bird'], rating: 4.7, location: 'Washington' },
    { id: 21, name: 'Charles Wright', description: 'Experienced with cats and fish', pets: ['Cat', 'Fish'], rating: 4.8, location: 'Boston' },
    { id: 22, name: 'Barbara Lopez', description: 'Dog lover and experienced sitter', pets: ['Dog'], rating: 4.9, location: 'El Paso' },
    { id: 23, name: 'Daniel Hill', description: 'Reptile and amphibian care', pets: ['Snake', 'Turtle'], rating: 4.6, location: 'Detroit' },
    { id: 24, name: 'Nancy Scott', description: 'Loves taking care of rabbits', pets: ['Rabbit'], rating: 4.8, location: 'Nashville' },
    { id: 25, name: 'Steven Green', description: 'Expert in exotic pets', pets: ['Lizard', 'Snake'], rating: 4.7, location: 'Portland' },
    { id: 26, name: 'Betty Adams', description: 'Dog and bird care enthusiast', pets: ['Dog', 'Bird'], rating: 4.9, location: 'Memphis' },
    { id: 27, name: 'Brian Baker', description: 'Experienced with aquatic pets', pets: ['Fish'], rating: 4.6, location: 'Oklahoma City' },
    { id: 28, name: 'Dorothy Gonzalez', description: 'Cat and small mammals lover', pets: ['Cat', 'Hamster'], rating: 4.8, location: 'Las Vegas' },
    { id: 29, name: 'Kenneth Nelson', description: 'Specializes in reptiles', pets: ['Snake', 'Lizard'], rating: 4.7, location: 'Louisville' },
    { id: 30, name: 'Sandra Carter', description: 'Experienced with farm animals', pets: ['Horse', 'Goat'], rating: 4.9, location: 'Baltimore' },
    ];
  // Filter personnel based on selected pets and user location
  const filteredPersonnel = personnel.filter(person =>
    person.pets.some(pet => selectedPets.includes(pet)) || (person.location != null && person.location === userLocation)
  );

  // Additional personnel available for other pets
  const additionalPersonnel = personnel.filter(person =>
     !filteredPersonnel.includes(person)
  );

 
  return (
    <div className="p-6 m-6">
      <h1 className="text-4xl font-bold mb-4 flex justify-center mt-4">Search Results</h1>
      {filteredPersonnel.length > 0 ? (
        <p className="mb-2 flex justify-center">
          {filteredPersonnel.length} search results found in  {' '} 
          <strong className='px-2'>{userLocation}</strong> for the following pets:
        </p>
      ) : (
        <p className="mb-2 flex justify-center">
          No search results found in <strong>{userLocation}</strong> for the
          selected pets.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPersonnel.map((person) => (
          <div
            key={person.id}
            className="bg-white m-5 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="px-4 py-2 bg-gray-200 border-b border-gray-300 flex items-center">
              <img
                src={avatar}
                alt={person.name}
                className="w-12 h-12 rounded-full mr-2"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {person.name}
              </h2>
            </div>
            <div className="p-4">
              <p className="text-gray-800">{person.description}</p>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-500" />
                <span className="text-gray-700 ml-1">{person.rating}</span>
              </div>
              <div className="flex items-center mt-2">
                <FaMapMarkerAlt className="text-gray-500" />
                <span className="text-gray-700 ml-1">
                  {person.location}
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

      {additionalPersonnel.length > 0 && (
        <>
<p className="mt-6 mb-8 text-2xl font-bold flex items-center justify-center">
  Explore more pet sitters :
</p>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalPersonnel.map((person) => (
              <div
                key={person.id}
                className="bg-white m-5 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="px-4 py-2 bg-gray-200 border-b border-gray-300 flex items-center">
                  <img
                    src={avatar}
                    alt={person.name}
                    className="w-12 h-12 rounded-full mr-2"
                  />
                  <h2 className="text-xl font-semibold text-gray-800">
                    {person.name}
                  </h2>
                </div>
                <div className="p-4">
                  <p className="text-gray-800">{person.description}</p>
                  <div className="flex items-center mt-2">
                    <FaStar className="text-yellow-500" />
                    <span className="text-gray-700 ml-1">{person.rating}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <FaMapMarkerAlt className="text-gray-500" />
                    <span className="text-gray-700 ml-1">
                      {person.location}
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
        </>
      )}
    </div>
  );
};

export default PetSearchResults;