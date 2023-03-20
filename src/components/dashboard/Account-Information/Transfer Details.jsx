import React from "react";

const senderDetails = [
  {
    name: "Transaction Type",
    value: "Transafer International",
  },
  {
    name: "currency",
    value: "$",
  },
  {
    name: "Amount",
    value: "10,000.00",
  },
  {
    name: "Fees",
    value: "20.00",
  },
  {
    name: "Exchange Rate",
    value: 680.0,
  },
  {
    name: "Converted Amount",
    value: "6,800,000.00",
  },
  {
    name: "Description",
    value: "TRANSFER-GTBANK-0123456789-RUNFVDCMMCC",
  },
  {
    name: "Transaction ID",
    value: "dsvndlmrko1234jjgbvffdnc",
  },
  {
    name: "Timestamp",
    value: "21/02/2023@12.34PM",
  },
];

const receiverDetails = [
  {
    name: "Full Name",
    value: "Abenni Akanni",
  },
  {
    name: "currency",
    value: "$",
  },
  {
    name: "Amount",
    value: "10,000.00",
  },
  {
    name: "Email",
    value: "adeniakanni@gmail.com",
  },
  {
    name: "Account Number",
    value: "2104325679",
  },
  {
    name: "Transaction Remark",
    value: "Payment for rizzzz",
  },
  {
    name: "Swift Code",
    value: "019919",
  },
  {
    name: "IBAN Number",
    value: "BE788191991",
  },
  {
    name: "Bank Code",
    value: "044GTBANK",
  },
];

const PersonalDetails = () => {
  return (
    <div>
      <h2>Personal Details</h2>
      <div>
        <div>
          <h2>You sent Abeni</h2>
          <h1>$1000000</h1>
        </div>
        {senderDetails.map((item) => {
          <div>
            <p>{item.name}</p>
            <p>{item.value}</p>
          </div>;
        })}
      </div>

      <div>
        <div>
          <h2>Abeni Akanni Received</h2>
          <h1>$1000000</h1>
        </div>
        {receiverDetails.map((item) => {
          <div>
            <p>{item.name}</p>
            <p>{item.value}</p>
          </div>;
        })}
      </div>

      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default PersonalDetails;
