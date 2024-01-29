import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

function Process() {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen justify-between">
        <main className="px-5 mx-auto max-w-7xl font-manrope">
          <h1 className="text-maincolor text-3xl lg:mt-8 md:mt-8 sm:mt-5">
            How It works
          </h1>
          <p className="mt-5 text-sm">
          If you're looking for a quick and reliable way to send money to your loved ones, pay bills, or conduct business transactions, you're in the right place. With QF Remit, you can maximize the value of your money by covering fees, vendor expenses, bills, and managing business dealings—all with just a few clicks!
          </p>
          <div>
            <p className="mt-5 text-sm">
              {" "}
              QF Remit offers convenient and secure cross-border remittance from a smartphone, tablet, or computer in these easy steps:
            </p>
            <ol className="text-sm list-decimal ">
              <li className="mt-5 ml-5">Sign up for free</li>
              <li className="mt-5 ml-5">
                Enter amount and recipient's details
              </li>
              <li className="mt-5 ml-5">
                Select payment method - send your money via bank transfer or
                debit/credit card
              </li>
            </ol>
          </div>
          <p className="mt-5 text-sm">
          With our user-friendly platform, you can easily manage your transactions and keep track of your payment history, ensuring you always know where your money is going.
          </p>
          <p className="mt-5 text-sm">
            {" "}
            We take your security seriously, which is why we use the latest encryption technologies to protect your personal and financial information. Our platform is also designed to be user-friendly, with intuitive interfaces that make it easy to navigate and complete transactions quickly and easily.
          </p>
          <p className="mt-5 text-sm">
            {" "}
            Whether you need to send money for personal or business purposes, pay bills, or make vendor payments, QF Remit is the smart choice for a fast, secure, and reliable payment service. So, why wait? Sign up today and start sending money with confidence!
            {" "}
          </p>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Process;
