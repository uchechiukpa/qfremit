import React from "react";
import "./features.css";
import Image1 from "./quicktransfer.png";
import Image2 from "./safesecure.png";
import Image3 from "./competitiverates.png";

const Card = ({ imageUrl, imageClass, titleTop, titleBottom }) => {
  return (
    <div className={`flex items-center bg-maincolor opacity-[.81] justify-between my-5 rounded-lg h-72 ${imageClass}`}>
      <div className="flex flex-col lg:basis-1/2 pl-8">
        <h2 className="text-white font-extrabold lg:text-4xl md:text-4xl sm-text-3xl">{titleTop}</h2>
        <p className="lg:text-sm md:text-sm sm:text-xs pt-8 text-white">{titleBottom}</p>
      </div>
      <div className="">
        <img className="" src={imageUrl} alt={titleTop} />
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    imageUrl: Image1,
    imageClass: "",
    titleTop: "QUICK TRANSFER",
    titleBottom:
      "Effortlessly and securely send and receive money globally with our quick transfer service.",
  },
  {
    id: 2,
    imageUrl: Image2,
    imageClass: "",
    titleTop: "SAFE & SECURE",
    titleBottom:
      "Rest assured with our secure platform, utilizing advanced encryption and multi-layer security measures for safe transactions.",
  },
  {
    id: 3,
    imageUrl: Image3,
    imageClass: "",
    titleTop: "COMPETITIVE RATES",
    titleBottom:
      "Get the best value for your money with our competitive rates and cost-effective services.",
  },
];

function Features() {
  return (
    <div className="px-5 mx-auto max-w-7xl lg:mt-20 md:mt-14 sm:mt-14">
      <h2 className="text-maincolor text-4xl font-extrabold">Features</h2>
      <div className="">
        {cards.map((card) => (
          <Card
            key={card.id}
            titleTop={card.titleTop}
            titleBottom={card.titleBottom}
            imageUrl={card.imageUrl}
            imageClass={card.imageClass}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
