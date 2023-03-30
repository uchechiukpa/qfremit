import React from "react";
import "./services.css";
import Image1 from "./image1.png";
import Image2 from "./image2.png";
import Image3 from "./image3.png";
import Image4 from "./image4.png";

const Card = ({ imageUrl, imageClass, titleTop, titleBottom }) => {
  return (
    <div className={` flex rounded-lg my-5  h-72 ${imageClass}`}>
      <div className=" flex basis-3/5 justify-center">
        <img className="" src={imageUrl} alt={titleTop} />
      </div>

      <div className= "flex flex-col justify-between basis-3/5 py-4 ">
        <h1 className=" text-4xl text-white text-right font-extrabold mr-5">{titleTop}</h1>
        <p className="text-white sm:text-xs md:text-sm lg:text-sm mr-5">{titleBottom}</p>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    imageUrl: Image2,
    imageClass: "bg-yellow opacity-[.61]",
    titleTop: "Pay",
    titleBottom:
      "Maximize the value of your money by paying for school fees, vendor expenses, and bills at competitive rates.",
  },
  {
    id: 2,
    imageUrl: Image3,
    imageClass: "bg-green opacity-[.61]",
    titleTop: "Send",
    titleBottom:
      "Enjoy free and seamless international money transfers to banks or mobile wallets of your choice!",
  },
  {
    id: 3,
    imageUrl: Image4,
    imageClass: "bg-blue opacity-[.61]",
    titleTop: "Receive",
    titleBottom:
      "Expand your financial horizons with the ability to receive funds in multiple currencies! Open multiple currency wallets to receive payments from various countries worldwide.",
  },
];

function Services() {
  return (
    <div className="px-5 mx-auto max-w-7xl lg:mt-20 md:mt-14 sm:mt-14">
      {/* <h2 className="text-maincolor text-sm">Services</h2> */}
      <div className="flex lg:flex-row md:flex-row ">
        <div className="md:basis-1/2 lg:basis-1/2">
          {cards.map((card) => (
            <Card
              key={card.id}
              imageUrl={card.imageUrl}
              imageClass={card.imageClass}
              titleTop={card.titleTop}
              titleBottom={card.titleBottom}
            />
          ))}
        </div>
        <div class="sm:hidden md:basis-1/2 lg:basis-1/2">
          <img src={Image1} className="scale-75"alt="Image2" />
        </div>
      </div>
    </div>
  );
}

export default Services;
