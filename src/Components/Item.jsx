import React from "react";
// import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-body mx-auto p-0 w-100">
          <div className="px-2">
            <img
              src={props.image}
              className="card-img-top mx-auto my-2"
              alt="..."
            />
          </div>

          <div className="border-top p-2 bg-body-secondary text-info-emphasis">
            <h6 className="card-title text-center fw-bold">{props.title}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
