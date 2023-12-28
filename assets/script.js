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

//initialisation de l'index & de son modulo
var carouselIndex = 0
var carouselPosition = modulo(carouselIndex)

//simulation du modulo via l'opérateur remainder pour le défilement infini
function modulo(value) {
	return (Math.abs(value % slides.length))
}

//update de carouselPosition post décrémentation/incrémentation
function carouselPositionUpdate(carouselIndex) {
	carouselPosition = modulo(carouselIndex)
}

//création des dot & initialisation de la dot_selected
slides.forEach(() => {
	let dot = document.createElement("div")
	dot.classList.add("dot")
	document.querySelector(".dots").append(dot)
	document.querySelectorAll(".dot")[carouselIndex].classList.add("dot_selected")
});

//assignation de la source de la bannerImg
function changeBannerImg(slideObjectImg) {
	document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slideObjectImg;
}

//assignation du contenu texte du titre
function changeBannerTagLine(slideObjectTagLine) {
	document.querySelector("#banner p").innerHTML = slideObjectTagLine
}

//mise a jour du contenu de la nouvelle slide
function updateSlideContent(carouselPosition) {
	changeBannerImg(slides[carouselPosition].image)
	changeBannerTagLine(slides[carouselPosition].tagLine)
}

//retrait de la class .dot_selected avant le changement de slide
function removeCurrentSelectedDot(carouselPosition) {
	document.querySelectorAll(".dot")[carouselPosition].classList.remove("dot_selected")
}

function addCurrentSelectedDot() {
	document.querySelectorAll(".dot")[carouselPosition].classList.add("dot_selected")
}

//décrémentation de l'index pour passer a la slide précédente
function moveToPreviousSlide() {
	carouselIndex--
}

//incrémentation de l'index pour passer a la slide suivante
function moveToNextSlide() {
	carouselIndex++
}

//modification de l'eventListener en fonction de la fleche cliquée
function leftOrRight(eventTarget) {
	switch (eventTarget.getAttribute("data-carouselArrow")) {
		case "left":
			moveToPreviousSlide()
			break
		case "right":
			moveToNextSlide()
			break
		default:
			break
	}
}

//création des eventListener pour chaque fleche
document.querySelectorAll(".arrow").forEach(arrow => {
	arrow.addEventListener("click", event => {
		removeCurrentSelectedDot(carouselPosition)
		leftOrRight(event.target)
		carouselPositionUpdate(carouselIndex)
		addCurrentSelectedDot(carouselPosition)
		updateSlideContent(carouselPosition)
	})
});