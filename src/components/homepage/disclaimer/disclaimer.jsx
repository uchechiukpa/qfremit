import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./disclaimer.css";

function Disclaimer() {
  return (
    <div >
      <Header />
      <div className="flex flex-col h-screen justify-between">
      <main className="px-5 mx-auto max-w-7xl lg:mt-8 md:mt-8 sm:mt-5 font-manrope">
        <h1 className="text-maincolor text-3xl">Disclaimer</h1>
        <p className="mt-5 text-md font-bold">
          Welcome to QF Remit! By using our website, you agree to the
          following terms and conditions:
        </p>
        <ul className="list-disc">
        <li className="mt-11 text-sm">
        QF Remit makes no warranty or representation that this website will meet your requirements, be of satisfactory quality, fit for a specific purpose, free from infringement of third-party rights, or compatible with all systems. We do not guarantee any specific results from the use of this website.
        </li>
        <li className="mt-11 text-sm">
        Though we have tried to make infallible and current information available on our website, we give no guarantees, express or implied, concerning the entirety, precision, and suitability of the information and services provided on the website.
        </li>
        <li className="mt-11 text-sm">
        Our website is intended to provide broad information about our money transfer services; it should not be considered as a basis for any kind of financial, budgetary or trade advice.
        </li>
        <li className="mt-11 text-sm">
        The exchange rates displayed on the website are accurate at the time of publication. As QF Remit deals with multiple currencies, these rates may vary over time. The exchange rate applicable to a transaction may differ from subsequent rates. QF Remit retains the right to modify rates, as well as adjust or withdraw any special offers periodically and when deemed necessary.
        </li>
        <li className="mt-11 text-sm">
        We are not liable for any damage or loss resulting from your use of our website, including but not limited to direct, indirect, penal, and incidental damages.
        </li>
        <li className="mt-11 text-sm">
        This website does not intend to present a contractual offer that can be accepted. We do not sell any goods or services through this platform, and the details regarding products and services are provided solely for informational purposes
        </li>
        <li className="mt-11 text-sm">
        Despite our efforts to ensure that all graphical representations and descriptions of services offered by QF Remit accurately match the actual services, we cannot be held responsible for any discrepancies or variations from these descriptions.
        </li>

        <li className="mt-11 text-sm">
        While we endeavour to provide utmost security on our website, we cannot make warranties of the absence of viruses and malware.
        </li>
        <li className="mt-11 text-sm">
        Kindly contact us before your visit if you'd like to inquire about the availability of specific products and services. However, please note that such inquiries do not imply a guarantee that the products or services discussed will be available upon your arrival at our premises.
        </li>
        <li className="mt-11 text-sm">
        Every effort is made to keep the website up and running smoothly. However, QF Remit will not be responsible for the website being temporarily unavailable due to technical issues beyond our control.
        </li>
        <li className="mt-11 text-sm">
        You may find links to third-party websites on our website; please note we are not culpable for the availability and functionality of such websites. We do not necessarily infer an endorsement of the opinions or representations on such websites.
        </li>
        </ul>
      </main>
      <Footer />
      </div>

    </div>
  );
}

export default Disclaimer;
