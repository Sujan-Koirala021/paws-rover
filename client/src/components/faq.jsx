import React, { useState } from 'react';
import faqImage from '../assets/images/wonderingImg.png'; 

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col lg:flex-row p-8 rounded-lg ">
            <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
                <h2 className="text-4xl font-bold mb-4">You’re probably wondering...</h2>
                <img src={faqImage} alt="FAQ illustration" className="rounded-lg mt-4" />
            </div>
            <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
                <div>
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <button
                                className="w-full text-left font-semibold text-gray-900 py-2 border-b flex justify-between items-center"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span>{activeIndex === index ? '-' : '+'}</span>
                            </button>
                            {activeIndex === index && (
                                <div className="py-2 text-gray-700">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const faqData = [
    {
        question: 'What services do you offer?',
        answer: 'We offer a range of petsitting services including dog walking, pet boarding, and in-home pet care. You can customize services based on your pet’s needs.'
    },
    {
        question: 'How can I book a petsitter?',
        answer: 'You can book a petsitter through our web app by creating an account, selecting the service you need, and choosing an available petsitter in your area.'
    },
    {
        question: 'Are your petsitters background-checked?',
        answer: 'Yes, all our petsitters go through a thorough background check to ensure your pets are in safe and reliable hands.'
    },
    {
        question: 'Can I meet the petsitter before booking?',
        answer: 'Absolutely! We encourage pet owners to meet the petsitter beforehand to ensure a good match. You can arrange a meeting through our platform.'
    },
    {
        question: 'What happens if my pet gets sick?',
        answer: 'In the event of an emergency, our petsitters are trained to contact a veterinarian immediately and inform you right away.'
    }
];
