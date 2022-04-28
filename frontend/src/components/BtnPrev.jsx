import React from "react";

function BtnPrev(props) {
  const { step, handleSubmitPrev } = props;
  return (
    <button type="submit" className="BtnNext" onClick={handleSubmitPrev}>
      {step === 0 ? "Trouver un prétexte" : "< Précédent"}
    </button>
  );
}

export default BtnPrev;
