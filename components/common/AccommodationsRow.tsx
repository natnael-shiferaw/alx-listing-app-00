import React from 'react';
import { FaBed, FaHome, FaTree, FaCampground, FaSwimmingPool, FaMountain, FaGavel } from 'react-icons/fa';
import { GiWaterDrop,GiFarmTractor, GiIsland, GiBeachBucket, GiHouse, GiVillage, GiTreehouse } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';

function AccommodationsRow() {
  const accommodations = [
    { name: 'Rooms', icon: <FaBed /> },
    { name: 'Mansion', icon: <GiHouse /> }, // Replaced GiMansion with GiHouse
    { name: 'Country Side', icon: <GiVillage /> },
    { name: 'Villa', icon: <MdOutlineVilla /> },
    { name: 'Tropical', icon: <GiBeachBucket /> },
    { name: 'Hills', icon: <FaMountain /> },
    { name: 'Amazing Pool', icon: <FaSwimmingPool /> },
    { name: 'Beach House', icon: <GiHouse /> },
    { name: 'Island', icon: <GiIsland /> },
    { name: 'Camping', icon: <FaCampground /> },
    { name: 'Apartment', icon: <FaHome /> },
    { name: 'House', icon: <GiHouse /> },
    { name: 'Lakefront', icon: <GiWaterDrop /> }, // Replaced GiLake with GiWaterDrop
    { name: 'Farm House', icon: <GiFarmTractor /> },
    { name: 'Tree House', icon: <GiTreehouse /> },
    { name: 'Cabins', icon: <FaTree /> },
    { name: 'Court House', icon: <FaGavel /> },
  ];

  return (
    <div className="flex flex-wrap justify-start items-center gap-4 xl:gap-6 px-0">
      {accommodations.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center text-gray-700 hover:cursor-pointer"
          style={{ minWidth: '3rem', flex: '1 1 calc(4.5% - 5px)',
                   maxWidth: '4rem',
           }}
        >
          <div className="text-lg md:text-xl lg:text-2xl mb-1">{item.icon}</div>
          <p className="text-xs sm:text-sm font-medium">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default AccommodationsRow;
