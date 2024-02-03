import React from "react";
import "./how-it-works.css";
import google from "./google.png";
import apple from "./apple.png";

const Card = ({ titleId, cardClass, titleTop, titleBottom }) => {
  return (
    <div className={`flex h-52 items-center shadow-3xl my-5 text-left  ${cardClass}`}>
      <h1 className="lg:text-5xl md:text-5xl sm:text-3xl font-extrabold basis-1/4 pl-8">{titleId}</h1>
      <h3 className="lg:text-xl md:text-xl sm:text-lg font-bold basis-1/4 ">{titleTop}</h3>
      <p className="tlg:text-lg md:text-lg sm:text-md font-bold basis-1/2 px-5">{titleBottom}</p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    titleId: 1,
    titleTop: "CREATE YOUR FREE ACCOUNT",
    cardClass: "text-maincolor",
    titleBottom:
      "Sign up for a free QF Remit account and complete the identity verification process.",
  },
  {
    id: 2,
    titleId: 2,
    titleTop: "ENTER TRANSACTION DETAILS",
    cardClass: "bg-maincolor text-white",
    titleBottom:
      "Select recipient country, beneficiary details, amount you wish to send.",
  },
  {
    id: 3,
    titleId: 3,
    titleTop: "PAY",
    cardClass: "text-maincolor",
    titleBottom:
      "Choose from the various payment options available: bank deposit, credit or debit card.",
  },
];

function Operations() {
  return (
    <div className="operation-container-div">
      <div className="px-5 flex flex-row sm:flex-col items-center mx-auto max-w-7xl pt-8 ">
        <div className="lg:basis-1/2 md:basis-1/2">
          <p className="text-maincolor font-extrabold lg:text-5xl md:text-4xl sm:text-3xl ">
            Start your journey <br /> in just 3 simple <br /> steps
          </p>
          <div className="flex mt-10">
            <img src={google} alt="google" className="google-store" />
            <img src={apple} alt="apple" className="app-store" />
          </div>
        </div>
        <div className="lg:basis-1/2 md:basis-1/2">
          {cards.map((card) => (
            <Card
              key={card.id}
              titleTop={card.titleTop}
              titleBottom={card.titleBottom}
              titleId={card.titleId}
              cardClass={card.cardClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Operations;
