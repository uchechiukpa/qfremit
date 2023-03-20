import React from "react";

const SwiftTransfer = () => {
  return (
    <div>
      <div>
        <h2>This option takes your SwiftTransfer Wallet</h2>
        <p>Insuffient balance for this transaction</p>
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

export default SwiftTransfer;