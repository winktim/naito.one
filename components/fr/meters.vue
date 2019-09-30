<template>
  <div lang="fr">
    <h1>Meters</h1>

    <div
      id="meters-banner-outer"
      class="w-full h-40 sm:h-64 md:h-76 rounded-md shadow mb-8 overflow-hidden"
    >
      <div id="meters-banner" class="w-full h-full"></div>
    </div>

    <div
      class="text-gray-100 bg-naito-green-200 px-4 py-2 rounded-sm shadow-md flex justify-left items-center mb-1"
    >
      <i class="material-icons mr-4">trending_down</i>
      <span>
        Vous avez du mal à
        <strong>diminuer votre consommation</strong> d'eau, gaz, mazout ou encore électricité ?
      </span>
    </div>
    <div
      class="text-gray-100 bg-naito-green-200 px-4 py-2 rounded-sm shadow-md flex justify-left items-center mb-1"
    >
      <i class="material-icons mr-4">eco</i>
      <span>
        Peut-être cherchez-vous à améliorer votre
        <strong>image environmentale</strong> ?
      </span>
    </div>
    <div
      class="text-gray-100 bg-naito-green-200 px-4 py-2 rounded-sm shadow-md flex justify-left items-center mb-8"
    >
      <i class="material-icons mr-4">notifications</i>
      <span>
        Où alors vous souhaitez garder un oeil sur les
        <strong>températures de vos locaux</strong> ?
      </span>
    </div>

    <p>
      <strong>Meters</strong> a été développé spécialement pour répondre à vos besoins !
      <br />Après l'installation de capteurs sur vos compteurs d'eau, gaz, mazout ou électricité, ou l'installation de capteurs de température dans vos locaux,
      <strong>Meters</strong> vous permet de suivre l'évolution de vos données.
    </p>

    <h2>Exploration</h2>

    <p>
      Vos données sont accessibles en tout temps par une
      <strong>interface web moderne</strong>, utilisable sur smartphone, tablette et ordinateur.
      <br />Par la plateforme web, vous pouvez visionner des
      <strong>graphiques</strong> de l'évolution de vos températures ou de votre consommation.
      <br />
      <a href="https://meters.ch" target="_blank" rel="noopener">Se rendre sur la plateforme Meters</a>
    </p>

    <div class="text-gray-100 bg-gray-700 p-4 rounded-sm shadow-md mb-4">
      Maintenant, plus d'excuses.
      <strong>Toutes les données sont sous vos yeux</strong>. S'il y a régulièrement une surconsommation d'eau
      <i>le mardi entre 14h et 15h30</i>, vous le voyez. Il ne vous reste plus qu'à déterminer la cause.
    </div>

    <p>
      Vous pouvez
      <strong>télécharger vos données</strong> dans différents formats afin de les analyser avec vos outils favoris, ou afin de les inclure dans des présentations.
      <br />Un
      <strong>tableau de bord</strong> vous permet de sauvegarder vos graphiques les plus utiles, afin d'y accéder en un rien de temps.
    </p>

    <figure>
      <img class="md:w-168" src="/images/meters-app-02.jpg" alt="Tableau de bord Meters" />
    </figure>

    <h2>Objectifs</h2>

    <p>
      Difficile de définir des objectifs de réduction de consommation énergétique ? Grâce à
      <strong>Meters</strong>, vous pouvez définir un objectif concret mensuel ou hebdomadaire afin d'être tenu au courant par email de vos avancées.
    </p>

    <h2>Alertes</h2>

    <p>
      Envie d'être averti lorsque la température d'un local est anormalement haute ou base ?
      <strong>Meters</strong> vous met à disposition un outils d'alertes email.
    </p>

    <figure>
      <img class="md:w-168" src="/images/meters-app-03.jpg" alt="Alertes Meters" />
    </figure>

    <h2>Pour les petits et les grands</h2>

    <p>
      <strong>Meters</strong> a été conçu pour prendre en compte les
      <strong>petites entreprises</strong> comme les
      <strong>grandes</strong>. Vous avez des ressources sur plusieurs sites ? Vous pourrez les retrouver sans problème au travers d'une recherche intelligente.
    </p>

    <h2>Accès multiples</h2>

    <p>Besoin d'accès pour plusieurs de vos employés ? Aucun problème. Ils auront chacun leur tableau de bord, leurs alertes et leurs objectifs.</p>

    <h2>Wiki</h2>

    <p>
      Pour tout savoir sur les fonctionnalites de
      <strong>Meters</strong>, veuillez vous référer au Wiki
      <a
        :href="$store.getters.wikiUrl"
        target="_blank"
      >en cliquant ici</a>.
    </p>

    <h2>Combien ça coûte</h2>

    <p>
      Intéressés par le produit ? Vous pouvez utiliser l'outil ci-dessous pour
      <strong>estimer le coût total, selon vos besoins</strong>.
      <i>
        <br />Veuillez noter que les prix affichés ci-dessous ne sont pas une offre et que les prix pratiqués peuvent différer.
        <br />Veuillez
        <a href="mailto:hello@naito.one">prendre contact avec nous</a> pour obtenir une offre complète.
      </i>
    </p>
  </div>
</template>
