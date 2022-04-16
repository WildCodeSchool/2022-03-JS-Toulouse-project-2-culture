import React from "react";
import listEvent from "../components/event";
import CardShowResults from "../components/CardShowResults";

function PrextexteProposition() {
  return (
    <div>
      <CardShowResults events={listEvent.records} />
    </div>
  );
}

export default PrextexteProposition;
