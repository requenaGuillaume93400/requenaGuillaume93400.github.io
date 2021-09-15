// *************************************************************************************************************************** \\
// ****************************************************** VARIABLES ********************************************************** \\
// *************************************************************************************************************************** \\
const carrousels = document.querySelectorAll("main article:nth-of-type(1) div");
const titles = document.querySelectorAll("h2");
const articles = document.querySelectorAll("article");
const scrollable = document.documentElement.scrollHeight - window.innerHeight;
let progress; // Scroll bar progression in %

// *************************************************************************************************************************** \\
// ****************************************************** MAIN CODE ********************************************************** \\
// *************************************************************************************************************************** \\
window.addEventListener("DOMContentLoaded", function () {
  window.document.addEventListener("scroll", function () {
    progress = (Math.ceil(window.scrollY) * 100) / scrollable;

    // console.log(progress);

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
  carrousel(carrousels[3], "fourthCarrousel");
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
