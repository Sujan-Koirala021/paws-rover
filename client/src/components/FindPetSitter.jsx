import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiTick } from "react-icons/ti";

export default function FindPetSitter() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState('');
  const [selectedPets, setSelectedPets] = useState([]);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Redirect to search results page with state
      navigate('/pet-sitter-search-results', { state: { location, selectedPets } });
    }
  };

  const toggleSelection = (pet) => {
    if (selectedPets.includes(pet)) {
      setSelectedPets(selectedPets.filter(item => item !== pet));
    } else {
      setSelectedPets([...selectedPets, pet]);
    }
  };

  const petCards = [
    { id: 1, name: 'Cat', icon: '🐱' },
    { id: 2, name: 'Dog', icon: '🐶' },
    { id: 3, name: 'Horse', icon: '🐴' },
    { id: 4, name: 'Bird', icon: '🐦' },
    { id: 5, name: 'Rabbit', icon: '🐰' },
    { id: 6, name: 'Fish', icon: '🐠' },
    { id: 7, name: 'Turtle', icon: '🐢' },
    { id: 8, name: 'Hamster', icon: '🐹' },
    { id: 9, name: 'Snake', icon: '🐍' },
    { id: 10, name: 'Guinea Pig', icon: '🐹' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-4">
        <div className="flex justify-between items-center mb-20">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-green-500' : 'bg-gray-300'}`}> {step > 1 ? <TiTick size={24} /> : '1'}</div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}>{step > 2 ? <TiTick size={24} /> : '2'}</div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}>{step > 3 ? <TiTick size={24} /> : '3'}</div>
        </div>

        {step === 1 && (
          <div>
            <h1 className="text-4xl font-bold mb-10">Let’s find your perfect pet sitter</h1>
            <label htmlFor="location" className="mt-8">Your Location</label>
            <input
              type="text"
              placeholder="Continent, country, town or city"
              className="w-full p-2 border rounded mb-4 mt-4"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button
              onClick={handleNext}
              className="w-full py-2 px-4 bg-green-600 text-white rounded"
            >
              Next
            </button>
            <button
              onClick={handleNext}
              className="w-full py-2 px-4 mt-2 text-purple-600"
            >
              Skip
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="text-4xl font-bold mb-4">Let's hear about the mischief-makers under your roof...</h1>
            <p>Verified and reviewed sitters near you are waiting to apply!</p>
            <div className='pt-6'>Pets that need care:</div>
            <div className="flex flex-wrap justify-center items-center">
              {petCards.map((pet) => (
                <div key={pet.id} className={`pet-card ${selectedPets.includes(pet.name) ? 'bg-green-200' : 'bg-white'} p-4 rounded-full m-2 flex items-center justify-center cursor-pointer`} onClick={() => toggleSelection(pet.name)}>
                  <span className="mr-2">{pet.icon}</span>
                  <span>{pet.name}</span>
                  {selectedPets.includes(pet.name) && <span className="tick">✔</span>}
                </div>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-full py-2 px-4 bg-green-600 text-white rounded mt-4"
            >
              Next
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h1 className="text-4xl font-bold mb-4">Yosh! All good..</h1>
            <p>Get ready to explore! Your information has been received. Let's discover new possibilities together.</p>
            <button
              onClick={handleNext}
              className="w-full py-2 px-4 bg-green-600 text-white rounded mt-4"
            >
              Start Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
