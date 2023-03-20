import React from "react";

const PaymentMethod = () => {
  return (
    <div>
        <div>
            <input  type="radio"/>
            <label>pay With Swift Wallet</label>
        </div>

        <div>
            <input  type="radio"/>
            <label>pay With Bank Transfer</label>
        </div>

        <div>
            <input  type="radio"/>
            <label>pay With Card</label>
        </div>
    </div>
  );
};

export default PaymentMethod;