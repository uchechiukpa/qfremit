import React from "react";
import "./features.css";
import Image1 from "./quicktransfer.png";
import Image2 from "./safesecure.png";
import Image3 from "./competitiverates.png";

const Card = ({ imageUrl, imageClass, titleTop, titleBottom }) => {
  return (
    <div className={`features-card ${imageClass}`}>
      <div className="features-text">
        <h2 className="features-card-title-top">{titleTop}</h2>
        <p className="features-card-title-bottom">{titleBottom}</p>
      </div>
      <div className="features-image-container">
        <img className="features-card-img" src={imageUrl} alt={titleTop} />
      </div>
      {/* <div className="features-card-content"></div> */}
    </div>
  );
};

const cards = [
  {
    id: 1,
    imageUrl: Image1,
    imageClass: "features-image-two",
    titleTop: "QUICK TRANSFER",
    titleBottom:
      "Effortlessly and securely send and receive money globally with our quick transfer service.",
  },
  {
    id: 2,
    imageUrl: Image2,
    imageClass: "features-image-three",
    titleTop: "SAFE & SECURE",
    titleBottom:
      "Rest assured with our secure platform, utilizing advanced encryption and multi-layer security measures for safe transactions.",
  },
  {
    id: 3,
    imageUrl: Image3,
    imageClass: "features-image-four",
    titleTop: "COMPETITIVE RATES",
    titleBottom:
      "Get the best value for your money with our competitive rates and cost-effective services.",
  },
];

function Features() {
  return (
    <div className="features-flex-container">
      <h2>Features</h2>
      <div className="features-grid-container">
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
