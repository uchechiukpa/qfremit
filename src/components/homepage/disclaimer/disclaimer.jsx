import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./disclaimer.css";

function Disclaimer() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="px-5 mx-auto max-w-7xl">
        <h1 className="text-maincolor text-3xl">Disclaimer</h1>
        <p className="mt-5 text-sm font-bold">
          Welcome to SwiftTransfer! By using our website, you agree to the
          following terms and conditions:
        </p>
        <p className="mt-11 text-sm">
          SwiftTransfer makes no warranty or representation that this website
          will meet your requirements, that it will be of satisfactory quality,
          that it will be fit for a particular purpose, that it will not
          infringe the rights of third parties, and that it will be compatible
          with all systems. We make no guarantee of any specific results from
          the use of this website.
        </p>
        <p className="mt-11 text-sm">
          Though we have tried to make infallible and current information
          available on our website, we give no guarantees, express or implied,
          concerning the entirety, precision, and aptness of the information and
          services provided on the website.
        </p>
        <p className="mt-11 text-sm">
          Our website is intended to provide broad information about our money
          transfer services; it should not be considered as a basis for any kind
          of financial, budgetary or trade advice.
        </p>
        <p className="mt-11 text-sm">
          Exchange rates on the website is correct at the time of going online.
          Though it may vary from time to time, as SwiftTransfer works with
          multiple currencies. The exchange rate at the time of a transaction
          may differ from the next. SwiftTransfer reserves the right to change
          rates and alter or remove any special offers from time to time and as
          necessary.
        </p>
        <p className="mt-11 text-sm">
          We are not liable for any damage or loss resulting from your use of
          our website, including but not limited to direct, indirect, penal, and
          incidental damages.
        </p>
        <p className="mt-11 text-sm">
          No part of this website is intended to constitute a contractual offer
          capable of acceptance. No goods and/or services are sold through this
          website, and product and/or service details are provided for
          information purposes only.
        </p>
        <p className="mt-11 text-sm">
          Whilst every effort has been made to ensure that all graphical
          representations of products and/or descriptions of services available
          from SwiftTransfer correspond to the actual products and/or services,
          SwiftTransfer is not responsible for any variations from these
          descriptions.
        </p>

        <p className="mt-11 text-sm">
          While we endeavour to provide utmost security on our website, we
          cannot make warranties of the absence of viruses and malware.
        </p>
        <p className="mt-11 text-sm">
          Please contact us prior to visiting if you wish to enquire as to the
          availability of any products and/or services. Such enquiry does not
          give rise to implied warranty that the products and/or services
          forming the subject matter of your enquiry will be available upon your
          arrival at our premises.
        </p>
        <p className="mt-11 text-sm">
          Every effort is made to keep the website up and running smoothly.
          However, SwiftTransfer will not be responsible for the website being
          temporarily unavailable due to technical issues beyond our control.
        </p>
        <p className="mt-11 text-sm">
          You may find links to third-party websites on our website; please note
          we are not culpable for the availability and functionality of such
          websites. We do not necessarily infer an endorsement of the opinions
          or representations on such websites.
        </p>
        <p className="mt-11 text-sm">
          It is within our rights to amend these terms and conditions as
          necessary. If you continue to use our website after any alteration to
          the terms, it is assumed that you agree to the modified conditions.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Disclaimer;
