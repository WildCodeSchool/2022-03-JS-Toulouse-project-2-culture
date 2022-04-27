import BtnShowMore from "./BtnShowMore";
import CardTheme from "./CardTheme";
import "./CardTheme.css";
import { dateJJMMConverter } from "./functions";

function CardShowResults(props) {
  const { events } = props;
  const firstCulture = events.filter(
    (event) => event.fields.thematique === "Culture"
  )[0];
  const firstEnvironnement = events.filter(
    (event) => event.fields.thematique === "Environnement"
  )[0];
  const firstSport = events.filter(
    (event) => event.fields.thematique === "Sport"
  )[0];
  const firstBrocantes = events.filter(
    (event) =>
      event.fields.thematique === "Vides Grenier / Brocantes / Foires et salons"
  )[0];

  return (
    <div className="showcase">
      <h2>Vos pretextes</h2>
      <h3>Intello...</h3>
      <CardTheme
        title={firstCulture.fields.titre}
        date={dateJJMMConverter(firstCulture.fields.date_debut)}
        isFavorite={false}
        stylecard="Culture"
      />
      <BtnShowMore thematique="Culture" />
      <h3>Ecolo...</h3>
      <CardTheme
        title={firstEnvironnement.fields.titre}
        date={dateJJMMConverter(firstEnvironnement.fields.date_debut)}
        isFavorite={false}
        stylecard="Environnement"
      />{" "}
      <BtnShowMore thematique="Environnement" />
      <h3>Sportif...</h3>
      <CardTheme
        title={firstSport.fields.titre}
        date={dateJJMMConverter(firstSport.fields.date_debut)}
        isFavorite={false}
        stylecard="Sport"
      />
      <BtnShowMore thematique="Sport" />
      <h3>Flanneur...</h3>
      <CardTheme
        title={firstBrocantes.fields.titre}
        date={dateJJMMConverter(firstBrocantes.fields.date_debut)}
        isFavorite={false}
        stylecard="Brocantes"
      />
      <BtnShowMore thematique="Brocantes" />
    </div>
  );
}

export default CardShowResults;
