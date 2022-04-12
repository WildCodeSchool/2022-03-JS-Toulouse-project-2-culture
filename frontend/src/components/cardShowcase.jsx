import React from "react";
import CardTheme from "./cardTheme";

function CardShowcase() {
  return (
    <div className="showcase">
      <CardTheme title="Culture" stylecard="themeCulture" />
      <CardTheme title="Environnement" stylecard="themeEnvironnement" />
      <CardTheme title="Sport" stylecard="themeSport" />
      <CardTheme title="VideGrenier" stylecard="themeVideGrenier" />
    </div>
  );
}

export default CardShowcase;
