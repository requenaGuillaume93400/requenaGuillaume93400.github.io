<template>
  <h2>Formation</h2>
  <article>
    <div class="container">
      <div class="internship">
        <a href="https://openclassrooms.com/fr/" target="_blank">
          <img
            src="/images/open.webp"
            alt="Logo Openclassrooms"
            loading="lazy"
          />
        </a>
        <a href="https://ecotree.green/" target="_blank">
          <img src="/images/ecotree.webp" alt="Logo EcoTree" loading="lazy" />
        </a>
        <a href="#">
          <img src="/images/auto.webp" alt="Logo Autodidacte" loading="lazy" />
        </a>
      </div>
      <div>
        <p>Développeur d'applications PHP/Symfony</p>
        <p>Titre RNCP de niveau 6 FR/EU (équivalent BAC +3/4)</p>
        <p>Openclassrooms</p>
        <ul>
          <li>
            Analyser un cahier des charges et choisir une solution technique
            adaptée parmi les solutions existantes
          </li>
          <li>
            Concevoir l’architecture technique d’une application à l’aide de
            diagrammes UML
          </li>
          <li>Créer des projets web dynamiques grâce PHP</li>
          <li>
            Communiquer avec une base de données pour stocker et requêter des
            informations
          </li>
          <li>
            Développer de manière professionnelle grâce au framework Symfony
          </li>
          <li>
            Mettre en oeuvre des tests unitaires et fonctionnels ainsi
            qu’utiliser les outils les plus connus d’intégration continue
          </li>
          <li>
            Produire une documentation technique et fonctionnelle de
            l’application
          </li>
          <li>
            Prendre en compte les problématiques de performance d’une
            application PHP
          </li>
          <li>REST</li>
        </ul>
        <p>EcoTree</p>
        <ul>
          <li>ApiPlatform</li>
          <li>Api Graphql</li>
          <li>Sonata (back office et crud)</li>
          <li>
            Recherche de solutions techniques pour répondre à un besoin
            spécifique
          </li>
          <li>Mise en place de test unitaires et fonctionnels</li>
          <li>Test Driven Development</li>
          <li>
            Maintenance (refactorisation, mise à jour de librairies mineurs et
            majeures, résolution de bugs ...)
          </li>
          <li>Code legacy</li>
        </ul>
        <p>Autodidacte</p>
        <ul>
          <li>Découverte de Python</li>
          <li>Découverte de Docker</li>
          <li>Découverte de React</li>
          <li>Découverte de Vuejs</li>
        </ul>
        <p>2022 - 2024</p>
      </div>
    </div>

    <div class="separator"></div>

    <div class="container">
      <a href="#">
        <img src="/images/auto.webp" alt="Logo Autodidacte" loading="lazy" />
      </a>
      <div>
        <p>Symfony 5</p>
        <p>Autodidacte</p>
        <ul>
          <li>Routes</li>
          <li>Doctrine</li>
          <li>Twig</li>
          <li>Annotations</li>
          <li>Assertions</li>
          <li>Migrations</li>
          <li>Fixtures</li>
          <li>Formulaires</li>
          <li>Injection de dépendances</li>
          <li>Param Converter</li>
          <li>Composer</li>
          <li>Tests Unitaires (phpUnit)</li>
          <li>API REST</li>
          <li>Principes SOLID</li>
        </ul>
        <p>Octobre 2021 - Mars 2022</p>
      </div>
    </div>

    <div class="separator"></div>

    <div class="container">
      <a href="https://3wa.fr/" title="Visitez leur site">
        <img src="/images/3wa.webp" alt="Logo de la 3WAcademy" loading="lazy" />
      </a>
      <div>
        <p>Développeur Intégrateur en réalisation d'applications Web</p>
        <p>Titre RNCP de niveau 3 FR / niveau 5 EU (équivalent BAC +2)</p>
        <p>3WAcademy</p>
        <ul>
          <li>Langages : HTML CSS JavaScript PHP SQL</li>
          <li>Intégration Responsive</li>
          <li>Accessibilité</li>
          <li>Produire un code propre et valide</li>
          <li>Référencement naturel (SEO)</li>
          <li>Mise en place d'un CRUD et d'un Backoffice sécurisé</li>
          <li>Gestion des erreurs</li>
          <li>Programmation Orientée Objet</li>
          <li>Architecture MVC</li>
          <li>Type hinting</li>
          <li>AJAX</li>
          <li>Mise en place d'un Form Validator (JS)</li>
          <li>Utilisation d'API et du LocalStorage en JS</li>
        </ul>
        <p>Avril 2021 - Août 2021</p>
        <MentionModalComponent />
      </div>
    </div>

    <div class="separator"></div>

    <div class="container">
      <a href="#">
        <img src="/images/auto.webp" alt="Logo Autodidacte" loading="lazy" />
      </a>
      <div>
        <p>Intégration & Développement Web</p>
        <p>Autodidacte</p>
        <ul>
          <li>Intégration (HTML5 / CSS3)</li>
          <li>Développement Front-end (JavaScript ES6)</li>
          <li>Développement Back-end (Php7 & SQL)</li>
          <li>Création & gestion d'une base de données</li>
          <li>Expressions régulières (Regex)</li>
          <li>Réécriture d'URL (htaccess)</li>
          <li>Gitbash - Github</li>
        </ul>
        <p>Mars 2020 - Avril 2021</p>
      </div>
    </div>
  </article>
</template>

<script>
import MentionModalComponent from "./MentionModalComponent";

export default {
  components: { MentionModalComponent },
};
</script>

<style scoped>
img {
  opacity: 0;
}

@media screen and (max-width: 500px) {
  img {
    display: none;
  }

  main article ul li {
    width: 85%;
  }

  .internship {
    display: none;
  }

  article .container div {
    margin-left: 2rem;
  }
}
</style>
