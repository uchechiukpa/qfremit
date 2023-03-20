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
        <div className="card-title-top">{titleTop}</div>
        <div className="card-title-bottom">{titleBottom}</div>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    imageUrl: Image2,
    imageClass: "image-two",
    titleTop: "Card 1",
    titleBottom: "Bottom Text 1",
  },
  {
    id: 2,
    imageUrl: Image3,
    imageClass: "image-three",
    titleTop: "Card 2",
    titleBottom: "Bottom Text 2",
  },
  {
    id: 3,
    imageUrl: Image4,
    imageClass: "image-four",
    titleTop: "Card 3",
    titleBottom: "Bottom Text 3",
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
