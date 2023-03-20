import React from "react";

const Receipent = () => {
  return (
    <div>
      <h2>Who are you sending money to?</h2>

      <section>
        <div>
          <label>Who is receiving the money</label>
          <input />
        </div>
        <div>
          <label>Legal Name of the Receipent</label>
          <input />
        </div>
      </section>

      <section>
        <div>
          <label>Email</label>
          <input />
        </div>
        <div>
          <label>Swift Code (Optional)</label>
          <input />
        </div>
      </section>

      <section>
        <div>
          <label>Account Number</label>
          <input />
        </div>
      </section>

      <section>
        <div>
          <label>IBAN (Optional)</label>
          <input />
        </div>
        <div>
          <label>Bank Name</label>
          <input />
        </div>
      </section>

      <section>
        <div>
          <label>Transaction Remark</label>
          <input />
        </div>
        <div>
          <label>Occupation</label>
          <input />
        </div>
      </section>

      <div>
        <button>Previous</button>
        <button>Confirm</button>
      </div>

      <div>
        <p>SwiftTransafer sends money to bank accounts.LOoking to send money another way?</p>
        <a href="google.com">Find out more</a>
      </div>
    </div>
  );
};

export default Receipent;