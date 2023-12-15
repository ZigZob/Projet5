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

// initialisation de la magie
let i = 0

//initialisation des dots
let dots = document.querySelector(".dots")
for (let index = 0; index < slides.length; index++) {
	let dot = document.createElement("div")
	dot.classList.add("dot")
	dots.append(dot)
}

//création de l'array de dots length===slides.length
const dotList = Array.from(dots.children)
//initialization de dot_selected
dotList[0].classList.add("dot_selected")

//création des flèches
let arrowLeft = document.createElement("img")
arrowLeft.classList.add("arrow", "arrow_left")
arrowLeft.src = "./assets/images/arrow_left.png"
banner.appendChild(arrowLeft)

let arrowRight = document.createElement("img")
arrowRight.classList.add("arrow", "arrow_right")
arrowRight.src = "./assets/images/arrow_right.png"
banner.appendChild(arrowRight)

//fonction changeSlide
function changeSlide(slideObjectImg, slideObjectTagLine) {
	let bannerImg = document.querySelector(".banner-img")
	bannerImg.src = "./assets/images/slideshow/" + slideObjectImg;
	let bannerTagLine = banner.getElementsByTagName("p")
	bannerTagLine[0].innerHTML = slideObjectTagLine
}

//eventListener des flèches
arrowLeft.addEventListener("click", () => {
	console.log("le bouton gauche est cliqué")
	i--
	if (i < 0) {
		i = slides.length - 1
		dotList[0].classList.remove("dot_selected") //retire la précédente
		dotList[i].classList.add("dot_selected") //ajoute la suivante
		changeSlide(slides[i].image, slides[i].tagLine)
		console.log(i)
	}
	else {
		dotList[i + 1].classList.remove("dot_selected")
		dotList[i].classList.add("dot_selected")
		changeSlide(slides[i].image, slides[i].tagLine)
		console.log(i)
	}
});

arrowRight.addEventListener("click", () => {
	console.log("le bouton droit est cliqué")
	i++
	if (i > 3) {
		i = 0
		dotList[slides.length - 1].classList.remove("dot_selected")
		dotList[i].classList.add("dot_selected")
		changeSlide(slides[i].image, slides[i].tagLine)
		console.log(i)
	}
	else {
		dotList[i - 1].classList.remove("dot_selected")
		dotList[i].classList.add("dot_selected")
		changeSlide(slides[i].image, slides[i].tagLine)
		console.log(i)
	}
});






// //slides.forEach(createSlide); // vs slides.forEach(createSlide, createDot); ?
// 



