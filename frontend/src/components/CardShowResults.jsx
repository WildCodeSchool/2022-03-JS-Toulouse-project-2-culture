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
  const firstAutres = events.filter(
    (event) =>
      event.fields.thematique !== "Culture" &&
      event.fields.thematique !== "Environnement" &&
      event.fields.thematique !== "Sport" &&
      event.fields.thematique !== "Vides Grenier / Brocantes / Foires et salons"
  )[0];

  return (
    <div className="showcase">
      <h2>Vos pretextes</h2>
      <h3>Intello...</h3>
      {console.log(
        firstCulture,
        firstEnvironnement,
        firstSport,
        firstBrocantes,
        firstAutres
      )}
      {firstCulture ? (
        <>
          <CardTheme
            title={firstCulture.fields.titre}
            date={dateJJMMConverter(firstCulture.fields.date_debut)}
            isFavorite={false}
            stylecard="Culture"
          />
          <BtnShowMore thematique="Culture" />
        </>
      ) : (
        "Pas de résultats"
      )}
      <h3>Ecolo...</h3>
      {firstEnvironnement ? (
        <>
          <CardTheme
            title={firstEnvironnement.fields.titre}
            date={dateJJMMConverter(firstEnvironnement.fields.date_debut)}
            isFavorite={false}
            stylecard="Environnement"
          />
          <BtnShowMore thematique="Environnement" />
        </>
      ) : (
        "Pas de résultats"
      )}
      <h3>Sportif...</h3>
      {firstSport ? (
        <>
          <CardTheme
            title={firstSport.fields.titre}
            date={dateJJMMConverter(firstSport.fields.date_debut)}
            isFavorite={false}
            stylecard="Sport"
          />
          <BtnShowMore thematique="Sport" />
        </>
      ) : (
        "Pas de résultats"
      )}

      <h3>Flanneur...</h3>
      {firstBrocantes ? (
        <>
          <CardTheme
            title={firstBrocantes.fields.titre}
            date={dateJJMMConverter(firstBrocantes.fields.date_debut)}
            isFavorite={false}
            stylecard="Brocantes"
          />
          <BtnShowMore thematique="Brocantes" />
        </>
      ) : (
        "Pas de résultats"
      )}
      <h3>Autres...</h3>
      {firstAutres ? (
        <>
          <CardTheme
            title={firstAutres.fields.titre}
            date={dateJJMMConverter(firstAutres.fields.date_debut)}
            isFavorite={false}
            stylecard="Autres"
          />
          <BtnShowMore thematique="Autres" />
        </>
      ) : (
        "Pas de résultats"
      )}
    </div>
  );
}

export default CardShowResults;
