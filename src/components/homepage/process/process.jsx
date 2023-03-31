import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

function Process() {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen justify-between">
        <main className="px-5 mx-auto max-w-7xl">
          <h1 className="text-maincolor text-3xl lg:mt-8 md:mt-8 sm:mt-5">
            How It works
          </h1>
          <p className="mt-5 text-sm">
            SwiftTransfer is a remittance platform that allows you to safely
            send money abroad from a smartphone, tablet or computer.
          </p>
          <div>
            <p className="mt-5 text-sm">
              {" "}
              SwiftTransfer offers convenient and secure transfers in these easy
              steps:
            </p>
            <ul className="list-disc text-sm">
              <li className="mt-5 ml-5">Sign up for free</li>
              <li className="mt-5 ml-5">
                Enter amount and recipient's details
              </li>
              <li className="mt-5 ml-5">
                Select payment method - send your money with bank transfer or
                debit/credit card
              </li>
            </ul>
          </div>
          <p className="mt-5 text-sm">
            If you're looking for a reliable and convenient way to send money to
            your loved ones, pay bills or expenses, or make business
            transactions, an online remittance website can provide a fast and
            secure solution. With SwiftTransfer you can maximize the value of
            your money by paying for fees, vendor expenses, bills, business
            associates, and loved ones, all with just a few clicks.
            SwiftTransfer makes it easy to transfer funds quickly and securely.
          </p>
          <p className="mt-5 text-sm">
            {" "}
            With our user-friendly platform, you can easily manage your
            transactions and keep track of your payment history, so you always
            know where your money is going.
          </p>
          <p className="mt-5 text-sm">
            {" "}
            We take your security seriously, which is why we use the latest
            encryption technologies to protect your personal and financial
            information. Our platform is also designed to be user-friendly, with
            intuitive interfaces that make it easy to navigate and complete
            transactions quickly and easily.
          </p>
          <p className="mt-5 text-sm">
            {" "}
            Whether you need to send money for personal or business purposes,
            pay bills, or make vendor payments, SwiftTransfer is the smart
            choice for anyone looking for a fast, secure, and reliable
            remittance service. So why wait? Sign up today and start sending
            money with confidence!{" "}
          </p>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Process;
