import CardTheme from "./CardTheme";
import "./CardTheme.css";

function CardShowcase() {
  return (
    <div className="showcase">
      <CardTheme
        title="Culture"
        date="01/04"
        isFavorite={false}
        stylecard="themeCulture"
      />
      <CardTheme
        title="Environnement"
        date="01/04"
        isFavorite={false}
        stylecard="themeEnvironnement"
      />
      <CardTheme
        title="Sport"
        date="01/04"
        isFavorite={false}
        stylecard="themeSport"
      />
      <CardTheme
        title="Vide-Grenier"
        date="01/04"
        isFavorite={false}
        stylecard="themeVideGrenier"
      />
    </div>
  );
}

export default CardShowcase;
