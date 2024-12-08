<template>
  <h2>Plus</h2>
  <article>
    <p>Anglais B2</p>

    <p>Permis B</p>

    <div class="separator"></div>

    <!-- TODO -->
    <div class="container">
      <p>
        Curriculum Vitae
        <a
          href="pdf/cv.pdf"
          target="_blank"
          title="Téléchargez mon CV"
          class="cv"
        >
          Téléchargez mon CV
        </a>
      </p>

      <p class="codewarsp">
        S'exerce en algorythmie sur Codewars
        <a
          href="https://www.codewars.com/users/guillaumeRequena"
          target="_blank"
          title="Visitez mon profil Codewars"
          ><img
            class="codewars"
            src="/images/codewars.webp"
            alt="Logo Codewars"
            loading="lazy"
          />
        </a>
      </p>
    </div>

    <div class="separator"></div>

    <p>Ce que mes anciens collaborateurs disent de moi :</p>
    <ul>
      <li>
        <a href="./pdf/market.pdf" target="_blank" title="Consultez le PDF">
          <span>Supérieur</span>
          Responsable marketing et projets
        </a>
      </li>
      <li>
        <a href="./pdf/cto.pdf" target="_blank" title="Consultez le PDF">
          <span>Supérieur</span>
          Tech lead
        </a>
      </li>
    </ul>
    <p>Ancienne vie pro</p>
    <ul>
      <li>
        <a href="./pdf/dir.pdf" target="_blank" title="Consultez le PDF"
          ><span>Supérieur</span> Directeur des opérations</a
        >
      </li>
      <li>
        <a href="./pdf/cds.pdf" target="_blank" title="Consultez le PDF"
          ><span>Supérieur</span> Chef de site</a
        >
      </li>
      <li>
        <a href="./pdf/cdp.pdf" target="_blank" title="Consultez le PDF"
          ><span>Collègue</span> Chef de poste</a
        >
      </li>
      <li>
        <a href="./pdf/opv.pdf" target="_blank" title="Consultez le PDF"
          ><span>Subordonné</span> Opérateur video</a
        >
      </li>
    </ul>
  </article>
</template>

<style scoped>
article {
  text-align: center;
  padding: 1rem 0;
}
article ul {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  list-style-type: none;
  text-align: center;
}
article ul li {
  width: 20%;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 2px solid transparent;
}
article ul li span {
  display: block;
  padding: 0.3rem;
  font-weight: bold;
}
article .cv {
  display: block;
  width: 40%;
  margin: 0.5rem auto 0 auto;
  padding: 1.2rem 0.3rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 2px solid transparent;
  background-color: #27ab5e;
  color: var(--custom-white);
  font-weight: bold;
  text-decoration: none;
}
article ul li:nth-of-type(1),
article ul li:nth-of-type(2) {
  background-color: var(--orange-background);
}
article ul li:nth-of-type(3) {
  background-color: rgb(135, 59, 126);
}
article ul li:nth-of-type(4) {
  background-color: var(--blue-background);
}
article ul li:hover {
  border: 2px solid black;
  background-color: rgba(255, 255, 255, 0.85);
  transition: 0.6s;
  color: rgb(0, 0, 0);
}
article ul li a {
  color: inherit;
  text-decoration: none;
}
article p:last-child a {
  display: block;
  width: 109px;
  margin: 0.3rem auto 0 auto;
}
article div:not(.separator) {
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
}
article div:not(.separator) p {
  width: 40%;
  margin-top: 0.5rem;
}

img {
  display: block;
  opacity: 1;
  z-index: 10;
  border-radius: 25%;
  overflow-clip-margin: content-box;
  overflow: clip;
}

p {
  line-height: 1.5;
}

.codewars {
  opacity: 1;
}

.codewarsp a {
  display: block;
  width: 109px;
  margin: 1rem auto;
}

.container {
  display: flex;
}

@media screen and (max-width: 690px) {
  main article .cv {
    width: 100%;
  }
}

@media screen and (max-width: 647px) {
  article ul li {
    width: 40%;
  }
}

@media screen and (max-width: 500px) {
  article .container:not(.separator) {
    flex-flow: column wrap;
    align-items: center;
  }

  article div:not(.separator) p {
    width: 90%;
  }
}
</style>
