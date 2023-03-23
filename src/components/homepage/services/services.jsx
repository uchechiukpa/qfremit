import React from "react";
import "./services.css";
import Image1 from "./image1.png";
import Image2 from "./image2.png";
import Image3 from "./image3.png";
import Image4 from "./image4.png";

const Card = ({ imageUrl, imageClass, titleTop, titleBottom }) => {
  return (
    <div className={`card ${imageClass}`}>
      <img className="card-img" src={imageUrl} alt={titleTop} />
      <div className="card-content">
        <h1 className="card-title-top">{titleTop}</h1>
        <p className="card-title-bottom">{titleBottom}</p>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    imageUrl: Image2,
    imageClass: "image-two",
    titleTop: "Pay",
    titleBottom: "Maximize the value of your money by paying for school fees, vendor expenses, and bills at competitive rates.",
  },
  {
    id: 2,
    imageUrl: Image3,
    imageClass: "image-three",
    titleTop: "Send",
    titleBottom: "Enjoy free and seamless international money transfers to banks or mobile wallets of your choice!",
  },
  {
    id: 3,
    imageUrl: Image4,
    imageClass: "image-four",
    titleTop: "Receive",
    titleBottom: "Expand your financial horizons with the ability to receive funds in multiple currencies! Open multiple currency wallets to receive payments from various countries worldwide.",
  },
];

function Services() {
  return (
    <div className="services-container">
      <h2>Services</h2>
      <div className="services-flex-container">
        <div className="grid-container">
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
        <div class="image-container">
          <img src={Image1} alt="Image2" />
        </div>
      </div>
    </div>
  );
}

export default Services;
