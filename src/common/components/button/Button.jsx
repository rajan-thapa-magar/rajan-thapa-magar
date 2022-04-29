import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <div className="b-wrapper">
      <button disabled={props.loading}>
        {props.buttonName}
        {props.loading && <img src={props.img} />}
      </button>
    </div>
  );
};

export { Button };
