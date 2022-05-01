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
      )
      .then(console.log(favorites));
  }, []);

  // const arrayFav = listFavorite.map((id) =>
  //   eventsAPI.find((event) => event.recordid === id)
  // );
  // console.log(arrayFav);
  return (
    <div className="favContainer">
      <h3>Vos favoris</h3>
      {/* {listFavorite.map((fav) => (
        <li>{fav}</li>
      ))} */}

      {favorites.map((event) => (
        <div className="favList">
          <CardTheme
            key={event.recordid}
            title={event.fields.titre}
            date={dateJJMMConverter(event.fields.date_debut)}
            isFavorite={false}
            stylecard="Brocantes"
            recordid={event.recordid}
          />
        </div>
      ))}
    </div>
  );
}

export default Favoris;
