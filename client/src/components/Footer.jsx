import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-300 text-gray-600 py-4 px-3 mt-auto">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
          <p className="text-xs md:text-sm">Copyright 2020 &copy; All Rights Reserved</p>
        </div>
        <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
          <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
            <li><a href="#" className="hover:text-black">Contact</a></li>
            <li className="mx-4"><a href="#" className="hover:text-black">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black">Terms of Use</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
