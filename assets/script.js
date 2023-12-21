const slides = [
	{
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
		"image": "slide1.jpg"
	},
	{
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"image": "slide2.jpg"
	},
	{
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"image": "slide3.jpg"
	},
	{
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
		"image": "slide4.png"
	}
]

//initialisation du parent
const banner = document.getElementById("banner")

//création des dot
slides.forEach(() => {
	let dot = document.createElement("div")
	dot.classList.add("dot")
	banner.querySelector(".dots").append(dot)
});
//création de l'array de dots length===slides.length
const dotList = Array.from(banner.querySelector(".dots").children)

//initialisation de l'index
let carouselPosition = 0

//initialization de dot_selected
dotList[carouselPosition].classList.add("dot_selected")

//simulation du modulo via l'opérateur remainder pour le défilement infini
function modulo(value) {
	return ((value % slides.length) + slides.length) % slides.length
	//return (Math.abs(value % slides.length)) //alternative
}

//assignation de la source de la bannerImg
function changeBannerImg(slideObjectImg) {
	banner.querySelector(".banner-img").src = "./assets/images/slideshow/" + slideObjectImg;
}

//assignation du contenu texte du titre
function changeBannerTagLine(slideObjectTagLine) {
	banner.getElementsByTagName("p")[0].innerHTML = slideObjectTagLine
}

//mise a jour du contenu de la nouvelle slide
function updateSlideContent() {
	changeBannerImg(slides[modulo(carouselPosition)].image)
	changeBannerTagLine(slides[modulo(carouselPosition)].tagLine)
}

//retrait de la class .dot_selected avant le changement de slide
function removeCurrentSelectedDot() {
	dotList[modulo(carouselPosition)].classList.remove("dot_selected")
}

//ajout de la class .dot_selected a la slide actuelle
function addCurrentSelectedDot() {
	dotList[modulo(carouselPosition)].classList.add("dot_selected")
}

//décrémentation de l'index pour passer a la slide précédente
function moveToPreviousSlide() {
	carouselPosition--
}

//incrémentation de l'index pour passer a la slide suivante
function moveToNextSlide() {
	carouselPosition++
}

//modification de l'eventListener en fonction de la fleche cliquée
function leftOrRight(arrow) {
	switch (arrow.classList[1]) {
		case "arrow_left":
			moveToPreviousSlide()
			break
		case "arrow_right":
			moveToNextSlide()
			break
	}
}

//eventListener des flèches
function arrowEventListeners() {
	let arrows = Array.from(banner.querySelectorAll(".arrow"))
	arrows.forEach((arrow) => {
		arrow.addEventListener("click", () => {
			removeCurrentSelectedDot()
			leftOrRight(arrow)
			addCurrentSelectedDot()
			updateSlideContent()
		})
	});
}

//initialisation des eventListeners sans garder l'array de fleches en memoire
arrowEventListeners()