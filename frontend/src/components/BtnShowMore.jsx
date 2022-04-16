import React from "react";

function BtnShowMore(props) {
  const { Thematique } = props;
  return (
    <div className="BtnShowMore">
      <a href={`/${Thematique}`}>Afficher plus &gt;</a>
    </div>
  );
}

export default BtnShowMore;
