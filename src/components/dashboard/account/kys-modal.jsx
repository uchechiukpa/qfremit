import React from "react";

const KycModal = () => {
  return (
    <div>
      <h3>
        Please provide a clear photograph of the identification document's photo
        page, such as your passport, driver's license, or national ID card.
        Please note that we cannot accept PDF files.
      </h3>


      <section>
        <div>
          <label>Select Country</label>
          <input />
        </div>
        <div>
          <label>Passport</label>
          <input />
        </div>
      </section>

      <section>
        <div>
          <label>Drivers Licence</label>
          <input />
        </div>
        <div>
          <label>Phone</label>
          <input />
        </div>
      </section>

      <section>
        <div>
          <label>Passport</label>
          <input />
        </div>
      </section>

      <section>
        <div>
          <label></label>
          <input />
        </div>
        <div>
          <label></label>
          <input />
        </div>
      </section>

      <section>
        <div>
          <label></label>
          <input />
        </div>
        <div>
          <label></label>
          <input />
        </div>
      </section>

      <div>
        <button>Confirm</button>
      </div>
    </div>
  );
};

export default KycModal;
