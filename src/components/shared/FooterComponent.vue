<template>
  <div>
    <h2>Contact</h2>

    <div>
      <p>
        <a href="mailto:g.requena95220@gmail.com" title="Envoyez moi un e-mail">
          <i class="fas fa-envelope"></i>
        </a>
      </p>
      <p>
        <a href="mailto:g.requena95220@gmail.com" title="Envoyez moi un e-mail">
          g.requena95220@gmail.com
        </a>
      </p>
    </div>
    <div>
      <p>
        <a href="tel:+33606871539" title="Appellez moi">
          <i class="fas fa-mobile-alt"></i>
        </a>
      </p>
      <p>
        <a href="tel:+33606871539" title="Appellez moi">06 06 87 15 39</a>
      </p>
    </div>
  </div>

  <div class="social">
    <p>
      <a
        href="https://www.linkedin.com/in/requenaGuillaume"
        title="Visitez mon profil LinkedIn"
        target="_blank"
        ><i class="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/requenaGuillaume93400"
        title="Visitez mon profil Github"
        target="_blank"
        ><i class="fab fa-github-square"></i>
      </a>
    </p>
    <p>Guillaume Requena © 2021 - 2024</p>
    <p>Tous droits réservés</p>
  </div>
</template>

<style scoped>
i {
  font-size: 2.5rem;
}
div:first-child {
  height: 50vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: rgba(255, 255, 255, 0.85);
}
div:first-child h2 {
  font-size: 1.5rem;
  width: 100%;
  margin: 2.5rem 0 1rem 0;
  text-align: center;
}
div:first-child div {
  width: 35%;
  margin-bottom: 5rem;
  padding: 1rem;
  border: 2px solid;
  border-radius: 0.5rem;
}
div:first-child div:nth-of-type(1) {
  border-color: var(--orange-background);
}
div:first-child div:nth-of-type(1) i:hover,
div:first-child div:nth-of-type(1) p:hover,
div:first-child div:nth-of-type(1) a:hover,
div:first-child div:nth-of-type(2),
div:first-child div:nth-of-type(2) i,
div:first-child div:nth-of-type(2) p,
div:first-child div:nth-of-type(2) a {
  color: rgb(135, 59, 126);
}
div:first-child div:nth-of-type(1) i,
div:first-child div:nth-of-type(1) p,
div:first-child div:nth-of-type(1) a,
div:first-child div:nth-of-type(2) i:hover,
div:first-child div:nth-of-type(2) p:hover,
div:first-child div:nth-of-type(2) a:hover {
  color: var(--orange-background);
}
div:first-child div a {
  font-weight: bold;
  text-decoration: none;
}
.social {
  border-top: 1px solid black;
  background-color: rgba(255, 255, 255, 0.85);
  padding-bottom: 0.5rem;
}
div {
  text-align: center;
}
div p:nth-of-type(1) {
  width: 20%;
  margin: 0.7rem auto 1rem auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
}
div i:hover {
  transform: scale(1.2);
  transition: 0.5s;
}
div .fa-linkedin {
  color: var(--blue-background);
}
div .fa-github-square {
  color: black;
}

/* Responsive */
@media screen and (max-width: 590px) {
  div h2 {
    padding-top: 2rem;
  }
  div:first-child {
    display: block;
    padding-bottom: 2rem;
    height: 57vh;
  }
  div:first-child div {
    width: 14rem;
    margin: 0 auto 1rem auto;
  }

  div p:nth-of-type(1) {
    width: 40%;
  }
}
</style>
