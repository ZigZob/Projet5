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

//initialisation des dots
let dots = banner.querySelector(".dots")

//création des dot
slides.forEach(() => {
	let dot = document.createElement("div")
	dot.classList.add("dot")
	dots.append(dot)
});

//création de l'array de dots length===slides.length
const dotList = Array.from(dots.children)

//initialisation de l'index
let indexPosition = 0

//initialization de dot_selected
dotList[0].classList.add("dot_selected")

//simulation du modulo via l'opérateur remainder
function modulo(value) {
	return ((value % slides.length) + slides.length) % slides.length
}

//initialization des flèches v2
// let arrowsNodeList = banner.querySelectorAll(".arrow")
// let arrows = Array.from(banner.querySelectorAll(".arrow"))

//initialisation des flèches
let arrowLeft = banner.querySelector(".arrow_left")
let arrowRight = banner.querySelector(".arrow_right")

//fonction changeSlide
function changeSlide(slideObjectImg, slideObjectTagLine) {
	let bannerImg = banner.querySelector(".banner-img")
	bannerImg.src = "./assets/images/slideshow/" + slideObjectImg;
	let bannerTagLine = banner.getElementsByTagName("p")
	bannerTagLine[0].innerHTML = slideObjectTagLine
}

//mise a jour the contenu de la nouvelle slide
function updateSlideContent() {
	changeSlide(slides[modulo(indexPosition)].image, slides[modulo(indexPosition)].tagLine)
}

//retrait de la class .dot_selected avant le changement de slide
function removeCurrentSelectedDot() {
	dotList[modulo(indexPosition)].classList.remove("dot_selected")
}

//ajout de la class .dot_selected a la slide actuelle
function addCurrentSelectedDot() {
	dotList[modulo(indexPosition)].classList.add("dot_selected")
}

//décrémentation de l'index pour passer a la slide précédente
function moveToPreviousSlide() {
	indexPosition--
}

//incrémentation de l'index pour passer a la slide suivante
function moveToNextSlide() {
	indexPosition++
}

//eventListener des flèches

arrowLeft.addEventListener("click", () => {
	console.log("le bouton gauche est cliqué")
	removeCurrentSelectedDot()
	moveToPreviousSlide()
	addCurrentSelectedDot()
	updateSlideContent()
});

arrowRight.addEventListener("click", () => {
	console.log("le bouton droite est cliqué")
	removeCurrentSelectedDot()
	moveToNextSlide()
	addCurrentSelectedDot()
	updateSlideContent()
});

// arrows.forEach((arrow) => {
// 	arrow.addEventListener("click", () => {
// 		console.log("le bouton gauche est cliqué")
// 		removeCurrentSelectedDot()
// 		if (arrow.target)
// 			moveToPreviousSlide()
// 		addCurrentSelectedDot()
// 		updateSlideContent()
// 	})
// });