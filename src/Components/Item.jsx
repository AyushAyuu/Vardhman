import React from "react";
// import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-body  p-0 w-100">
          <div className="text-align-center px-2 mx-auto w-100 c-img">
            <img
              src={props.image}
              className=" p-2 mx-auto d-block"
              alt="..."
              width={130}
            />
          </div>

          <div className=" p-2 bg-body-secondary text-info-emphasis">
            <h6 className="card-title text-center fw-bold">{props.title}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
