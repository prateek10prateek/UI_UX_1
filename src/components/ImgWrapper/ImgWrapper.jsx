/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ImgWrapper = ({ className }) => {
  return (
    <img
      className={`img-wrapper ${className}`}
      alt="Message light"
      src="https://generation-sessions.s3.amazonaws.com/c6f7e29ba2154775db96adfa96ef8967/img/message-light-5.png"
    />
  );
};
