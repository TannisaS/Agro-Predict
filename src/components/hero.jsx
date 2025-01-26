import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Card from "./Card";

const cardsData = [
    {
      id: 1,
      image: 'https://via.placeholder.com/400',
      title: 'Crop Price Prediction',
      description: 'This is a description for card 1.',
    },
    {
      id: 2,
      title: 'Crop Prediction',
      description: 'This is a description for card 2.',
    },
    {
        id:3,
      title: 'Fertilizer Prediction',
      description: 'This is a description for card 3.',
    },
    {
        id:4,
      title: 'Disease Detection',
      description: 'This is a description for card 4.',
    },
  ];

export default function Hero() {
  return (
    <div className="flex flex-col gap-y-10 min-h-screen">
      <header className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-2xl">AgroPredict</h1>
        <nav className="flex flex-row gap-x-6">
          <a href="#contact" className="hover:underline">
            Weather
          </a>
          <a href="#about" className="hover:underline">
            Crop Price Prediction
          </a>
          <a href="#services" className="hover:underline">
            Crop Prediction
          </a>
          <a href="#projects" className="hover:underline">
            Fertilizer Prediction
          </a>
          <a href="#green-ideas" className="hover:underline">
            Disease Detection
          </a>
        </nav>
      </header>
      <div className="grid grid-cols-2 gap-8 ">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
    </div>
  );
}
