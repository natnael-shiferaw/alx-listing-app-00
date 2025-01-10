import React from "react";
import { FaBed, FaHome, FaCampground, FaSwimmingPool } from "react-icons/fa";
import { GiIsland, GiBeachBucket, GiHouse } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const accommodations = [
  { name: "Rooms", icon: <FaBed /> },
  { name: "Mansion", icon: <GiHouse /> },
  { name: "Tropical", icon: <GiBeachBucket /> },
  { name: "Beach House", icon: <GiHouse /> },
  { name: "Island", icon: <GiIsland /> },
  { name: "Camping", icon: <FaCampground /> },
  { name: "Apartment", icon: <FaHome /> },
  { name: "Amazing Pool", icon: <FaSwimmingPool /> },
];

const AccommodationsRow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="mt-4">
      <Slider {...settings}>
        {accommodations.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center text-gray-700"
          >
            <div className="text-2xl md:text-3xl text-primary mb-2">
              {item.icon}
            </div>
            <p className="text-xs md:text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AccommodationsRow;
