import React from "react";

const transactionRefunds = [
  {
    id: 1,
    amount: "10,000.00",
    trasactionId: "dsvndlmrkok1234ijgbnvffdnc",
    dateTime: "21/02/2023",
    email: "abeniakanni@email.com",
    status: "succesful",
  },
];

const TransactionActivity = () => {
  return (
    <div>
      <div>
        <div>
          <p>History</p>
          <img />
        </div>
        <div>
          <p>Account Statements</p>
          <img />
        </div>
        <div>
          <p>Withdrawal Record</p>
          <img />
        </div>

        <div>
          <p>Query Transactions</p>
          <img />
        </div>
      </div>

      <div>
        <div>
          <h2>Transaction Refunds</h2>
          <div>
            <h3>Search</h3>
            <img />
          </div>

          <div>
            <h3>Last 7 days</h3>
            <img />
          </div>
        </div>

        <table>
          <tr>
            <div>
              <th>S/N</th>
              <img />
            </div>
            <div>
              <th>Amount Paid</th>
              <img />
            </div>
            <div>
              <th>Transaction ID</th>
              <img />
            </div>
            <div>
              <th>Date & Time</th>
              <img />
            </div>
            <div>
              <th>Email</th>
              <img />
            </div>
            <div>
              <th>Status</th>
              <img />
            </div>
          </tr>

          {transactionRefunds.map((item) => {
            <tr>
              <td>{item.id}</td>
              <td>{item.amount}</td>
              <td>{item.trasactionId}</td>
              <td>{item.dateTime}</td>
              <td>{item.email}</td>
              <td>{item.status}</td>
            </tr>;
          })}
        </table>
        <div>
            <div>
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionActivity;
