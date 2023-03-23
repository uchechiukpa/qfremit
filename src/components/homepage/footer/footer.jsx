import React from "react";
import image from "./map.png";
import footerlogo from  "./boxlogo.png"
import "./footer.css";

function Footer() {
  return (
    <div className="footer-flex-container">
      <div className="footer-grid-container">
        <div className="footer-left-div">
            <div className="footer-logo">
                <img src={footerlogo}/>
                <h3>Swift Transfer</h3>
            </div>
          <p>
            Regulated Ltd by the Financial Conduct Authority (FCA) under the
            Payment Service Regulations 2017. Registration number: 911527.
            Licensed and regulated by HMRC as a Money Services Business (MSB)
            License Number XLML00000134381. Registered as a Money Service
            Business with FINTRAC (Financial Transactions and Reports Analysis
            Centre of Canada). Registration Number M18252171
          </p>
        </div>

        <div className="footer-left-right-div">
          <h3>UK OFFICE</h3>
          <p>
            E27 Partners UK Ltd Suite 17, Phase 2 Brooklands Court Business
            Centre Tunstall Road Leeds West Yorkshire LS11 5HL Phone: +44
            7951852151
          </p>
        </div>
      </div>

      <div class="footer-right-grid-container">
        <div>
          <h3>Pages</h3>
          <div>
            <a>How it works</a>
            <a>Pricing</a>
            <a>FAQ</a>
          </div>
        </div>
        <div>
          <h3>Serives</h3>
          <div>
            <a href="/privacypolicy">Privacy Policy</a>
            <a href="/termsandconditions">Terms & conditions</a>
            <a href="/disclaimer">Disclaimer</a>
          </div>
        </div>

        <div>
          <h3>Maps Location</h3>
          <div>
            <img src={image} alt="map" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
