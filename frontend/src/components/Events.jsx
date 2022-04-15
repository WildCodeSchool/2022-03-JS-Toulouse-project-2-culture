import React from "react";
import Detailspretext from "./Detailspretexte";

// const events = [
//   {
//     datasetid: "agendas-participatif-des-sorties-en-occitanie",
//     recordid: "64e77e38aa43ad9648cf4bf62f19a0140ba6edc5",
//     fields: {
//       thematique: "Culture",
//       type: "Agenda / Mes sorties",
//       code_insee: "30351",
//       geo_shape: {
//         coordinates: [4.79442463484, 43.9768311768],
//         type: "Point",
//       },
//       url: "https://www.laregion.fr/18eme-FESTIVAL-DU-POLAR",
//       date: "Du 9 au 13 novembre",
//       adresse:
//         "Chartreuse de Villeneuve lez Avignon, médiathèque St Pons, monuments, 30400 Villeneuve-lès-Avignon - Gard",
//       titre: "18ème Festival du Polar",
//       date_fin: "2022-11-13",
//       date_debut: "2022-11-09",
//       commune: "Villeneuve-lès-Avignon",
//       geo_point_2d: [43.9768311768, 4.79442463484],
//       description:
//         "Le Festival du polar réunit une trentaine d’auteurs de romans noirs et policiers, français et étrangers pour des rencontres, tables rondes, lectures, conférences, dédicaces à la Chartreuse. S’ajoute également des expositions, projections, spectacles, ateliers et jeux ainsi qu’une&nbsp;(...)",
//     },
//     geometry: {
//       type: "Point",
//       coordinates: [4.79442463484, 43.9768311768],
//     },
//     record_timestamp: "2022-04-13T08:46:03.975Z",
//   },
// ];

function Events(props) {
  const { event } = props;
  return (
    <div className="App">
      <Detailspretext
        thematique={event.fields.thematique}
        name={event.fields.titre}
        date={event.fields.date}
        description={event.fields.description}
        url={event.fields.url}
        adresse={event.fields.adresse}
      />
      )
    </div>
  );
}

export default Events;
