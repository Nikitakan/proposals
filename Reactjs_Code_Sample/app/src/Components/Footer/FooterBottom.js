import { CardGiftcard, ContactSupport, Stars, Work } from "@material-ui/icons";
import React from "react";

const FooterBottom = () => {
  return (
    <div className="d-flex text-white justify-content-evenly p-3">
      <div className="d-flex ">
        <Work className="text-warning" />
        <p className="mt-1 ms-1">Sell On Flipkart</p>
      </div>

      <div className="d-flex ">
        <Stars className="text-warning" />
        <p className="mt-1 ms-1">Advertise</p>
      </div>

      <div className="d-flex ">
        <CardGiftcard className="text-warning" />
        <p className="mt-1 ms-1">Gift Cards</p>
      </div>
      <div className="d-flex ">
        <ContactSupport className="text-warning" />
        <p className="mt-1 ms-1">Help Center</p>
      </div>

      <div className="d-flex ">
        <p className="">@2007-2021 Flipkart.com</p>
      </div>
    </div>
  );
};

export default FooterBottom;
