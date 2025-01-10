import React from "react";
import Image from "next/image";

import rooms from "@/public/assets/living-room.png";
import mansion from "@/public/assets/mansion.png";
import countryside from "@/public/assets/farm.png";
import villa from "@/public/assets/villa.png";
import tropical from "@/public/assets/palm-tree.png";
import new_home from "@/public/assets/key-chain.png";
import amazingPool from "@/public/assets/swimming-pool.png";
import beachHouse from "@/public/assets/vacations.png";
import island from "@/public/assets/island.png";
import camping from "@/public/assets/tent.png";
import apartment from "@/public/assets/apartment.png";
import house from "@/public/assets/home.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const accommodations = [
  { name: "Rooms", icon: rooms },
  { name: "Mansion", icon: mansion },
  { name: "Countryside", icon: countryside },
  { name: "Villa", icon: villa },
  { name: "Tropical", icon: tropical },
  { name: "New", icon: new_home },
  { name: "Amazing Pool", icon: amazingPool },
  { name: "Beach House", icon: beachHouse },
  { name: "Island", icon: island },
  { name: "Camping", icon: camping },
  { name: "Apartment", icon: apartment },
  { name: "House", icon: house },
];

const AccommodationsRow = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 12 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 4 } },
    ],
  };

  return (
    <div className="mt-4">
      <Slider {...settings}>
        {accommodations.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center  text-gray-600"
          >
            <div className="mb-2">
              <Image src={item.icon} alt={item.name} width={40} height={40} />
            </div>
            <p className="text-xs font-medium">{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AccommodationsRow;
