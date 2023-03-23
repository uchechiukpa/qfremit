import React from "react";
import "./how-it-works.css";
import google from "./google.png";
import apple from "./apple.png";

const Card = ({ titleId, cardClass, titleTop, titleBottom }) => {
  return (
    <div className= {`operation-card-class ${cardClass}`}>
      <div className="operations-card-content">
        <h1 className="operations-card-column operation-card-titleId-top">{titleId}</h1>
        <h3 className="operations-card-column operation-card-title-top">{titleTop}</h3>
        <p className="operations-card-column operation-card-title-bottom">{titleBottom}</p>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    titleId: 1,
    titleTop: "CREATE YOUR FREE ACCOUNT",
    cardClass: 'card-one-class',
    titleBottom:
      "Sign up for a free SwiftTransfer account and complete the identity verification process.",
  },
  {
    id: 2,
    titleId: 2,
    titleTop: "FUND YOUR WALLET",
    cardClass: 'card-two-class',
    titleBottom:
      "Transfer money at no cost from your bank's mobile app directly to your SwiftTransfer Account.",
  },
  {
    id: 3,
    titleId: 3,
    titleTop: "TRANSFER FUNDS",
    cardClass: 'card-three-class',
    titleBottom:
      "To transfer funds, simply specify the amount, select the recipient, and initiate the transfer. It's that simple.",
  },
];

function Operations() {
  return (
    <div className="operation-container-div">
      <div className="operation-container">
        <div className="operations-flex-container">
          <div className="operation-left-div">
            <h3>How it works</h3>

            <p>Start your journey in just 3 simple steps</p>
            <div className="app-google-store">
              <img src={google} alt="google" className="google-store" />
              <img src={apple} alt="apple" className="app-store" />
            </div>
          </div>

          <div className="operations-grid-container">
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
    </div>
  );
}

export default Operations;
