const url = "https://official-joke-api.appspot.com/random_joke";

const contentContainer = document.querySelector(".container-content");

const errorMessage2 = document.querySelector("h2");

async function fetchJokeContent() {
	try {
		const response = await fetch(url);
		const json = await response.json();

		console.log(json);
		contentContainer.innerHTML = `<h2>${json.type}Joke</h2>
		<div class="joke-setup">${json.setup}</div>
		<div class="joke-punchline">${json.punchline}</div>`;

		const titleTag = (document.getElementsByTagName(
			"title"
		).innerHTML = `<title>${json.type}</title>`);
	} catch (error) {
		console.log("error occurred", error);
		errorMessage2.innerHTML = "Sorry, an error occurred!";
	}
}

fetchJokeContent();
