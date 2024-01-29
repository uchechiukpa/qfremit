import React from "react";
import Image1 from "./sphere.png";
import Image2 from "./rectangle.png";
import './review.css'

const Card = ({ name, occupation, body }) => {
  return (
    <div className="review-card">
      <div className="review-card-content">
        <h2 className="review-card-name">{name}</h2>
        <h3 className="review-card-occupation">{occupation}</h3>
        <p className="reiew-card-body"> {body}</p>
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
    body: "My father exclusively uses the QF Remit platform and states that his funds are promptly processed, he has complete trust in the platform.",
    rating: 5,
  },
];

function Review() {
  return (
    <div className="review-container">
      <h3 className="review-header">What they say <br /> about us</h3>
      <div className="review-grid-container">
        <div className="review-grid">
          {cards.map((card) => (
            <Card
              key={card.id}
              name={card.name}
              occupation={card.occupation}
              body={card.body}
            />
          ))}
        </div>
        <div class="review-image-container-two">
          <img src={Image2} alt="Image2" />
        </div>
        <div class="review-image-container">
          <img src={Image1} alt="Image1" />
        </div>
      </div>
    </div>
  );
}

export default Review;
