/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";

import "./Favoris.css";
import axios from "axios";
import { dateJJMMConverter, stringStyliser } from "../components/functions";
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

  function refresh() {
    window.location.reload();
  }
  return (
    <div className="favContainer">
      <h3>Vos favoris</h3>
      {favorites.length > 0 ? (
        favorites.map((event) => (
          <div key={event.recordid} className="favList">
            <CardTheme
              // eslint-disable-next-line react/jsx-no-bind
              refresh={refresh}
              key={event.recordid}
              title={stringStyliser(event.fields.titre, 45)}
              date={dateJJMMConverter(event.fields.date_debut)}
              isFavorite={false}
              stylecard={
                event.fields.thematique.split(" ").includes("Emploi")
                  ? "Autres"
                  : event.fields.thematique ===
                    "Vides Grenier / Brocantes / Foires et salons"
                  ? "Brocantes"
                  : event.fields.thematique
              }
              recordid={event.recordid}
            />
          </div>
        ))
      ) : (
        <h4>Pas de favoris</h4>
      )}
    </div>
  );
}

export default Favoris;
