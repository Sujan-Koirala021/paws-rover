import React from 'react';
import pet1Img from '../assets/images/how-it-works/img1.jpg';
import pet2Img from '../assets/images/how-it-works/img2.avif';

export default function HowWeWork() {
    return (
        <>
            <div className="flex justify-center pt-8">
                <h2 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 border-b-4 border-blue-500 inline-block">
                    How It Works
                </h2>
            </div>

            <div className='m-5 p-6 bg-gray-100 rounded-lg shadow-lg'>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="flex-1 mb-6 lg:mb-0 lg:mr-6 mt-5">
                        <img src={pet1Img} alt="Pet1" className="w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className='text-5xl pb-6 font-bold text-gray-800'>Connect with Caring Sitters</h1>
                        <p className='text-lg text-gray-600 mb-6'>
                            Discover loving and responsible sitters for your furry friends. Whether you're traveling or busy, find the perfect match to keep your pets happy and safe at home.
                        </p>
                        <button className='how-work-button inline-block bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-300'>
                            Explore Pet Sitters
                        </button>
                    </div>
                </div>
            </div>

            <div className='m-5 p-6 bg-gray-100 rounded-lg shadow-lg'>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className='text-5xl pb-6 font-bold text-gray-800'>Calling Pet and Travel Lovers</h1>
                        <p className='text-lg text-gray-600 mb-6'>
                            Experience new places and cuddle with adorable pets. Join our community of house sitters and enjoy the perks of free accommodation and the company of cute pets.
                        </p>
                        <button className='how-work-button inline-block bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-300'>
                            Explore House Sitting Stays
                        </button>
                    </div>
                    <div className="flex-1 mb-6 lg:mb-0 lg:ml-6 mt-5">
                        <img src={pet2Img} alt="Pet2" className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </>
    );
}
