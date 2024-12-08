<template>
  <h2>Expérience</h2>
  <article>
    <div class="container">
      <a href="https://www.pensermieux.com/" target="_blank">
        <img
          src="/images/pme-2.webp"
          alt="Logo Penser mieux l'energie"
          loading="lazy"
        />
      </a>
      <div>
        <p>Développeur PHP</p>
        <p>Penser mieux l'energie</p>
        <ul>
          <li>Automatisation d'un processus de contrôle documentaire</li>
          <li>
            Développement de la partie front end d'une application Salesforce
            (avec lwc)
          </li>
          <li>Découverte du framework CodeIgniter</li>
        </ul>
        <p>
          Août 2024 - Décembre 2024
          <span class="reco">
            <a href="./pdf/market.pdf" target="_blank" title="Consultez le PDF">
              Lettre de recommandation
            </a>
          </span>
        </p>
      </div>
    </div>

    <div class="separator"></div>

    <div class="container">
      <a href="https://ecotree.green/" target="_blank">
        <img src="/images/ecotree.webp" alt="Logo EcoTree" loading="lazy" />
      </a>
      <div>
        <p>Chargé de développement PHP</p>
        <p>EcoTree (alternance)</p>
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
        <p>
          2022 - 2024
          <span class="reco">
            <a href="./pdf/cto.pdf" target="_blank" title="Consultez le PDF">
              Lettre de recommandation
            </a>
          </span>
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped>
img {
  opacity: 0;
}

.reco {
  float: right;
  background-color: orange;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
}

.reco a {
  color: #fff;
  text-decoration: none;
  display: block;
}

.reco a:hover {
  color: rgba(0, 0, 0, 0.693);
}

.container a + div {
  flex-grow: 1;
}

@media screen and (max-width: 500px) {
  img {
    display: none;
  }

  .reco {
    display: block;
    float: left;
  }

  main article ul li {
    width: 85%;
  }

  article .container div {
    margin-left: 2rem;
  }
}

@media screen and (max-width: 430px) {
  .container .internship {
    display: none;
  }
}
</style>
