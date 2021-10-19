import React from "react";

const ItemRow = ({ dataiUrl, discount, tagline, shortTitle }) => {
  console.log(discount);

  return (
    <div className="p-2 text-center">
      <img src={dataiUrl} alt="Gril image" width="140" height="150px" />
      <h6 className="mt-3">{shortTitle}</h6>
      <p className="text-success">{discount} </p>
      <p className="text-secondary">{tagline}</p>
    </div>
  );
};

export default ItemRow;
