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

//initialisation des dots (obsolete, a discuter)
//let dots = banner.querySelector(".dots")

//création des dot
slides.forEach(() => {
	let dot = document.createElement("div")
	dot.classList.add("dot")
	banner.querySelector(".dots").append(dot) // est ce que dots est quand meme initialisé ici ?
});
//création de l'array de dots length===slides.length
const dotList = Array.from(banner.querySelector(".dots").children)

//initialisation de l'index
let indexPosition = 0

//initialization de dot_selected
dotList[indexPosition].classList.add("dot_selected")

//initialization des flèches v2
// let arrows = Array.from(banner.querySelectorAll(".arrow"))

//simulation du modulo via l'opérateur remainder pour le défilement infini
function modulo(value) {
	return ((value % slides.length) + slides.length) % slides.length
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
	changeBannerImg(slides[modulo(indexPosition)].image)
	changeBannerTagLine(slides[modulo(indexPosition)].tagLine)
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

//modification de l'eventListener en fonction de la fleche cliquée
function leftOrRight(arrow) {
	switch (arrow.classList[1]) {
		case "arrow_left":
			moveToPreviousSlide()
			console.log("le bouton gauche est cliqué")
			break
		case "arrow_right":
			moveToNextSlide()
			console.log("le bouton droit est cliqué")
			break
	}
}

//eventListener des flèches v2
// arrows.forEach((arrow) => {
// 	arrow.addEventListener("click", () => {
// 		removeCurrentSelectedDot()
// 		leftOrRight(arrow)
// 		addCurrentSelectedDot()
// 		updateSlideContent()
// 	})
// });

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

//initialisation des eventListeners
arrowEventListeners()