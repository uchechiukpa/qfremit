import React from "react";

import Image1 from "./image1.png";
import Image2 from "./image2.png";

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
    name: "Ayobami Sileto",
    occupation: "Photographic Designer",
    body: "My father exclusively uses the SwiftTransfer platform and states that his funds are promptly processed, he has complete trust in the platform.",
    rating: 5,
  },
  {
    id: 2,
    imageUrl: Image2,
    imageClass: "image-two",
    name: "Ayobami Sileto",
    occupation: "Photographic Designer",
    body: "My father exclusively uses the SwiftTransfer platform and states that his funds are promptly processed, he has complete trust in the platform.",
    rating: 5,
  },
];

function Review() {
  return (
    <div className="flex-container">
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
  );
}

export default Review;