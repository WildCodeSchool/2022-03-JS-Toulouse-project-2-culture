import CardTheme from "./CardTheme";
import "./CardTheme.css";

function CardShowcase2(arrayEvent) {
  return (
    <div className="showcase">
      {arrayEvent.records.map((event) => (
        <CardTheme
          title={event.fields.titre}
          date={event.fields.date}
          isFavorite={false}
          stylecard="themeCulture"
        />
      ))}
    </div>
  );
}

export default CardShowcase2;
