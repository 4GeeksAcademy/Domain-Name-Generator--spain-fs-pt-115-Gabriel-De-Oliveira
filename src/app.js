import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function () {
	//write your code here
	console.log("");
};

const pronoun = ['the', 'our', "back", "For"];
const adj = ['great', 'big', "bitcoin", "ronaldo"];
const noun = ['jogger', 'racoon', "usdt", "shop"];
const extensions = [`.com`, `.net`, `.us`, `.io`, ".es", ".org"];
const grupo = {};

extensions.forEach(ext => grupo[ext] = []);
pronoun.forEach((pron) => {
	adj.forEach((ad) => {
		noun.forEach((nou) => {
			extensions.forEach((ext) => {
				const element = `${pron}${ad}${nou}${ext}`;
				grupo[ext].push(element);
			});
		});
	});
});


//aprendi a usar esto con este video https://youtu.be/YmLXh4hUORY?si=eGzU1Ts0k0Gst1O3
//y con este video https://youtu.be/EybOekt1YII?si=HNnyEZGQ6vcXU9G_ y leyendo la documentacion
//y use un poco de chat gpt porque no me funcionaba bien unas cosas del codigo 



document.querySelectorAll(".brutalist-button").forEach(btn => {
	btn.addEventListener("click", function () {
		const extension = this.querySelector(".button-text").textContent;
		mostrarDominios(extension);
	});
});


function mostrarDominios(extension) {
	const resultadoDiv = document.getElementById("resultados");
	const contenido = document.getElementById("contenido-resultados");

	resultadoDiv.classList.remove("d-none");
	contenido.innerHTML = "";

	if (grupo[extension]) {
		grupo[extension].forEach(dominio => {
			const col = document.createElement("div");
			col.className = "col-md-4 mb-3";
			col.innerHTML = `<div class="border p-3 bg-light fw-bold">${dominio}</div>`;
			contenido.appendChild(col);
		});
	} else {
		contenido.innerHTML = `<p>No hay dominios a la venta</p>`;
	}
}


document.getElementById("cerrarResultados").addEventListener("click", function () {
	document.getElementById("resultados").classList.add("d-none");
});







