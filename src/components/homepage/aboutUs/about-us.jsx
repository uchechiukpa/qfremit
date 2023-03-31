import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

function AboutUs() {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen justify-between">
      <main className="px-5 mx-auto max-w-7xl">
        <h1 className="text-maincolor text-3xl lg:mt-8 md:mt-8 sm:mt-5">About Us</h1>
        <p className="mt-5 text-sm">
          SwiftTransfer is a brokerage and remittance platform that provides
          virtual solution to cross-continent money transfer.
        </p>
        <p className="mt-5 text-sm">
          We believe that global payment should be hassle-free; that's why we
          have developed a payment ecosystem that prioritizes simplicity and
          efficiency.
        </p>
        <p className="mt-5 text-sm">
          {" "}
          Our platform has made international payments easy with the fairest
          charge you will get anywhere. We have built a seamless framework to
          help you move money around 30+ countries, with over 20 currencies
          delivered instantly.
        </p>
        <p className="mt-5 text-sm">
          {" "}
          We offer competitive exchange rates and low transaction fees. Our
          superior technology not only helps you to move money around the world,
          it also provides multiple currency conversion with zero wait time.
        </p>
        <p className="mt-5 text-sm">
          {" "}
          Our core competencies are transparency and reliability.
        </p>
        <p className="mt-5 text-sm">
          {" "}
          Our technological framework provides the highest standard of security
          that ensures your money and financial information are impregnable.{" "}
        </p>

        <p className="mt-5 text-sm">
          We strictly adhere to regulatory and ethical conduct, in addition to
          being licensed in the countries where we operate. We are fully
          committed to delivering outstanding money transfer services that are
          fast and secure.
        </p>
        <p className="mt-5 text-sm">
          When you are looking to send money overseas without a hitch, be rest
          assured that SwiftTransfer is your best bet. Navigating our
          user-friendly app will convince you that our processes are
          straightforward, easy-peasy!
        </p>
      </main>

      <Footer />
      </div>

    </div>
  );
}

export default AboutUs;
