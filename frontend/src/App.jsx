import "./App.css";
import CardShowcase from "./components/CardShowcase";
import CardShowcase2 from "./components/CardShowcase2";

function App() {
  const listEvent = {
    nhits: 396,
    parameters: {
      dataset: "agendas-participatif-des-sorties-en-occitanie",
      rows: 10,
      start: 0,
      format: "json",
      timezone: "UTC",
    },
    records: [
      {
        datasetid: "agendas-participatif-des-sorties-en-occitanie",
        recordid: "64e77e38aa43ad9648cf4bf62f19a0140ba6edc5",
        fields: {
          thematique: "Culture",
          type: "Agenda / Mes sorties",
          code_insee: "30351",
          geo_shape: {
            coordinates: [4.79442463484, 43.9768311768],
            type: "Point",
          },
          url: "https://www.laregion.fr/18eme-FESTIVAL-DU-POLAR",
          date: "Du 9 au 13 novembre",
          adresse:
            "Chartreuse de Villeneuve lez Avignon, médiathèque St Pons, monuments, 30400 Villeneuve-lès-Avignon - Gard",
          titre: "18ème Festival du Polar",
          date_fin: "2022-11-13",
          date_debut: "2022-11-09",
          commune: "Villeneuve-lès-Avignon",
          geo_point_2d: [43.9768311768, 4.79442463484],
          description:
            "Le Festival du polar réunit une trentaine d’auteurs de romans noirs et policiers, français et étrangers pour des rencontres, tables rondes, lectures, conférences, dédicaces à la Chartreuse. S’ajoute également des expositions, projections, spectacles, ateliers et jeux ainsi qu’une (...)",
        },
        geometry: {
          type: "Point",
          coordinates: [4.79442463484, 43.9768311768],
        },
        record_timestamp: "2022-04-13T08:46:03.975Z",
      },
      {
        datasetid: "agendas-participatif-des-sorties-en-occitanie",
        recordid: "d4756c1d3c8e78b173bfa733d3bbdaa67d22703a",
        fields: {
          thematique: "Culture",
          type: "Agenda / Mes sorties",
          code_insee: "31395",
          geo_shape: {
            coordinates: [1.33256, 43.472441],
            type: "Point",
          },
          url: "https://www.laregion.fr/Festival-International-du-Film-de-Muret",
          date: "Du 6 au 13 novembre",
          adresse:
            "49, Bd d'europe, Cinéma Véo Muret, 31600 Muret - Haute-Garonne",
          titre: "Festival International du Film de Muret",
          date_fin: "2022-11-13",
          date_debut: "2022-11-06",
          commune: "Muret",
          geo_point_2d: [43.472441, 1.33256],
          description:
            "La dixième édition en 2022 du Festival International du Film de Muret se déroulera au cinéma Véo Muret du 6 au 13 novembre avec 40 à 50 films en Avant première. Le Festival s’est doté d’un Jury Adultes et d’un Jury de Jeunes. Le palmarès sera donné le 13 novembre 2022 à 19h. Au (...)",
        },
        geometry: {
          type: "Point",
          coordinates: [1.33256, 43.472441],
        },
        record_timestamp: "2022-04-13T08:46:03.975Z",
      },
      {
        datasetid: "agendas-participatif-des-sorties-en-occitanie",
        recordid: "c177481e623059d34956941c0b6f41e9be3e9c55",
        fields: {
          thematique: "Culture",
          type: "Agenda / Mes sorties",
          code_insee: "32076",
          geo_shape: {
            coordinates: [0.722948, 43.595535],
            type: "Point",
          },
          url: "https://www.laregion.fr/Recital-Bach-Sigiswald-Kuijken",
          date: "Dimanche 2 octobre",
          adresse: "., Chateau de St Guiraud, 32450 Castelnau-Barbarens - Gers",
          titre: "Récital Bach :Sigiswald Kuijken",
          date_fin: "2022-10-02",
          date_debut: "2022-10-02",
          commune: "Castelnau-Barbarens",
          geo_point_2d: [43.595535, 0.722948],
          description:
            "Bach :2 suites pour violoncelle seul jouées sur le violoncelle d’épaule Premiere suite (sol majeur) Troisieme suite (do majeur) Deuxieme partita pour violon seul (ré mineur)",
        },
        geometry: {
          type: "Point",
          coordinates: [0.722948, 43.595535],
        },
        record_timestamp: "2022-04-13T08:46:03.975Z",
      },
      {
        datasetid: "agendas-participatif-des-sorties-en-occitanie",
        recordid: "bea88654a942049a8dada3b7faf001dae80b97c8",
        fields: {
          thematique: "Sport",
          type: "Agenda / Mes sorties",
          code_insee: "66190",
          geo_shape: {
            coordinates: [2.91586992743, 42.8372144723],
            type: "Point",
          },
          url: "https://www.laregion.fr/Pilate-au-pied-des-arbres",
          date: "Samedi 1er octobre",
          adresse:
            "Pinède sur la D11, 66600 Salses-le-Château - Pyrénées Orientales",
          titre: "Pilate au pied des arbres",
          date_fin: "2022-10-01",
          date_debut: "2022-10-01",
          commune: "Salses-le-Château",
          geo_point_2d: [42.8372144723, 2.91586992743],
          description:
            "À l’Orée des Forêts en Vallée de l’Agly 2022 vous offre l’occasion de revisiter les multiples atouts des forêts, pinèdes, garrigues, ripisylves, haies… qui dessinent notre belle Vallée de l’Agly. Le samedi 1e octobre 2022, allez vous oxygéner le temps d’un cours de pilate à l’ombre de (...)",
        },
        geometry: {
          type: "Point",
          coordinates: [2.91586992743, 42.8372144723],
        },
        record_timestamp: "2022-04-13T08:46:03.975Z",
      },
      {
        datasetid: "agendas-participatif-des-sorties-en-occitanie",
        recordid: "10087f08f520f0052807cba0cff7d7046875aa1c",
        fields: {
          thematique: "Vides Grenier / Brocantes / Foires et salons",
          type: "Agenda / Mes sorties",
          code_insee: "31269",
          geo_shape: {
            coordinates: [1.245835, 43.481816],
            type: "Point",
          },
          url: "https://www.laregion.fr/Salon-bien-etre-et-voyance-13680",
          date: "Du 17 au 18 septembre",
          adresse:
            "Rue de la Paix, Salle polyvalente, 31600 Lamasquère - Haute-Garonne",
          titre: "Salon bien -être et voyance",
          date_fin: "2022-09-18",
          date_debut: "2022-09-17",
          commune: "Lamasquère",
          geo_point_2d: [43.481816, 1.245835],
          description:
            'Le salon bien -être de Lamasquère " les 22 arcanes.com aura lieu, pour cette 17ème édition, les 17 et 18 spet. 2022 Pour vous proposer ce nouveaux rendez- vous , suite au vif succès ! Lors de la précédentes édition, conférences ont passionné pas loin de 800 visiteurs uniques. « (...)',
        },
        geometry: {
          type: "Point",
          coordinates: [1.245835, 43.481816],
        },
        record_timestamp: "2022-04-13T08:46:03.975Z",
      },
      {
        datasetid: "agendas-participatif-des-sorties-en-occitanie",
        recordid: "4bcbbd48c1348a7088a61dab45d0eb57dfe242db",
        fields: {
          thematique: "Culture",
          type: "Agenda / Mes sorties",
          code_insee: "32061",
          geo_shape: {
            coordinates: [0.771781, 43.546998],
            type: "Point",
          },
          url: "https://www.laregion.fr/Les-Sacqueboutiers-ensemble-de-cuivres-anciens-de-Toulouse",
          date: "Dimanche 14 août",
          adresse: "., Abbaye ste Marie, 32450 Boulaur - Gers",
          titre: "Les Sacqueboutiers ensemble de cuivres anciens de Toulouse",
          date_fin: "2022-08-14",
          date_debut: "2022-08-14",
          commune: "Boulaur",
          geo_point_2d: [43.546998, 0.771781],
          description:
            "« Clair-obscur » Dans le sillage du Caravage Stephanie Revidat, soprano -Daniel Lassale, sacqueboute- Jean Pierre Canilhac, cornet à bouquin-Helène Médous, violon-Susan Edward, violoncelle-Yasuko Uyama Bouvard, orgue Œuvres de Frescobaldi, Monteverdi, Donati, Cima, Rossi, Merula, (...)",
        },
        geometry: {
          type: "Point",
          coordinates: [0.771781, 43.546998],
        },
        record_timestamp: "2022-04-13T08:46:03.975Z",
      },
      {
        datasetid: "agendas-participatif-des-sorties-en-occitanie",
        recordid: "9903a20d464f98e3a32a3b94e22e403da441501a",
        fields: {
          thematique: "Environnement",
          type: "Agenda / Mes sorties",
          code_insee: "66096",
          geo_shape: {
            coordinates: [2.6517549144, 42.7705253938],
            type: "Point",
          },
          url: "https://www.laregion.fr/Atelier-autour-des-insectes",
          date: "Mardi 9 août",
          adresse:
            "Théâtre de Verdure, 66720 Latour-de-France - Pyrénées Orientales",
          titre: "Atelier autour des insectes",
          date_fin: "2022-08-09",
          date_debut: "2022-08-09",
          commune: "Latour-de-France",
          geo_point_2d: [42.7705253938, 2.6517549144],
          description:
            "À l’Orée des Forêts en Vallée de l’Agly 2022 vous offre l’occasion de revisiter les multiples atouts des forêts, pinèdes, garrigues, ripisylves, haies… qui dessinent notre belle Vallée de l’Agly. Le mardi 9 août 2022, retrouvez nos amis les petites bêtes, fidèles auxiliaires des sols (...)",
        },
        geometry: {
          type: "Point",
          coordinates: [2.6517549144, 42.7705253938],
        },
        record_timestamp: "2022-04-13T08:46:03.975Z",
      },
      {
        datasetid: "agendas-participatif-des-sorties-en-occitanie",
        recordid: "c76aba277f74d8774d0a6072333d5072574c885d",
        fields: {
          thematique: "Vides Grenier / Brocantes / Foires et salons",
          type: "Agenda / Mes sorties",
          code_insee: "81305",
          geo_shape: {
            coordinates: [2.419401, 43.682624],
            type: "Point",
          },
          url: "https://www.laregion.fr/BOURSE-MULTI-COLLECTIONS",
          date: "Dimanche 7 août",
          adresse: "route du sidobre, Salle polyvalente , 81330 Vabre - Tarn",
          titre: "Bourse Multi-collections",
          date_fin: "2022-08-07",
          date_debut: "2022-08-07",
          commune: "Vabre",
          geo_point_2d: [43.682624, 2.419401],
          description:
            "VABRE (TARN) 7 Août 2022 13 ème BOURSE MULTI – COLLECTIONS Jouets anciens. Monnaies. Rétrogamings. Cinéphilie. Cartes postales. Timbres. Livres. Fèves. Disques. Capsules. Trains électriques. Minéraux. Montres. Armes. Et autres objets de collections ……… EXPO DE VÉHICULES ANCIENS – (...)",
        },
        geometry: {
          type: "Point",
          coordinates: [2.419401, 43.682624],
        },
        record_timestamp: "2022-04-13T08:46:03.975Z",
      },
      {
        datasetid: "agendas-participatif-des-sorties-en-occitanie",
        recordid: "b219e3f249cd81867888ff9f3e77a3fb180b3ea4",
        fields: {
          thematique: "Culture",
          type: "Agenda / Mes sorties",
          code_insee: "30028",
          geo_shape: {
            coordinates: [4.610247, 44.155545],
            type: "Point",
          },
          url: "https://www.laregion.fr/Festival-Gard-aux-Pin-up-16472",
          date: "Du 30 au 31 juillet",
          adresse:
            "Parc Artur Rimbaud , Parc Arthur Rimbaud, 30200 Bagnols-sur-Cèze - Gard",
          titre: "Festival Gard aux Pin up",
          date_fin: "2022-07-31",
          date_debut: "2022-07-30",
          commune: "Bagnols-sur-Cèze",
          geo_point_2d: [44.155545, 4.610247],
          description:
            "Pour sa deuxième édition du 3 aout 2019 le festival « Gard aux Pin-up » avec plus de 50 Pin-up venue de toute la région, 70 véhicules auto-moto rétro, 3 groupes musicaux, 3 spectacles Pin-up, de nombreux stand et le concours officiel de Miss Gard aux Pin-up, a rencontré un énorme (...)",
        },
        geometry: {
          type: "Point",
          coordinates: [4.610247, 44.155545],
        },
        record_timestamp: "2022-04-13T08:46:03.975Z",
      },
      {
        datasetid: "agendas-participatif-des-sorties-en-occitanie",
        recordid: "7e70aaca79b20e7151dc423090422ba6631d0f37",
        fields: {
          thematique: "Autres",
          type: "Agenda / Mes sorties",
          code_insee: "30311",
          geo_shape: {
            coordinates: [3.950285, 43.939744],
            type: "Point",
          },
          url: "https://www.laregion.fr/Journee-Medievale",
          date: "Dimanche 24 juillet",
          adresse: "Dans le vieux Sauve, Vieille ville, 30610 Sauve - Gard",
          titre: "Journée Médiévale",
          date_fin: "2022-07-24",
          date_debut: "2022-07-24",
          commune: "Sauve",
          geo_point_2d: [43.939744, 3.950285],
          description:
            "Oyez ! Oyez ! Après 10 ans d’interruption, la fameuse fête médiévale de Sauve est de retour ! Venez vivre l’expérience d’une journée au Moyen-âge dans le village médiéval de Sauve, situé à 1h de Nîmes et de Montpellier. Au programme : marché médiéval, tavernes, combats, ateliers (...)",
        },
        geometry: {
          type: "Point",
          coordinates: [3.950285, 43.939744],
        },
        record_timestamp: "2022-04-13T08:46:03.975Z",
      },
    ],
  };

  return (
    <div className="App">
      <h2> Composant CardShowcase2 : liste mappée à partir de tableau</h2>
      <CardShowcase2 events={listEvent.records} />
    </div>
  );
}

export default App;
