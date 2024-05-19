// *************************************************************************************************************************** \\
// ****************************************************** VARIABLES ********************************************************** \\
// *************************************************************************************************************************** \\
const carrousels = document.querySelectorAll(
  "main article:nth-of-type(1) div:not(.separator)"
);
const titles = document.querySelectorAll("h2");
const articles = document.querySelectorAll("article");
const images = document.querySelectorAll(".container a img");
const scrollable = document.documentElement.scrollHeight - window.innerHeight;
const mention = document.getElementById("mention");
const mentionModal = document.getElementById("modal-mention");
const formationArticle = document.querySelector("article:nth-of-type(3)");
let progress; // Scroll bar progression in %
let timer = 0;
let startTimer;

// *************************************************************************************************************************** \\
// ****************************************************** MAIN CODE ********************************************************** \\
// *************************************************************************************************************************** \\
window.addEventListener("DOMContentLoaded", function () {
  modal();
  window.document.addEventListener("scroll", function () {
    progress = (Math.ceil(window.scrollY) * 100) / scrollable;

    // First h2 & article
    showTitle(2, 0);
    showArticle(2, 0);

    showTitle(28, 1);
    showArticle(29, 1);

    showTitle(31, 2);
    showArticle(33, 2);

    showTitle(38, 3);
    showArticle(39, 3);

    showTitle(44, 4);
    showArticle(45, 4);

    showTitle(73, 5);
    showArticle(74, 5);
  });

  carrousel(carrousels[0], "firstCarrousel");
  carrousel(carrousels[1], "secondCarrousel");
  carrousel(carrousels[2], "thirdCarrousel");
  carrousel(carrousels[3].querySelector("a"), "fourthCarrousel");

  carrousel(carrousels[4].querySelector("a"), "firstCarrousel");
  carrousel(carrousels[5].querySelector("a"), "firstCarrousel");

  carrousel(carrousels[6], "fifthCarrousel");

  carrousel(carrousels[8], "sixthCarrousel");

  fadeImage();
});

// *************************************************************************************************************************** \\
// ****************************************************** FUNCTIONS ********************************************************** \\
// *************************************************************************************************************************** \\

function carrousel(element, carrouselNumber) {
  element.addEventListener("mouseover", function () {
    this.classList.add(carrouselNumber);
  });

  element.addEventListener("mouseout", function () {
    this.classList.remove(carrouselNumber);
  });
}

function showTitle(progressPercentage, number) {
  if (
    progress >= progressPercentage &&
    !titles[number].classList.contains("show-right")
  ) {
    titles[number].classList.add("show-right");
  }
}

function showArticle(progressPercentage, number) {
  if (
    progress >= progressPercentage &&
    !articles[number].classList.contains("show-left")
  ) {
    articles[number].classList.add("show-left");
  }
}

function modal() {
  mention.addEventListener("mouseover", function () {
    mentionModal.style.visibility = "visible";
  });

  mention.addEventListener("click", function () {
    mentionModal.style.visibility = "visible";
  });

  mention.addEventListener("mouseout", function () {
    mentionModal.style.visibility = "hidden";
  });
}

function fadeImage() {
  progress = (Math.ceil(window.scrollY) * 100) / scrollable;

  progress < 44 ? (startTimer = 4000) : (startTimer = 2000);

  setTimeout(function () {
    images.forEach(function (image) {
      timer += 800;

      setTimeout(function () {
        image.classList.add("fade");
      }, timer);
    });
  }, startTimer);
}
