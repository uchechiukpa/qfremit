import React from "react";

const BankTransfer = () => {
  return (
    <div>
      <div>
        <h3>Choose Bank</h3>
        <input />
      </div>

      <div>
        <h3>Account Number</h3>
        <input />
      </div>

      <div>
        <label>Phone Number</label>
        <input />
      </div>

      <div>
        <input type="checkbox" />
        <p>
          I accept the <a href="google.com">Terms and Conditions</a>
          <span> & </span> <a>Privacy Policy </a>
        </p>
      </div>

      <button>Transfer</button>
    </div>
  );
};

export default BankTransfer;
