const p = document.querySelectorAll("p");

let a = [];

p.forEach((p) => {
	console.log(p.innerHTML);
	a.push(p.innerHTML);
});

console.log(a);

a.reverse();

console.log(a);

const about = document.querySelector(".about");
about.innerHTML += a;
