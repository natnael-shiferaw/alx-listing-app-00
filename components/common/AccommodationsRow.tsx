import React from 'react';
import { FaBed, FaHome, FaTree, FaCampground, FaSwimmingPool, FaMountain, FaWater, FaGavel } from 'react-icons/fa';
import { GiMansion, GiFarmTractor, GiIsland, GiBeachBucket, GiHouse, GiVillage, GiLake, GiTreehouse } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';

function AccommodationsRow() {
  const accommodations = [
    { name: 'Rooms', icon: <FaBed /> },
    { name: 'Mansion', icon: <GiMansion /> },
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
    { name: 'Lakefront', icon: <GiLake /> },
    { name: 'Farm House', icon: <GiFarmTractor /> },
    { name: 'Tree House', icon: <GiTreehouse /> },
    { name: 'Cabins', icon: <FaTree /> },
    { name: 'Court House', icon: <FaGavel /> },
  ];

  return (
    <div className="flex flex-wrap justify-between items-center gap-4 px-4">
      {accommodations.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center text-gray-700"
          style={{ minWidth: '5rem', flex: '1 1 calc(5.8% - 10px)' }}
        >
          <div className="text-4xl text-green-600 mb-2">{item.icon}</div>
          <p className="text-sm font-medium">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default AccommodationsRow;
