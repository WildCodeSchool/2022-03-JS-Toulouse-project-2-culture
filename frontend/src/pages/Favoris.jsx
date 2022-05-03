import React, { useState, useEffect } from "react";

import "./Favoris.css";
import axios from "axios";
import { dateJJMMConverter } from "../components/functions";
import CardTheme from "../components/CardTheme";

function Favoris() {
  const [favorites, setFavorites] = useState([]);
  const listFavoriteId = Object.values(window.localStorage);

  useEffect(() => {
    const url =
      "https://data.laregion.fr/api/records/1.0/search/?dataset=agendas-participatif-des-sorties-en-occitanie&rows=400";
    axios
      .get(url)
      .then((res) =>
        setFavorites(
          listFavoriteId.map((id) =>
            res.data.records.find((event) => event.recordid === id)
          )
        )
      );
  }, []);
  return (
    <div className="favContainer">
      <h3>Vos favoris</h3>
      {favorites.map((event) => (
        <div className="favList">
          <CardTheme
            key={event.recordid}
            title={event.fields.titre}
            date={dateJJMMConverter(event.fields.date_debut)}
            isFavorite={false}
            stylecard={
              event.fields.thematique ===
              "Vides Grenier / Brocantes / Foires et salons"
                ? "Brocantes"
                : event.fields.thematique
            }
            recordid={event.recordid}
          />
        </div>
      ))}
    </div>
  );
}

export default Favoris;
