const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slideLeft = document.querySelector(".arrow_left");
slideLeft.addEventListener("click", () => {
	console.log("le bouton est cliqué")
});

let slideRight = document.querySelector(".arrow_right");
slideRight.addEventListener("click", () => {
	console.log("le bouton est cliqué")
});

let dots = document.querySelector(".dots");
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div")
	dot.classList.add("dot")
	dots.appendChild(dot)
}



