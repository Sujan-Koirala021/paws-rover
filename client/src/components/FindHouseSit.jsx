import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiTick } from "react-icons/ti";

export default function FindHouseSit() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Redirect to search results page with state
      navigate('/house-search-results', { state: { location, duration } });
    }
  };

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
            <h1 className="text-4xl font-bold mb-10">Let’s find your perfect house sit</h1>
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
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="text-4xl font-bold mb-4">For how long do you need a house sit?</h1>
            <input
              type="text"
              placeholder="Duration (e.g., 1 week, 2 months)"
              className="w-full p-2 border rounded mb-4 mt-4"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <button
              onClick={handleNext}
              className="w-full py-2 px-4 bg-green-600 text-white rounded"
            >
              Next
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h1 className="text-4xl font-bold mb-4">Yosh! All good..</h1>
            <p>Your search criteria has been received. Let's find the perfect house sit for you!</p>
            <button
              onClick={handleNext}
              className="w-full py-2 px-4 bg-green-600 text-white rounded mt-4"
            >
              Start Searching
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
