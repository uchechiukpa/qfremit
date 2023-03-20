import React from "react";

const CardModal = () => {
  return (
    <div>
      <div>
        <button>X</button>
      </div>
      <section>
        <div>
          <label>Name Of Card Holder</label>
          <input />
        </div>
        <div>
          <label>Expiry Date</label>
          <input />
        </div>
      </section>

      <section>
        <div>
          <label>Card Number</label>
          <input />
        </div>
      </section>

      <section>
        <div>
          <label>CVC</label>
          <input />
        </div>
      </section>

      <div>
        <button>Add Card</button>
      </div>
    </div>
  );
};

export default CardModal;
