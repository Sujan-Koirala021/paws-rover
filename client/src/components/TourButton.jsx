import React from 'react';

const HelpButton = () => {
    return (
        <div className=''>

        <button className="flex items-center justify-around flex-row fixed bottom-4 right-4 bg-orange-600 text-white p-3 rounded-md shadow-lg hover:bg-orange-700 hover:text-gray-700 focus:outline-none w-24">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            Tour
        </button>
        </div>
    );
}

export default HelpButton;
