import React from "react";
import Image from "next/image";
import { CiSearch, CiUser } from "react-icons/ci";
import alx_logo from "../../public/assets/alx_logo.png";
import Link from "next/link";
import AccommodationsRow from "../common/AccommodationsRow";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      {/* Top Information Bar */}
      <div className="bg-primary-green text-white py-2 text-center text-sm flex justify-center items-center">
        <span>Overseas trip? Get the latest travel guides.</span>
        <button className="ml-4 px-3 py-1 bg-black text-white rounded-full text-xs">
          More Info
        </button>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-4 py-3">
        {/* Logo and Search Parameters */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src={alx_logo}
              alt="Airbnb Logo"
              width={40}
              height={40}
              className="object-contain hidden md:flex"
            />
          </Link>

          {/* Desktop Search Bar */}
<div className="hidden md:flex justify-between items-center gap-12 bg-gray-100 rounded-full py-2 px-4">
  {/* Location Field */}
  <div className="flex-1 flex flex-col gap-2 text-gray-600">
    <label htmlFor="locationInput" className="text-xs font-medium">Location</label>
    <input
      type="text"
      id="locationInput"
      name="locationInput"
      placeholder="Search for destination"
      className="bg-transparent focus:outline-none text-sm placeholder-gray-500 w-full"
    />
  </div>

  {/* Divider */}
  <span className="h-6 w-px bg-gray-300"></span>

  {/* Other Fields */}
  <div className="flex items-center gap-4 flex-shrink-0">
    {/* Check-In Field */}
    <div className="flex flex-col gap-2 text-gray-600">
      <label htmlFor="checkInInput" className="text-xs font-medium">Check-in</label>
      <input
        type="text"
        id="checkInInput"
        name="checkInInput"
        placeholder="Add date"
        className="bg-transparent focus:outline-none text-sm placeholder-gray-500"
      />
    </div>

    <span className="h-6 w-px bg-gray-300"></span>

    {/* Check-Out Field */}
    <div className="flex flex-col gap-2 text-gray-600">
      <label htmlFor="checkOutInput" className="text-xs font-medium">Check-out</label>
      <input
        type="text"
        id="checkOutInput"
        name="checkOutInput"
        placeholder="Add date"
        className="bg-transparent focus:outline-none text-sm placeholder-gray-500"
      />
    </div>

    <span className="h-6 w-px bg-gray-300"></span>

    {/* People Field */}
    <div className="flex flex-col gap-2 text-gray-600">
      <label htmlFor="peopleInput" className="text-xs font-medium">People</label>
      <input
        type="text"
        id="peopleInput"
        name="peopleInput"
        placeholder="Add guest"
        className="bg-transparent focus:outline-none text-sm placeholder-gray-500"
      />
    </div>

    {/* Search Button */}
    <button className="p-2 bg-secondary-orange text-white rounded-full flex-shrink-0">
      <CiSearch className="text-lg" />
    </button>
  </div>
</div>


          {/* Mobile Condensed Search */}
          <div className="md:hidden flex justify-between items-center gap-12">
            <div className="flex gap-2 items-center bg-slate-50">
              <div className="flex flex-col gap-2">
                <h4 className="text-gray-900 font-semibold">Where to?</h4>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="location"
                    className="w-20 bg-gray-50 rounded-full py-2 px-2 text-xs placeholder-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Date"
                    className="w-20 bg-gray-50 rounded-full py-2 px-2 text-xs placeholder-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Add guest"
                    className="w-20 bg-gray-50 rounded-full py-2 px-2 text-xs placeholder-gray-500"
                  />
                </div>
              </div>
              <button className="p-2 bg-orange-400 text-white rounded-full">
              <CiSearch className="text-lg" />
            </button>
            </div>
            
            
            <div>
              <button className="p-4 bg-primary-green text-white rounded-full">
                <CiUser className="text-lg" />
              </button>
            </div>
            
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 bg-primary-green text-white rounded-full text-sm">
              Sign In
            </button>
            <button className="text-sm text-gray-700 rounded-full px-4 py-2 bg-white border">
              Sign up
            </button>
          </div>
        </div>

        {/* Accommodations Row */}
        {/* <AccommodationsRow /> */}
      </div>
    </header>
  );
};

export default Header;
