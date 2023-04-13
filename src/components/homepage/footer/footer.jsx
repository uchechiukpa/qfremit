import React from "react";
import footerlogo from "./boxlogo.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="flex flex-row sm:flex-col bg-maincolor px-5 pt-5 mx-auto max-w-7xl lg:mt-20 md:mt-14 sm:mt-14 font-sans text-white">
      <div className="flex flex-row sm:flex-col lg:basis-3/5 md:basis-3/5 lg:justify-center ">
        <div className="lg:px-3 lg:basis-3/4">
          <div className="footer-logo">
            <img src={footerlogo} />
            <h3 className="text-white font-bold">SwiftTransfer</h3>
          </div>
          <p className="text-white text-xs">
            Regulated Ltd by the Financial Conduct Authority (FCA) under the
            Payment Service Regulations 2017. Registration number: 911527.
            Licensed and regulated by HMRC as a Money Services Business (MSB)
            License Number XLML00000134381. Registered as a Money Service
            Business with FINTRAC (Financial Transactions and Reports Analysis
            Centre of Canada). Registration Number M18252171
          </p>
          <p className=" text-xs">
            E27 UK Ltd is regulated Ltd by the Financial Conduct Authority (FCA)
            under the Payment Service Regulations 2017 as a Small Payment
            Institution. Registration number: 911527.Licensed and regulated by
            HMRC as a Money Services Business (MSB) with License Number
            XLML00000134381.
          </p>
          <p className="text-xs pt-5">
            E27 Partners Inc registered as a Money Service Business with FINTRAC
            (Financial Transactions and Reports Analysis Centre of Canada).
            Registration Number M18252171
          </p>
          <p className="text-xs pt-5">
            SwiftTransfer is the trading name for E27 Partners UK Ltd and E27
            Partners Inc
          </p>
        </div>

        <div className="sm:pt-5 lg:basis-1/2">
          <h3 className="text-white font-bold">Address</h3>
          <p className="text-white text-xs pt-5">
              Suite 17, Phase 2 Brooklands Court Business Centre Tunstall Road Leeds LSLL 5Hl
          </p>
        </div>
      </div>

      <div class=" sm:pt-5 flex flex-row sm:flex-col lg:basis-2/5 md:basis-2/5 lg:justify-center md:justify-center ">
        <div className="lg:pr-12 md:pr-8 ">
          <h3 className="text-white font-bold">Pages</h3>
          <div className="flex flex-col pt-2">
            <a className=" text-sm pt-2">process</a>
          </div>
        </div>
        <div className="sm:pt-5 lg:pl-12  md:pr-8">
          <h3 className="text-white font-bold">Legal</h3>
          <div className="flex flex-col pt-2">
            <a href="/privacypolicy" className="text-sm pt-2">
              Privacy Policy
            </a>
            <a href="/termsandconditions" className="text-sm pt-2">
              Terms & conditions
            </a>
            <a href="/disclaimer" className="text-sm pt-2">
              Disclaimer
            </a>
          </div>
        </div>
        <div className="sm:pt-5 lg:pl-12  md:pr-8">
          <h3 className="text-white font-bold">
            Contact
          </h3>

          <p class="flex items-center text-sm pt-2 justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              class="mr-3 h-5 w-5"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            contact@swifttransfers.co
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
