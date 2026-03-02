import React from 'react';
import missionImg from '../assets/images/pet-sitter-mission.jpg';
import johnImg from '../assets/images/john_doe.jpg';
import janeImg from '../assets/images/jane_smith.jpg';
import alexImg from '../assets/images/alex.jpg';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & Lead Pet Sitter',
    bio: 'John has over 10 years of experience in pet sitting and is passionate about providing the best care for your furry friends.',
    img: johnImg,
  },
  {
    name: 'Jane Smith',
    role: 'Co-Founder & House Sitting Specialist',
    bio: 'Jane ensures your home is safe and secure while you’re away. She has a keen eye for detail and a strong background in property management.',
    img: janeImg,
  },
  {
    name: 'Alex Johnson',
    role: 'Pet Nutrition Expert',
    bio: 'Alex is a certified pet nutritionist with a wealth of knowledge in creating balanced diets for pets to ensure they live a healthy and happy life.',
    img: alexImg,
  },
];

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">About Us</h1> */}
      
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Story</h2>
        <p className="text-lg text-gray-600">
          We founded our pet and house sitting service out of a profound love for animals and a commitment to providing peace of mind to pet owners and homeowners alike. Our team of dedicated professionals is here to ensure your pets are well cared for and your home remains secure while you're away.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 text-center">Mission and Values</h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 mb-6 lg:mb-0 lg:mr-6">
            <img src={missionImg} alt="Mission" className="w-full rounded-lg shadow-lg"/>
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-600">
              Our mission is to deliver exceptional care for pets and homes, ensuring owners have peace of mind during their absence. We value trust, reliability, and compassion, and strive to treat every pet and home with the utmost respect and care.
            </p>
          </div>
        </div>
      </section>
      

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <img
                src={member.img}
                alt={`${member.name}`}
                className="w-44 h-44 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-2 text-gray-900">{member.name}</h3>
              <p className="text-center text-gray-700 mb-2">{member.role}</p>
              <p className="text-gray-600 text-center">{member.bio}</p>
              <div className="text-center mt-4">
                <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@petsitters.com`} className="text-blue-500 hover:underline">Contact {member.name}</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
