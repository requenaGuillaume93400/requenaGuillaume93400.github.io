<template>
  <h1>
    Guillaume Requena
    <span>Développeur Web</span>
  </h1>
  <div class="flex-container">
    <SymbolComponent
      v-for="symbol in symbols"
      :key="symbol.alt"
      :symbol="symbol"
    />
  </div>
</template>

<script>
import SymbolComponent from "./SymbolComponent.vue";

export default {
  components: { SymbolComponent },
  setup() {
    const symbols = [
      { alt: "HTML", title: "HTML", image: "html.webp" },
      { alt: "CSS", title: "CSS", image: "css.webp" },
      { alt: "Sass", title: "Sass", image: "sass.webp" },
      { alt: "PHP", title: "PHP", image: "php.webp" },
      { alt: "MySQL", title: "MySQL", image: "mysql.webp" },
      { alt: "Gitbash", title: "Gitbash", image: "gitbash.webp" },
      { alt: "VS Code", title: "VS Code", image: "vscode.webp" },
      { alt: "Wamp", title: "Wamp", image: "wamp.webp" },
      { alt: "Symfony", title: "Symfony", image: "sym.webp" },
      { alt: "Sonata", title: "Sonata", image: "sonata.webp" },
      { alt: "Python", title: "Python", image: "python.webp" },
      { alt: "Linux", title: "Linux", image: "linux.webp" },
      { alt: "Windows", title: "Windows", image: "windows.webp" },
      { alt: "MacOS", title: "MacOS", image: "macos.webp" },
      { alt: "Postman", title: "Postman", image: "postman.webp" },
      { alt: "React", title: "React", image: "react.webp" },
      { alt: "Vuejs", title: "Vuejs", image: "vue.webp" },
      { alt: "JavaScript", title: "JavaScript", image: "javascript.webp" },
      { alt: "ApiPlatform", title: "ApiPlatform", image: "apiplatform.webp" },
      { alt: "Bootstrap", title: "Bootstrap", image: "bootstrap.webp" },
    ];

    return { symbols };
  },
};
</script>

<style scoped>
h1 {
  color: var(--custom-white);
  font-size: 4rem;
  text-align: center;
  width: 90%;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}
h1 span {
  font-size: 3rem;
  display: block;
  padding-top: 1rem;
}

.flex-container {
  position: absolute;
  bottom: 3rem;
  color: var(--custom-white);
}

@media screen and (max-width: 843px) {
  h1 {
    font-size: 3rem;
  }
  h1 span,
  h1 span:nth-of-type(2) {
    font-size: 2rem;
  }
}

@media screen and (max-width: 570px) {
  .flex-container {
    bottom: 1rem;
  }
}

@media screen and (max-width: 489) {
  h1 {
    top: 20%;
  }
}

@media screen and (max-width: 430px) {
  header {
    overflow: hidden;
  }

  header div {
    flex-flow: row wrap;
    bottom: 2%;
  }
}

@media screen and (max-width: 404px) {
  h1 {
    top: 45%;
    z-index: 2;
  }
  .flex-container {
    opacity: 0.33;
  }
}
</style>
