import React from "react";

const FooterTop = () => {
  return (
    <div
      className="d-flex p-5 justify-content-between mx-2"
      style={{ background: "#172337", fontSize: "12px" }}
    >
      <div className="d-flex flex-column text-white" style={{}}>
        <p className="text-secondary">ABOUT</p>
        <span className="mt-1">Contact Us</span>
        <span className="mt-1">About Us</span>
        <span className="mt-1">Careers</span>
        <span className="mt-1">Flipkart Stories</span>
        <span className="mt-1">Press</span>
        <span className="mt-1">Flipkart Wholeale</span>
        <span className="mt-1">Corporate Information</span>
      </div>

      <div className="d-flex flex-column text-white">
        <p className="text-secondary">HELP</p>
        <span className="mt-1">Payments</span>
        <span className="mt-1">Shipping</span>
        <span className="mt-1">Cancellation & Returns</span>
        <span className="mt-1">FAQ</span>
        <span className="mt-1">Report</span>
      </div>

      <div className="d-flex flex-column text-white">
        <p className="text-secondary">POLICY</p>
        <span className="mt-1">Return policy</span>
        <span className="mt-1">Terms Of Use</span>
        <span className="mt-1">Security</span>
        <span className="mt-1">Privacy</span>
        <span className="mt-1">Sitemap</span>
        <span className="mt-1">ERP Complilance</span>
      </div>

      <div className="d-flex flex-column text-white">
        <p className="text-secondary">SOCIAL</p>
        <span className="mt-1"> Facebook</span>
        <span className="mt-1">Twitter</span>
        <span className="mt-1">YouTube</span>
      </div>

      <div
        className="d-flex flex-column text-white
      border-start border-secondary ps-4
      "
      >
        <p className="text-secondary">Mail Us:</p>
        <span className="mt-1">Flipkart Internet Private Limited.</span>
        <span className="mt-1">Buildings Alyssa, Begonia </span>
        <span className="mt-1">Clove Embassy Tech Village,</span>
        <span className="mt-1">
          Outer Ring Road , Devarabeesanahalli Village,
        </span>
        <span className="mt-1">Bengaluru, 560103</span>
        <span className="mt-1">Karnataka, INDIA</span>
      </div>

      <div className="d-flex flex-column text-white">
        <p className="text-secondary">RESGISTERED OFFICE aDDRESS:</p>
        <span className="mt-1">Flipkart Internet Private Limited.</span>
        <span className="mt-1">Buildings Alyssa, Begonia </span>
        <span className="mt-1">Clove Embassy Tech Village,</span>
        <span className="mt-1">
          Outer Ring Road , Devarabeesanahalli Village,
        </span>
        <span className="mt-1">Bengaluru, 560103</span>
        <span className="mt-1">Karnataka, INDIA</span>
        <span className="mt-1">CIN : U51109KA2012PTC066107</span>
        <span className="mt-1">
          Telephone:
          <span className="text-info"> 1800 202 9898A</span>
        </span>
      </div>
    </div>
  );
};

export default FooterTop;
