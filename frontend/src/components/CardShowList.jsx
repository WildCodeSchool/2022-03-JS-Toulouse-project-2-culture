import CardTheme from "./CardTheme";
import "./CardTheme.css";
import dateConverter from "./functions";

function CardShowList(props) {
  const { events } = props;
  return (
    <div className="showcase">
      {events.map((event) => (
        <CardTheme
          title={event.fields.titre}
          date={dateConverter(event.fields.date_debut)}
          isFavorite={false}
          stylecard={
            event.fields.thematique ===
            "Vides Grenier / Brocantes / Foires et salons"
              ? "Brocantes"
              : event.fields.thematique
          }
        />
      ))}
      ;
    </div>
  );
}

export default CardShowList;
