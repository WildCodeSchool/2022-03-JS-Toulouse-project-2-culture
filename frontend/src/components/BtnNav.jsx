import React from "react";
import "./BtnNav.css";
import BtnNext from "./BtnNext";
import BtnPrev from "./BtnPrev";

function BtnNav({ step, handleSubmitPrev, handleSubmitNext }) {
  return (
    <div className="BtnContainer">
      {step > 0 && step <= 3 ? (
        <BtnPrev step={step} handleSubmitPrev={handleSubmitPrev} />
      ) : (
        ""
      )}
      {step < 3 ? (
        <BtnNext step={step} handleSubmitNext={handleSubmitNext} />
      ) : (
        ""
      )}
    </div>
  );
}

export default BtnNav;
