import CardTheme from "./CardTheme";
import "./CardTheme.css";
import dateJJMMConverter from "./functions";

function CardShowList(props) {
  const { events, thematique } = props;
  return (
    <div className="showcase">
      <h3>Tous les résultats</h3>

      {events
        .filter(
          (event) =>
            event.fields.thematique ===
            (thematique === "Brocantes"
              ? "Vides Grenier / Brocantes / Foires et salons"
              : thematique)
        )
        .map((event) => (
          <CardTheme
            key={event.fields.recordid}
            title={event.fields.titre}
            date={dateJJMMConverter(event.fields.date_debut)}
            isFavorite={false}
            stylecard={
              event.fields.thematique ===
              "Vides Grenier / Brocantes / Foires et salons"
                ? "Brocantes"
                : event.fields.thematique
            }
          />
        ))}
    </div>
  );
}

export default CardShowList;
