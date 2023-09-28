const slides = [
    {
        image: "slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

const slideNumber = slides.length;
let curentIndex = 0;

function clearDotsContainer() {
    const dotsContainer = document.querySelector(".dots");
    dotsContainer.innerHTML = "";
}

function changeDotSelected() {
    for (i = 0; i < slideNumber; i++) {
        console.log(i);
        const newDotElement = document.createElement("div");
        newDotElement.classList.add("dot");
        if (i === curentIndex) {
            newDotElement.classList.add("dot_selected");
        }
        const dotsContainer = document.querySelector(".dots");
        dotsContainer.appendChild(newDotElement);
        console.log("newDotElement =>", newDotElement);
    }
}
function changeSlide() {
    const currentSlides = slides[curentIndex];
    const imageSelected = document.querySelector("#banner .banner-img");
    imageSelected.src = "./assets/images/slideshow/" + currentSlides.image;
    const textSelected = document.querySelector("#banner p");
    textSelected.innerHTML = currentSlides.tagLine;
}
changeDotSelected();

const arrowLeftElement = document.querySelector(".arrow_left");
arrowLeftElement.addEventListener("click", function () {
    console.log("la fleche gauche à été cliquée");
    curentIndex = curentIndex - 1;
    console.log("curentIndex =>", curentIndex);
    clearDotsContainer();
    changeDotSelected();
    changeSlide();
});
const arrowRightElement = document.querySelector(".arrow_right");
arrowRightElement.addEventListener("click", function () {
    console.log("la flèche droite à été cliquée");
    curentIndex = curentIndex + 1;
    console.log("curentIndex =>", curentIndex);
    clearDotsContainer();
    changeDotSelected();
    changeSlide();
});
