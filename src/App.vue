<template>
  <header>
    <HeaderComponent />
  </header>

  <main>
    <ExercisesComponent />

    <ExperienceComponent />

    <TrainingComponent />

    <HobbiesComponent />

    <MoreComponent />
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import HeaderComponent from "./components/shared/HeaderComponent";
import FooterComponent from "./components/shared/FooterComponent";
import HobbiesComponent from "./components/HobbiesComponent";
import TrainingComponent from "./components/TrainingComponent";
import MoreComponent from "./components/MoreComponent";
import ExercisesComponent from "./components/ExercisesComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import { onMounted, onBeforeUnmount } from "vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    HobbiesComponent,
    TrainingComponent,
    MoreComponent,
    ExercisesComponent,
    ExperienceComponent,
  },
  setup() {
    const handleScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const titles = document.querySelectorAll("h2");
      const articles = document.querySelectorAll("article");
      const images = document.querySelectorAll(".container a img");
      let progress = (Math.ceil(window.scrollY) * 100) / scrollable;
      let timer = 0;
      let startTimer;

      const showTitle = (progressPercentage, number) => {
        if (
          progress >= progressPercentage &&
          !titles[number].classList.contains("show-right")
        ) {
          titles[number].classList.add("show-right");
        }
      };

      const showArticle = (progressPercentage, number) => {
        if (
          progress >= progressPercentage &&
          !articles[number].classList.contains("show-left")
        ) {
          articles[number].classList.add("show-left");
        }
      };

      // First h2 & article
      showTitle(2, 0);
      showArticle(2, 0);

      showTitle(4, 1);
      showArticle(4, 1);

      showTitle(8, 2);
      showArticle(8, 2);

      showTitle(45, 3);
      showArticle(45, 3);

      showTitle(52, 4);
      showArticle(52, 4);

      const fadeImage = () => {
        progress = (Math.ceil(window.scrollY) * 100) / scrollable;

        progress < 4 ? (startTimer = 3000) : (startTimer = 1500);

        setTimeout(function () {
          images.forEach(function (image) {
            timer += 800;

            setTimeout(function () {
              image.classList.add("fade");
            }, timer);
          });
        }, startTimer);
      };

      fadeImage();
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  },
};
</script>
