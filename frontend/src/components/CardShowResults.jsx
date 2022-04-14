import CardTheme from "./CardTheme";
import "./CardTheme.css";

function CardShowResults() {
  return (
    <div className="showcase">
      <h1>Vos pretextes</h1>
      <h2>Intello...</h2>
      <CardTheme
        title="Culture"
        date="01/04"
        isFavorite={false}
        stylecard="Culture"
      />
      <h2>Ecolo...</h2>

      <CardTheme
        title="Environnement"
        date="08/04"
        isFavorite={false}
        stylecard="Environnement"
      />
      <h2>Sportif...</h2>

      <CardTheme
        title="Sport"
        date="02/04"
        isFavorite={false}
        stylecard="Sport"
      />
      <h2>Flanneur...</h2>

      <CardTheme
        title="Brocantes"
        date="02/04"
        isFavorite={false}
        stylecard="Brocantes"
      />
    </div>
  );
}

export default CardShowResults;
