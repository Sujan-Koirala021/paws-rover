import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/pet-sitter-hero.jpg';
import nextBtnImg from '../assets/images/pawImg.png';
import rabbit1 from '../assets/images/rabbit1.gif';
import rabbit2 from '../assets/images/rabbit2.gif';
import rabbit3 from '../assets/images/rabbit3.gif';
import rabbit4 from '../assets/images/rabbit4.gif';
import rabbit5 from '../assets/images/rabbit5.gif';
import rabbit6 from '../assets/images/rabbit6.gif';
import rabbit7 from '../assets/images/rabbit7.gif';
import rabbit8 from '../assets/images/rabbit8.gif';
import rabbit9 from '../assets/images/rabbit9.gif';
import rabbit10 from '../assets/images/rabbit10.gif';



import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';
import './HeroTour.css'; // Import CSS file for tour styling

const Hero = () => {
    const [rabbitIndex, setRabbitIndex] = useState(0);
    const rabbitImages = [rabbit1, rabbit2, rabbit3, rabbit4, rabbit5, rabbit6, rabbit7, rabbit8, rabbit9, rabbit10];


    const getRandomRabbitIndex = () => Math.floor(Math.random() * rabbitImages.length);
    const handleRabbitClick = () => {
        setRabbitIndex((prevIndex) => (prevIndex + 1) % rabbitImages.length);
    };

    useEffect(() => {
        const tour = new Shepherd.Tour({
            defaultStepOptions: {
                classes: 'shadow-md bg-purple-dark ',
                scrollTo: { behavior: 'smooth', block: 'center' }
            },
            useModalOverlay: false
        });

        tour.addStep({
            id: 'welcome',
            text: `
                <div class="tour-step">
                    <img id="tour-rabbit-image" src="${rabbitImages[getRandomRabbitIndex()]}" alt="Rabbit" class="tour-image w-32 h-32"/>
                    <div>
                        <h3 class="font-bold underline">Welcome! I am Bunny the Rabbit.</h3>
                        <p class="font-mono">Join me for a tour around Paw Rover and discover all the features!</p>
                    </div>
                </div>
            `,
            buttons: [
               
                {
                    text: `
                        <div class="flex items-center space-x-2">
                            <img src="${nextBtnImg}" alt="Paw" class="w-7 h-7"/>
                            <span>Next</span>
                        </div>
                        `,
                    action: tour.next,
                    classes: '!bg-orange-500 !text-black !px-4 !py-2 !rounded-full !shadow-md hover:!bg-orange-800 focus:!outline-none focus:!ring-2 focus:!ring-green-400 focus:!ring-opacity-75 !transition !duration-300 !ease-in-out'
                }
            ]
        });

        tour.addStep({
            id: 'about',
            text: `
                <div class="tour-step">
                    <img id="tour-rabbit-image" src="${rabbitImages[getRandomRabbitIndex()]}" alt="Rabbit" class="tour-image w-32 h-32"/>
                    <div>
                        <h3 class = "font-bold underline">About Us</h3>
                        <p class="font-mono">Learn more about Paw Rover and our mission!</p>
                    </div>
                </div>
            `,
            attachTo: { element: 'a[href="/about"]', on: 'bottom-end' },
            buttons: [
                {
                    text: `
                        <div class="flex items-center space-x-2">
                            <img src="${nextBtnImg}" alt="Paw" class="w-7 h-7"/>
                            <span>Back</span>
                        </div>
                        `,
                    action: tour.back,
                    classes: '!bg-gray-500 !text-black !px-4 !py-2 !rounded-full !shadow-md hover:!bg-gray-700 focus:!outline-none focus:!ring-2 focus:!ring-gray-400 focus:!ring-opacity-75 !transition !duration-300 !ease-in-out'
                },
                {
                    text: `
                        <div class="flex items-center space-x-2">
                            <img src="${nextBtnImg}" alt="Paw" class="w-7 h-7"/>
                            <span>Next</span>
                        </div>
                        `,
                    action: tour.next,
                    classes: '!bg-orange-500 !text-black !px-4 !py-2 !rounded-full !shadow-md hover:!bg-orange-800 focus:!outline-none focus:!ring-2 focus:!ring-green-400 focus:!ring-opacity-75 !transition !duration-300 !ease-in-out'
                }
            ]
        });

        tour.addStep({
            id: 'how-it-works',
            text: `
                <div class="tour-step">
                    <img id="tour-rabbit-image" src="${rabbitImages[getRandomRabbitIndex()]}" alt="Rabbit" class="tour-image w-32 h-32"/>
                    <div>
                        <h3 class = "font-bold underline">How It Works</h3>
                        <p class="font-mono">Discover the simple process of finding a pet sitter or offering your home for sitting!</p>
                    </div>
                </div>
            `,
            attachTo: { element: 'a[href="/how-it-works"]', on: 'bottom-end' },
            buttons: [
                {
                    text: `
                        <div class="flex items-center space-x-2">
                            <img src="${nextBtnImg}" alt="Paw" class="w-7 h-7"/>
                            <span>Back</span>
                        </div>
                        `,
                    action: tour.back,
                    classes: '!bg-gray-500 !text-black !px-4 !py-2 !rounded-full !shadow-md hover:!bg-gray-700 focus:!outline-none focus:!ring-2 focus:!ring-gray-400 focus:!ring-opacity-75 !transition !duration-300 !ease-in-out'
                },
                {
                    text: `
                        <div class="flex items-center space-x-2">
                            <img src="${nextBtnImg}" alt="Paw" class="w-7 h-7"/>
                            <span>Next</span>
                        </div>
                        `,
                    action: tour.next,
                    classes: '!bg-orange-500 !text-black !px-4 !py-2 !rounded-full !shadow-md hover:!bg-orange-800 focus:!outline-none focus:!ring-2 focus:!ring-green-400 focus:!ring-opacity-75 !transition !duration-300 !ease-in-out'
                }
            ]
        });

        tour.addStep({
            id: 'contact',
            text: `
                <div class="tour-step">
                    <img id="tour-rabbit-image" src="${rabbitImages[getRandomRabbitIndex()]}" alt="Rabbit" class="tour-image w-32 h-32"/>
                    <div>
                        <h3 class="font-bold underline">Contact Us</h3>
                        <p class="font-mono">Get in touch with our team for any inquiries or support!</p>
                    </div>
                </div>
            `,
            attachTo: { element: 'a[href="/contact"]', on: 'bottom-end' },

            buttons: [
                {
                    text: `
                        <div class="flex items-center space-x-2">
                            <img src="${nextBtnImg}" alt="Paw" class="w-7 h-7"/>
                            <span>Back</span>
                        </div>
                        `,
                    action: tour.back,
                    classes: '!bg-gray-500 !text-black !px-4 !py-2 !rounded-full !shadow-md hover:!bg-gray-700 focus:!outline-none focus:!ring-2 focus:!ring-gray-400 focus:!ring-opacity-75 !transition !duration-300 !ease-in-out'
                },
                {
                    text: `
                        <div class="flex items-center space-x-2">
                            <img src="${nextBtnImg}" alt="Paw" class="w-7 h-7"/>
                            <span>Next</span>
                        </div>
                        `,
                    action: tour.next,
                    classes: '!bg-orange-500 !text-black !px-4 !py-2 !rounded-full !shadow-md hover:!bg-orange-800 focus:!outline-none focus:!ring-2 focus:!ring-green-400 focus:!ring-opacity-75 !transition !duration-300 !ease-in-out'
                }
            ]
        });

        tour.addStep({
            id: 'find-pet-sitter',
            text: `
                <div class="tour-step">
                    <img id="tour-rabbit-image" src="${rabbitImages[getRandomRabbitIndex()]}" alt="Rabbit" class="tour-image w-32 h-32"/>
                    <div>
                        <h3 class="font-bold underline">Find a Pet Sitter</h3>
                        <p class="font-mono">Explore our network of trusted pet sitters ready to care for your furry friends!</p>
                    </div>
                </div>
            `,
            attachTo: { element: 'a[href="/find-pet-sitter"]', on: 'bottom-end' },

            buttons: [
                {
                    text: `
                        <div class="flex items-center space-x-2">
                            <img src="${nextBtnImg}" alt="Paw" class="w-7 h-7"/>
                            <span>Back</span>
                        </div>
                        `,
                    action: tour.back,
                    classes: '!bg-gray-500 !text-black !px-4 !py-2 !rounded-full !shadow-md hover:!bg-gray-700 focus:!outline-none focus:!ring-2 focus:!ring-gray-400 focus:!ring-opacity-75 !transition !duration-300 !ease-in-out'
                },
                {
                    text: `
                        <div class="flex items-center space-x-2">
                            <img src="${nextBtnImg}" alt="Paw" class="w-7 h-7"/>
                            <span>Next</span>
                        </div>
                        `,
                    action: tour.next,
                    classes: '!bg-orange-500 !text-black !px-4 !py-2 !rounded-full !shadow-md hover:!bg-orange-800 focus:!outline-none focus:!ring-2 focus:!ring-green-400 focus:!ring-opacity-75 !transition !duration-300 !ease-in-out'
                }
            ]
        });

        tour.addStep({
            id: 'find-house-sit',
            text: `
                    <div class="tour-step">
                        <img id="tour-rabbit-image" src="${rabbitImages[getRandomRabbitIndex()]}" alt="Rabbit" class="tour-image w-32 h-32"/>
                        <div>
                            <h3 class="font-bold underline">Explore Homes to Sit</h3>
                            <p class="font-mono">Discover unique homes around the world where you can stay for free by caring for pets!</p>
                        </div>
                    </div>
                `,
            attachTo: { element: 'a[href="/find-house-sit"]', on: 'bottom-end' },

            buttons: [
                {
                    text: `
                        <div class="flex items-center space-x-2">
                            <img src="${nextBtnImg}" alt="Paw" class="w-7 h-7"/>
                            <span>Back</span>
                        </div>
                        `,
                    action: tour.back,
                    classes: '!bg-gray-500 !text-black !px-4 !py-2 !rounded-full !shadow-md hover:!bg-gray-700 focus:!outline-none focus:!ring-2 focus:!ring-gray-400 focus:!ring-opacity-75 !transition !duration-300 !ease-in-out'
                },
                {
                    text: `
                        <div class="flex items-center space-x-2">
                            <img src="${nextBtnImg}" alt="Paw" class="w-7 h-7"/>
                            <span>Next</span>
                        </div>
                        `,
                    action: tour.next,
                    classes: '!bg-orange-500 !text-black !px-4 !py-2 !rounded-full !shadow-md hover:!bg-orange-800 focus:!outline-none focus:!ring-2 focus:!ring-green-400 focus:!ring-opacity-75 !transition !duration-300 !ease-in-out'
                }
            ]
        });

        tour.addStep({
            id: 'faq',
            text: `
                    <div class="tour-step">
                        <img id="tour-rabbit-image" src="${rabbitImages[getRandomRabbitIndex()]}" alt="Rabbit" class="tour-image w-32 h-32"/>
                        <div>
                            <h3>FAQs</h3>
                            <p class="font-mono">Get answers to commonly asked questions about Paw Rover and our services!</p>
                        </div>
                    </div>
                `,
            attachTo: { element: 'a[href="/faq"]', on: 'bottom-end' },

            buttons: [
                {
                    text: `
                        <div class="flex items-center space-x-2">
                            <img src="${nextBtnImg}" alt="Paw" class="w-7 h-7"/>
                            <span>Back</span>
                        </div>
                        `,
                    action: tour.back,
                    classes: '!bg-gray-500 !text-black !px-4 !py-2 !rounded-full !shadow-md hover:!bg-gray-700 focus:!outline-none focus:!ring-2 focus:!ring-gray-400 focus:!ring-opacity-75 !transition !duration-300 !ease-in-out'
                },
                {
                    text: `
                        <div class="flex items-center space-x-2">
                            <img src="${nextBtnImg}" alt="Paw" class="w-7 h-7"/>
                            <span>Finish</span>
                        </div>
                        `,
                    action: tour.complete,
                    classes: '!bg-orange-500 !text-black !px-4 !py-2 !rounded-full !shadow-md hover:!bg-orange-800 focus:!outline-none focus:!ring-2 focus:!ring-green-400 focus:!ring-opacity-75 !transition !duration-300 !ease-in-out'
                }
            ]
        });

        tour.start();

        // Clean up the tour instance when the component unmounts
        return () => {
            tour.complete();
        };
    }, []);

    useEffect(() => {
        const rabbitImage = document.getElementById('tour-rabbit-image');
        if (rabbitImage) {
            rabbitImage.src = rabbitImages[rabbitIndex];
            rabbitImage.onclick = handleRabbitClick;
        }
    }, [rabbitIndex]);

    return (
        <div
            className="bg-cover bg-center relative"
            style={{ backgroundImage: `url(${heroImage})`, height: 'calc(100vh - 64px)' }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto flex flex-col justify-center text-white relative z-10 h-full">
                <div className="text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-10">Paw Rover</h1>
                    <p className="text-lg md:text-xl max-w-md">Uncover special homestays across the globe, exchanging care for adorable pets for a free stay.</p>
                    <Link to='/find-pet-sitter'>
                        <button className="hero-button mr-12">Find a Pet Sitter &gt;</button>
                    </Link>
                    <Link to='/find-house-sit'>
                        <button className="hero-button ml-6">Explore Homes to Sit &gt;</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
